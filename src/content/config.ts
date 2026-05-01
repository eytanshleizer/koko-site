import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const notebook = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // excerpt is optional — posts authored in the iCloud Blog folder may not
    // have one. Listings fall back gracefully when it's missing.
    excerpt: z.string().optional(),
    date: z.coerce.date(),
    fig: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
})

// Each tool lives in its own folder under src/content/tools/<slug>/. The
// `index.md` file at the folder root carries metadata + description; the
// rest of the folder is artifacts (a JSX entry component for `app`, a
// markdown source for `doc`, nothing extra for `link`).
//
// Using the glob loader (not `type: "content"`) so the collection only
// matches `**/index.md` — sibling files like `prompt.md` and `App.jsx`
// stay out of the collection entirely. We also normalize the entry id
// to the folder name (so the route is `/tools/<slug>`, not
// `/tools/<slug>/index`).
const tools = defineCollection({
  loader: glob({
    pattern: "**/index.md",
    base: "./src/content/tools",
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    kind: z.enum(["app", "doc", "link"]),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),
    // kind=app: relative path (from the tool folder) to the JSX entry
    //   component. The detail page renders it as a client island.
    entry: z.string().optional(),
    // kind=doc: relative path to the markdown source the tool exposes.
    //   The detail page renders it AND offers a "Copy raw" button.
    source: z.string().optional(),
    // kind=link: external URL.
    url: z.string().url().optional(),
  }),
})

export const collections = { notebook, tools }
