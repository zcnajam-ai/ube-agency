# UBE buyer-intent map and implementation, October 2026

## Evidence and guardrails

The October 2026 live sitemap check found 77 canonical URLs. All 77 returned HTTP 200 and had one H1 and a self-referencing canonical. This is a snapshot, not a Search Console index-coverage report. GSC Wizard is unavailable, so impressions, positions, clicks, and lead attribution cannot be inferred from it. The keyword-tool free results gave directional US monthly estimates for a few head terms: AI SEO agency 1,600; eCommerce SEO agency 1,000; TikTok Shop agency 720; Shopify development agency 590; answer engine optimization services 590; Google Ads for eCommerce 390; custom eCommerce website development 260. Do not treat autocomplete questions as measured volume or promise a ranking.

Improve existing URLs before adding pages. Preserve redirects, canonicals, tracking, pricing data, and articles already published. Do not create a second page for the same primary intent. This change set touches core buyer-answer gaps, title clarity, internal links, share imagery and a broken breadcrumb. The broader 77-page rewrite remains dependent on query/lead data and editorial review.

## Primary intent and page relationships

| Buyer intent / query family | Existing primary page | Existing supporting pages | This change / next decision |
| --- | --- | --- | --- |
| Broad eCommerce and dropshipping agency with web, search, automation and marketing | `/` | Core service pages below | Homepage hero now leads with the business model, then names the connected capabilities and links to each service. Platform-specific language remains on the relevant service pages. |
| Shopify setup service, someone to build my store, setup inclusions | `/services/shopify-development` | `/shopify`, `/insights/shopify-store-setup-cost-2026`, `/ecommerce-growth-packages` | Clarify setup and development in title/H1; add service scope, post-launch and cost questions; link the hub and cost guide. Keep hub for broader comparison and planning. |
| Shopify agency, platform choice, migration and integrations | `/shopify` | `/services/shopify-development`, `/services/ecommerce` | Keep the hub distinct as a planning guide; do not create another Shopify agency URL. Review GSC query×page overlap when accessible. |
| eCommerce website development and marketplace support | `/services/ecommerce` | `/services/shopify-development`, `/amazon`, `/ebay`, `/walmart-marketplace`, `/services/etsy-shop-setup` | Clarify development intent in title/H1 and answer timing, platform choice, price and sales expectation. Marketplace hubs retain channel-specific intent. |
| Ongoing Shopify or marketplace store management | `/services/ecommerce-store-management` | `/ecommerce-store-management-packages`, `/services/ecommerce` | Explain post-launch product uploads and scoped monthly work; leave published price tiers in their central source. |
| AI SEO agency and services | `/services/ai-seo-agency` | `/ai-seo`, `/insights/ai-seo-aeo-geo-guide`, `/ai-seo-packages`, research study | Add eCommerce application, pricing and measurement questions. The informational hub currently shares an agency-oriented H1 with the service; assess query×page data before retitling or merging either indexed URL. |
| Dropshipping setup and suppliers | `/services/dropshipping` | `/dropshipping-store-offer`, `/insights/how-to-start-a-dropshipping-business-2026`, `/insights/dropshipping-store-cost-to-build` | Existing page and articles already answer several basics. Audit offer-versus-service query overlap after data access; avoid a third setup page. |
| TikTok Shop setup and marketing | `/tiktok-shop` and `/services/tiktok-marketing` | `/insights/how-to-start-a-tiktok-shop-2026`, `/services/tiktok-shop-setup` redirect | Keep setup guide and management service differentiated, and keep the legacy redirect. |
| Google Ads and Meta Ads management | `/services/google-ads`, `/services/meta-ads` | `/insights/google-ads-vs-meta-ads`, `/digital-marketing-packages` | Build landing pages around qualified action and channel fit; use the comparison guide to route readers to the relevant service. Confirm lead tracking before spend. |
| Branding, logo pricing and deliverables | `/services/branding` | `/branding-packages`, logo-cost insight | Keep service and package intents distinct; no new logo-price page. |
| Research/AI-search proof | `/research/ai-search-readiness-study-2026` | `/ai-seo`, AI SEO insights | Fix repeated brand in title and link breadcrumb to live Insights hub. Study methodology and numbers need source records for future claims. |

## Implemented technical and editorial changes

- Clarified Shopify and eCommerce service metadata, H1s and visible buyer FAQs. FAQ JSON-LD derives from the same arrays shown to visitors.
- Positioned the homepage around eCommerce and dropshipping rather than naming two platforms in the hero, with direct pathways to website development, AI SEO, automation, TikTok and Instagram marketing.
- Added answers about management product uploads and AI SEO measurement, with realistic dependencies. No sales or citation guarantee was added.
- Used each article's existing dynamic image route in Article schema and OG metadata, rather than its reused service icon.
- Added unique branded social images for Services, Packages, Work, Insights, Contact, and the research study. Reused the existing brand color system.
- Aligned the web app manifest with the site's existing square PNG brand icons at 192 and 512 pixels; the actual favicon artwork was already correct.
- Removed the research study's doubled `| UBE` title suffix and its `/research` breadcrumb dead end.
- Updated sitemap `lastModified` only for the homepage, four service pages and research content touched by this PR. Metadata-only image changes are not presented as article publication-date changes.

## Next content and measurement sequence

1. Baseline first: connect direct GSC and GA4 access when available. Export query×landing-page, organic leads, CTA events and impressions. Check `/ai-seo` against `/services/ai-seo-agency` and Shopify hub against service before changing indexed URLs.
2. Use real query groups to update existing high-impression pages. Write an answer section only when it adds a concrete scope, process, cost factor, comparison or limitation missing from the page. Update title/description and contextual links together.
3. For Google Ads, define one conversion per real lead, test form routing and consent, separate setup-intent landing pages from management-intent pages, and exclude unrelated informational terms through campaign controls. Organic pages do not substitute for Ads measurement.
4. For off-page work, reconcile company identity and links on existing public business profiles, request attribution on permitted client case-study mentions, and pitch original study findings to relevant commerce publications. Record source URL, approval, date and referring page. Do not buy links or invent endorsements.
5. Review Core Web Vitals by template and device with field data where available; validate actual snippets and structured data after deployment. A 100 score and a top ranking cannot be guaranteed.
