import sitemap from "../src/app/sitemap";

const urls = sitemap();
console.log("=== SITEMAP URL LIST ===");
urls.forEach((u, i) => console.log(`[${i+1}] ${u.url}`));
console.log("Total Sitemap URLs:", urls.length);
