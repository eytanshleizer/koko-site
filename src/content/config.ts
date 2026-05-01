import { defineCollection, z } from "astro:content"

const notebook = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    fig: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
})

export const collections = { notebook }
