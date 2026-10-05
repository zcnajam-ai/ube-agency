# Platform visual audit — October 5, 2026

This audit targets platform identity around headings and prominent cards. The marks are identifiers for independent platforms, not endorsements, partner badges, or evidence of marketplace approval. Keep a real client storefront image when it shows a verified project; replace only generic artwork being presented as a platform identity.

| Surface | Prior visual | Decision |
| --- | --- | --- |
| `/shopify`, `/tiktok-shop`, `/amazon`, `/walmart-marketplace`, `/ebay` | Five generated 3D marketplace hero scenes | Replace hero scenes with recognizable platform marks; keep UBE dimensional tile and responsive hover motion. Use each page's 1200×630 OG image for Article image schema. |
| `/services/shopify-development`, `/services/etsy-shop-setup` | Generic 3D storefront/listing as hero | Use recognizable mark in hero, add labeled badge by H1; keep separate instructional diagrams below. |
| `/services/tiktok-marketing`, `/services/tiktok-shop-setup` | Hand-drawn 3D TikTok mark in mock UI | Use recognizable TikTok silhouette and labeled badges; the mock interface stays explicitly illustrative. |
| `/services/google-ads`, `/services/meta-ads`, `/services/digital-marketing`, `/services/dropshipping` | Generic ad illustrations or no platform visual in heading | Add named brand badges by H1; keep useful process illustrations. Facebook and Instagram are represented separately rather than by a made-up Meta glyph. |
| `/services/ecommerce`, `/ecommerce-growth-packages` | Hand-drawn Shopify/Amazon/Etsy/eBay tiles | Replace internal logo drawings with source-derived vectors; retain motion on the tile, not on the marks. |
| `/services/ecommerce-store-management` | Platform names in text only | Add marks next to the existing channel guidance; retain management workflow artwork. |
| Home hero, paid media section, AI SEO section, interactive service cards | Hand-drawn marks or generic platform artwork | Replace logo layer in shared components and platform-specific service cards. |
| `/digital-marketing-packages`, `/tiktok-marketing-packages`, `/packages` | Text-only platform heading or generic TikTok card | Add compact platform badges or TikTok mark in the primary directory card. |
| `/insights/[slug]` | Many platform-focused articles had generic service-icon cover | Detect named platforms in the title, add badges by H1 and use a branded cover for those generic service-icon articles. Preserve verified editorial photography and unrelated article covers. |

The local vector files come from Simple Icons (and Font Awesome for Amazon); see `public/images/platform-marks/SOURCES.md`. Walmart uses the 2025 Spark image from Wikimedia Commons, attributed there to Walmart Brand Center. These mark shapes should remain flat and recognizable. The CSS may animate only the surrounding UBE card, and reduced-motion users get a stable card.

Before public release, confirm trademark asset usage. Shopify's brand-assets page describes written authorization for its assets, and Etsy's trademark policy requires prior written approval for commercial use of the Etsy logo. If that permission cannot be confirmed, use plain-text platform names in those particular tiles until it is obtained. Do not call UBE an official platform partner unless verified.

QA: `npx tsc --noEmit` passed and targeted ESLint completed with pre-existing unused-variable warnings. The local production build was blocked by unavailable Google Fonts network access; verify Vercel's production build, key mobile/desktop layouts, individual SVG responses, and alt text in preview before merging.
