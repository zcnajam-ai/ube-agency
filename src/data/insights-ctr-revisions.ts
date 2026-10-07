import type { ArticleFAQ } from "./insights";

export interface InsightCtrRevision {
  updatedAt?: string;
  title: string;
  h1: string;
  summary: string;
  quickAnswer: string;
  leadParagraph: string;
  faqs: ArticleFAQ[];
}

export const INSIGHT_CTR_REVISIONS: Record<string, InsightCtrRevision> = {
  "how-to-optimize-for-google-ai-overviews": {
    "updatedAt": "October 7, 2026",
    "title": "How to Optimize for Google AI Overviews in 2026: 10-Step Guide",
    "h1": "How to Optimize for Google AI Overviews in 2026: 10-Step Guide",
    "summary": "A practical 10-step guide to Google AI Overviews: indexing, direct answers, evidence, internal links, and structured data. Informed by our 100-site audit.",
    "quickAnswer": "To improve eligibility for Google AI Overviews, make important pages indexable and snippet-eligible, answer the question directly, support claims with evidence, and keep structured data consistent with visible content. No special AI markup guarantees inclusion.",
    "leadParagraph": "Start with pages that can appear in Google Search with a snippet. Answer the specific question early, show the source of important claims, link to related evidence, and check the rendered page for crawl access. Google selects supporting links; no markup guarantees placement. For a tailored implementation, see <a href=\"/services/ai-seo-agency\" class=\"font-semibold underline\">our AI SEO agency service</a>.",
    "faqs": [
      {
        "q": "Does adding schema guarantee a place in Google AI Overviews?",
        "a": "No. Structured data can clarify visible information, but Google chooses when to show an AI Overview and which sources to cite."
      },
      {
        "q": "Do I need special AI Overview markup?",
        "a": "No. Google says its established Search guidance applies to AI features, including crawlability, indexing and snippet eligibility."
      },
      {
        "q": "Can a page blocked from indexing appear as an AI Overview source?",
        "a": "A page must be indexed and eligible to appear with a snippet in Google Search to be eligible as a supporting link in Google's AI features."
      },
      {
        "q": "How long will AI Overview optimization take?",
        "a": "There is no fixed timeline. After changes, allow for crawling and indexing, then review relevant search queries, qualified traffic and leads over time."
      }
    ]
  },
  "how-to-start-a-tiktok-shop-2026": {
    "title": "How to Start a TikTok Shop in 2026: Setup, Products & Marketing",
    "h1": "How to Start a TikTok Shop in 2026: Setup, Products & Marketing",
    "summary": "Start a TikTok Shop in 2026 with seller verification, compliant products, fulfillment, Shopify sync when useful, and a measured creator and marketing plan.",
    "quickAnswer": "To start a TikTok Shop, confirm seller and product eligibility, register in Seller Center, configure payouts, shipping and returns, publish accurate listings, then test an order. Add Shopify sync, creators or ads only when the underlying operations and unit economics work.",
    "leadParagraph": "Begin with Seller Center eligibility and product-category rules before you invest in listings or ads. Prepare matching business documents, choose products you can fulfill reliably, calculate fees and returns, then test an actual order. Shopify sync and creator outreach are optional later steps. Our <a href=\"/tiktok-shop\" class=\"font-semibold underline\">TikTok Shop setup service</a> can help scope the operational work.",
    "faqs": [
      {
        "q": "Should I run TikTok Shop ads before seller verification?",
        "a": "Wait until your account and product category are approved, listings are compliant, and fulfillment and returns have been tested. Ads cannot fix an ineligible or unreliable shop."
      },
      {
        "q": "Who handles TikTok Shop customer returns?",
        "a": "The seller remains responsible for customer service and returns under current marketplace rules, even when another provider fulfills an order. Confirm the current policy for your market."
      },
      {
        "q": "How do I choose products for a new TikTok Shop?",
        "a": "Check category eligibility, product claims, shipping reliability, return risk and margin after platform fees, creator commissions and possible ad spend. Test a small catalog first."
      }
    ]
  },
  "tiktok-shop-vs-shopify": {
    "title": "TikTok Shop vs Shopify in 2026: Which Should You Sell On?",
    "h1": "TikTok Shop vs Shopify in 2026: Which Should You Sell On?",
    "summary": "Compare TikTok Shop and Shopify on discovery, checkout, fees, customer relationships, fulfillment and control. See when a business should use one or both.",
    "quickAnswer": "TikTok Shop is an in-app marketplace built around content discovery; Shopify is an independent storefront you operate. The better choice depends on audience, eligible products, margins and how much control you need. Many sellers test both while keeping inventory and orders reconciled.",
    "leadParagraph": "TikTok Shop can shorten the path from video to checkout, while Shopify gives you a branded storefront and broader control over site content and customer relationships. Compare platform fees, fulfillment rules and the traffic you can actually generate before choosing. If you need an owned storefront, see <a href=\"/services/shopify-development\" class=\"font-semibold underline\">Shopify development</a>; if your products suit content-led selling, review <a href=\"/tiktok-shop\" class=\"font-semibold underline\">TikTok Shop services</a>.",
    "faqs": [
      {
        "q": "Which costs less to operate, TikTok Shop or Shopify?",
        "a": "Compare current marketplace fees, Shopify subscription and processing costs, fulfillment, returns, creator commissions and advertising for your product. Rates and eligibility can change."
      },
      {
        "q": "Can I sell on TikTok Shop and Shopify at the same time?",
        "a": "Yes, if your accounts and products qualify. Define one inventory source of truth and test order and return synchronization before increasing volume."
      },
      {
        "q": "Does Shopify bring traffic automatically?",
        "a": "No. A Shopify store gives you an owned storefront, but you still need search, content, referrals, email or paid distribution to bring qualified visitors."
      },
      {
        "q": "Which gives me more control over the customer experience?",
        "a": "Shopify generally gives a merchant more control over storefront design and site content. TikTok Shop transactions and customer interactions are subject to marketplace features and policies."
      }
    ]
  },
  "what-is-ai-seo-seo-vs-aeo-vs-geo": {
    "updatedAt": "October 7, 2026",
    "title": "What Is AI SEO? SEO vs AEO vs GEO Explained (2026)",
    "h1": "What Is AI SEO? SEO vs AEO vs GEO Explained (2026)",
    "summary": "Understand AI SEO, AEO and GEO: how they differ, where they overlap, and when each matters. See practical steps informed by our 100-site search-readiness study.",
    "quickAnswer": "AI SEO is a practical umbrella for improving visibility across conventional search and AI-assisted answers. SEO handles crawlability and search relevance; AEO makes answers easier to extract; GEO strengthens evidence and entity clarity that generative systems may use. None can guarantee a citation.",
    "leadParagraph": "AI SEO does not replace conventional SEO. Search engines still need to crawl and understand a page. AEO improves how directly a page answers a question; GEO adds context, evidence and consistent entity information for generative answers. Start with the search problem your buyers have, then choose the work that supports it. See <a href=\"/services/ai-seo-agency\" class=\"font-semibold underline\">our AI SEO agency service</a> for implementation scope.",
    "faqs": [
      {
        "q": "What is the difference between AEO and GEO?",
        "a": "AEO focuses on clear answers to questions. GEO focuses on the evidence, context and entity signals that may help generative systems understand and reference a source. Both build on sound SEO."
      },
      {
        "q": "Is structured data enough for AI SEO?",
        "a": "No. Structured data should match visible content, but useful answers, crawlability, trustworthy evidence and an understandable site structure also matter."
      },
      {
        "q": "How do you measure AI SEO?",
        "a": "Establish a baseline for relevant search queries, qualified organic visits and leads. Track observable mentions and citations where possible, without treating them as guaranteed or perfectly attributable."
      },
      {
        "q": "Can an agency guarantee ChatGPT or AI Overview citations?",
        "a": "No. Each platform controls what it retrieves and displays. An agency can improve technical access, content clarity and evidence, then measure observed changes."
      }
    ]
  },
  "how-to-connect-shopify-to-tiktok-shop": {
    "title": "How to Connect Shopify to TikTok Shop: 2026 Setup Guide",
    "h1": "How to Connect Shopify to TikTok Shop: 2026 Setup Guide",
    "summary": "Connect Shopify and TikTok Shop with the supported sales channel. Review account eligibility, catalog mapping, inventory rules, order routing and test purchases.",
    "quickAnswer": "To connect Shopify and TikTok Shop, first confirm Seller Center eligibility, install the supported TikTok sales channel, link the correct accounts, map eligible products and warehouses, then test inventory and order behavior. Sync capabilities depend on current integration settings.",
    "leadParagraph": "Start with an approved Seller Center account and products eligible for TikTok Shop. Connect the supported sales channel, map categories and variants, decide which system owns inventory, and test a purchase, cancellation and return. The integration can reduce duplicate entry, but it still needs monitoring. See <a href=\"/tiktok-shop\" class=\"font-semibold underline\">our TikTok Shop integration service</a> if you need help with setup and reconciliation.",
    "faqs": [
      {
        "q": "What product information can sync from Shopify to TikTok Shop?",
        "a": "Supported fields depend on the current integration, market and category. Check titles, images, variants, pricing and product approval in Seller Center after the first sync."
      },
      {
        "q": "What if inventory counts differ between Shopify and TikTok Shop?",
        "a": "Pause affected listings if needed, inspect sync errors and warehouse mapping, reconcile the source of truth, then run a test order before resuming sales."
      },
      {
        "q": "How are TikTok Shop orders handled in Shopify?",
        "a": "Order import and fulfillment updates depend on the connected channel and configuration. Test payment, shipping status, cancellation and returns rather than assuming every event syncs."
      },
      {
        "q": "Why are my Shopify products rejected by TikTok Shop?",
        "a": "Common causes include category restrictions, missing required attributes, unsupported claims, image issues or account eligibility. Review the exact Seller Center rejection reason and current policy."
      }
    ]
  },
  "dropshipping-store-cost-to-build": {
    "title": "Dropshipping Store Cost in 2026: Real Build Pricing",
    "h1": "Dropshipping Store Cost in 2026: Real Build Pricing",
    "summary": "What does a dropshipping store cost in 2026? Compare UBE's $399 Starter, $799 Growth and $999 Premium builds, plus platform, supplier and marketing costs.",
    "quickAnswer": "UBE's published dropshipping store builds are $399 Starter, $799 Growth and $999 Premium, with different product limits and automation scopes. Platform subscriptions, supplier charges, samples and marketing budget are separate. Profit depends on products, fulfillment and acquisition costs.",
    "leadParagraph": "A build price is only one part of the budget. UBE's <a href=\"/dropshipping-store-offer\" class=\"font-semibold underline\">Starter, Growth and Premium store offer</a> runs $399, $799 and $999 respectively; each includes a different catalog and integration scope. Add platform fees, product samples, supplier charges, returns and any marketing spend before deciding what you can afford. For implementation options, see <a href=\"/services/dropshipping\" class=\"font-semibold underline\">our dropshipping setup service</a>.",
    "faqs": [
      {
        "q": "Does a store build price include Shopify or marketplace fees?",
        "a": "No. Platform subscriptions, marketplace fees and payment processing are separate from UBE's one-time build price unless your signed scope says otherwise."
      },
      {
        "q": "Is supplier automation included in the $399 Starter Package?",
        "a": "The published Starter scope covers storefront and basic product setup. Growth and Premium include broader supplier integration and automation; confirm the exact tools in the signed scope."
      },
      {
        "q": "How much should I budget for ads after launch?",
        "a": "There is no universal ad budget. Calculate expected contribution after product, shipping, fees and returns, then fund a small test you can afford to learn from. Ads are separate from store build pricing."
      },
      {
        "q": "What costs continue after the store launches?",
        "a": "Allow for platform and app subscriptions, supplier product and shipping charges, payment fees, returns, support, management and optional marketing. Review recurring costs before committing."
      }
    ]
  }
};
