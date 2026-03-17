import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const portfolioSectionSchema = z.enum([
  "seo-business",
  "conversion-pages",
  "editorial-strategy",
  "complex-topics",
  "agency-collaboration",
]);

const portfolioRoleSchema = z.enum([
  "proof",
  "cadre de lecture",
  "analyse appliquée",
  "erreur de lecture",
  "erreur de structure",
]);

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      author: z.string().optional(),
      category: z.string().optional().default("Analyse"),
      tags: z.array(z.string()).optional().default([]),
      readingTime: z.string().optional(),
      featured: z.boolean().optional().default(false),
      draft: z.boolean().optional().default(false),

      pubDate: z.coerce.date().optional(),
      date: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),

      articles: z.boolean().optional().default(true),

      portfolio: z.boolean().optional().default(false),
      portfolioSection: portfolioSectionSchema.optional(),
      portfolioOrder: z.number().optional().default(999),
      portfolioRole: portfolioRoleSchema.optional(),
      portfolioSummary: z.string().optional(),
      portfolioAudience: z.array(z.string()).optional().default([]),
      portfolioIntent: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.portfolio && !data.portfolioSection) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "portfolioSection is required when portfolio is true",
          path: ["portfolioSection"],
        });
      }
    }),
});

export const collections = {
  articles,
};