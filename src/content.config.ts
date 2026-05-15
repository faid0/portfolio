import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "Academic",
      "Infrastructure",
      "Software",
      "Frontend",
      "Algorithms",
      "Graphics",
    ]),
    status: z.enum(["Featured", "Selected", "Archived"]),
    date: z.string(),
    tags: z.array(z.string()),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = {
  projects,
};
