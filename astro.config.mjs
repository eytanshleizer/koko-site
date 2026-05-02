import { defineConfig } from "astro/config"
import { promises as fs } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import { remarkMermaid } from "./src/lib/remark-mermaid.ts"
import { remarkWikiLinks } from "./src/lib/remark-wikilinks.ts"
import { slugify } from "./src/lib/wiki-graph.ts"

// Build the post manifest at config load time so remarkWikiLinks knows
// which `[[target]]` references resolve to real notebook posts vs
// concept stubs. Reads each post's index.{md,mdx} for its frontmatter
// title; the slug is the directory name.
async function loadPostManifest() {
  const here = path.dirname(fileURLToPath(import.meta.url))
  const dir = path.join(here, "src", "content", "notebook")
  const slugs = new Set()
  const titleToSlug = new Map()
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return { slugs, titleToSlug }
  }
  for (const e of entries) {
    if (!e.isDirectory() || e.name.startsWith("_") || e.name.startsWith(".")) continue
    slugs.add(e.name)
    // Try index.md, then index.mdx, to extract title from frontmatter.
    for (const fname of ["index.md", "index.mdx"]) {
      try {
        const txt = await fs.readFile(path.join(dir, e.name, fname), "utf8")
        const m = txt.match(/^---\s*\n([\s\S]*?)\n---/)
        if (!m) continue
        const titleLine = m[1].split("\n").find((l) => /^title\s*:/i.test(l))
        if (!titleLine) continue
        const tm = titleLine.match(/^title\s*:\s*"?([^"\n]+?)"?\s*$/i)
        if (tm) titleToSlug.set(slugify(tm[1]), e.name)
        break
      } catch {
        /* fall through to next filename */
      }
    }
  }
  return { slugs, titleToSlug }
}

const manifest = await loadPostManifest()

export default defineConfig({
  site: "https://eytanshleizer.github.io",
  base: "/problem-intelligence",
  trailingSlash: "ignore",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), mdx(), react()],
  markdown: {
    remarkPlugins: [
      remarkMermaid,
      [
        remarkWikiLinks,
        {
          postSlugs: manifest.slugs,
          titleToSlug: manifest.titleToSlug,
          base: "/problem-intelligence",
        },
      ],
    ],
  },
  build: {
    format: "directory",
  },
})
