import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['craftsmanship', 'architecture', 'devops', 'ai-dotnet', 'medical', 'quantum']),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
