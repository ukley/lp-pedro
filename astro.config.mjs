// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://ukley.github.io/lp-pedro/
  site: 'https://ukley.github.io',
  base: '/lp-pedro',
  // Permite acesso pelo túnel do ngrok
  server: { allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app', '.ngrok.io'] },
  vite: { plugins: [tailwindcss()] },
});
