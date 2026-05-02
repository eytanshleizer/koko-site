#!/usr/bin/env node
// Sync tools from the iCloud My Site/Tools folder into the Astro content
// collection.
//
// Mirrors what sync-blog.mjs does for posts, but simpler — tool folders
// are copied verbatim. No `.md` → `.mdx` transform, no import-rewriting:
// the JSX entry component lives in the tool folder and gets imported
// statically by the detail route via `import.meta.glob`.
//
// Source layout:
//   ~/Library/Mobile Documents/com~apple~CloudDocs/My Site/Tools/<slug>/
//     tool.md         ← required, frontmatter + description
//     App.jsx         ← for kind=app
//     prompt.md       ← for kind=doc (or any *.md the frontmatter `source` references)
//     ...
//
// Top-level folders or files starting with `_` are private (templates,
// drafts) and skipped.
//
// Override the source via env var: TOOLS_SOURCE_DIR=/path/to/tools

import { promises as fs } from "node:fs"
import path from "node:path"
import os from "node:os"

const DEFAULT_SOURCE = path.join(
  os.homedir(),
  "Library",
  "Mobile Documents",
  "com~apple~CloudDocs",
  "My Site",
  "Tools",
)

const sourceDir = process.env.TOOLS_SOURCE_DIR
  ? path.resolve(process.env.TOOLS_SOURCE_DIR)
  : DEFAULT_SOURCE

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..")
const destDir = path.join(repoRoot, "src", "content", "tools")

const SKIP_NAMES = new Set([".DS_Store", ".git", "node_modules"])
const SKIP_EXTS = new Set([".swp", ".tmp", ".bak"])
const isPrivate = (name) => name.startsWith("_")

async function exists(p) {
  try { await fs.access(p); return true } catch { return false }
}

async function rmTree(p) {
  await fs.rm(p, { recursive: true, force: true })
}

async function walk(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const out = []
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

async function copyFile(src, dest) {
  await fs.mkdir(path.dirname(dest), { recursive: true })
  await fs.copyFile(src, dest)
}

async function main() {
  if (!(await exists(sourceDir))) {
    console.error(`✗ Tools source not found: ${sourceDir}`)
    console.error(`  Override with TOOLS_SOURCE_DIR=/path/to/your/tools`)
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

  for (const f of files) {
    const dest = path.join(destDir, f.rel)
    await copyFile(f.abs, dest)
    console.log(`  ${f.rel}`)
  }

  console.log(`\n✓ Synced ${files.length} file(s)`)
  console.log(`  Next: review with \`git status\`, commit, push.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
