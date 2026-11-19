// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Domínio próprio servido na raiz
  site: 'https://jrpintura.com.br',
  base: '/',
  // Permite acesso pelo túnel do ngrok
  server: { allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app', '.ngrok.io'] },
  vite: { plugins: [tailwindcss()] },
});
