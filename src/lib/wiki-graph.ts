// Wiki-link parsing + graph construction.
//
// Author writes Obsidian-style wiki-links inside notebook posts:
//
//   [[target]]                   ← display text = "target"
//   [[target|Display Label]]     ← display text = "Display Label"
//
// Resolution rules (in order):
//   1. If `target` (or its slugified form) matches a notebook post's id
//      or slugified title → link to that post.
//   2. Otherwise → emit a "concept stub" node with id = slugify(target).
//      Concept stubs are first-class graph nodes; they don't have their
//      own page but show up on /ideas with a back-edge list.

export type WikiNodeKind = "post" | "concept"

export interface WikiNode {
  id: string
  title: string
  kind: WikiNodeKind
  // Optional fields for posts:
  href?: string
  excerpt?: string
  date?: Date
}

export interface WikiLink {
  source: string
  target: string
  // Optional label override (from [[target|label]]).
  label?: string
}

export interface WikiGraph {
  nodes: WikiNode[]
  links: WikiLink[]
  // Map of normalized target → resolved node id. Used by the remark
  // plugin to turn `[[target]]` into the right href.
  resolver: Map<string, string>
}

// Lower-case, strip non-alphanumeric runs to single "-", trim hyphens.
// Matches GitHub/Obsidian-flavored slugification well enough.
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// Match [[target]] or [[target|label]] in a single text run.
// `target` cannot contain `]` or `|`; `label` cannot contain `]`.
// The `g` flag is critical so the matcher walks across multiple links.
export const WIKI_LINK_RE = /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g

export interface ParsedWikiLink {
  raw: string
  targetRaw: string
  label: string
  index: number
  end: number
}

export function extractWikiLinks(body: string): ParsedWikiLink[] {
  const out: ParsedWikiLink[] = []
  for (const m of body.matchAll(WIKI_LINK_RE)) {
    const targetRaw = m[1].trim()
    const label = (m[2] ?? m[1]).trim()
    out.push({
      raw: m[0],
      targetRaw,
      label,
      index: m.index ?? 0,
      end: (m.index ?? 0) + m[0].length,
    })
  }
  return out
}

// Posts loaded from the notebook collection. We accept a minimal shape so
// this module doesn't need to import astro:content (it gets called from
// the build's astro:content context).
export interface PostInput {
  id: string
  title: string
  body: string
  excerpt?: string
  date?: Date
}

export function buildWikiGraph(posts: PostInput[]): WikiGraph {
  const nodes = new Map<string, WikiNode>()
  const links: WikiLink[] = []
  const resolver = new Map<string, string>()

  // First pass: register every post as a node, and seed the resolver
  // with both its id (slug) and its slugified title.
  for (const p of posts) {
    nodes.set(p.id, {
      id: p.id,
      title: p.title,
      kind: "post",
      href: `/notebook/${p.id}`,
      excerpt: p.excerpt,
      date: p.date,
    })
    resolver.set(p.id, p.id)
    resolver.set(slugify(p.title), p.id)
  }

  // Second pass: walk each post's body, parse wiki-links, register edges
  // (and concept stubs for unresolved targets).
  const seenEdges = new Set<string>()
  for (const p of posts) {
    const found = extractWikiLinks(p.body)
    for (const link of found) {
      const targetId =
        resolver.get(link.targetRaw) ??
        resolver.get(slugify(link.targetRaw)) ??
        slugify(link.targetRaw)

      if (targetId === p.id) continue // skip self-links

      // Concept stub: no post matched. Register as a node if first time.
      // Use the target text (the part before `|`) as the canonical title,
      // not the label — labels are link-call-site display strings and
      // can be inflected ("framing the question" vs "Frame").
      if (!nodes.has(targetId)) {
        nodes.set(targetId, {
          id: targetId,
          title: link.targetRaw,
          kind: "concept",
        })
        resolver.set(slugify(link.targetRaw), targetId)
      }

      // Dedupe edges (one per source-target pair regardless of how many
      // times the link appears in the source post).
      const edgeKey =
        p.id < targetId ? `${p.id}|${targetId}` : `${targetId}|${p.id}`
      if (seenEdges.has(edgeKey)) continue
      seenEdges.add(edgeKey)
      links.push({ source: p.id, target: targetId, label: link.label })
    }
  }

  return { nodes: Array.from(nodes.values()), links, resolver }
}
