// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Adresse finale du site (sert aux liens canoniques et au sitemap).
  site: 'https://christopher.sauzon.org',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      // Français à la racine (/), anglais sous /en/
      prefixDefaultLocale: false,
    },
  },
});
