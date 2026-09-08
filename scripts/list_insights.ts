import { INSIGHTS } from "../src/data/insights";

INSIGHTS.forEach((article, idx) => {
  console.log(`[${idx}] id: ${article.id} | slug: ${article.slug} | coverImage: ${article.coverImage}`);
});
