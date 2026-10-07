# Search Console opportunity audit — October 7, 2026

Source: owner-supplied Google Search Console export, **Search results / Web / Last 28 days**, September 7–October 4, 2026. This is an observed baseline, not a forecast or a keyword-volume estimate. The query and page tabs are separate aggregations; they **cannot** establish that a specific query was served by a specific URL. Query-to-page analysis requires a filtered GSC export. The export also predates the October title/meta and homepage changes in PRs #71–#75, so it cannot measure their effect.

## Verified baseline

| Dimension | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| Property chart, Web | 49 | 13,390 | 0.37% | — |
| United States | 13 | 8,142 | 0.16% | 20.33 |
| Desktop | 25 | 12,041 | 0.21% | 19.25 |
| Mobile | 24 | 1,335 | 1.80% | 27.86 |

Do not sum the Queries and Pages tabs to recreate the property chart: anonymized queries are omitted and page/property aggregation can differ. This export contains no index-coverage, Core Web Vitals, GA4 lead, or query-by-landing-page data. It also does not identify AI Overview impressions; the separate Generative AI report must be exported to measure those.

## Opportunity map and intent ownership

| Observed GSC signal | Intent and primary URL | Action against current master | Follow-up measure |
| --- | --- | --- | --- |
| `/ai-seo-packages`: 0 clicks / 4,186 impressions, position 8.30. The long question about best SEO packages for AI and video search has 3,342 impressions at position 3.37, but its URL is unknown. | Commercial package comparison: `/ai-seo-packages` | PR #72 recently changed its title/meta and the page already has an explicit AI/video-search answer, tier comparison, pricing, study link and scope caveat. **Do not change the snippet again based on pre-release data.** | Export query filtered to this URL, inspect actual Google result and compare equal post-release windows before another title test. |
| `/insights/how-to-optimize-for-google-ai-overviews`: 2 / 2,538, position 40.88. Related how-to queries show zero clicks and positions about 51–74. | Educational implementation guide; AI SEO service is the commercial destination. | PR #73 already changed title, summary and direct answer. This update fixes an obsolete official GSC help link, reporting-rollout text and an unsupported placement inference. Existing service, package and study links stay. | Track URL-specific query groups, indexing and any available dedicated Generative AI impressions. Do not equate Web impressions to AI citations. |
| `/insights/tiktok-shop-vs-shopify`: 1 / 682, position 6.65; `/insights/how-to-start-a-tiktok-shop-2026`: 1 / 603, position 8.58. | Comparison versus setup; `/tiktok-shop` is the service hub. | PR #73 already changed both titles/direct answers and linked the service hub. No duplicate articles or second title changes now. | Compare CTR on the same page/query/device segments after recrawl. |
| `/branding-packages`: 2 / 549, position 24.06. “branding packages” has 127 impressions; “small business branding services” has 99, but URL association is unknown. | Pricing comparison belongs to `/branding-packages`; service intent belongs to `/services/branding`. | Both pages already have distinct H1s, scope, pricing/FAQ and contextual links. Retain separate intent; do not stuff the service phrase into a pricing title. | Export queries separately for both URLs; inspect competing Google snippets before editing. |
| `/insights/what-is-ai-seo-seo-vs-aeo-vs-geo`: 0 / 419, position 65.06; “aeo vs seo” has 70 impressions, position 71.09. | Short educational definition and decision guide; `/ai-seo` remains the longer methodology hub. | Expand the previously thin five-section glossary with practical comparisons, eligibility, schema limits, examples and measurement. Link to service, packages, study and official Google guidance. Preserve its original publish date; update modified date. | Check query/page pairing, impressions and position after recrawl; avoid a second general AI SEO hub. |
| `/insights/how-to-connect-shopify-to-tiktok-shop`: 0 / 298, position 31.22; “shopify tiktok shop integration” has 106 impressions, position 34.58. | Integration how-to article; `/tiktok-shop` handles service intent. | PR #73 already corrected direct answer, sync caveats and service link. Wait for post-change data. | Query-specific index/rank review and supported-integration policy review. |
| `/insights/dropshipping-store-cost-to-build`: 0 / 194, position 5.26; `/insights/shopify-store-setup-cost-2026`: 0 / 134, position 11.93. | Budgeting guides; link to the published $399/$799/$999 offer and Shopify service. | PR #73 aligned the dropshipping guide. This update removes speculative DIY/app/domain estimates and clarifies Shopify payment fees in the Shopify guide using Shopify's official U.S. pricing. | Check snippets and price consistency across pages, then track landing-page leads. |
| `/best-logo-design-agency/`: 0 / 901; `/logo-design-packages/`: 0 / 205; `/services/aiseo`: 3 / 354; `/portfolio/`: 1 / 24. | Legacy URL traffic. | PRs #28 and #71 already set one-hop redirects. Historical impressions are not proof that the current canonical pages are broken. | Inspect Google-selected canonicals and recrawl after redirects. |

## Live technical check on October 7

Crawled all **77 URLs in the current XML sitemap** with a browser user agent: **77 returned HTTP 200**, each had one H1, a title, meta description and self-canonical; no sitemap URL exposed a noindex directive or duplicate title/meta in this crawl. Internal links found outside the sitemap were a research CSV and portfolio PDF, both intentionally non-HTML assets. This checks rendered response HTML, not GSC indexing, Core Web Vitals, schema eligibility, forms, or off-page links. No blanket rewrite, new doorway page or redirect was justified by this crawl.

## Measurement and remaining work

1. Export **Queries filtered by each landing page** for the high-impression URLs, and compare the same countries and devices. The unusual 3,342-impression question must be attributed before treating it as an AI SEO package query.
2. After Google has recrawled PRs #71–#75 and this change, compare equal seven- and 28-day windows. Report clicks, impressions, CTR, position and qualified leads. Recent changes cannot be judged by the September 7–October 4 window alone.
3. Export the dedicated **Generative AI performance** report and GA4/CRM lead events if available. The current workbook is Web search data, not AI citation or conversion proof.
4. For external authority, build an evidence-led outreach list around the 100-site study and published case studies, then record earned editorial links and referral leads. No backlinks, rankings or results are claimed here, and no unsolicited outreach was sent.
5. Keep the duplicate-slug insight decision in its separate UBE-103 review. Do not silently consolidate those URLs in a performance PR.

Official references checked October 7, 2026: [Google's AI features guidance](https://developers.google.com/search/docs/appearance/ai-features), [GSC Generative AI report](https://support.google.com/webmasters/answer/16984139), [Shopify U.S. pricing](https://www.shopify.com/pricing), and [Shopify third-party fee help](https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/third-party-charges/third-party-transaction-fees).
