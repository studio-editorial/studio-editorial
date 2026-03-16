import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    author: z.string().optional(),
    category: z.string().optional().default("Analyse"),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),

    // Standard cible
    pubDate: z.coerce.date().optional(),

    // Compatibilité transitoire
    date: z.coerce.date().optional(),

    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = {
  articles,
};