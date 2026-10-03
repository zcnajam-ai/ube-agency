import type { InsightArticle, ArticleSection, ArticleFAQ } from "./insights";

type Revision = Pick<InsightArticle, "title" | "h1" | "summary" | "quickAnswer" | "readTime" | "updatedAt" | "sections" | "faqs" | "relatedSlugs" | "serviceCta" | "packageCta"> & { tableOfContents: InsightArticle["tableOfContents"] };
const link = (href: string, label: string) => `<a href="${href}"><strong>${label}</strong></a>`;
const source = (href: string, label: string) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const toc = (sections: ArticleSection[]) => sections.map(({ id, h2 }) => ({ id, title: h2 }));

const tiktokSections: ArticleSection[] = [
  { id: "eligibility-and-preparation", h2: "Check eligibility before opening Seller Center", body: [
    "TikTok Shop is a marketplace with seller verification, category rules, fulfillment standards and customer service obligations. The US registration route and documents depend on whether you apply as an individual or a registered business. Start at the official Seller Center for the market where you intend to sell, then review the current requirements for your account type.",
    `Gather matching legal name, address, identity or business documentation, tax details, bank information, warehouse and return address. Mismatched names and addresses can delay verification. Do not buy inventory or launch ads until the account and product category are eligible. The official ${source("https://seller-us.tiktok.com/university/essay?default_language=en&identity=1&knowledge_id=5159959451715374", "TikTok Shop setup guide")} describes the current onboarding flow.`,
    "The hidden cost is operations. Your account needs someone who can answer buyer messages, dispatch orders, handle returns and resolve listing rejections. A verified account is the start of a retail process, not a sales channel that runs itself."
  ] },
  { id: "product-and-margin", h2: "Choose products and calculate the full order economics", body: [
    "Pick items you can demonstrate clearly and fulfill reliably. Validate product eligibility, safety and category restrictions before writing a listing. Collect accurate titles, dimensions, variants, images, stock counts and evidence for any product claims. A copied supplier description may omit information shoppers need or contain claims you cannot support.",
    "Calculate a sample order using retail price minus product cost, platform and payment related fees, shipping, packaging, creator commission where applicable, discounts, expected returns and advertising. Check the current fee schedule in Seller Center rather than assuming a universal percentage. The result needs enough room for customer service and an unexpected return.",
    `If you also sell on your own site, compare ${link("/insights/tiktok-shop-vs-shopify", "TikTok Shop and Shopify")}. A marketplace audience is useful, but your own storefront may give you different control over brand and customer experience.`
  ] },
  { id: "seller-center-setup", h2: "Register and configure the shop in order", body: [
    "Create the appropriate Seller Center account, complete verification, then configure shop name, payout, warehouse, pickup and return details. Add authorized users with limited permissions instead of sharing the owner login. Read the product, shipping and customer service policies for your category. Platform rules can change, so recheck them just before launch.",
    "Set realistic handling times and stock. If you work with an external fulfillment provider, confirm that its shipping method, tracking data and dispatch timing satisfy current TikTok requirements. An integration does not transfer seller responsibility for late delivery or refunds.",
    "Prepare a customer response workflow. Who answers a sizing question, approves a refund and fixes an incorrect tracking number? Clarifying this before the first order prevents avoidable disputes."
  ] },
  { id: "listings-and-catalog", h2: "Build listings that answer purchase questions", body: [
    "Use a precise product name, clear main image, relevant demonstration video, complete specifications, honest claims, exact variants and accurate shipping details. Test each listing on a mobile screen. A buyer should understand what is included and when it is likely to arrive without leaving the listing.",
    "If your catalog is large, organize a controlled set of launch products first. Check images, variant mapping and category approval on those products before importing everything. Use the product questions that arrive after launch to improve descriptions and videos rather than guessing what buyers need."
  ] },
  { id: "shopify-sync", h2: "Connect Shopify carefully if you already have a store", body: [
    "A Shopify connection can help transfer products and orders, but it still requires decisions about the source of truth for SKUs, inventory, prices and fulfillment locations. Match variants and prevent overselling when multiple channels use the same stock. Test one product update, one order and one cancellation before enabling a full catalog sync.",
    "Account for refunds and discounts that originate on different platforms. A canceled marketplace order should not leave an incorrect stock count in your store. Review failed sync alerts regularly rather than assuming an installed app means the integration works forever.",
    `Follow ${link("/insights/how-to-connect-shopify-to-tiktok-shop", "our Shopify to TikTok Shop integration guide")} and ${link("/services/shopify-development", "Shopify development service")} if the catalog needs technical work.`
  ] },
  { id: "content-and-creators", h2: "Make useful demonstrations before paying for reach", body: [
    "Show the product in use, its scale, how it solves a problem and any limitation a buyer should know. Create several honest angles for the same product, then observe saves, questions, product clicks and orders. A video view is not a purchase. Avoid unsupported before and after claims or misleading scarcity.",
    "Creator affiliate arrangements may expand reach, but commissions, samples, disclosures and content rights need a plan. Select creators whose audience fits the product. Agree on deliverables and check the actual order economics before sending many samples. Ads can amplify a working message, but they cannot repair an ineligible product, bad listing or unreliable fulfillment."
  ] },
  { id: "launch-test", h2: "Run a controlled launch and review every failure", body: [
    "Launch a small approved catalog. Verify product links in videos, inventory behavior, mobile listing clarity, tracking updates and the buyer support path. Keep a simple sheet of listing issues, order questions, shipping exceptions and returns. Fix fulfillment and product facts before raising ad spend.",
    "Review outcomes by product and creative: views, product clicks, orders, refunds and margin. A product that draws attention but generates repeated returns may need different expectations or may not be suitable for the channel. Do not promise that TikTok will deliver sales within a particular number of days."
  ] },
  { id: "tiktok-help", h2: "When to use a TikTok Shop specialist", body: [
    `If verification, catalog mapping or fulfillment rules are complex, compare UBE's ${link("/tiktok-shop", "TikTok Shop approach")} and ${link("/services/tiktok-marketing", "marketing service")}. We can scope setup, product content, integrations and campaign management separately. Review ${link("/tiktok-marketing-packages", "TikTok marketing packages")} for current deliverables and exclusions.`,
    "Bring your product list, current store, supplier and shipping details to the conversation. This lets the team identify whether the first bottleneck is account eligibility, merchandising, content or order operations."
  ] }
];

const dropshippingSections: ArticleSection[] = [
  { id: "model-and-responsibility", h2: "Understand the model and your responsibility as the seller", body: [
    "Dropshipping means you sell a product without holding it in your own inventory and a supplier fulfills the order. It does not remove the seller's responsibility for accurate listings, delivery promises, returns, customer service, taxes or product compliance. The customer buys from your store, not from the supplier's private operations.",
    `Start by deciding whether the business should use dropshipping, print on demand, local inventory or a hybrid. Products with strict safety requirements, frequent sizing returns or fragile shipping may be poor first tests. Shopify's ${source("https://help.shopify.com/en/manual/products/dropshipping/what-is-dropshipping", "model explanation")} and ${source("https://help.shopify.com/en/manual/compliance/legal/dropshipping", "compliance guidance")} are useful starting points; seek qualified local advice for legal and tax decisions.`
  ] },
  { id: "audience-and-product", h2: "Choose a customer problem before choosing a trending product", body: [
    "Define the customer, what they need, why current options disappoint them and what a better experience would look like. Research product demand, competing listings, likely returns, price range and repeat purchase potential. A popular product with dozens of identical listings and no differentiation leaves little room for acquisition cost or trust.",
    "Order a sample before relying on supplier imagery. Inspect quality, packaging, tracking, delivery time and the actual instructions included. Compare the sample against the claims and pictures on the page. The detail many launch tutorials skip is that a supplier's sample and its later batch can differ; keep a quality check process as volume grows."
  ] },
  { id: "supplier-scorecard", h2: "Use a supplier scorecard instead of a marketplace badge", body: [
    "Compare suppliers on stock reliability, dispatch time, shipping origin, tracking, defect handling, return address, communication, package branding and integration behavior. Ask what happens when a variant is unavailable or an order splits across warehouses. A fast estimate is not a verified delivery promise.",
    "Run a test purchase and support inquiry. Record the response, dispatch and delivery dates. If selling across borders, review customs, duties and tax obligations with a qualified adviser. Do not copy a supplier's policy into your own store if it does not match the customer's rights or the fulfillment arrangement.",
    `Shopify also provides ${source("https://help.shopify.com/en/manual/products/dropshipping/preparing-for-a-dropshipping-business", "preparation guidance")} and ${source("https://help.shopify.com/en/manual/products/dropshipping/recommended-dropshipping-and-pod-apps", "current app suggestions")}; app availability and terms may change.`
  ] },
  { id: "economics", h2: "Calculate margin after every real cost", body: [
    "Write the calculation per order: selling price minus supplier product cost, shipping, payment fees, packaging, transaction fees, discounts, expected return and support costs, and customer acquisition cost. Model a normal order and a refunded or lost order. A high markup alone does not make the business profitable.",
    `Know when cash moves. A customer payment may settle after the supplier requires payment, and returns can happen after ad spend is gone. Budget working capital and do not promise an income timeline to yourself or a client. For a build budget, see ${link("/insights/dropshipping-store-cost-to-build", "what a dropshipping store costs to build")}.`
  ] },
  { id: "store-build", h2: "Build a store for the customer's decision", body: [
    "Choose a platform you can operate, connect the domain under business ownership and structure product categories around shopper tasks. Include clear product descriptions, original demonstrations where possible, visible shipping timelines, returns, contact options and mobile friendly checkout. Differentiate the store through selection, service and information rather than a generic imported catalog.",
    `Test key variants, shipping zones, tax settings and payment paths. A supplier integration may import products, but it does not write accurate claims or create a trustworthy brand. Use ${link("/services/dropshipping", "dropshipping setup services")} when you need help mapping those operational details to the site.`
  ] },
  { id: "automation-and-fulfillment", h2: "Automate carefully and keep a human exception path", body: [
    "Map how an order reaches the supplier, whether inventory is reserved, where tracking returns and how the customer receives updates. Test cancellation, a failed payment, out of stock, split shipment and return. Do not assume an app synchronizes every edge case; check its logs and reconciliation regularly.",
    "Keep someone responsible for delayed orders and disputes. An automated email cannot fix a lost shipment or explain an unexpected customs charge. Start with a limited catalog until the workflow is reliable."
  ] },
  { id: "traffic-and-measurement", h2: "Plan acquisition before declaring the store finished", body: [
    "Search pages can answer product specific questions; demonstration videos can show a use case; paid campaigns can test an offer. Choose a channel based on customer behavior and margin, not because another store reported viral sales. Track qualified visits, product views, carts, purchases, refunds and contribution after costs.",
    `Read ${link("/insights/how-to-get-more-website-and-store-traffic", "how to get qualified store traffic")} and ${link("/insights/why-visitors-leave-without-buying-or-contacting", "why visitors leave without buying")}. A store build is infrastructure, not a guarantee of orders.`
  ] },
  { id: "launch-process", h2: "Follow a measured launch sequence", body: [
    "First validate the customer and a few candidate products. Second sample and score suppliers. Third calculate margin and working capital. Fourth build a small, complete catalog and policies. Fifth test the order and return workflow. Sixth launch one acquisition test and review product level economics. Expand only after fulfillment and support hold up.",
    `For ongoing catalog and supplier coordination, compare ${link("/services/ecommerce-store-management", "store management services")} and ${link("/ecommerce-growth-packages", "eCommerce growth packages")}. Discuss your products and budget through ${link("/contact", "a project inquiry")} so the scope can be defined without promising sales.`
  ] }
];

export const GUIDE_REVISIONS: Record<string, Revision> = {
  "how-to-start-a-tiktok-shop-2026": {
    title: "How to Set Up a TikTok Shop and Start Selling in 2026",
    h1: "How to Set Up a TikTok Shop and Start Selling",
    summary: "A practical TikTok Shop setup guide covering eligibility, verification, listings, Shopify sync, creators, fulfillment, fees and a controlled launch.",
    quickAnswer: "To start a TikTok Shop, verify your seller eligibility and documents, register in Seller Center, configure payouts and fulfillment, publish compliant listings and test orders before scaling content or ads. Calculate fees, returns and shipping before deciding whether a product can profitably sell.",
    readTime: "14 min read", updatedAt: "October 3, 2026", sections: tiktokSections, tableOfContents: toc(tiktokSections),
    faqs: [
      { q: "Do I need a Shopify store to sell on TikTok Shop?", a: "No. Eligible sellers can set up a TikTok Shop directly. Shopify can be useful for a separate storefront and catalog sync, but it adds another system to reconcile." },
      { q: "How long does TikTok Shop verification take?", a: "Timing depends on account type, document accuracy and current platform review. Prepare matching details and check Seller Center for status rather than relying on a fixed promise." },
      { q: "What does it cost to sell on TikTok Shop?", a: "Costs can include current platform fees, shipping, returns, samples, affiliate commission and optional ads. Check the latest fee schedule for your category and calculate contribution per order." },
      { q: "Can I use a dropshipping supplier for TikTok Shop?", a: "Only if the product and fulfillment arrangement meet current marketplace rules and you can meet dispatch, tracking and returns obligations. Verify the policy and test the supplier before listing." },
      { q: "Do I have to work with creators?", a: "No. You can sell through your own content and other eligible channels. Creators can help demonstrate products, but samples and commissions must fit your margins." },
      { q: "What happens after the shop goes live?", a: "You need to monitor inventory, customer questions, shipping, returns, listing health, content and actual order economics. Setup alone does not produce sales." }
    ],
    relatedSlugs: ["how-to-connect-shopify-to-tiktok-shop", "tiktok-shop-vs-shopify", "how-to-start-a-dropshipping-business-2026"],
    serviceCta: { title: "Set up a workable TikTok Shop", desc: "Scope account, catalog, fulfillment and content before spending on ads.", href: "/tiktok-shop", buttonText: "Explore TikTok Shop services" },
    packageCta: { title: "TikTok marketing packages", priceBadge: "Compare scope", href: "/tiktok-marketing-packages", buttonText: "Compare TikTok plans" }
  },
  "how-to-start-a-dropshipping-business-2026": {
    title: "How to Start a Dropshipping Business in 2026",
    h1: "How to Start a Dropshipping Business in 2026",
    summary: "Learn the real dropshipping setup process from product and supplier validation to margins, store build, fulfillment tests, customer support and first traffic tests.",
    quickAnswer: "To start dropshipping, find a defined customer problem, test suppliers and samples, calculate margin after shipping, returns and acquisition, then build a small complete store and test every order path. You remain responsible for the customer experience even when a supplier ships the product.",
    readTime: "14 min read", updatedAt: "October 3, 2026", sections: dropshippingSections, tableOfContents: toc(dropshippingSections),
    faqs: [
      { q: "Is dropshipping profitable in 2026?", a: "It can be, but profitability depends on product margin, supplier reliability, returns, advertising costs and customer service. A store or automation app cannot guarantee income." },
      { q: "How much money do I need to start dropshipping?", a: "Budget for store or platform costs, domain, product samples, supplier charges, payment fees, returns, support and customer acquisition. Calculate your specific product economics rather than trusting a universal startup number." },
      { q: "Do I need to buy inventory first?", a: "The model normally does not require holding stock, but buying samples and keeping working capital for fulfillment and refunds is prudent." },
      { q: "How do I choose a reliable supplier?", a: "Order a sample, test support and delivery, inspect tracking and return handling, compare stock reliability and document what happens when an item is unavailable." },
      { q: "Does automation mean I no longer manage orders?", a: "No. Apps can pass orders and tracking, but a human still needs to handle exceptions, inaccurate listings, refunds and customer questions." },
      { q: "How will customers find my dropshipping store?", a: "Plan relevant search content, demonstrations, partnerships or paid tests that fit the product and margin. A completed storefront does not automatically bring traffic or sales." }
    ],
    relatedSlugs: ["dropshipping-store-cost-to-build", "how-to-get-more-website-and-store-traffic", "shopify-store-setup-cost-2026"],
    serviceCta: { title: "Scope a dropshipping store", desc: "Map products, suppliers, fulfillment and storefront responsibilities.", href: "/services/dropshipping", buttonText: "Explore dropshipping services" },
    packageCta: { title: "eCommerce growth packages", priceBadge: "Compare scope", href: "/ecommerce-growth-packages", buttonText: "Compare store packages" }
  }
};
