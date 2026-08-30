import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const base = {
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
};

const engineeringLog = defineCollection({
  loader: glob({ base: './src/content/engineering-log', pattern: '**/*.md' }),
  schema: z.object({
    ...base,
    /** Short one-line takeaway shown on the index page. */
    takeaway: z.string().optional(),
  }),
});

const fieldNotes = defineCollection({
  loader: glob({ base: './src/content/field-notes', pattern: '**/*.md' }),
  schema: z.object({
    ...base,
    /** Groups notes on the index page, e.g. "Distributed Systems". */
    topic: z.string(),
  }),
});

export const collections = {
  'engineering-log': engineeringLog,
  'field-notes': fieldNotes,
};
