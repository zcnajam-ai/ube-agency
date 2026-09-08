import { INSIGHTS } from "../src/data/insights";

const matches = INSIGHTS.map((article, idx) => ({
  idx,
  id: article.id,
  slug: article.slug,
  title: article.title,
  coverImage: article.coverImage
})).filter(a => a.slug === "ai-seo-aeo-geo-guide");

console.log("Matches:", matches);
