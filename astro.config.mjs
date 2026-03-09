import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

/**
 * [Persona: WebDev] Critical Update:
 * We are moving to Tailwind v4 native Vite integration.
 * This resolves the ERESOLVE conflict with @astrojs/tailwind.
 */

export default defineConfig({
  vite: {
    plugins: [tailwindv4()],
  },

  // Keep the directory format for our /admin route
  build: {
    format: 'directory'
  },

  output: 'static',
  adapter: cloudflare()
});