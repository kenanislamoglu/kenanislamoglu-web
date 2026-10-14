// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";
import { mermaidPlugin } from "./src/lib/mermaid-plugin.mjs";
import { readdirSync, readFileSync } from "node:fs";

// A section with no published entry is noindex (see its index page), so it
// stays out of the sitemap too. Files starting with "_" are templates.
/** @param {string} dir */
const isEmptySection = (dir) =>
  !readdirSync(new URL(`./src/content/${dir}/`, import.meta.url), {
    recursive: true,
    encoding: "utf8",
  }).some(
    (file) =>
      /\.md$/.test(file) &&
      !/(^|[\\/])_/.test(file) &&
      !/^draft:\s*true\s*$/m.test(
        // frontmatter only — a `draft: true` line in the body must not count
        readFileSync(
          new URL(`./src/content/${dir}/${file}`, import.meta.url),
          "utf8",
        ).match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "",
      ),
  );
const emptySections = ["engineering-log", "field-notes"].filter(isEmptySection);

// https://astro.build/config
export default defineConfig({
  site: "https://kenanislamoglu.com",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) =>
        !emptySections.some(
          (dir) => page === `https://kenanislamoglu.com/${dir}`,
        ),
    }),
  ],
  build: {
    format: "file",
  },
  markdown: {
    processor: satteri({ mdastPlugins: [mermaidPlugin] }),
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark-default",
      },
      wrap: false,
    },
  },
});
