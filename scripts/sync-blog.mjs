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
//   - Copies files in, preserving folder structure
//   - Skips macOS dotfiles (.DS_Store) and editor cruft (.swp, .tmp)
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
// Folders or files starting with `_` (e.g. _template, _draft) are private to
// the source folder and never synced. Use `_` to keep templates, drafts, or
// scratch posts in iCloud without publishing them.
const isPrivate = (name) => name.startsWith("_")

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
  for (const e of entries) {
    if (SKIP_NAMES.has(e.name)) continue
    if (isPrivate(e.name)) continue
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

  // Wipe destination so removed posts disappear from the repo too.
  await rmTree(destDir)
  await fs.mkdir(destDir, { recursive: true })

  let mdCount = 0
  let assetCount = 0
  for (const f of files) {
    const dest = path.join(destDir, f.rel)
    await copyFile(f.abs, dest)
    const ext = path.extname(f.rel).toLowerCase()
    if (ext === ".md" || ext === ".mdx") mdCount++
    else assetCount++
    console.log(`  ${f.rel}`)
  }

  console.log(`\n✓ Synced ${mdCount} post(s) and ${assetCount} asset(s)`)
  console.log(`  Next: review with \`git status\`, commit, push.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
