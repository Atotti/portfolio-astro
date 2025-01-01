import { defineConfig } from 'astro/config';

export default defineConfig({
  content: {
    collections: {
      posts: {
        schema: ({ z }) => z.object({
          title: z.string(),
          pubDate: z.string(),
          description: z.string(),
          author: z.string(),
          tags: z.array(z.string()),
        }),
      },
    },
  },
});
