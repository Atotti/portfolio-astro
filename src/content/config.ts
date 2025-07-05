
import { defineCollection, z } from 'astro:content';

const animeCollection = defineCollection({
  type: 'data',
  schema: z.array( // データが配列であることを示す
    z.object({
      title: z.string(),
      watchedDate: z.string().optional(), // 日付は文字列として保持
      watchCount: z.number().default(0),
      genres: z.array(z.string()).default([]),
      comment: z.string().optional(),
    })
  ),
});

export const collections = {
  'anime': animeCollection,
};
