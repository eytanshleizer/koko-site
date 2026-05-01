import { defineCollection, z } from "astro:content"

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

export const collections = { notebook }
