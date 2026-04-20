import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hema.academy',
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ar: 'ar' },
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
