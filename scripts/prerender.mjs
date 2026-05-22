import { readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, "dist");
const canonicalUrl = "https://xiaoyongxu.com/";

const { render } = await import("../dist/server/entry-server.js");
const template = await readFile(join(distDir, "index.html"), "utf8");
const { appHtml, headHtml } = render();

const html = template
  .replace("<!--app-head-->", headHtml)
  .replace("<!--app-html-->", appHtml);

await writeFile(join(distDir, "index.html"), html);

await writeFile(
  join(distDir, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${canonicalUrl}sitemap.xml\n`,
);

await writeFile(
  join(distDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url>\n` +
    `    <loc>${canonicalUrl}</loc>\n` +
    `    <changefreq>monthly</changefreq>\n` +
    `    <priority>1.0</priority>\n` +
    `  </url>\n` +
    `</urlset>\n`,
);

await rm(join(distDir, "server"), { recursive: true, force: true });
