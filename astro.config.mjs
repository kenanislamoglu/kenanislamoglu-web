// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { mermaidPlugin } from './src/lib/mermaid-plugin.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://kenanislamoglu.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'file',
  },
  markdown: {
    processor: satteri({ mdastPlugins: [mermaidPlugin] }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
      wrap: false,
    },
  },
});
