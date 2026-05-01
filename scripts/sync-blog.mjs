#!/usr/bin/env node
// Sync blog posts from the iCloud Blog folder into the Astro content
// collection.
//
// Source of truth = the iCloud Blog folder (default path below). The Astro
// content collection is derived from it on demand. Writers edit there;
// `npm run sync-blog` mirrors what's there into the repo before commit.
//
// Behavior:
//   - Reads <source>/posts/** (markdown, mdx, plus any sibling assets)
//   - Wipes <repo>/src/content/notebook/ (so removed posts disappear)
//   - For .md files: transforms the simple "import + {Name}" convention
//     into MDX and writes as .mdx. See transformMdToMdx below.
//   - For .mdx files: rewrites .md import paths to .mdx (since their
//     section partials get extension-changed) and copies through.
//   - For other files (.astro, .svg, .png, …): copies as-is.
//   - Skips macOS dotfiles (.DS_Store) and editor cruft (.swp, .tmp).
//
// Override the source via env var: BLOG_SOURCE_DIR=/path/to/blog
//
// Run with:  npm run sync-blog

import { promises as fs } from "node:fs"
import path from "node:path"
import os from "node:os"

const DEFAULT_SOURCE = path.join(
  os.homedir(),
  "Library",
  "Mobile Documents",
  "com~apple~CloudDocs",
  "Blog",
  "posts",
)

const sourceDir = process.env.BLOG_SOURCE_DIR
  ? path.resolve(process.env.BLOG_SOURCE_DIR)
  : DEFAULT_SOURCE

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..")
const destDir = path.join(repoRoot, "src", "content", "notebook")

const SKIP_NAMES = new Set([".DS_Store", ".git", "node_modules"])
const SKIP_EXTS = new Set([".swp", ".tmp", ".bak"])
const isPrivate = (name) => name.startsWith("_")

const IMAGE_EXTS = new Set([".svg", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif"])
const IMPORT_RE = /^\s*import\s+(\w+)\s+from\s+["']([^"']+)["']\s*;?\s*$/

// Transform a `.md` source written in the simple authoring convention into
// MDX. The convention:
//
//   1. Optional YAML frontmatter at the top.
//   2. A block of `import Name from "./path"` lines (one per line, blank
//      lines allowed between them). Parsing stops at the first non-import,
//      non-blank line.
//   3. Body prose. To render an imported artifact, place `{Name}` on its
//      own line (with optional surrounding whitespace).
//
// The path extension determines how `{Name}` renders:
//
//   - .svg / .png / .jpg / .jpeg / .gif / .webp / .avif
//       → `<img src={Name} alt="" class="block w-full" />`
//         (import path gets `?url` appended so Vite returns a string URL)
//   - .md
//       → `<Name />` (and the import path is rewritten to .mdx because
//         section partials are extension-changed during sync)
//   - .astro / .mdx / bare specifier (e.g. @/components/post/Foo.astro)
//       → `<Name />`
function transformMdToMdx(source) {
  const lines = source.split("\n")
  let i = 0
  const out = []

  // Optional frontmatter.
  if (lines[i] === "---") {
    out.push(lines[i++])
    while (i < lines.length && lines[i] !== "---") {
      out.push(lines[i++])
    }
    if (i < lines.length) out.push(lines[i++]) // closing ---
    out.push("")
    while (i < lines.length && lines[i].trim() === "") i++
  }

  // Parse imports.
  const importMap = new Map()
  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === "") {
      i++
      continue
    }
    const m = IMPORT_RE.exec(line)
    if (!m) break
    const [, name, importPath] = m
    const ext = path.extname(importPath).toLowerCase()
    let resolvedPath = importPath
    let replacement
    if (IMAGE_EXTS.has(ext)) {
      resolvedPath = importPath.includes("?") ? importPath : `${importPath}?url`
      replacement = `<img src={${name}} alt="" class="block w-full" />`
    } else if (ext === ".md") {
      resolvedPath = importPath.replace(/\.md$/, ".mdx")
      replacement = `<${name} />`
    } else {
      replacement = `<${name} />`
    }
    importMap.set(name, replacement)
    out.push(`import ${name} from "${resolvedPath}"`)
    i++
  }

  if (importMap.size > 0) out.push("")

  // Body — replace `{Name}` on its own line with the rendered form.
  const REF_RE = /^\{(\w+)\}$/
  while (i < lines.length) {
    const line = lines[i++]
    const m = REF_RE.exec(line.trim())
    if (m && importMap.has(m[1])) {
      out.push(importMap.get(m[1]))
    } else {
      out.push(line)
    }
  }

  return out.join("\n")
}

// In MDX files (e.g. an index.mdx that composes section partials), rewrite
// any `./foo.md` import paths to `./foo.mdx`, since the partials are
// extension-changed during sync. Only relative paths are touched.
function rewriteMdImports(source) {
  return source.replace(
    /^(\s*import\s+\w+\s+from\s+["'])(\.[^"']+)\.md(["']\s*;?\s*)$/gm,
    "$1$2.mdx$3",
  )
}

async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

async function rmTree(p) {
  await fs.rm(p, { recursive: true, force: true })
}

async function walk(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const out = []
  // Underscore-skip applies only at the top level of the source root.
  // - `_template/`, `_draft-thing/` at top level → never sync (templates/drafts).
  // - `posts/<slug>/_01-intro.md` inside a post → DO sync. Astro's content
  //   collection separately excludes _-prefixed files from being treated as
  //   their own post pages, so partials get synced into the repo and remain
  //   importable by index.mdx without ever generating a route.
  const isTopLevel = dir === base
  for (const e of entries) {
    if (SKIP_NAMES.has(e.name)) continue
    if (isTopLevel && isPrivate(e.name)) continue
    const ext = path.extname(e.name).toLowerCase()
    if (SKIP_EXTS.has(ext)) continue
    const abs = path.join(dir, e.name)
    if (e.isDirectory()) {
      out.push(...(await walk(abs, base)))
    } else if (e.isFile()) {
      out.push({ abs, rel: path.relative(base, abs) })
    }
  }
  return out
}

async function writeOut(destAbs, content) {
  await fs.mkdir(path.dirname(destAbs), { recursive: true })
  await fs.writeFile(destAbs, content)
}

async function copyFile(src, dest) {
  await fs.mkdir(path.dirname(dest), { recursive: true })
  await fs.copyFile(src, dest)
}

async function main() {
  if (!(await exists(sourceDir))) {
    console.error(`✗ Blog source not found: ${sourceDir}`)
    console.error(`  Override with BLOG_SOURCE_DIR=/path/to/your/blog/posts`)
    process.exit(1)
  }

  const files = await walk(sourceDir)
  if (files.length === 0) {
    console.error(`✗ No files found in ${sourceDir}`)
    process.exit(1)
  }

  console.log(`→ Source: ${sourceDir}`)
  console.log(`→ Dest:   ${destDir}`)
  console.log(`→ ${files.length} file(s) to sync\n`)

  await rmTree(destDir)
  await fs.mkdir(destDir, { recursive: true })

  let mdCount = 0
  let assetCount = 0
  for (const f of files) {
    const ext = path.extname(f.rel).toLowerCase()
    if (ext === ".md") {
      const src = await fs.readFile(f.abs, "utf8")
      const transformed = transformMdToMdx(src)
      const destRel = f.rel.replace(/\.md$/, ".mdx")
      const dest = path.join(destDir, destRel)
      await writeOut(dest, transformed)
      mdCount++
      console.log(`  ${f.rel}  →  ${destRel}`)
    } else if (ext === ".mdx") {
      const src = await fs.readFile(f.abs, "utf8")
      const transformed = rewriteMdImports(src)
      const dest = path.join(destDir, f.rel)
      await writeOut(dest, transformed)
      mdCount++
      console.log(`  ${f.rel}`)
    } else {
      const dest = path.join(destDir, f.rel)
      await copyFile(f.abs, dest)
      assetCount++
      console.log(`  ${f.rel}`)
    }
  }

  console.log(`\n✓ Synced ${mdCount} post file(s) and ${assetCount} asset(s)`)
  console.log(`  Next: review with \`git status\`, commit, push.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
