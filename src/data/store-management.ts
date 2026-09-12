export const STORE_MANAGEMENT_PLANS = [
  {
    name: "Essentials", monthly: 249, annual: 2490,
    audience: "For a small store that needs dependable upkeep.",
    scope: "1 storefront · up to 50 active SKUs",
    deliverables: ["10 product or listing updates per month", "Weekly inventory, pricing and broken-link checks", "Weekly order-status review for up to 100 orders per month", "1 existing banner, collection or promotion update per month", "Monthly storefront health check and activity report", "Email support; initial response within 2 business days"],
  },
  {
    name: "Growth", monthly: 499, annual: 4990,
    audience: "For an active store with frequent catalog and promotion changes.",
    scope: "1 storefront · up to 200 active SKUs",
    deliverables: ["25 product or listing updates per month", "Inventory, pricing and order checks 3 times per week", "Order-status review for up to 300 orders per month", "2 existing banner, collection or promotion updates per month", "On-page listing improvements for 5 products per month", "Monthly performance report and 30-minute planning call", "Email support; initial response within 1 business day"],
  },
  {
    name: "Scale", monthly: 899, annual: 8990,
    audience: "For a growing catalog selling through connected channels.",
    scope: "Up to 2 storefronts or channels · 500 active SKUs combined",
    deliverables: ["50 product or listing updates per month across included channels", "Inventory, pricing and order checks each business day", "Order-status review for up to 750 orders per month combined", "4 existing banner, collection or promotion updates per month", "On-page listing improvements for 10 products per month", "Weekly activity summary, monthly report and 2 planning calls", "Shared task queue and 1-business-day initial support response"],
  },
] as const;

export const STORE_MANAGEMENT_FAQS = [
  { question: "What does eCommerce store management include?", answer: "We maintain an existing store through product updates, inventory and pricing checks, order-status monitoring, scheduled promotions and reporting. Each plan has a defined channel count and monthly capacity. We agree your priorities and approval process during onboarding." },
  { question: "Which platforms can you manage?", answer: "We scope management for Shopify and WooCommerce stores and eligible Amazon, Etsy, eBay and TikTok Shop accounts. A storefront or marketplace account counts as one channel. Access, account standing and integration compatibility are reviewed before work starts; marketplace verification and seller approval remain with the platform." },
  { question: "How is annual billing discounted?", answer: "Pay for 12 months upfront at the cost of 10 monthly payments: Essentials $2,490, Growth $4,990 or Scale $8,990. That saves $498, $998 or $1,798 respectively—16.7% compared with 12 monthly payments. Deliverables are provided monthly, even with annual billing." },
  { question: "What counts as an update or SKU?", answer: "An update is one agreed batch of title, description, price, image or attribute edits for one existing product or listing, using supplied assets. Each sellable variant counts as a SKU. A promotion update changes one existing banner, collection or discount configuration. Unused monthly allowances do not roll over. New listings, bulk imports and larger tasks are scoped before work begins." },
  { question: "Do you handle fulfillment, refunds and customer messages?", answer: "Order monitoring means checking order status, identifying exceptions and preparing an action list. You or your fulfillment partner ship orders and authorize refunds, payments and policy changes. Live customer support, buyer-message handling and physical fulfillment are not included in these plans." },
  { question: "Are advertising, apps and development included?", answer: "Platform subscriptions, paid apps, ad spend, taxes, photography, custom design, development, major migrations and SEO campaigns are billed separately. Listing improvements cover the selected products’ titles, descriptions and attributes; they are not a full SEO campaign. Sales and rankings are not guaranteed." },
  { question: "How do onboarding and cancellation work?", answer: "We review the store, confirm capacity and agree a monthly task list before activation. Routine access setup is included; any remediation backlog is quoted separately. Business-day coverage and holidays are confirmed in the agreement. Monthly plans can be stopped before the next renewal with 30 days’ notice. Annual plans are a 12-month commitment paid upfront; renewal, early termination and refund terms are agreed in writing before payment." },
] as const;
