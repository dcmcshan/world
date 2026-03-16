// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://world.castalia.institute',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});