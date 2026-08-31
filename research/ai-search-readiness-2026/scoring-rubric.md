# UBE AI Search Readiness Study 2026: Revised Scoring Rubric (V2.0)

**Document Version**: 2.0 (Post-Pilot Rebalanced Weightings)  
**Total Evaluation Score**: 100 Points (45 Core Criteria across 5 Categories)

---

## CATEGORY 1: TECHNICAL SEARCH READINESS (20 POINTS MAX)
*10 Criteria — 2.0 Points Each*

1. **HTTPS Enforcement & SSL**: 2.0 pts (PASS: auto 301/308 redirect; PARTIAL: HTTP 200 without redirect; FAIL: broken SSL).
2. **HTTP 200 Homepage Response**: 2.0 pts (PASS: direct 200 OK; PARTIAL: 3+ redirect chain; FAIL: 4xx/5xx error).
3. **Accessible robots.txt**: 2.0 pts (PASS: 200 OK valid syntax; PARTIAL: syntax minor warnings; FAIL: 404/500 or blocked).
4. **Accessible XML Sitemap**: 2.0 pts (PASS: valid /sitemap.xml or referenced in robots.txt; PARTIAL: sitemap with dead links; FAIL: 404/missing).
5. **Valid Self-Referencing Canonical Tag**: 2.0 pts (PASS: absolute URL matching protocol/domain; PARTIAL: relative canonical; FAIL: missing or 404).
6. **Search Engine Indexability**: 2.0 pts (PASS: index, follow or default; FAIL: homepage noindex).
7. **Mobile-Responsive Viewport Meta Tag**: 2.0 pts (PASS: width=device-width present; PARTIAL: user-scalable=no; FAIL: missing).
8. **Crawlable Primary Navigation**: 2.0 pts (PASS: native HTML <a> tags; PARTIAL: JS onClick fallback; FAIL: JS-only links).
9. **Core Content Rendered in Initial HTML**: 2.0 pts (PASS: H1 and text in server HTML; PARTIAL: partial text; FAIL: blank CSR HTML).
10. **Absence of Production Errors & Soft 404s**: 2.0 pts (PASS: clean display; FAIL: stack traces, DB errors, soft 404s).

---

## CATEGORY 2: AI DISCOVERY ACCESSIBILITY (10 POINTS MAX)
*5 Criteria — 2.0 Points Each*

1. **OAI-SearchBot Accessibility**: 2.0 pts (PASS: allowed via explicit or wildcard rule; FAIL: explicit block). Record mechanism: EXPLICIT_ALLOW, WILDCARD_ALLOW, DEFAULT_ALLOWED, EXPLICIT_BLOCK.
2. **PerplexityBot Accessibility**: 2.0 pts (PASS: allowed via explicit or wildcard rule; FAIL: explicit block). Record mechanism.
3. **Googlebot & Google-Extended Accessibility**: 2.0 pts (PASS: allowed; PARTIAL: Googlebot allowed but Google-Extended blocked; FAIL: Googlebot blocked).
4. **Bingbot Accessibility**: 2.0 pts (PASS: allowed; FAIL: Bingbot blocked).
5. **WAF / CDN Crawler Accessibility**: 2.0 pts (PASS: 200 OK without CAPTCHA wall for bot User-Agents; FAIL: immediate 403/429/Turnstile block).

---

## CATEGORY 3: ENTITY & E-E-A-T (20 POINTS MAX)
*10 Criteria — 2.0 Points Each*

1. **Organization / LocalBusiness JSON-LD Schema**: 2.0 pts (PASS: valid schema on root domain; PARTIAL: schema missing key fields; FAIL: missing/invalid).
2. **Consistent Brand & Entity Name**: 2.0 pts (PASS: identical brand name across site & metadata; FAIL: conflicting names).
3. **Dedicated About Page**: 2.0 pts (PASS: navigable About page; PARTIAL: 1-sentence intro; FAIL: missing).
4. **Clear Contact Information**: 2.0 pts (PASS: phone/email/address visible; PARTIAL: contact form only; FAIL: missing).
5. **Real Leadership / Team Identification**: 2.0 pts (PASS: named leadership/team bios; PARTIAL: single founder name; FAIL: anonymous).
6. **Real Author Attribution on Editorial Content**: 2.0 pts (PASS: named human authors with bios on blog/insights; PARTIAL: Admin; FAIL: no bylines). *Applied ONLY to editorial/insight articles; commercial service/homepages are exempt.*
7. **Official Social & Profile Links**: 2.0 pts (PASS: links to active brand social profiles; PARTIAL: generic platform homepages; FAIL: missing).
8. **Clear Core Offering Messaging**: 2.0 pts (PASS: explicit service/product positioning; FAIL: ambiguous buzzwords).
9. **Verifiable Customer Reviews & Testimonials**: 2.0 pts (PASS: real client reviews with full names/companies or third-party links; FAIL: zero or fake reviews).
10. **Complete Policy & Trust Pages**: 2.0 pts (PASS: Privacy Policy & Terms visible; FAIL: missing).

---

## CATEGORY 4: AEO / CONTENT RETRIEVABILITY (20 POINTS MAX)
*10 Criteria — 2.0 Points Each*

1. **Single Clear H1 Heading per Page**: 2.0 pts (PASS: single H1; PARTIAL: non-descriptive H1; FAIL: missing or 3+ H1s).
2. **Logical Heading Hierarchy (H2/H3)**: 2.0 pts (PASS: clean nested H1->H2->H3 tree; FAIL: flat text walls).
3. **Direct Self-Contained Answer Passages**: 2.0 pts (PASS: 20-50 word direct answer blocks following subheadings; FAIL: teaser copy). *Evaluates visible text usefulness; JSON-LD schema alone earns zero AEO quality bonus.*
4. **Explicit Definitions for Key Concepts**: 2.0 pts (PASS: clear structural definitions X is Y; FAIL: jargon).
5. **Structured Step-by-Step & Comparison Content**: 2.0 pts (PASS: ordered lists <ol> or comparison tables; FAIL: raw text paragraph).
6. **Visible Informational FAQ Section**: 2.0 pts (PASS: visible Q&A addressing real customer buying questions; FAIL: missing).
7. **Semantic HTML Elements**: 2.0 pts (PASS: <header>, <main>, <article>, <footer> used; FAIL: <div>-only).
8. **Content Depth (>300 words of useful copy)**: 2.0 pts (PASS: >300 words of relevant original copy; FAIL: <100 words).
9. **Contextual Internal Body Linking**: 2.0 pts (PASS: body copy links to related services/policies; FAIL: orphan pages).
10. **Accessible Data Formatting (Tables & Lists)**: 2.0 pts (PASS: HTML <table> with <th>; FAIL: table embedded as image).

---

## CATEGORY 5: GEO / AUTHORITY READINESS (30 POINTS MAX)
*10 Criteria — 3.0 Points Each*

1. **Real Project / Case Study Evidence**: 3.0 pts (PASS: detailed written case study/project breakdown with results; PARTIAL: logo grid; FAIL: none).
2. **First-Party Proof & Implementation Media**: 3.0 pts (PASS: original screenshots, diagrams, product media owned by business; FAIL: stock photos only).
3. **Original Evidence / Proprietary Assets / Tools**: 3.0 pts (PASS: original research, proprietary tools, calculators, or documented frameworks; FAIL: generic rewritten copy). *Accepts project docs, original product specs, or proprietary tools appropriate to business model.*
4. **Verified Expert Commentary & Bylines**: 3.0 pts (PASS: commentary explicitly attributed to named internal/external experts; FAIL: AI filler).
5. **Credible Third-Party Press / Editorial Mentions**: 3.0 pts (PASS: verifiable media features, trade articles, or partner badges; FAIL: none).
6. **Verified Third-Party Platform Profiles**: 3.0 pts (PASS: active business profiles on Google Business, Trustpilot, BBB, Clutch, or G2; FAIL: none).
7. **Professional / Industry Association Presence**: 3.0 pts (PASS: verified membership in regional chambers of commerce or industry associations; FAIL: none).
8. **Verified Partner / Vendor References**: 3.0 pts (PASS: official vendor, client, or supplier references; FAIL: none).
9. **Uniform External Brand Entity Corroboration**: 3.0 pts (PASS: consistent Name, Address, Phone, and entity details across web index; FAIL: conflicting entity profiles).
10. **Empirical Evidence Supporting Claims**: 3.0 pts (PASS: quantitative or service claims supported by visible evidence/methodology notes; FAIL: empty superlatives).
