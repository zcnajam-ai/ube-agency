import type { InsightArticle, ArticleSection, ArticleFAQ } from "./insights";

type GuideInput = {
  slug: string;
  title: string;
  category: string;
  kicker: string;
  summary: string;
  image: string;
  imageAlt: string;
  intent: string;
  answer: string;
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
  related: string[];
  service: InsightArticle["serviceCta"];
  package: NonNullable<InsightArticle["packageCta"]>;
};

const link = (href: string, label: string) => `<a href="${href}"><strong>${label}</strong></a>`;
const source = (href: string, label: string) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

function guide(input: GuideInput): InsightArticle {
  return {
    id: `insight-${input.slug}`,
    slug: input.slug,
    title: input.title,
    kicker: input.kicker,
    category: input.category,
    readTime: `${Math.max(4, Math.ceil((input.sections.flatMap((s) => s.body).join(" ") + " " + input.faqs.map((f) => f.a).join(" ")).replace(/<[^>]+>/g, " ").split(/\s+/).length / 180))} min read`,
    publishedAt: "October 3, 2026",
    updatedAt: "October 3, 2026",
    author: { name: "Unified Branding Experts Editorial Team", role: input.category, avatar: "/images/logo/ube-png-black.png" },
    summary: input.summary,
    coverImage: `/images/service-icons/${input.image}.webp`,
    coverAlt: input.imageAlt,
    primaryIntent: input.intent,
    quickAnswer: input.answer,
    tableOfContents: input.sections.map(({ id, h2 }) => ({ id, title: h2 })),
    sections: input.sections,
    faqs: input.faqs,
    relatedSlugs: input.related,
    serviceCta: input.service,
    packageCta: input.package,
  };
}

export const NEW_GROWTH_GUIDES: InsightArticle[] = [
  guide({
    slug: "how-to-get-more-website-and-store-traffic",
    title: "How to Get More Traffic to Your Website or Online Store",
    category: "Traffic and Growth",
    kicker: "AUDIENCE ACQUISITION GUIDE",
    summary: "Build a useful traffic plan for your website or store. Learn which search, content, shopping, email and paid channels fit your customers and how to measure them.",
    image: "analytics",
    imageAlt: "Analytics dashboard icon representing website traffic and acquisition channels",
    intent: "How to bring qualified visitors to a website or online store",
    answer: "Start with the people and questions your business can actually serve. Fix crawlable product or service pages, publish answers to specific buyer questions, distribute them through relevant channels, and measure qualified visits and leads rather than sessions alone. Paid traffic can test an offer quickly, but it cannot repair a weak landing page.",
    sections: [
      { id: "define-qualified-traffic", h2: "Start with qualified traffic rather than a visitor target", body: [
        "More visitors are useful only when they can become customers. A local service firm needs visitors in its service area who have the right problem. A store needs people who can receive the product, accept its price and understand its use. Ten relevant visits can be more useful than a thousand curiosity clicks.",
        "Write down the customer, their immediate problem, the language they use, the destination page and the action they should take. Separate people learning a topic from people comparing vendors and those ready to buy. Give each intent an appropriate page. The homepage should introduce the business; a product, service or comparison page should answer the specific decision.",
        "A useful first check is to compare traffic by landing page and channel against inquiries or purchases, then inspect whether the landing page matches the promise of the query or ad. Our guide to ${link("/insights/why-visitors-leave-without-buying-or-contacting", "why visitors leave without buying or contacting you")} helps diagnose the next part of that journey."
      ] },
      { id: "search-foundation", h2: "Build pages people can discover in search", body: [
        "Make the main offer visible in ordinary HTML with a descriptive title, one clear page heading, useful copy, internal links and a crawlable canonical URL. A page hidden behind a form or rendered only after a fragile script may be difficult to discover. Check Search Console for indexing, queries and pages before deciding what to write next.",
        "Look for specific questions your customers ask before buying. A seller of custom crochet gifts could answer size, care, personalization, shipping and lead time questions on product and collection pages. A generic article about gifts may attract a much wider audience but fewer buyers. Answer the question on the page where it belongs before creating another article.",
        "Do not treat a sitemap submission or an indexed URL as proof of traffic. Google says useful, reliable content and sensible site structure matter, and inclusion is not guaranteed. See ${source("https://developers.google.com/search/docs/fundamentals/seo-starter-guide", "Google Search Central's SEO starter guide")} and our ${link("/services/ai-seo-agency", "AI SEO service")} for the technical and content work."
      ] },
      { id: "channel-map", h2: "Choose channels that match how buyers discover you", body: [
        "Search is useful when people already describe a problem or product. Google Shopping can surface eligible products when the feed, merchant policies and landing pages are accurate. TikTok and Instagram can show visual demonstrations to people who were not searching yet. Email brings interested visitors back when they have opted in. Referrals, partnerships and useful mentions can bring trust as well as visits.",
        "Pick one primary channel and one supporting channel for the first test. For a novel physical product, a demonstration and a clear product page may beat a long generic blog series. For a specialized service, a practical comparison page and an identifiable case study may be the stronger combination. ${link("/services/digital-marketing", "Digital marketing services")} can connect paid and organic acquisition to one measurement plan.",
        "A channel is a distribution method, not an audience. List the communities, search phrases, creators, newsletters or sites your customers actually use. Outreach should offer a genuine resource or partnership, not purchased links or copied posts."
      ] },
      { id: "content-cluster", h2: "Create a small content cluster around a real buying decision", body: [
        "Begin with a strong product or service page. Then add a few articles that answer distinct questions before and after purchase. For a Shopify build, a cost guide addresses budget, a launch checklist addresses preparation, and a Shopify versus WooCommerce comparison addresses platform choice. Link each article to the relevant service and package page, and link the service page back to the most useful guide.",
        "A helpful article gives the reader an action they can take. Show a sample budget worksheet, product specification checklist, comparison criteria or a diagnostic sequence. Avoid promising that a target word count, a schema block or repeated keywords will force a ranking. The unusual detail that earns attention is often a real operational constraint: shipping zones, returns, inventory ownership or how a form reaches a human inbox.",
        `For a store launch path, compare our ${link("/services/shopify-development", "Shopify development service")} and ${link("/ecommerce-growth-packages", "eCommerce growth packages")}.`
      ] },
      { id: "paid-tests", h2: "Use small paid tests to learn before scaling", body: [
        "Ads can reveal whether people respond to a product, message or audience. Start with a measurable conversion and a destination that answers the ad's promise. Split the budget into a defined test period rather than judging one day's clicks. Track spend, qualified leads or orders, average order value, gross margin and fulfillment costs before considering more budget.",
        "The overlooked calculation is contribution after product cost, shipping, payment fees, discounts, returns and ad spend. Revenue alone can make a campaign look healthy while the order loses money. For a lead service, review the quality and outcome of the inquiry rather than only its form submission count.",
        `Compare channels in ${link("/insights/google-ads-vs-meta-ads", "our Google Ads versus Meta Ads guide")} and review ${link("/digital-marketing-packages", "digital marketing packages")} if you want help with the test. No ad spend or agency fee guarantees sales.`
      ] },
      { id: "measure-and-iterate", h2: "Measure the path from first visit to useful outcome", body: [
        "Connect Search Console and an analytics platform. Check the query and landing page in Search Console, then the landing page, engaged visits and meaningful action in analytics. Instrument form submissions, calls and checkout events consistently. Verify test events before relying on reports; duplicated tags can double count purchases or leads.",
        "Review weekly by page and channel. If impressions rise but clicks do not, inspect the title and query match. If visits rise but no one enquires, inspect offer clarity, trust and form behavior. If carts start but purchases stall, test shipping cost, payment options and mobile checkout. Change one important variable at a time and record the date.",
        `Follow the complete measurement process in ${link("/insights/how-to-track-website-performance-and-results", "how to track website performance and results")}. Traffic growth takes time and is never guaranteed.`
      ] },
      { id: "traffic-faq-sources", h2: "A practical traffic plan for the next thirty days", body: [
        "Week one: verify indexing, analytics and one primary conversion, then interview recent customers about their search language. Week two: improve the most important commercial landing page and its internal links. Week three: publish one distinct question guide with a concrete checklist and distribute it where your audience already spends time. Week four: compare qualified outcomes by channel, fix a weak step and decide what to repeat.",
        "If the page receives no impressions, investigate discoverability and topic demand. If it receives impressions without clicks, inspect intent and search snippet. If it receives clicks without outcomes, solve the on-page or offer problem. This sequence keeps you from paying to promote a page that cannot convert."
      ] }
    ],
    faqs: [
      { q: "How can I get traffic to a new website with no audience?", a: "Start with a clearly defined offer, a crawlable page for that offer, customer language, one helpful supporting guide and one distribution channel you can sustain. Measure qualified actions as well as visits." },
      { q: "Is SEO or paid advertising faster?", a: "Paid ads can generate visits as soon as campaigns are approved, while organic search usually requires discovery and ongoing improvement. Neither channel guarantees customers, and both need a useful landing page." },
      { q: "Should I publish a blog post every day?", a: "No. Improve the pages that answer real buyer questions, check for overlap with existing pages and publish only when you can add useful detail. Distribution and updates matter too." },
      { q: "Why did my traffic rise but sales stay flat?", a: "The added audience may be unqualified, the destination may not match intent, or checkout and trust may be weak. Compare channels and landing pages against orders or qualified inquiries before spending more." },
      { q: "Can social media traffic help a store?", a: "Yes when demonstrations and links bring relevant people to a matching product page. Measure orders and margins, not just views or likes." }
    ],
    related: ["why-visitors-leave-without-buying-or-contacting", "how-to-track-website-performance-and-results", "google-ads-vs-meta-ads"],
    service: { title: "Plan qualified acquisition", desc: "Map audience, landing pages and measurable campaigns across search and paid channels.", href: "/services/digital-marketing", buttonText: "Discuss a traffic plan" },
    package: { title: "Digital marketing packages", priceBadge: "Compare scope", href: "/digital-marketing-packages", buttonText: "Compare marketing plans" }
  }),
  guide({
    slug: "how-to-get-your-business-found-in-ai-search",
    title: "How to Get Your Business Found in AI Search",
    category: "AI SEO and Search",
    kicker: "AI SEARCH VISIBILITY GUIDE",
    summary: "Learn how businesses become discoverable in Google AI Overviews and AI assisted search through crawlable pages, clear answers, entity facts, proof and measurement.",
    image: "ai-seo", imageAlt: "AI search icon representing business information and citations",
    intent: "Practical business discovery in AI search rather than a definition of AI SEO",
    answer: "Make your business facts, service pages and useful answers easy to discover and verify on the open web. Start with ordinary search indexing, clear business identity, genuinely helpful original information and consistent external profiles. Test relevant questions across search experiences, but no schema or agency can guarantee an AI citation.",
    sections: [
      { id: "what-found-means", h2: "Understand what being found in AI search means", body: [
        "An AI answer may summarize a topic, link to a page, mention a business or recommend a category of providers. Those are different outcomes. You should first define which questions matter to your customers and whether the answer needs a local provider, a product, a how to guide or an authoritative fact. A broad question about SEO may not call for a particular agency at all.",
        "Google AI Overviews and AI Mode are features of Google Search, while other services have their own retrieval and citation behavior. Google says the core SEO practices for search also apply to its AI features. There is no special schema type that guarantees inclusion. See ${source("https://developers.google.com/search/docs/appearance/ai-features", "Google's AI features guidance")}.",
        `For terminology and the differences between SEO, AEO and GEO, read ${link("/insights/what-is-ai-seo-seo-vs-aeo-vs-geo", "our AI SEO definitions guide")}; this article focuses on execution.`
      ] },
      { id: "foundational-discovery", h2: "Make important pages crawlable and useful without scripts", body: [
        "Check that your priority pages return a successful response, have an appropriate canonical URL, are not blocked from indexing and present their main answer in the rendered page. Put essential service details in headings and paragraphs rather than only inside an image, video or collapsed app state. Link pages from the navigation or a relevant guide so crawlers and people can find them.",
        "Use Search Console's URL Inspection to examine Google indexing and selected canonical when you have access. A sitemap helps discovery but does not force indexing. Technical hygiene opens the door; a page still needs a reason to be chosen as a useful source.",
        `UBE's ${link("/services/ai-seo-agency", "AI SEO service")} reviews crawlability, page structure and how your offer is described.`
      ] },
      { id: "entity-clarity", h2: "Make the business identity unambiguous", body: [
        "State the company name, website, contact method, service area, people and service scope consistently on the site. Link to real external business profiles and verified work. If a business changes names or uses different phone numbers across old pages, reconcile the facts before adding more schema. Structured data should describe visible reality, not invent credibility.",
        "A specific About page can explain who is responsible, what the business does and how projects are run. Service pages should tell readers exactly which platform, deliverable and limitation apply. Where relevant, Organization, Service, BreadcrumbList and Article markup can clarify relationships, but validate it and keep it synchronized with visible text.",
        "The overlooked issue is identity fragmentation: search systems may find a marketplace profile, a social account and a website that use three variations of a name. A clean entity trail is more useful than repeating a target phrase dozens of times."
      ] },
      { id: "answer-real-questions", h2: "Answer the question that precedes the sale", body: [
        "A buyer may ask whether Shopify or WooCommerce fits a catalog, how shipping works, what a setup includes, or whether they need ongoing management. Give an answer immediately, then the factors that change it, a concrete process and links to the relevant service. Be candid about exclusions, uncertainty and dependencies.",
        "Originality comes from operational detail: a sample product taxonomy, approval workflow, return calculation, migration checklist or documented example. Rewriting generic definitions at scale rarely helps a real customer. Keep your service page distinct from a broad educational guide so both have a clear job.",
        `Our ${link("/ai-seo", "AI SEO methodology hub")} and ${link("/research/ai-search-readiness-study-2026", "100 site readiness study")} explain the framework and evidence behind our approach. The study is a site sample, not a promise that its percentages predict your results.`
      ] },
      { id: "external-evidence", h2: "Build references people and systems can verify", body: [
        "Publish real case studies with client permission, clear scope and a live project link where appropriate. Maintain consistent official profiles and contribute genuinely useful information to relevant publications or communities. Do not buy mentions, place fabricated reviews or present platform features as custom work your agency created.",
        "A citation depends on the answer system, the question and its sources. A page can rank in conventional search but never be cited in a specific AI response, and the reverse can vary over time. Treat mentions as observations, not a guaranteed outcome of a checklist."
      ] },
      { id: "measure-ai-visibility", h2: "Measure discovery without inventing a citation metric", body: [
        "Track indexed landing pages, relevant queries, branded and nonbranded search visibility, referrals where identifiable, inquiries and sales. Record a small set of representative questions with the date, location, answer surface and whether your page was linked. Repeat consistently, recognizing that personalized and changing results are not a comprehensive census.",
        "Search Console does not provide a universal, separate count of every AI mention across platforms. Analytics referrers may miss visits from apps. Connect the observable pieces and label unknowns clearly. Review which questions bring useful visitors and what they do after landing.",
        `For the measurement setup, use ${link("/insights/how-to-track-website-performance-and-results", "our website performance guide")}.`
      ] },
      { id: "ai-search-action-plan", h2: "A sensible first month of AI search work", body: [
        "Audit indexing and business facts first. Improve one core service page so its promise, inclusions, process and evidence are unambiguous. Add or update one guide that answers a real buyer question with specific information. Connect it to the service page and a relevant case study. Then observe search queries and assisted inquiries before expanding the cluster.",
        `If you want a scoped review, compare ${link("/ai-seo-packages", "AI SEO packages")} or ${link("/contact", "contact UBE")}. We do not guarantee rankings, recommendations or AI citations.`
      ] }
    ],
    faqs: [
      { q: "Can I make ChatGPT recommend my business?", a: "You can improve the clarity and discoverability of your business information and publish credible evidence, but no one can guarantee a recommendation in a changing AI answer." },
      { q: "Does FAQ schema put my site into AI Overviews?", a: "No. Structured data may help describe eligible visible content, but Google does not require a special AI schema or guarantee citation because it exists." },
      { q: "Should I block AI crawlers?", a: "That depends on your content and usage preferences. Review the policies and crawler controls for each provider; blocking retrieval may limit certain discovery paths, but access alone does not guarantee inclusion." },
      { q: "Do I need an AI SEO article and a service page?", a: "They can serve different intents: the guide teaches the method, while the service page explains what the business will deliver and how to buy. Keep them distinct and link them contextually." },
      { q: "How do I measure AI search leads?", a: "Combine observable referral data, landing pages, inquiry source questions, search trends and a repeatable query sample. Label attribution limits rather than reporting every AI mention as a measured lead." }
    ],
    related: ["what-is-ai-seo-seo-vs-aeo-vs-geo", "how-to-get-your-business-mentioned-in-chatgpt", "how-to-track-website-performance-and-results"],
    service: { title: "Clarify your AI search presence", desc: "Audit crawlability, business identity and answer focused service content.", href: "/services/ai-seo-agency", buttonText: "Explore AI SEO services" },
    package: { title: "AI SEO packages", priceBadge: "Audit option", href: "/ai-seo-packages", buttonText: "Compare AI SEO scope" }
  }),
  guide({
    slug: "what-you-need-before-launching-a-website-or-store",
    title: "What You Need Before Launching a Website or Online Store",
    category: "Website and Store Planning",
    kicker: "PRELAUNCH CHECKLIST",
    summary: "A practical launch checklist covering offer, domain, content, catalog, policies, payments, shipping, analytics, ownership and a real test order or inquiry.",
    image: "responsive-web-design", imageAlt: "Responsive website planning icon for a launch checklist",
    intent: "What to prepare before a business website or online store launch",
    answer: "Before launch, define the offer and customer, secure the domain and account ownership, prepare real copy and product information, set contact and policy pages, configure payment and delivery rules, connect analytics and test the entire buyer journey. A visually complete site can still fail if a form, tax rule or fulfillment handoff is untested.",
    sections: [
      { id: "offer-and-audience", h2: "Decide who the site is for and what it must do", body: [
        "A brochure site may need a service explanation, portfolio, inquiry form and contact details. A store also needs products, inventory, shipping, taxes, payment and returns. List the customer's first question, the pages needed to answer it and the action expected on each page. This brief will guide platform and design choices better than choosing a theme first.",
        "Write an inclusion and exclusion list. Who writes copy, provides product photography, approves legal language and manages post launch changes? A small launch package and a custom integration project have different scopes. The cheapest quote can become expensive when those responsibilities are left ambiguous."
      ] },
      { id: "ownership-and-domain", h2: "Secure account access and ownership before design begins", body: [
        "Register the domain in an account the business controls. Record who owns hosting, the store, email, analytics, tag manager, Search Console, payment provider, source code and design assets. Give contractors the least access they need instead of sharing a primary password. Enable multifactor authentication and store recovery details securely.",
        "The often missed detail is handoff: if the agency relationship ends, can the owner still renew the domain, receive form leads, update products and export content? Decide this before an account is opened in someone else's name."
      ] },
      { id: "content-and-catalog", h2: "Prepare complete content and a usable catalog", body: [
        "For services, collect a precise offer description, audience, deliverables, process, common objections, approved proof, contact details and next step. For products, collect SKU, variant, dimensions, materials, price, inventory source, photography, safety information and realistic shipping times. Organize categories from how customers shop, not from the order products arrived in a spreadsheet.",
        "A placeholder page full of unsupported claims is not launch ready. Alt text should describe useful imagery and decorative images should be marked as such. Write a distinct title and summary for each important page; avoid copying supplier descriptions without checking accuracy.",
        `For store structure, review ${link("/services/shopify-development", "Shopify development")} and ${link("/insights/shopify-store-setup-cost-2026", "Shopify setup budgeting")}.`
      ] },
      { id: "commerce-operations", h2: "Map the order before you configure checkout", body: [
        "Draw the path from payment to fulfillment, tracking, delivery, return and support. Confirm who receives the order, which location holds stock and what happens if inventory runs out. Test all shipping zones, free shipping thresholds, tax settings and payment methods against the actual products. Platform defaults may not match the business's policy or location.",
        "For a service site, map the inquiry from form to mailbox or CRM, who responds and the confirmation shown to the visitor. Do not treat a test submission as optional. A button that looks clickable but does not deliver a lead undermines the entire site.",
        `Read ${source("https://help.shopify.com/en/manual/intro-to-shopify/initial-setup", "Shopify's launch setup guide")} and ${source("https://help.shopify.com/en/manual/fulfillment/getting-started", "its shipping setup guidance")} for current platform steps.`
      ] },
      { id: "trust-and-legal", h2: "Publish practical trust and policy information", body: [
        "Show real business identity, contact method, product or service scope, delivery expectations and support routes. A store needs accurate shipping, return and privacy pages. A service engagement needs plain terms on revisions, approval, payment and ownership. Policy wording depends on the business and jurisdiction; have qualified counsel review legal obligations rather than copying a competitor's template.",
        "Never publish invented testimonials, awards or performance figures to fill a blank section. A specific description of your process and real work is more useful than a row of unverifiable badges."
      ] },
      { id: "launch-testing", h2: "Test the site like a first time customer", body: [
        "At mobile and desktop widths, use navigation, search, forms, filters and checkout. Check a representative product with variants, discounts and shipping. Place a test order only in a safe test mode or with a clearly controlled refund process. Verify notification emails, order records, confirmation pages and analytics once, avoiding duplicate events.",
        "Check redirects from old URLs, canonical tags, sitemap and robots rules. Validate metadata and structured data against visible content. Confirm backups and an owner who can handle an urgent correction. Do not launch merely because the homepage looks polished.",
        `Use ${link("/insights/how-to-check-if-your-website-is-secure", "our website security checklist")} for a separate safety review.`
      ] },
      { id: "launch-and-maintenance", h2: "Plan the first month after launch", body: [
        "Record the launch date and a baseline of indexed pages, key actions, site speed and incoming inquiries. Review the first real questions from customers, shipping exceptions and failed form submissions. Correct facts and broken paths quickly, then improve the pages with real evidence rather than adding features blindly.",
        `UBE can scope a build through ${link("/services/web-design-development", "web design services")} or a storefront through ${link("/services/ecommerce", "eCommerce development")}. Compare ${link("/web-design-packages", "website packages")} and ${link("/ecommerce-growth-packages", "store packages")} based on the work you actually need.`
      ] }
    ],
    faqs: [
      { q: "Do I need a logo before building a website?", a: "A finalized visual system helps consistency, but you can begin with a clear brand name, readable type, core colors and real content while completing identity work. Avoid delaying all planning for a logo alone." },
      { q: "What does a small business need for an online store?", a: "At minimum: a product and price, owned store and domain accounts, product information, payment setup, shipping and return rules, contact support, analytics and a tested order path." },
      { q: "Can I launch without all product photos?", a: "You can launch a smaller complete catalog instead of displaying incomplete listings. Each live product should accurately show what customers will receive." },
      { q: "Who should own the domain and website accounts?", a: "The business should control primary ownership and recovery access. Give agencies or contractors the appropriate collaborator permissions rather than transferring ownership by default." },
      { q: "How do I know the site is ready?", a: "Test a complete inquiry or purchase, verify notifications and records, review mobile paths, policies, analytics, indexing settings and account access. Fix material failures before launch." }
    ],
    related: ["shopify-store-setup-cost-2026", "how-to-check-if-your-website-is-secure", "how-to-track-website-performance-and-results"],
    service: { title: "Plan a useful website", desc: "Scope content, design, ownership and functional launch requirements.", href: "/services/web-design-development", buttonText: "Discuss a website build" },
    package: { title: "Web design packages", priceBadge: "Compare scope", href: "/web-design-packages", buttonText: "Explore website plans" }
  }),
  guide({
    slug: "why-visitors-leave-without-buying-or-contacting",
    title: "Why Visitors Leave Without Buying or Contacting You",
    category: "Conversion and UX",
    kicker: "CONVERSION DIAGNOSIS",
    summary: "Diagnose why visitors leave your website or store without purchasing or inquiring. Check intent, trust, mobile usability, checkout, forms and measurement in order.",
    image: "checkout", imageAlt: "Checkout and conversion icon for diagnosing abandoned visits",
    intent: "Why website visits do not turn into leads or sales",
    answer: "A visit fails to convert when the visitor is the wrong audience, the page does not answer the decision, the offer is unclear or a step in the form or checkout creates friction. Measure the drop off by landing page and device, then test the most likely obstacle before changing the whole design.",
    sections: [
      { id: "separate-traffic-from-friction", h2: "Separate an audience problem from a page problem", body: [
        "A high exit rate does not prove a broken website. Someone may read a helpful answer and leave satisfied. A product page visited by an unrelated audience is a different problem from an interested buyer abandoning checkout. Segment by search query or campaign, landing page, device and action before making a diagnosis.",
        "Define the desired action for each page. A guide may need a relevant next link, a service page an inquiry, and a product page an add to cart. Check what the visitor actually came to do. If an ad promises a specific price or item but the destination offers a broad homepage, the mismatch is visible before any color change.",
        `Start with ${link("/insights/how-to-get-more-website-and-store-traffic", "qualified traffic planning")} if the wrong visitors are arriving.`
      ] },
      { id: "message-and-offer", h2: "Make the offer understandable in the first screen", body: [
        "The first screen should identify the product or service, the intended customer, the key inclusion and a sensible action. Replace vague language with scope: what will be built, what the buyer supplies and what happens next. A package card should distinguish a one time setup from ongoing management without making a visitor hunt through a PDF.",
        "Show total price or explain exactly what changes the quote, including platform subscriptions, shipping, ad spend and taxes when applicable. Do not imply an inexpensive starter covers custom integrations or campaign outcomes. If a customer must call to discover a basic exclusion, they may never call.",
        `See our ${link("/ecommerce-growth-packages", "eCommerce package scope")} and ${link("/services/ecommerce", "eCommerce service details")} as examples of the decision path.`
      ] },
      { id: "trust-and-proof", h2: "Show proof a buyer can verify", body: [
        "Explain who operates the business, how to contact them, what the agreement covers, and what happens after payment. A genuine work example should distinguish verified deliverables from claimed sales results. Client names, screenshots or testimonials need approval where appropriate. A stock photograph and a fabricated result can reduce confidence rather than build it.",
        `Link to relevant ${link("/work", "work and case studies")} near the decision, and include shipping, returns, privacy and support details on the store. For services, explain the handoff, approval and revision process. Trust answers the buyer's practical risk, not just their visual preference.`
      ] },
      { id: "mobile-and-speed", h2: "Check the mobile experience from the buyer's hand", body: [
        "Try the actual journey at a narrow mobile width. Can someone read the product title without clipping, tap variant choices, see delivery costs, use the primary action and complete checkout without zooming? Can they dismiss a chat widget that covers the button? Test slow networks and a real phone where possible.",
        "Large hero media, moving layers and third party scripts can delay meaningful content. Faster loading matters because impatient users may leave, but speed alone does not fix weak copy. Capture a baseline of Core Web Vitals and observe real users when data exists. Prioritize the element causing the delay rather than removing useful content blindly."
      ] },
      { id: "checkout-and-forms", h2: "Inspect the point where interest becomes an action", body: [
        "For a store, compare product views, add to carts, checkout starts and purchases. An abrupt fall after shipping selection may indicate surprise costs, unavailable methods or address errors. For a service site, submit a test inquiry to verify validation, confirmation, destination inbox and CRM. An apparently successful form that never reaches a person is a conversion failure that page design cannot solve.",
        "Ask only for information needed to reply. Make error messages specific, use labels, preserve entered values after a validation failure and provide a visible confirmation. Do not send names, emails or form contents into analytics. Test on mobile as well as desktop.",
        `Use ${source("https://developers.google.com/analytics/devguides/collection/ga4/ecommerce", "Google's ecommerce measurement guide")} for event naming and ${link("/insights/how-to-track-website-performance-and-results", "our tracking walkthrough")} for diagnosis.`
      ] },
      { id: "test-one-hypothesis", h2: "Change one important obstacle and compare outcomes", body: [
        "Write a specific hypothesis such as: visitors who search for a price leave because the landing page hides the entry price. Update that page's price and inclusions, note the date, then compare qualified inquiries for similar traffic. Avoid making several simultaneous changes and declaring which one worked.",
        "Small sites may not have enough conversions for a formal split test. Use moderated customer interviews, recordings with privacy controls, support questions and a manual mobile walkthrough to learn before waiting for statistical certainty. Keep the original state documented so you can reverse a harmful change."
      ] },
      { id: "when-to-get-help", h2: "A diagnosis order you can use today", body: [
        "First confirm the target action is actually recorded. Second check whether incoming visitors fit the offer. Third inspect the message, total cost and credible proof. Fourth complete the mobile form or checkout yourself. Fifth improve the largest verified obstacle and monitor the same metric over a sensible period.",
        `UBE can review page structure through ${link("/services/web-design-development", "web design and development")} and ongoing store changes through ${link("/services/ecommerce-store-management", "store management")}. Compare ${link("/web-design-packages", "website packages")} before requesting a scoped estimate. We cannot guarantee a conversion increase because demand, pricing and traffic quality also matter.`
      ] }
    ],
    faqs: [
      { q: "What is a good website conversion rate?", a: "There is no universal rate. Define a meaningful action and compare similar pages, audiences, devices and periods. A qualified service inquiry and a low cost product purchase are not interchangeable." },
      { q: "Why do customers add to cart but not buy?", a: "Possible reasons include unexpected shipping, delivery times, payment options, discount confusion, trust or checkout errors. Compare checkout steps and test a real order path before guessing." },
      { q: "Does a redesign automatically improve sales?", a: "No. A redesign should address observed barriers and preserve what already works. Changes in audience, offer and measurement can obscure the result." },
      { q: "Can a slow mobile page hurt inquiries?", a: "It can create friction, particularly when the main action takes too long to appear. Check actual mobile usability and field performance together with the page's message and audience." },
      { q: "Why are my forms showing submissions but no leads arriving?", a: "Test routing, spam filtering, validation, CRM integration, notification email and confirmation state. Also check whether analytics counts clicks rather than successful submissions." }
    ],
    related: ["how-to-get-more-website-and-store-traffic", "how-to-track-website-performance-and-results", "how-much-does-a-small-business-website-cost"],
    service: { title: "Find the conversion barrier", desc: "Review mobile layout, offer clarity and the path from visit to contact or checkout.", href: "/services/web-design-development", buttonText: "Discuss a website review" },
    package: { title: "Website packages", priceBadge: "Compare scope", href: "/web-design-packages", buttonText: "Compare website plans" }
  }),
  guide({
    slug: "how-to-track-website-performance-and-results",
    title: "How to Track Website Performance and Measure Results",
    category: "Analytics and Measurement",
    kicker: "MEASUREMENT FIELD GUIDE",
    summary: "Use Search Console, GA4 and a small lead or order dashboard to understand discovery, engagement, conversions, speed and what to improve next.",
    image: "analytics", imageAlt: "Website analytics icon with performance charts",
    intent: "How business owners track meaningful website results",
    answer: "Define the action that creates business value, then connect Search Console for search discovery and analytics for on site behavior. Verify events with a test, compare landing pages and channels against qualified leads or orders, and review mobile performance. Do not confuse impressions, sessions, clicks and purchases.",
    sections: [
      { id: "measurement-plan", h2: "Define the decision before choosing a dashboard", body: [
        "Ask what the website is supposed to produce. For a store, useful outcomes can include completed orders and contribution margin. For a service business, use qualified inquiries and consultations that actually happened. A page view, button click or scroll depth may help explain the journey, but it is not automatically a business outcome.",
        "Create a simple sheet with metric name, source, period, page or channel, owner and a decision threshold. Example: if product views rise but purchases do not, examine checkout and fulfillment rather than writing another top of funnel article. This keeps the dashboard tied to actions."
      ] },
      { id: "search-console", h2: "Use Search Console to understand discovery", body: [
        "Search Console reports Google Search impressions, clicks, click through rate and average position by query and page. Use the Page indexing report and URL Inspection for technical discovery. Compare similar time periods and segment brand versus nonbrand queries when possible. A page can be indexed yet receive no relevant impressions, which is a different diagnosis from being excluded.",
        "Look for a page with a relevant query and impressions but few clicks, then check its title, visible topic and search intent. For a page with clicks but weak business outcomes, switch to analytics and on page investigation. Remember that Search Console is about Google Search, not every browser, ad or AI app.",
        `See ${source("https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops", "Google's guidance on diagnosing Search traffic changes")}.`
      ] },
      { id: "ga4-events", h2: "Use GA4 for behavior and meaningful actions", body: [
        "GA4 can show sessions, landing pages, traffic acquisition and events. Configure recommended ecommerce events such as product views, add to cart, checkout start and purchase when they apply. For a lead site, track the successful form submission and relevant contact actions. Mark genuine outcomes as key events; a generic click does not mean a lead was received.",
        "Use a stable event name and only non sensitive parameters. Never send email addresses, phone numbers or form text into analytics. Test in DebugView or Realtime, confirm the form reaches its destination and check that the event fires once. Tag Manager and a hard coded Google tag can accidentally count the same action twice.",
        `Google documents ${source("https://developers.google.com/analytics/devguides/collection/ga4/ecommerce", "ecommerce events")} and ${source("https://developers.google.com/analytics/devguides/collection/ga4/validate-ecommerce", "DebugView validation")}.`
      ] },
      { id: "funnel-diagnosis", h2: "Build a funnel that matches the actual buying path", body: [
        "For stores, compare product discovery, product views, add to cart, checkout and purchase. For services, compare landing page, service or package view, form start, successful submission and qualified follow up. Segment by mobile and desktop and by channel. The largest drop needs an explanation, not automatically a new advertisement.",
        "Record external costs and exclusions. A purchase amount in analytics is not profit. Subtract product cost, shipping, payment fees, returns and campaign cost to understand the economics. For service leads, sample the inquiry quality and closed projects rather than assuming every submitted form is equal.",
        `Read ${link("/insights/why-visitors-leave-without-buying-or-contacting", "why visitors leave")} for the next diagnostic step.`
      ] },
      { id: "speed-and-reliability", h2: "Check experience and reliability alongside traffic", body: [
        "Monitor real user Core Web Vitals when data is available, as well as a laboratory test at mobile width to identify bottlenecks. Check errors, broken forms, empty search results, payment failures and slow important pages. A good score on one sample page does not prove every page or checkout flow works.",
        "Look at new releases with a before and after date. If leads vanish after a form or tag change, test the path before attributing it to seasonality. Keep an incident log so the measurement story is honest."
      ] },
      { id: "reporting-cadence", h2: "Run a weekly review and a monthly decision meeting", body: [
        "Weekly: confirm tags, forms and orders still work; note meaningful changes in landing pages and traffic. Monthly: compare qualified outcomes by channel, review the most useful pages, inspect new queries, estimate contribution after costs and choose one or two changes. Annotate launches, promotions and outages.",
        "Do not infer a trend from a handful of visits or one unusually large order. Compare like periods and explain the limits of a small sample. When data is unavailable because a connector expired, report that gap and rely on observable platform records rather than inventing values.",
        `Our ${link("/services/digital-marketing", "digital marketing service")} can help connect acquisition with measurement; ${link("/digital-marketing-packages", "package details")} clarify scope.`
      ] },
      { id: "starter-dashboard", h2: "A compact dashboard an owner can actually use", body: [
        "Use four groups: discovery, actions, economics and reliability. Discovery shows relevant impressions and qualified visits by landing page. Actions show received leads or completed orders. Economics show cost per qualified outcome and margin when the inputs are trustworthy. Reliability shows form, checkout and page performance issues.",
        "A useful report names the source and date of each number and says what action will follow. More widgets do not make a decision better. If you cannot explain how a metric changes a business choice, remove it until there is a clear use."
      ] }
    ],
    faqs: [
      { q: "What is the difference between Search Console and GA4?", a: "Search Console describes your site's presence in Google Search, including queries, impressions and indexing. GA4 describes tagged site behavior and events. Their clicks and sessions use different definitions and need not match." },
      { q: "Which GA4 events should a store track?", a: "At least the ecommerce actions relevant to the actual store journey, commonly product view, add to cart, checkout start and purchase. Validate item and value parameters and avoid duplicates." },
      { q: "What should count as a lead?", a: "A successful, delivered inquiry or booked contact that meets your qualification definition. A button click or form start alone is not a completed lead." },
      { q: "Why do GA4 and Shopify sales numbers differ?", a: "Differences can come from consent, blockers, attribution windows, time zones, refunds, event implementation and payment completion. Treat the order system as the record for orders and reconcile definitions." },
      { q: "How often should I check performance?", a: "Check functional failures frequently, review page and channel trends weekly, and make strategy decisions over a period long enough for your traffic and sales volume." }
    ],
    related: ["how-to-get-more-website-and-store-traffic", "why-visitors-leave-without-buying-or-contacting", "google-ads-vs-meta-ads"],
    service: { title: "Measure what matters", desc: "Connect acquisition, site actions and a useful reporting cadence.", href: "/services/digital-marketing", buttonText: "Discuss measurement" },
    package: { title: "Marketing packages", priceBadge: "Compare scope", href: "/digital-marketing-packages", buttonText: "See marketing plans" }
  }),
  guide({
    slug: "how-to-check-if-your-website-is-secure",
    title: "How to Check Whether Your Website Is Secure",
    category: "Website Security",
    kicker: "OWNER SECURITY CHECKLIST",
    summary: "Check HTTPS, account access, software updates, backups, payments, forms and incident readiness. Learn what a padlock proves and what it does not.",
    image: "technical-seo", imageAlt: "Website technical review icon representing a security checklist",
    intent: "Practical security checks for website and store owners",
    answer: "A secure connection is one useful check, not a complete security audit. Confirm that HTTPS works on all pages, administrators use multifactor authentication, software and integrations are maintained, access is limited, backups restore, payments use an appropriate provider and forms protect data. Have a qualified professional review application risk when stakes are higher.",
    sections: [
      { id: "what-padlock-proves", h2: "Understand what HTTPS protects and what it does not", body: [
        "Open your site and confirm the browser shows an HTTPS connection without certificate warnings. Check the pages that collect information, not just the homepage, and test that old HTTP URLs redirect to HTTPS. A valid certificate encrypts data in transit between visitor and server. It does not prove the site is trustworthy, that the app has no vulnerabilities or that a seller will fulfill an order.",
        "Avoid telling customers a padlock means complete safety. A fraudulent site can also use HTTPS. Assess identity, payment handling, software, account access and incident response separately."
      ] },
      { id: "account-access", h2: "Protect the accounts that control the business", body: [
        "List who can change the domain, DNS, hosting, CMS, Shopify or WooCommerce admin, payment processor, email, analytics and ad accounts. Remove old contractor access, require multifactor authentication on privileged accounts and use unique passwords in a manager. Store recovery methods under business ownership.",
        "A common blind spot is the registrar: an attacker who controls the domain may redirect email or the site even if the application is patched. Review permissions and recovery addresses after staffing changes. CISA recommends ${source("https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication", "multifactor authentication for businesses")}."
      ] },
      { id: "software-and-plugins", h2: "Inventory software, themes and third party scripts", body: [
        "For a self hosted CMS, keep the core, theme, plugins and server components updated. Remove unused plugins rather than merely disabling the visible widget. Check who maintains integrations and whether their credentials can be rotated. For a hosted platform, review installed apps, permissions and any custom code or scripts you control.",
        "The overlooked risk is a legitimate looking marketing script that runs on every page with broad access. Audit whether tags, chat tools, analytics and embedded apps are still needed and who can edit them. Test updates in a staging environment when possible, then monitor forms and checkout after release.",
        `OWASP lists ${source("https://top10.owasp.org/2025/en/", "major web application risks")} including broken access control and security misconfiguration; it is an awareness framework, not a pass or fail certificate.`
      ] },
      { id: "backups-and-restore", h2: "Test backups as a recovery process", body: [
        "Check what is backed up: code or theme, database, product and order data, uploaded media, configuration and DNS records where relevant. Confirm frequency, retention, location, access and a person responsible. A backup is useful only if it can be restored within a time the business can tolerate.",
        "Run a controlled restore test or ask the provider for documented recovery steps. Keep at least one recovery path independent of the account or server being protected. Some SaaS platforms have infrastructure redundancy but may not provide an owner controlled rollback for every accidental content edit or integration error."
      ] },
      { id: "payments-and-forms", h2: "Review payment and personal data flows", body: [
        "Use a reputable payment provider and the platform's supported checkout rather than collecting card numbers through a general form or email. Map where contact information is stored, who receives it and how long it is retained. Review privacy notices and legal obligations with a qualified adviser where applicable.",
        "Submit a test inquiry with non sensitive test data and verify delivery and access. Check that no sensitive form fields are sent in URLs or analytics events. Protect administration and review spam filtering, rate limits and validation without making legitimate users unable to contact you."
      ] },
      { id: "technical-review", h2: "Run a focused technical review without overclaiming", body: [
        "Check security headers appropriate to the site's needs, publicly exposed files, dependency vulnerabilities, permission boundaries and error reporting. Verify robots and sitemap behavior for SEO separately; a robots rule is not an access control mechanism. A public vulnerability scanner can provide leads for investigation, but a clean score is not proof of safety and an unreviewed scan can create false alarms.",
        "If you process sensitive information, commission a qualified assessment under an agreed scope. Never probe someone else's website without authorization. The right depth depends on the business, platform and data at risk."
      ] },
      { id: "incident-checklist", h2: "Prepare a response before something fails", body: [
        "Write down who can access the registrar and host, who can take a broken checkout offline, how to restore a known good version and who communicates with affected customers. Monitor unusual logins, unexpected content changes, form failures and payment errors. Preserve relevant logs before making broad changes if a compromise is suspected.",
        `UBE can review the website implementation through ${link("/services/web-design-development", "web development services")} and ongoing changes through ${link("/services/ecommerce-store-management", "store management")}. Compare ${link("/web-design-packages", "website packages")} for scoped work. This checklist is education, not a security certification or legal opinion.`
      ] }
    ],
    faqs: [
      { q: "Does the HTTPS padlock mean my website is secure?", a: "No. It indicates an encrypted connection when correctly configured, but it does not verify application security, account access, business trust or fulfillment." },
      { q: "How often should I update a website?", a: "Apply relevant security updates promptly under a tested change process. Review applications, accounts and permissions regularly and verify key functions after updates." },
      { q: "Does Shopify handle all my store security?", a: "A hosted platform manages important infrastructure, but the merchant still controls account access, apps, content, staff permissions, customer communications and parts of configuration." },
      { q: "How do I know my backups work?", a: "Inspect the backup contents and retention, then complete a controlled restore test or obtain a documented provider recovery procedure. An untested backup is only an assumption." },
      { q: "Should I run a vulnerability scanner on my website?", a: "Only on assets you own or are authorized to test. Use results as leads for qualified review and avoid treating a single clean scan as proof of safety." }
    ],
    related: ["what-you-need-before-launching-a-website-or-store", "how-to-track-website-performance-and-results", "how-much-does-a-small-business-website-cost"],
    service: { title: "Review website implementation", desc: "Scope access, configuration and maintenance concerns with a developer.", href: "/services/web-design-development", buttonText: "Discuss a technical review" },
    package: { title: "Website packages", priceBadge: "Compare scope", href: "/web-design-packages", buttonText: "See website plans" }
  }),
];
