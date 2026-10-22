// @ts-check
import { defineConfig } from 'astro/config';

// Proyecto de GitHub Pages: https://xlu1s.github.io/Web-gildas-alcoy/
export default defineConfig({
  site: 'https://xlu1s.github.io',
  base: '/Web-gildas-alcoy',
  output: 'static',
  trailingSlash: 'always',
});
