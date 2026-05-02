/**
 * Remark plugin: turns Obsidian-style `[[target]]` and `[[target|label]]`
 * patterns inside markdown text into real anchor tags.
 *
 *   [[four-slot-frame]]              → <a href="/notebook/four-slot-frame">four-slot-frame</a>
 *   [[Frame|the framer]]             → <a href="/notebook/frame">the framer</a>  (if `frame` post exists)
 *   [[unknown concept|read more]]    → <a class="wiki-stub"
 *                                         href="/ideas?focus=unknown-concept"
 *                                         data-concept="unknown-concept">read more</a>
 *
 * Resolution:
 *   - If the target slug matches a post → link to /notebook/<slug>
 *   - Otherwise → link to /ideas?focus=<slug> with `wiki-stub` class so
 *     the page can style it differently (dimmer, dashed underline, etc.)
 *
 * The remark plugin runs at build time and needs the post manifest +
 * site base URL. Both are passed in via options at config time.
 */
import { visit, SKIP } from "unist-util-visit"
import { slugify, WIKI_LINK_RE } from "./wiki-graph.ts"

export interface RemarkWikiLinksOptions {
  // Slugs of every notebook post. Used to decide post vs concept stub.
  postSlugs: Set<string>
  // Map of slugified-title → canonical post slug, so [[Reading the Map of a Problem]]
  // resolves even if the target doesn't match the slug exactly.
  titleToSlug?: Map<string, string>
  // Site base path (e.g. "/problem-intelligence"). Prepended to /notebook and /ideas.
  base?: string
}

export function remarkWikiLinks(options: RemarkWikiLinksOptions) {
  const postSlugs = options.postSlugs
  const titleToSlug = options.titleToSlug ?? new Map<string, string>()
  const base = (options.base ?? "").replace(/\/$/, "")

  function resolve(target: string): { slug: string; isPost: boolean } {
    const raw = target.trim()
    const slug = slugify(raw)
    if (postSlugs.has(raw)) return { slug: raw, isPost: true }
    if (postSlugs.has(slug)) return { slug, isPost: true }
    const titled = titleToSlug.get(slug)
    if (titled) return { slug: titled, isPost: true }
    return { slug, isPost: false }
  }

  return (tree: any) => {
    // Walk text nodes only — never transform inside code blocks, inline
    // code, or already-linked text. `visit` with the parent gives us
    // access to splice in new nodes.
    visit(tree, "text", (node: any, index: number | null, parent: any) => {
      if (!parent || index === null) return
      // Don't touch text inside code, inlineCode, or link nodes.
      if (
        parent.type === "code" ||
        parent.type === "inlineCode" ||
        parent.type === "link"
      )
        return

      const value = String(node.value)
      // Reset the regex each time — it has the `g` flag.
      WIKI_LINK_RE.lastIndex = 0
      if (!WIKI_LINK_RE.test(value)) return

      const newChildren: any[] = []
      let lastIndex = 0
      WIKI_LINK_RE.lastIndex = 0
      let m: RegExpExecArray | null
      while ((m = WIKI_LINK_RE.exec(value)) !== null) {
        const matchStart = m.index
        if (matchStart > lastIndex) {
          newChildren.push({
            type: "text",
            value: value.slice(lastIndex, matchStart),
          })
        }
        const targetRaw = m[1].trim()
        const label = (m[2] ?? m[1]).trim()
        const { slug, isPost } = resolve(targetRaw)
        const href = isPost
          ? `${base}/notebook/${slug}`
          : `${base}/ideas?focus=${encodeURIComponent(slug)}`

        // Emit as raw HTML so we can attach the `wiki-stub` class
        // without fighting the remark Link node's serializer.
        const cls = isPost ? "wiki-link" : "wiki-link wiki-stub"
        const escapedLabel = String(label)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
        newChildren.push({
          type: "html",
          value: `<a class="${cls}" href="${href}"${
            isPost ? "" : ` data-concept="${slug}"`
          }>${escapedLabel}</a>`,
        })
        lastIndex = m.index + m[0].length
      }
      if (lastIndex < value.length) {
        newChildren.push({ type: "text", value: value.slice(lastIndex) })
      }

      parent.children.splice(index, 1, ...newChildren)
      // Tell visit not to descend into the new children (they're already
      // processed) and to skip ahead by their length.
      return [SKIP, index + newChildren.length]
    })
  }
}
