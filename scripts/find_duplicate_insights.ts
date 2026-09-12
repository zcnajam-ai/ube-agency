import { INSIGHTS } from "../src/data/insights";

const seen = new Map<string, number[]>();
INSIGHTS.forEach((item, index) => {
  if (!seen.has(item.slug)) {
    seen.set(item.slug, []);
  }
  seen.get(item.slug)!.push(index);
});

seen.forEach((indices, slug) => {
  if (indices.length > 1) {
    console.log(`Duplicate slug: ${slug} at indices:`, indices);
  }
});
