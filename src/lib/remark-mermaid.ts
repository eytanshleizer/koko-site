/**
 * Tiny remark plugin: turns ```mermaid fenced code blocks into a raw HTML
 * `<pre class="mermaid">` element. The actual rendering happens client-side
 * via the mermaid library (loaded in Base.astro).
 *
 * We escape only the closing tag — mermaid's diagram syntax doesn't itself
 * use HTML, so the typical concern (script injection inside the diagram
 * source) reduces to making sure the writer's content can't break out of
 * the <pre> wrapper. The </pre> sequence is escaped defensively.
 */
import { visit } from "unist-util-visit"

export function remarkMermaid() {
  return (tree: any) => {
    visit(tree, "code", (node: any) => {
      if (node.lang !== "mermaid") return
      const value = String(node.value).replace(/<\/pre>/gi, "&lt;/pre&gt;")
      node.type = "html"
      node.value = `<pre class="mermaid">${value}</pre>`
    })
  }
}
