import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import { remarkMermaid } from "./src/lib/remark-mermaid.ts"

export default defineConfig({
  site: "https://eytanshleizer.github.io",
  base: "/koko-site",
  trailingSlash: "ignore",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), mdx()],
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
  build: {
    format: "directory",
  },
})
