import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const distPath = (...parts) => join(process.cwd(), "dist", ...parts);

describe("static build output", () => {
  it("pre-renders the active portfolio content into index.html", () => {
    const html = readFileSync(distPath("index.html"), "utf8");

    assert.match(html, /Engineering platforms\s*<br[^>]*>\s*<span[^>]*>that deliver at scale\.<\/span>/);
    assert.match(html, /Staff Software Engineer \/ Platform Engineer/);
    assert.match(html, /Uni Retail Platform \(URP\)/);
    assert.match(html, /Let&#x27;s Connect/);
    assert.doesNotMatch(html, /<div id="root"><\/div>/);
  });

  it("includes complete SEO metadata for the canonical domain", () => {
    const html = readFileSync(distPath("index.html"), "utf8");

    assert.match(html, /<link rel="canonical" href="https:\/\/xiaoyongxu\.com\/" \/>/);
    assert.match(html, /<meta property="og:title" content="Xiaoyong Xu — Staff Software Engineer &amp; Platform Engineer" \/>/);
    assert.match(html, /<meta property="og:url" content="https:\/\/xiaoyongxu\.com\/" \/>/);
    assert.match(html, /<meta name="twitter:card" content="summary_large_image" \/>/);
    assert.match(html, /<script type="application\/ld\+json">/);
    assert.match(html, /"@type": "Person"/);
    assert.match(html, /"url": "https:\/\/xiaoyongxu\.com\/"/);
  });

  it("publishes robots.txt and sitemap.xml", () => {
    const robots = readFileSync(distPath("robots.txt"), "utf8");
    const sitemap = readFileSync(distPath("sitemap.xml"), "utf8");

    assert.match(robots, /User-agent: \*/);
    assert.match(robots, /Allow: \//);
    assert.match(robots, /Sitemap: https:\/\/xiaoyongxu\.com\/sitemap\.xml/);
    assert.match(sitemap, /<loc>https:\/\/xiaoyongxu\.com\/<\/loc>/);
  });
});
