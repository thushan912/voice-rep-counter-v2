import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    locale: z.enum(['en', 'it']),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    author: z.string(),
    draft: z.boolean().default(false),
    related: z.array(z.string()).default([]),
    translationKey: z.string().optional(),
  }),
});

export const collections = { blog };
