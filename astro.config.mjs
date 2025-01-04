import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

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
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  integrations: [react()],
});
