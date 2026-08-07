import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

/**
 * Need to run 'npm install @astrojs/sitemap' in your terminal.
 * The 'site' property is required for the sitemap to generate absolute URLs.
 */

export default defineConfig({
  // Replace this with your actual production URL
  site: 'https://datawithduke.com',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindv4()],
  },

  build: {
    format: 'directory'
  },

  output: 'static',
  adapter: cloudflare()
});