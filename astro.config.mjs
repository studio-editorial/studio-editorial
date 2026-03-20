// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://studio-editorial.fr',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.endsWith('/mentions-legales/') &&
        !page.endsWith('/politique-de-confidentialite/')
    })
  ]
});