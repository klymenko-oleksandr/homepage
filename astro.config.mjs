// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://klymenko-oleksandr.github.io',
  base: '/homepage',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
