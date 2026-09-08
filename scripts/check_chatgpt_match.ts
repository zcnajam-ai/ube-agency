import { INSIGHTS } from "../src/data/insights";

const matches = INSIGHTS.map((article, idx) => ({
  idx,
  id: article.id,
  slug: article.slug,
  title: article.title,
  coverImage: article.coverImage
})).filter(a => a.slug === "how-to-get-your-business-mentioned-in-chatgpt");

console.log("Matches:", matches);
