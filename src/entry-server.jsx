import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { structuredData } from "./seo.js";

export function render() {
  return {
    appHtml: renderToString(<App />),
    headHtml: `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`,
  };
}
