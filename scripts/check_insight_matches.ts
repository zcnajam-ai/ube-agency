import { INSIGHTS } from "../src/data/insights";

const matches = INSIGHTS.map((article, idx) => ({
  idx,
  id: article.id,
  slug: article.slug,
  title: article.title,
  coverImage: article.coverImage
})).filter(a => a.slug === "how-to-optimize-for-google-ai-overviews");

console.log("Matches:", matches);
