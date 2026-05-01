/**
 * Tiny remark plugin: turns ```mermaid fenced code blocks into a framed
 * mermaid container with a fullscreen toggle. The actual rendering happens
 * client-side in Base.astro (one mermaid lib import shared across all
 * diagrams on a page).
 *
 * Output structure (so the markup matches the <Diagram> component used for
 * non-mermaid embeds):
 *
 *   <figure class="diagram-frame">
 *     <button class="diagram-fullscreen">…icon…</button>
 *     <div class="diagram-body">
 *       <pre class="mermaid">…source…</pre>
 *     </div>
 *   </figure>
 *
 * The closing-tag escape on </pre> defends against a writer accidentally
 * breaking out of the wrapper inside their diagram source.
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
        `<button type="button" class="diagram-fullscreen" aria-label="Toggle fullscreen">` +
        `<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">` +
        `<path d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4"/>` +
        `</svg>` +
        `</button>` +
        `<div class="diagram-body"><pre class="mermaid">${value}</pre></div>` +
        `</figure>`
    })
  }
}
