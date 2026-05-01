/**
 * Tiny remark plugin: turns ```mermaid fenced code blocks into a framed
 * mermaid container with the same chrome as <Diagram>: a topbar with a
 * fullscreen button, and a body that fills the rest. Mermaid renders
 * client-side from the <pre class="mermaid"> source (Base.astro handles it).
 *
 * The </pre> escape defends against a writer accidentally breaking out of
 * the wrapper inside their diagram source.
 */
import { visit } from "unist-util-visit"

export function remarkMermaid() {
  return (tree: any) => {
    visit(tree, "code", (node: any) => {
      if (node.lang !== "mermaid") return
      const value = String(node.value).replace(/<\/pre>/gi, "&lt;/pre&gt;")
      node.type = "html"
      node.value =
        `<figure class="diagram-frame not-prose">` +
        `<header class="diagram-topbar">` +
        `<span class="diagram-title"></span>` +
        `<button type="button" class="diagram-action" data-diagram-action="open" aria-label="Open fullscreen">` +
        `<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">` +
        `<path d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4"/>` +
        `</svg>` +
        `</button>` +
        `</header>` +
        `<div class="diagram-body"><pre class="mermaid">${value}</pre></div>` +
        `</figure>`
    })
  }
}
