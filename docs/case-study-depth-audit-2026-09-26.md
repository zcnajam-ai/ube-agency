# UBE-133 — Case-study depth audit

Audit date: September 26, 2026. Baseline: production commit `a740d4b80866ad24705d0dd9b336f50257c4ac92` (PR #29).

## Method

I counted whitespace-separated words in the rendered `<main>` element of each live page. This includes visible gallery headings, labels and CTAs, but excludes the global navigation and footer. A content-only narrative count would be lower. I checked the actual main-content links and JSON-LD scripts, then compared the shared template with `src/data/projects.ts`. This is an audit and rewrite plan only; no case-study content or code is changed here.

| Case study | Current word count | Has “Challenge” section? | Has named methodology in “Strategy”? | Has specific metrics in “Results”? | Links to relevant service page? | Has CreativeWork schema? | Action needed |
|---|---:|---|---|---|---|---|---|
| [Fixoria Studio](/work/fixoria-studio-brand-identity-system) | 453 | Yes; “The Challenge” label, generic “Initial Roadblocks” H2 | No | No verified business outcomes; “100%” is a deliverable label, not a measured result | No in main content | Yes, generic shared template | Confirm scope and client approval for the nine visuals; replace unsupported “100%”; expand the actual design brief, decisions and deliverables; link to `/services/branding`; enrich schema after facts are verified |
| [Happy Knot Creations](/work/happy-knot-creations-shopify-storefront) | 240 | Yes; same generic H2 | No | No verified business outcomes; “100%” is a deliverable label | No in main content | Yes, generic shared template | Confirm Etsy migration, Shopify theme/checkout customization, AI SEO and social scope; document catalog and mobile decisions; link to `/services/shopify-development`; request outcome records |
| [Everhome Real Estate](/work/everhome-real-estate-brand-system) | 231 | Yes; same generic H2 | No | No verified business outcomes; “100%” is a deliverable label | No in main content | Yes, generic shared template | Confirm client identity, brand brief, typography license, asset use and final deliverables; link to `/services/branding`; request client-approved outcome evidence |
| [Eau'dacity Parfums](/work/eaudacity-luxury-fragrance-brand-system) | 188 | Yes; same generic H2 | No | No verified business outcomes; “100%” is a deliverable label | No in main content | Yes, generic shared template | Confirm packaging production versus mockups and whether a Shopify storefront was delivered; link to `/services/branding` (and Shopify only if verified); request outcomes |
| [Botāne Beauty & Fragrance](/work/botane-plant-based-luxury-beauty) | 187 | Yes; same generic H2 | No | No measured outcomes | No in main content | Yes, generic shared template | Verify “100% plant-based,” sustainability and Shopify claims before retaining; explain actual packaging/retail scope; link to `/services/branding`; request outcomes |
| [Bugle Chaser Outdoor Co.](/work/bugle-chaser-outdoor-apparel-brand) | 186 | Yes; same generic H2 | No | No measured outcomes | No in main content | Yes, generic shared template | Confirm supplier integration, fulfillment automation, paid ad work and Shopify setup from records; document store/catalog decisions; link to `/services/shopify-development`; request outcomes |

The pages have a deliverables strip named `results` in the data source, but none has a substantive “Results” section with client-recorded performance data. All six use one `CreativeWork` JSON-LD template with name, description, URL, image, creator and category. It does **not** currently include verified client identity as an explicit subject, deliverable list or year. These fields should be added only after confirmation.

## Rewrite plans, conditional on evidence

Target 1,500–2,500 useful words per page where the project records can support them. Do not stretch a case study with filler to meet a count. Each rewrite should have: project context and verified scope; a specific “The Challenge” section; “Strategy” organized around the applicable Brand → Build → Launch → Scale stages of The Unified System™ (only stages actually performed); implementation details grounded in files, screenshots or client records; mobile and accessibility decisions where relevant; a “Results” section that distinguishes delivered assets from measured business outcomes; source-backed visuals; one contextual service link and a next step. Add client name, deliverables and year to `CreativeWork` only when verified.

1. **Fixoria:** Reconstruct the identity brief and constraints from the presentation. Explain the geometric mark, color/typography choices, logo variants, print applications and handoff. Ask whether nine gallery panels and PDF may be republished. Do not infer app development from UI icon mockups. Service link: `/services/branding`.
2. **Happy Knot:** Verify the store's previous platform and UBE's exact responsibility. Describe collection structure, custom-order path, product templates, shipping/help content and mobile checkout entry. Check any Shopify, schema and social claims against project files. Service link: `/services/shopify-development`; optionally AI SEO only if documented.
3. **Everhome:** Verify the real client/project and approved assets. Explain the real estate audience, mark construction, color/typography rules and agent/print applications. Distinguish designed app UI assets from a built app. Service link: `/services/branding`.
4. **Eau'dacity:** Verify client spelling, packaging files, production status and storefront scope. Explain bottle/label choices, typography, packaging variants and digital application. Avoid “high-converting” without conversion data. Service link: `/services/branding`.
5. **Botāne:** Verify formulation and environmental claims with the client. Explain botanical motif, palette, typography, die-lines and retail/social applications actually delivered. Avoid treating sustainable material specifications as proof of manufactured packaging. Service link: `/services/branding`.
6. **Bugle Chaser:** Verify the live storefront and supplier/fulfillment records. Explain audience, apparel artwork, catalog taxonomy, variant workflow, mobile merchandising and the actual ad assets. Do not claim ad performance from creatives. Service link: `/services/shopify-development`; link to branding if that scope is confirmed.

## Client evidence requested before any rewrite

- Signed-off scope, deliverable list, dates and platform for each project; permission to identify the client and use each visual.
- Approved before/after assets and a clear account of who implemented each store, integration or marketing activity.
- If numerical results are desired: dated analytics exports with metric definitions, baseline and comparison periods, attribution caveats and publication permission. No numerical outcome should be drafted without these.
- Testimonial text and written permission, if any. Otherwise omit testimonials.
- Confirmation or correction of unsupported/currently unproven claims, including “100%” deliverable badges, “high-converting,” “100% plant-based,” sustainability, custom checkout, Etsy dependency, fulfillment automation, and paid ad work.

## Acceptance gate

Owner reviews this table and the evidence requests before any rewrite PR. UBE-134, UBE-135 and UBE-136 remain pending. Schema already exists, so UBE-135 is an **enrichment/verification** task rather than an add-from-scratch task. UBE-137 Lighthouse QA and UBE-139 post-deploy checks apply after approved rewrites deploy. No case-study metrics are invented in this report.
