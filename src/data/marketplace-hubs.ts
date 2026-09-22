export type MarketplaceHub = {
  slug: "tiktok-shop" | "shopify" | "amazon" | "walmart-marketplace" | "ebay";
  platform: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  promise: string;
  pricing: { label: string; detail: string; href: string };
  deliverables: { title: string; body: string }[];
  process: { title: string; body: string }[];
  operations: { title: string; paragraphs: string[]; bullets?: string[] }[];
  fit: { right: string[]; notRight: string[] };
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string; description: string }[];
};

const sharedRelated = [
  { label: "eCommerce growth services", href: "/services/ecommerce", description: "Store strategy, merchandising, integrations, and launch support." },
  { label: "Store management plans", href: "/ecommerce-store-management-packages", description: "Ongoing catalog, promotion, and operational support from $249/month." },
  { label: "AI SEO methodology", href: "/ai-seo", description: "Technical, entity, content, and authority work for conventional and AI-assisted search." },
];

export const MARKETPLACE_HUBS: Record<MarketplaceHub["slug"], MarketplaceHub> = {
  "tiktok-shop": {
    slug: "tiktok-shop",
    platform: "TikTok Shop",
    eyebrow: "SOCIAL COMMERCE SYSTEM",
    title: "TikTok Shop Agency: Setup, Management & Ads for US DTC Brands",
    description: "UBE is a TikTok Shop agency that sets up, manages, and scales TikTok Shops for US DTC brands. Catalog sync, Creator Affiliate recruitment, Shop Ads, and 360° commerce. Packages from $299/mo.",
    summary: "TikTok Shop combines content discovery, creator recommendations, product pages, checkout, fulfillment signals, and paid distribution inside one channel. UBE connects those moving parts into an operating system that a brand can actually maintain. We configure the commercial foundation, organize the catalog, define the creator and advertising workflow, and document what must happen after launch.",
    promise: "The goal is not to chase a viral moment. It is to build a controlled social-commerce channel with clean product data, clear responsibilities, measurable actions, and a path from discovery to fulfilled order.",
    pricing: { label: "Plans from $299/month", detail: "Management scope depends on catalog size, creator outreach volume, content production, advertising activity, and the condition of the existing store. TikTok platform costs, creator commissions, samples, shipping, and media spend are separate.", href: "/tiktok-marketing-packages" },
    deliverables: [
      { title: "Seller Center setup", body: "Account and shop configuration, business-information review, shipping settings, return settings, tax inputs, user roles, and a launch checklist. Approval remains subject to TikTok eligibility and policy review." },
      { title: "Catalog and storefront", body: "Product-title cleanup, category mapping, images, attributes, variants, inventory behavior, collections, and storefront organization designed to reduce preventable listing errors." },
      { title: "Shopify catalog connection", body: "When Shopify is the source of truth, we map the catalog connection, confirm product and inventory behavior, and document how changes should flow between systems." },
      { title: "Creator Affiliate workflow", body: "A practical system for offer selection, commission planning, creator qualification, outreach, sample decisions, briefing, content permissions, and follow-up." },
      { title: "Shop Ads and measurement", body: "Campaign readiness, product selection, creative inputs, event checks, reporting structure, and coordination between organic creator content, Spark Ads, and commerce-focused advertising." },
    ],
    process: [
      { title: "Readiness audit", body: "We inspect eligibility, product restrictions, margins, fulfillment capacity, existing content, Shopify data, and measurement before recommending a launch scope." },
      { title: "Seller Center and catalog", body: "We configure the operating settings and prepare listings so product data, stock, shipping, returns, and customer expectations agree." },
      { title: "Creator operating model", body: "We define which products to seed, how creators are evaluated, what they receive, and how approved content can support paid distribution." },
      { title: "Launch and ads", body: "We stage the storefront, validate checkout entry points, coordinate content, and launch advertising only when the offer and tracking are ready." },
      { title: "Weekly optimization", body: "We review listing health, content output, creator activity, conversion signals, refunds, fulfillment feedback, and paid performance without treating a single metric as the full story." },
    ],
    operations: [
      { title: "TikTok Shop and Shopify serve different jobs", paragraphs: ["Shopify is normally the owned storefront and operational source of truth. TikTok Shop is a discovery and transaction channel inside TikTok. A brand can use either one independently, but the strongest operating model usually defines which system owns product data, inventory, promotions, customer support, and reporting.", "We document that ownership before connecting systems. This prevents a common problem: a product is edited in two places, inventory drifts, a promotion is active on one channel but not another, and the customer sees inconsistent information."], bullets: ["Use Shopify for the primary branded storefront and broader customer journey.", "Use TikTok Shop for native discovery, creator-led commerce, and in-platform checkout.", "Keep one documented source of truth for product and inventory changes."] },
      { title: "Creators are a channel, not a guarantee", paragraphs: ["Creator Affiliate programs can expand content volume and product discovery, but sending samples does not guarantee published content, sales, or positive coverage. The commercial work is in selecting a promotable offer, setting viable commissions, qualifying creators, creating useful briefs, and following up consistently.", "UBE can organize and manage that workflow. Product-market fit, pricing, creator interest, content quality, inventory, customer service, competition, and platform decisions still affect the outcome."], bullets: ["Define sample and commission rules before outreach.", "Track acceptance, publishing, usage rights, and attributed orders separately.", "Do not scale paid distribution until the creative and offer show usable signals."] },
      { title: "Compliance and fulfillment shape growth", paragraphs: ["TikTok Shop is not only a marketing surface. Listing accuracy, restricted-product rules, cancellation rates, shipping performance, returns, customer messages, and policy compliance can affect shop health. A content calendar cannot compensate for weak fulfillment.", "Our scope separates what UBE controls from what the merchant must own. We can configure workflows, improve listings, coordinate content, and report on channel activity. The merchant remains responsible for lawful products, accurate claims, inventory, product quality, shipping, refunds, and required business documentation."] },
    ],
    fit: { right: ["US DTC brands with a clear offer and reliable fulfillment", "Shopify merchants adding a native social-commerce channel", "Teams prepared to supply products, approvals, and customer-service capacity", "Brands willing to test creators and creative without demanding guaranteed sales"], notRight: ["Restricted or unverified products", "Businesses without inventory or fulfillment ownership", "Offers whose margins cannot support fees, commissions, samples, or returns", "Anyone expecting the agency to guarantee virality or revenue"] },
    faqs: [
      { question: "What does a TikTok Shop agency do?", answer: "A TikTok Shop agency can coordinate Seller Center setup, catalog organization, Shopify sync, Creator Affiliate workflows, Shop Ads, content operations, reporting, and ongoing listing health. The exact scope should match the merchant’s catalog, fulfillment, content capacity, and advertising plan." },
      { question: "How long does it take to launch a TikTok Shop?", answer: "A straightforward setup can move quickly after eligibility, documents, product data, shipping rules, and inventory are ready. Approval reviews, restricted categories, large catalogs, integration problems, or missing assets can extend the timeline." },
      { question: "Do I need a Shopify store to run a TikTok Shop?", answer: "No. TikTok Shop can operate without Shopify. Shopify is useful when it is the brand’s primary storefront or product source, but the connection should be configured with clear ownership for listings, inventory, orders, and promotions." },
      { question: "How much does TikTok Shop management cost?", answer: "UBE plans start at $299 per month. Final scope depends on catalog size, creator outreach, content production, advertising activity, reporting, and operational support. Platform fees, commissions, samples, shipping, and ad spend are separate." },
      { question: "What are TikTok Shop Creator Affiliates?", answer: "Creator Affiliates are creators who can promote eligible shop products and earn commission on attributed sales. Merchants set offers and commission terms; creators decide what they want to feature." },
      { question: "What’s the difference between TikTok Shop Ads and regular TikTok Ads?", answer: "TikTok Shop Ads are designed around commerce objects such as products and shop activity. Regular TikTok campaigns can support broader traffic, lead, awareness, or conversion goals. The right structure depends on the destination, data, and campaign objective." },
      { question: "How do you measure TikTok Shop success?", answer: "We separate storefront health, listing quality, creator activity, content output, attributed orders, conversion, refunds, fulfillment signals, and advertising efficiency. Revenue alone can hide margin, return, or operational problems." },
      { question: "Can you run TikTok Shop without using creators?", answer: "Yes, but creators are a major discovery mechanism on TikTok. A merchant can use owned content and advertising, while a creator program can add additional voices and distribution when the offer and economics support it." },
    ],
    related: [{ label: "TikTok marketing service", href: "/services/tiktok-marketing", description: "Organic content, Spark Ads, paid media, and channel strategy." }, { label: "Connect Shopify and TikTok", href: "/insights/how-to-connect-shopify-to-tiktok-shop", description: "A practical guide to catalog and channel coordination." }, ...sharedRelated],
  },
  shopify: {
    slug: "shopify", platform: "Shopify", eyebrow: "OWNED COMMERCE SYSTEM",
    title: "Shopify Agency: Custom Stores, Performance & AI SEO for US DTC",
    description: "UBE is a Shopify agency building custom Shopify stores engineered for performance, conversion, and AI search visibility. Packages from $399.",
    summary: "A Shopify store should operate as a commercial system, not a decorated template. UBE plans the catalog, customer journey, theme structure, integrations, measurement, search foundations, and post-launch ownership together. That gives a founder one documented build instead of separate design, development, analytics, and SEO decisions that conflict later.",
    promise: "We build around the real catalog, offer, operations, and growth plan. The output is a maintainable storefront with clear merchandising, reliable mobile behavior, traceable conversion paths, and structured information for search engines and AI-assisted discovery.",
    pricing: { label: "Build packages from $399", detail: "The verified Shopify ladder starts at $399. Final scope changes with catalog size, custom design, migrations, copy, integrations, subscriptions, international requirements, and custom engineering. Shopify subscription, paid apps, themes, and third-party fees are separate.", href: "/ecommerce-growth-packages" },
    deliverables: [
      { title: "Catalog and information architecture", body: "Collections, menus, filters, product templates, attributes, variants, policies, and internal links mapped around how buyers compare and decide." },
      { title: "Responsive storefront", body: "A mobile-first Shopify 2.0 implementation using maintainable sections and templates, consistent brand components, and clear conversion paths." },
      { title: "Commerce configuration", body: "Payments, shipping logic, taxes, notifications, markets, domains, policies, checkout settings, and launch dependencies configured within the approved scope." },
      { title: "Apps and integrations", body: "Evaluation and configuration for required tools such as reviews, subscriptions, email, suppliers, analytics, feeds, fulfillment, or marketplace connections. Paid tools remain client expenses." },
      { title: "Search and measurement foundation", body: "Metadata, structured product information, crawlable navigation, redirects, sitemap checks, analytics events, and AI-search-ready entity consistency built into launch QA." },
    ],
    process: [
      { title: "Discovery and catalog mapping", body: "We document the products, variants, collections, markets, fulfillment, customer questions, current data, and ownership decisions before choosing the build path." },
      { title: "UX and theme architecture", body: "We map the core page templates, merchandising hierarchy, responsive behavior, reusable sections, and content requirements." },
      { title: "Configuration and integration", body: "We implement the approved theme, catalog, commerce settings, apps, feeds, logistics, and measurement without adding unnecessary dependencies." },
      { title: "Performance and QA", body: "We test navigation, product selection, cart entry, forms, responsive layouts, metadata, schema, redirects, analytics, and common failure states." },
      { title: "Launch and ownership", body: "We deploy through a controlled checklist, monitor the live storefront, resolve launch regressions, and document what the merchant manages next." },
    ],
    operations: [
      { title: "Custom does not mean complicated", paragraphs: ["A custom Shopify build should make the buyer’s path clearer and the merchant’s work easier. It does not require replacing every native Shopify pattern with custom code. We use native capabilities where they fit, extend them when the commercial requirement is real, and avoid apps that duplicate existing functionality.", "This reduces theme fragility, recurring app costs, and future handoff problems. It also makes performance work more practical because the store is not carrying scripts and widgets without a defined purpose."], bullets: ["Design reusable sections instead of one-off page art.", "Choose apps by operational requirement, not app-store popularity.", "Document which system owns products, inventory, customer data, and reporting."] },
      { title: "Performance is a budget of tradeoffs", paragraphs: ["Fast Shopify storefronts start with restrained theme architecture, correctly sized media, controlled scripts, and deliberate app decisions. No responsible agency should promise a universal Lighthouse score or load time before seeing the actual theme, apps, tracking, media, location, and network conditions.", "UBE measures the affected templates, prioritizes the largest user-facing constraints, and protects required analytics while reducing avoidable work. A store can be visually rich and still disciplined, but every carousel, video, font, personalization tool, and tracking tag has a cost."], bullets: ["Prioritize the real landing, collection, product, cart, and checkout-entry templates.", "Load below-fold media responsibly and size images for their rendered use.", "Treat third-party scripts as business decisions with measurable value."] },
      { title: "AI search readiness begins with product facts", paragraphs: ["AI-assisted discovery does not replace conventional SEO. Shopify stores still need crawlable pages, descriptive product information, coherent collections, canonical control, structured data, merchant consistency, and useful editorial support.", "We build those foundations into the store and connect them to the broader AI SEO framework. No schema block can guarantee a citation in ChatGPT or an AI Overview. Eligibility and clarity can be improved; placement remains controlled by each platform’s systems."] },
    ],
    fit: { right: ["US DTC founders launching or restructuring a focused catalog", "Merchants migrating from WooCommerce, Magento, BigCommerce, or another Shopify theme", "Brands that need design, development, search, and measurement decisions coordinated", "Operators prepared to provide product facts, policies, approvals, and platform access"], notRight: ["Businesses requesting guaranteed sales or rankings", "Projects without product, price, fulfillment, or policy decisions", "Teams that want every paid app installed without operational review", "Merchants who cannot own ongoing inventory, customer service, and compliance"] },
    faqs: [
      { question: "What does a senior Shopify agency do differently?", answer: "A senior Shopify agency connects catalog structure, customer experience, theme architecture, integrations, analytics, search, QA, and post-launch ownership. The build is evaluated as an operating system rather than a collection of visual pages." },
      { question: "How much does a custom Shopify build cost?", answer: "UBE’s verified Shopify packages start at $399. Custom design, migrations, larger catalogs, copy, subscriptions, international markets, ERP or 3PL connections, and custom engineering increase scope. Shopify and third-party fees are separate." },
      { question: "How long does a Shopify build take?", answer: "Timing depends on catalog readiness, design depth, content, integrations, feedback, and migration complexity. A focused setup can move faster than a custom migration. We define the timeline after discovery instead of promising one duration for every store." },
      { question: "Shopify vs Shopify Plus — when do I need Plus?", answer: "Most growing brands do not need Plus at launch. Plus becomes relevant when specific checkout extensibility, B2B, organization, automation, support, or scale requirements justify the platform cost. We recommend it only when the requirement is concrete." },
      { question: "Can you migrate my store from WooCommerce, Magento, or BigCommerce to Shopify?", answer: "Yes, after assessing products, variants, customers, orders, URLs, redirects, content, subscriptions, integrations, and data quality. Not every historical object maps perfectly, so the migration plan identifies limitations before work begins." },
      { question: "Do you build for dropshipping?", answer: "Yes. We can configure supplier and fulfillment workflows where appropriate, but supplier performance, product quality, shipping promises, refunds, and customer support remain material merchant responsibilities." },
      { question: "Will my Shopify store be optimized for ChatGPT and Google AI Overviews?", answer: "We can improve technical crawlability, structured information, entity consistency, product content, internal linking, and answer-ready resources. No agency can guarantee that an AI system will cite a specific site." },
      { question: "Do you handle apps and integrations?", answer: "Yes, within the approved scope. We evaluate the operational need, compatibility, performance cost, data ownership, recurring price, and handoff requirements before configuring an app or custom connection." },
    ],
    related: [{ label: "Shopify development service", href: "/services/shopify-development", description: "Detailed build capabilities, deliverables, and commercial scope." }, { label: "Shopify setup cost guide", href: "/insights/shopify-store-setup-cost-2026", description: "Understand the factors that change setup cost." }, ...sharedRelated],
  },
  amazon: {
    slug: "amazon", platform: "Amazon", eyebrow: "MARKETPLACE OPERATIONS",
    title: "Amazon Store Management Agency for US Sellers",
    description: "Amazon store setup and management for US sellers: catalog organization, listing operations, storefront content, advertising coordination, and reporting.",
    summary: "Amazon operations require accurate product data, disciplined account ownership, inventory awareness, compliant content, and a repeatable process for listings, promotions, advertising, and customer issues. UBE helps sellers organize that work without presenting marketplace access or sales as guaranteed.",
    promise: "We connect marketplace execution to the brand’s owned storefront, catalog, creative system, and reporting so Amazon does not become an isolated account with conflicting product information.",
    pricing: { label: "Management plans from $249/month", detail: "Scope depends on catalog size, variation complexity, content readiness, storefront work, advertising coordination, and account condition. Amazon fees, inventory, fulfillment, creative production, and media spend are separate.", href: "/ecommerce-store-management-packages" },
    deliverables: [
      { title: "Account and catalog assessment", body: "Review of access, roles, account health surfaces, category requirements, existing listings, variation structure, identifiers, assets, and operational dependencies." },
      { title: "Listing operations", body: "Titles, bullets, descriptions, attributes, backend search terms where available, images, variations, and category mapping prepared from verified product facts." },
      { title: "Brand storefront coordination", body: "Storefront hierarchy, collection logic, creative requirements, and consistency with the owned website when the seller has the required Amazon brand capabilities." },
      { title: "Promotion and advertising support", body: "Offer selection, campaign inputs, landing-product readiness, budget coordination, and reporting. Advertising management is scoped separately when required." },
      { title: "Ongoing management", body: "Catalog updates, merchandising calendar, issue tracking, reporting, and documented owner responsibilities for inventory, fulfillment, compliance, and customer service." },
    ],
    process: [
      { title: "Account review", body: "We confirm access, seller goals, catalog quality, fulfillment model, brand assets, known restrictions, and unresolved account issues." },
      { title: "Catalog plan", body: "We prioritize the listings that matter, define the variation and content structure, and identify missing source information." },
      { title: "Content and storefront", body: "We prepare approved copy and creative requirements, then implement only the modules and features available to the account." },
      { title: "Launch and promotion", body: "We coordinate listing readiness, promotions, and advertising inputs without scaling traffic to incomplete or operationally weak offers." },
      { title: "Management rhythm", body: "We maintain a repeatable queue for content, catalog, inventory dependencies, promotions, advertising observations, and owner decisions." },
    ],
    operations: [
      { title: "Amazon is not an owned storefront", paragraphs: ["Amazon controls the marketplace experience, eligibility, policies, fees, account decisions, and many presentation options. A seller operates inside that system. UBE can improve inputs and management discipline, but cannot guarantee approval, category access, placement, Buy Box eligibility, reviews, or sales.", "The owned website remains important because it carries the fuller brand story, direct customer journey, and broader search footprint. Product facts should be consistent across both without copying every marketplace constraint into the brand site."] },
      { title: "Catalog accuracy comes before advertising", paragraphs: ["Sending paid traffic to incomplete listings can magnify conversion, return, and customer-expectation problems. We review the offer, content, imagery, variation structure, inventory, price, and fulfillment promise before recommending expansion.", "Advertising performance must be read with margin, fees, returns, inventory, and organic marketplace activity. A low advertising cost does not automatically mean the product is profitable."], bullets: ["Use verified product claims and identifiers.", "Keep parent-child variations logical and customer-facing.", "Separate media spend from agency management and marketplace fees."] },
      { title: "Account health requires merchant ownership", paragraphs: ["The merchant remains responsible for lawful products, authentic inventory, supplier documentation, accurate claims, taxes, shipping, refunds, customer communication, and compliance with Amazon policies. UBE can maintain workflows and flag issues, but cannot replace the seller’s legal and operational responsibility."] },
    ],
    fit: { right: ["Brands with verified products and reliable inventory", "Shopify merchants adding Amazon as a controlled marketplace channel", "Sellers who need a documented catalog and management workflow", "Teams able to respond to policy, fulfillment, and customer-service requirements"], notRight: ["Restricted, counterfeit, or unverifiable products", "Sellers seeking guaranteed category approval or sales", "Businesses unable to provide product identifiers or supplier documents", "Accounts expecting an agency to own legal or tax responsibility"] },
    faqs: [
      { question: "What does Amazon store management include?", answer: "It can include account review, listing operations, variation organization, storefront coordination, promotions, advertising inputs, catalog updates, and reporting. Scope varies with account condition and catalog size." },
      { question: "Can UBE create my Amazon seller account?", answer: "We can guide setup and configuration, but the seller must provide accurate business, identity, banking, tax, and product information and complete any required verification directly." },
      { question: "Do you guarantee Amazon approval?", answer: "No. Amazon controls seller verification, categories, products, features, and account decisions. We can improve preparation and respond to documented requirements, but cannot guarantee approval." },
      { question: "Can you write and optimize Amazon listings?", answer: "Yes, using verified product facts, approved claims, relevant attributes, buyer questions, and the modules available to the account. We do not invent certifications, results, or product capabilities." },
      { question: "Do you manage Amazon advertising?", answer: "Advertising can be included or scoped separately. The account needs suitable listings, inventory, measurement, budget, and commercial economics before campaigns are expanded." },
      { question: "Can Amazon connect with Shopify?", answer: "Various workflows can coordinate catalog, inventory, and orders. The correct setup depends on the merchant’s systems and apps. We define ownership and test behavior before relying on automation." },
      { question: "How much does Amazon management cost?", answer: "UBE’s general store-management plans start at $249 per month. The final Amazon scope depends on catalog size, variations, content, account condition, storefront work, advertising, and reporting." },
      { question: "Does an Amazon store guarantee sales?", answer: "No. Demand, competition, reviews, offer, price, inventory, fulfillment, content, advertising, and marketplace decisions all affect outcomes." },
    ],
    related: [{ label: "Shopify hub", href: "/shopify", description: "Coordinate Amazon with the owned commerce system." }, { label: "Digital marketing", href: "/services/digital-marketing", description: "Paid acquisition and measurement beyond one marketplace." }, ...sharedRelated],
  },
  "walmart-marketplace": {
    slug: "walmart-marketplace", platform: "Walmart Marketplace", eyebrow: "RETAIL MARKETPLACE OPERATIONS",
    title: "Walmart Marketplace Agency: Setup & Management",
    description: "Walmart Marketplace setup and management for US sellers: catalog preparation, listing operations, storefront coordination, promotions, and reporting.",
    summary: "Walmart Marketplace can add meaningful retail reach for eligible sellers, but it is not a simple copy of an Amazon or Shopify catalog. Product data, identifiers, taxonomy, pricing, inventory, fulfillment, returns, and seller-performance expectations must be prepared for Walmart’s environment.",
    promise: "UBE builds the operating checklist and catalog workflow around verified product information, clear merchant responsibilities, and a controlled relationship with the seller’s owned store.",
    pricing: { label: "Management plans from $249/month", detail: "Final scope depends on seller eligibility, catalog size, item complexity, content readiness, integrations, promotions, and ongoing operational support. Walmart fees, fulfillment, inventory, creative production, and advertising are separate.", href: "/ecommerce-store-management-packages" },
    deliverables: [
      { title: "Marketplace readiness", body: "Business, catalog, fulfillment, return, and operational review before application or implementation. Walmart makes the final eligibility and approval decisions." },
      { title: "Item setup and taxonomy", body: "Product identifiers, categories, attributes, variants, copy, images, and required fields organized from verified source data." },
      { title: "Store and merchandising", body: "Available storefront modules, brand presentation, category organization, promotions, and seasonal merchandising coordinated with the broader commerce plan." },
      { title: "Integration planning", body: "Ownership rules for product data, pricing, inventory, and orders when Shopify, a feed tool, ERP, or fulfillment partner is involved." },
      { title: "Management and reporting", body: "A recurring workflow for listing issues, catalog changes, promotion decisions, performance observations, inventory dependencies, and merchant action items." },
    ],
    process: [
      { title: "Eligibility and operating review", body: "We review the business, products, fulfillment, returns, catalog data, support capacity, and known marketplace requirements." },
      { title: "Catalog normalization", body: "We clean source data and map items into the attributes, categories, variants, and images needed for implementation." },
      { title: "Integration and QA", body: "We configure approved tools, then test representative products, inventory behavior, pricing, and order flow before scaling the catalog." },
      { title: "Merchandising launch", body: "We organize customer-facing collections and promotions only after item quality and operating dependencies are stable." },
      { title: "Ongoing management", body: "We maintain a prioritized work queue while the merchant owns inventory, fulfillment, customer service, compliance, and approval decisions." },
    ],
    operations: [
      { title: "Eligibility comes before implementation", paragraphs: ["Walmart decides which sellers, categories, products, and features are eligible. UBE can help prepare accurate information and a credible operating plan, but cannot guarantee approval or continued marketplace access.", "Before investing in catalog work, the merchant should confirm that its business information, product identifiers, inventory, fulfillment, returns, and customer-service processes can support the channel."] },
      { title: "Product feeds need ownership rules", paragraphs: ["When multiple systems can edit product data, pricing, or inventory, conflicts become likely. We identify the source of truth and document which changes occur in Shopify, Walmart, a feed platform, an ERP, or a fulfillment system.", "Representative-item testing is more reliable than publishing an entire catalog at once. It reveals taxonomy, variation, image, inventory, and order-flow problems before they become a large cleanup project."], bullets: ["Define the source of truth for each critical field.", "Test representative simple and variant products.", "Keep promotion and price responsibilities explicit."] },
      { title: "Seller performance is operational", paragraphs: ["Accurate inventory, shipping, cancellations, returns, product quality, and customer support affect the marketplace relationship. UBE can manage content and workflow, but the merchant must control the physical and legal parts of commerce."] },
    ],
    fit: { right: ["Eligible US sellers with established products and fulfillment", "Brands adding Walmart to an existing Shopify or multichannel operation", "Catalogs with reliable identifiers, attributes, imagery, and inventory", "Teams prepared to own service, returns, compliance, and account decisions"], notRight: ["Businesses expecting guaranteed approval", "Unverified or restricted products", "Catalogs without reliable product or inventory data", "Merchants without fulfillment and customer-service capacity"] },
    faqs: [
      { question: "What does a Walmart Marketplace agency do?", answer: "An agency can support readiness, catalog preparation, item setup, taxonomy, storefront organization, integrations, promotions, advertising coordination, management, and reporting." },
      { question: "Can UBE guarantee Walmart Marketplace approval?", answer: "No. Walmart controls seller, category, product, and feature eligibility. We can improve preparation and implementation after access is available." },
      { question: "Can I connect Walmart Marketplace to Shopify?", answer: "Yes, through supported tools and workflows. The correct connection depends on catalog, inventory, orders, fulfillment, and the systems that should own each field." },
      { question: "What product information is needed?", answer: "Typically the merchant needs reliable identifiers, categories, attributes, variants, titles, descriptions, images, price, inventory, shipping, and compliance information. Requirements vary by product." },
      { question: "Do you manage Walmart listings after launch?", answer: "Yes. Ongoing scope can include catalog changes, content improvements, issue tracking, promotions, and reporting, while the seller owns inventory, fulfillment, policies, and customer service." },
      { question: "How much does Walmart Marketplace management cost?", answer: "UBE’s general store-management plans start at $249 per month. Final scope depends on eligibility, catalog size, variants, content, integrations, promotion activity, and support needs." },
      { question: "Do you manage Walmart advertising?", answer: "Advertising can be evaluated and scoped when the account, catalog, offer, inventory, budget, and tracking are ready. Media spend is separate." },
      { question: "Does selling on Walmart guarantee revenue?", answer: "No. Eligibility, offer, price, competition, content, inventory, fulfillment, customer experience, advertising, and marketplace decisions all affect performance." },
    ],
    related: [{ label: "Amazon marketplace hub", href: "/amazon", description: "Compare the operational requirements of another major marketplace." }, { label: "Shopify hub", href: "/shopify", description: "Build the owned storefront and catalog source of truth." }, ...sharedRelated],
  },
  ebay: {
    slug: "ebay", platform: "eBay", eyebrow: "MARKETPLACE STORE OPERATIONS",
    title: "eBay Store Management Agency: Setup & Growth",
    description: "eBay store setup and management for US sellers: listing organization, item specifics, storefront merchandising, promotions, operations, and reporting.",
    summary: "eBay can support focused brands, broad catalogs, collectibles, parts, refurbished products, and other inventory models, but success depends on more than publishing titles. Item specifics, condition accuracy, images, pricing, shipping, returns, seller standards, and catalog discipline all shape the buyer experience.",
    promise: "UBE organizes the storefront and management workflow around accurate listings, practical merchandising, clear merchant responsibilities, and coordination with Shopify or other inventory systems where appropriate.",
    pricing: { label: "Management plans from $249/month", detail: "Final scope depends on catalog size, listing condition, variation and item-specific complexity, storefront work, promotions, integration needs, and ongoing updates. eBay fees, inventory, shipping, creative production, and advertising are separate.", href: "/ecommerce-store-management-packages" },
    deliverables: [
      { title: "Store and account review", body: "Access, seller settings, policies, categories, current listings, item conditions, shipping, returns, images, and operational dependencies assessed before changes." },
      { title: "Listing architecture", body: "Titles, categories, item specifics, conditions, variants, descriptions, images, price, quantity, shipping, and return information organized from verified product facts." },
      { title: "Storefront merchandising", body: "Store categories, navigation, featured inventory, promotional groupings, and brand presentation aligned to how buyers browse the catalog." },
      { title: "Promotion workflow", body: "Campaign and markdown inputs, eligible inventory, offer timing, and reporting coordinated without presenting discounts or paid visibility as guaranteed growth." },
      { title: "Ongoing operations", body: "A repeatable queue for new listings, revisions, ended items, catalog cleanup, promotion decisions, issue tracking, and seller action items." },
    ],
    process: [
      { title: "Audit the account and inventory", body: "We inspect the seller setup, catalog types, listing quality, policies, fulfillment, returns, and operational capacity." },
      { title: "Prioritize and normalize", body: "We group inventory by listing pattern, define templates and required fields, and prioritize the items with the clearest commercial case." },
      { title: "Build and test listings", body: "Representative listings are prepared and checked for category, specifics, conditions, images, variants, price, shipping, and customer clarity." },
      { title: "Organize the storefront", body: "We improve store categories and merchandising after the underlying listing data is stable." },
      { title: "Maintain the channel", body: "Ongoing work follows a documented cadence for catalog changes, promotions, reporting, and merchant dependencies." },
    ],
    operations: [
      { title: "Item specifics are part of discovery", paragraphs: ["eBay buyers often search and filter by details such as brand, model, size, compatibility, material, condition, and other category-specific attributes. Missing or inaccurate specifics can reduce clarity and create avoidable returns.", "We build listing templates around verified source information and category requirements. UBE does not invent compatibility, condition, authenticity, certifications, or product capabilities."] },
      { title: "Condition and fulfillment must match the listing", paragraphs: ["For new, used, refurbished, collectible, or open-box products, condition language and photography need to represent the actual item. Shipping handling, carrier promises, packaging, and returns should match the seller’s real operation.", "The seller remains responsible for inventory accuracy, lawful products, authenticity, product condition, shipping, returns, customer service, taxes, and compliance. An agency can organize the system but cannot assume those obligations."], bullets: ["Use condition-specific images and language where required.", "Document handling and return rules before publishing at scale.", "Keep quantity and inventory ownership clear across channels."] },
      { title: "Shopify and eBay need a source of truth", paragraphs: ["When inventory also appears on Shopify or another marketplace, the merchant needs a defined source for stock, product changes, orders, and price. We evaluate the available integration path, test representative items, and document what remains manual."] },
    ],
    fit: { right: ["Sellers with reliable product and condition data", "Brands or inventory businesses that benefit from eBay buyer demand", "Multichannel merchants needing catalog and operational discipline", "Teams prepared to own fulfillment, authenticity, service, and returns"], notRight: ["Counterfeit, restricted, or unverifiable inventory", "Sellers requesting guaranteed ranking or sales", "Catalogs without condition, images, specifics, or inventory ownership", "Businesses unable to support shipping and customer-service standards"] },
    faqs: [
      { question: "What does eBay store management include?", answer: "It can include account review, listing creation and revision, item specifics, store categories, merchandising, promotions, issue tracking, and reporting. Scope depends on the catalog and account." },
      { question: "Can UBE create an eBay store for me?", answer: "We can support setup and configuration, while the seller provides and verifies identity, business, banking, tax, inventory, product, condition, and policy information." },
      { question: "Can you optimize existing eBay listings?", answer: "Yes. We can improve titles, specifics, categories, descriptions, images, variants, shipping clarity, and storefront organization using verified product information." },
      { question: "Can eBay inventory connect with Shopify?", answer: "It can through supported tools and workflows. We first define which system owns products, inventory, pricing, and orders, then test representative items before scaling." },
      { question: "Do you manage eBay promotions?", answer: "Promotion support can be included when eligible inventory, pricing, margins, timing, and reporting responsibilities are defined. Discounts and paid visibility do not guarantee sales." },
      { question: "How much does eBay store management cost?", answer: "UBE’s general store-management plans start at $249 per month. Final scope depends on listing volume, condition complexity, variations, integrations, promotions, and recurring updates." },
      { question: "Who handles shipping and returns?", answer: "The seller owns inventory, packaging, shipping, returns, refunds, and customer service unless a separate fulfillment provider is contracted. UBE can configure and document the marketplace settings." },
      { question: "Does an optimized eBay store guarantee sales?", answer: "No. Demand, competition, seller history, price, condition, content, inventory, shipping, returns, promotion, and marketplace systems all affect outcomes." },
    ],
    related: [{ label: "Shopify hub", href: "/shopify", description: "Coordinate eBay with an owned commerce storefront." }, { label: "Walmart Marketplace hub", href: "/walmart-marketplace", description: "Review another retail marketplace operating model." }, ...sharedRelated],
  },
};

