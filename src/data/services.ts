export interface SubService {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  kicker: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
  deliverableScope: string;
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  kicker: string;
  tagline: string;
  description: string;
  iconName: string;
  subServices: SubService[];
  highlights: string[];
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "commerce",
    number: "01",
    title: "COMMERCE & STOREFRONTS",
    kicker: "eCommerce Design & Development",
    tagline: "From Storefront to Scale — Professional Online Store Development",
    description:
      "We design, build, and configure professional eCommerce platforms with organized product collections, responsive mobile experiences, secure payment gateways, and reliable backend integrations.",
    iconName: "ShoppingBag",
    highlights: [
      "Custom Shopify & WooCommerce Storefronts",
      "Etsy Shop Setup & 13-Tag SEO Optimization",
      "TikTok Shop Seller Setup & Creator Affiliates",
      "Automated Dropshipping & Supplier Integrations",
      "Secure Payment Gateway & Shipping Zone Setup",
      "Mobile-Friendly Layouts & Fast Loading Performance",
    ],
    subServices: [
      {
        id: "ecommerce-store-setup",
        slug: "ecommerce",
        title: "eCommerce Growth & Marketplace Services",
        shortTitle: "eCommerce Growth",
        kicker: "Multi-Channel eCommerce",
        summary:
          "End-to-end eCommerce development and multi-channel marketplace strategy for Shopify, Amazon, Etsy, and eBay engineered to launch, optimize, and scale online stores.",
        deliverables: [
          "Custom Theme Architecture & UI/UX Design",
          "Cart & Checkout Navigation Optimization",
          "ERP, CRM, 3PL & Warehouse Synchronization",
          "Global Currency, Tax & Multi-region Shipping Setup",
          "Analytics, Tracking & Conversion Event Setup",
        ],
        technologies: ["Shopify Plus", "WooCommerce", "Stripe", "Klaviyo", "Next.js Commerce"],
        deliverableScope: "Complete Multi-Currency Store Architecture",
      },
      {
        id: "shopify-development-service",
        slug: "shopify-development",
        title: "Shopify Store Setup & Custom Theme Development",
        shortTitle: "Shopify Development",
        kicker: "Custom Shopify Stores",
        summary:
          "Custom Shopify theme builds, dropshipping automation, inventory sync, and responsive checkout flows engineered for simple purchasing.",
        deliverables: [
          "Custom Shopify Modular Theme Development",
          "Slide-out Cart Drawers & Upsell Configuration",
          "Automated Dropshipping Feeds (DSers, CJ, Zendrop)",
          "3PL Warehouse & ShipStation Integration",
          "Speed & Layout Performance Optimization",
        ],
        technologies: ["Shopify", "Liquid", "Storefront API", "Klaviyo", "ShipStation"],
        deliverableScope: "Turnkey Custom Shopify Store Launch",
      },
      {
        id: "dropshipping-setup-service",
        slug: "dropshipping",
        title: "Dropshipping Store Setup & Automation",
        shortTitle: "Dropshipping",
        kicker: "Automated Supplier Storefronts",
        summary:
          "Launch a professional dropshipping store with DSers, CJ Dropshipping, Zendrop, inventory sync, and automated order fulfillment.",
        deliverables: [
          "Shopify 2.0 Theme Customization & Layout",
          "Supplier App & Feed API Connection (DSers, CJ, Zendrop)",
          "Automated Inventory & Price Margin Synchronization",
          "Automated Supplier Order Routing & Tracking Sync",
          "Payment Gateway, Taxes & Custom Domain Setup",
        ],
        technologies: ["Shopify", "DSers", "CJ Dropshipping", "Zendrop", "Klaviyo"],
        deliverableScope: "Turnkey Dropshipping Store Launch",
      },
      {
        id: "etsy-shop-setup-service",
        slug: "etsy-shop-setup",
        title: "Etsy Shop Setup & Etsy SEO Optimization",
        shortTitle: "Etsy Shop Setup",
        kicker: "Etsy SEO & Launch",
        summary:
          "Turnkey Etsy shop launch covering shop branding banner kits, advanced 13-tag keyword SEO, lifestyle mockups, and Star Seller growth frameworks.",
        deliverables: [
          "Complete Etsy Seller Setup & Policy Configuration",
          "Desktop & Mobile Shop Banner Identity Kit",
          "Advanced 13-Tag Etsy SEO & Keyword Research",
          "Product Listing Copywriting & Organization",
          "Print-on-Demand (Printify/Printful) Integration",
        ],
        technologies: ["eRank", "Marmalead", "EverBee", "Printify", "Etsy API"],
        deliverableScope: "13/13 Tags Optimized per Listing",
      },
      {
        id: "tiktok-shop-setup-service",
        slug: "tiktok-shop-setup",
        title: "TikTok Shop Setup & Creator Affiliate Marketing",
        shortTitle: "TikTok Shop Setup",
        kicker: "Social Commerce Integration",
        summary:
          "Set up your verified TikTok Seller Center, sync your Shopify catalog, recruit Creator Affiliates, and configure Shoppable Video Ads.",
        deliverables: [
          "TikTok Seller Center Business Verification",
          "Real-Time Shopify & WooCommerce Catalog Sync",
          "Creator Affiliate Commission & Sample Workflows",
          "Shoppable In-Feed Video Ads & Spark Ads",
          "Live Shopping Setup & Policy Compliance",
        ],
        technologies: ["TikTok Seller Center", "TikTok Events API", "Shopify Connector", "Spark Ads"],
        deliverableScope: "Full TikTok Seller Center & Catalog Sync",
      },
    ],
  },
  {
    id: "digital-experiences",
    number: "02",
    title: "DIGITAL EXPERIENCES & APPS",
    kicker: "Full-Stack Web & Mobile Engineering",
    tagline: "Custom Web Platforms and Mobile Applications Built for Modern Brands",
    description:
      "We build responsive digital products — from custom corporate websites to cross-platform mobile apps. Every interface is designed with visual refinement and structured for stability and speed.",
    iconName: "Code2",
    highlights: [
      "Next.js App Router & React Modern Stack",
      "iOS & Android Native / Cross-Platform Apps",
      "Custom Web Applications & Portal Systems",
      "High-Performance Editorial & Corporate Sites",
      "Figma-to-Code Precision & Responsive UI",
    ],
    subServices: [
      {
        id: "web-design-dev",
        slug: "web-design-development",
        title: "Website Design & Custom Web Development",
        shortTitle: "Websites & Web Apps",
        kicker: "High-Performance Web Development",
        summary:
          "Custom-coded web experiences combining clear typography, responsive layouts, and robust backend integrations that position your brand effectively.",
        deliverables: [
          "Custom Interactive UI/UX Design & Prototypes",
          "Responsive Next.js / TypeScript Web Architecture",
          "Tailwind CSS Layouts & Smooth Micro-Interactions",
          "Headless CMS (Sanity, Strapi, WordPress Headless)",
          "Performance, Accessibility & SEO Architecture",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
        deliverableScope: "Custom Full-Stack Web Development",
      },
      {
        id: "mobile-app-dev",
        slug: "mobile-app-development",
        title: "Mobile Application Development",
        shortTitle: "Mobile Apps (iOS & Android)",
        kicker: "Native & Cross-Platform Apps",
        summary:
          "Intuitive mobile applications engineered for user engagement, fast load times, offline resilience, and seamless API connectivity.",
        deliverables: [
          "Native iOS (Swift) & Android (Kotlin) / React Native",
          "UX Wireframing & Interaction Design",
          "Push Notification Strategy & Background Sync",
          "App Store (iOS) & Google Play Store Publishing",
          "Cloud Backend & Serverless API Architecture",
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "PostgreSQL"],
        deliverableScope: "Complete iOS & Android App Development",
      },
      {
        id: "ai-automation-dev",
        slug: "ai-automation",
        title: "AI Automation & Workflow Systems",
        shortTitle: "AI Automation",
        kicker: "Intelligent Workflows",
        summary:
          "Custom AI automation workflows, CRM lead routing, customer qualification chatbots, and multi-app integrations built to streamline repetitive business operations.",
        deliverables: [
          "Custom LLM & Chatbot Integration",
          "Automated CRM Lead Scoring & Routing",
          "Multi-Platform Workflow Sync (Zapier/Make/API)",
          "Data Extraction & Automated Reporting Pipelines",
          "Internal Knowledge Base Integration",
        ],
        technologies: ["OpenAI API", "Make.com", "Zapier", "Python", "Node.js", "PostgreSQL"],
        deliverableScope: "Custom Workflow Automation Architecture",
      },
    ],
  },
  {
    id: "brand-strategy",
    number: "03",
    title: "BRAND STRATEGY & IDENTITY",
    kicker: "Visual Systems & Creative Direction",
    tagline: "Visual Identities That Establish Credibility and Recognition",
    description:
      "A strong brand provides the strategic foundation of trust, recognition, and perceived value. We construct memorable visual languages, comprehensive design guidelines, and compelling brand narratives.",
    iconName: "Sparkles",
    highlights: [
      "Custom Logo Systems & Wordmarks",
      "Comprehensive Brand Style Guides & Kits",
      "Typography Hierarchies & Color Palettes",
      "Corporate Collateral & Packaging Assets",
      "Creative Direction & Brand Evolution",
    ],
    subServices: [
      {
        id: "branding-identity",
        slug: "branding",
        title: "Branding, Logo Design & Visual Guidelines",
        shortTitle: "Brand Identity",
        kicker: "Distinctive Visual Systems",
        summary:
          "Transform your company with a cohesive brand identity that communicates authority, elevates market positioning, and builds customer recognition.",
        deliverables: [
          "Logo Design Suites (Primary, Secondary, Monogram, Favicon)",
          "Brand Guidelines, Color Palette & Typography Hierarchy",
          "Social Media Kit, Vector Assets & Print Collateral",
          "Tone of Voice, Messaging Framework & Brand Story",
          "Digital Badges & Custom Iconography",
        ],
        technologies: ["Figma", "Adobe Illustrator", "After Effects", "Photoshop"],
        deliverableScope: "100% Custom Vector Asset Matrix",
      },
    ],
  },
  {
    id: "growth-marketing",
    number: "04",
    title: "GROWTH & SEARCH OPTIMIZATION",
    kicker: "Search Visibility, Paid Media & Content Engines",
    tagline: "Structured Campaigns Designed to Connect with High-Intent Buyers",
    description:
      "Search is evolving across search engines and conversational AI discovery tools. We combine search optimization, structured technical SEO, and targeted paid acquisition into cohesive growth systems.",
    iconName: "TrendingUp",
    highlights: [
      "AI Search Optimization (GEO & AEO Strategies)",
      "Structured Data & JSON-LD Entity Graph Schema",
      "Targeted Google Ads (Search, Shopping, Performance Max)",
      "Meta Ads (Facebook & Instagram Creative Funnels)",
      "TikTok Video Advertising & Social Media Management",
    ],
    subServices: [
      {
        id: "digital-marketing-hub",
        slug: "digital-marketing",
        title: "Digital Marketing Services | Google Ads, Meta Ads & TikTok",
        shortTitle: "Digital Marketing",
        kicker: "Multi-Channel Paid Growth & Advertising",
        summary:
          "Integrated paid acquisition and marketing strategy combining Google Ads, Meta Ads (Facebook & Instagram), TikTok Marketing, and paid social performance funnels engineered for scalable ROI.",
        deliverables: [
          "Multi-Channel Campaign Strategy & Media Buying",
          "Google Search, Shopping & Performance Max Campaigns",
          "Meta Ads (Facebook & Instagram) Direct Response Funnels",
          "TikTok Video Ads & Creator Spark Ad Integration",
          "Server-Side Tracking (CAPI, GA4, GTM) & Live ROI Dashboards",
        ],
        technologies: ["Google Ads", "Meta Ads Manager", "TikTok Ads Manager", "GA4", "Meta CAPI"],
        deliverableScope: "Full Omnichannel Digital Marketing Strategy",
      },
      {
        id: "aiseo-search",
        slug: "aiseo",
        title: "AI Search Optimization & Structured Content",
        shortTitle: "AI SEO & GEO/AEO",
        kicker: "Modern Search Visibility",
        summary:
          "Structure your website for search engines and AI discovery tools like ChatGPT Search and Google AI Overviews. We organize entity schema and answer-first content for clear indexability.",
        deliverables: [
          "Generative Search Optimization Strategy",
          "Answer Engine Schema & JSON-LD Entity Graphs",
          "Entity Architecture & Authority Alignment",
          "Semantic Content Structuring for Clear Indexing",
          "Technical Core Web Vitals & Search Console Audit",
        ],
        technologies: ["JSON-LD Graphs", "Schema.org", "Google Search Console", "Ahrefs"],
        deliverableScope: "Structured Entity & Answer Schema Setup",
      },
      {
        id: "google-ads",
        slug: "google-ads",
        title: "Google Ads & Performance Max Campaigns",
        shortTitle: "Google Ads",
        kicker: "High-Intent Search Campaigns",
        summary:
          "Connect with active buyers searching for your products. We build precision-targeted Google Search, Shopping, and Performance Max campaigns backed by conversion value tracking.",
        deliverables: [
          "High-Intent Keyword Architecture & Negative Match Filtering",
          "Performance Max & Smart Bidding Asset Group Setup",
          "Dedicated Landing Page Alignment",
          "Server-Side Conversion Tracking & GA4 Integration",
          "A/B Ad Copy Testing & Ongoing Budget Optimization",
        ],
        technologies: ["Google Ads", "Google Tag Manager", "Google Analytics 4", "Looker Studio"],
        deliverableScope: "Full Google Search & Shopping Management",
      },
      {
        id: "meta-ads",
        slug: "meta-ads",
        title: "Meta Ads (Facebook & Instagram Funnels)",
        shortTitle: "Meta Ads",
        kicker: "Visual Social Campaigns",
        summary:
          "Engage prospective buyers with structured visual creative, direct-response copy, dynamic catalog ads, and smart retargeting sequences.",
        deliverables: [
          "Creative Strategy & High-Velocity Ad Iterations",
          "Audience Segmentation & Catalog Retargeting",
          "Meta Conversions API (CAPI) Server Tracking",
          "Custom & Lookalike Audience Setup",
          "Mobile-Optimized Landing Page Testing",
        ],
        technologies: ["Meta Ads Manager", "Meta CAPI", "Creative Studio"],
        deliverableScope: "End-to-End Meta Campaign Management",
      },
      {
        id: "tiktok-marketing",
        slug: "tiktok-marketing",
        title: "TikTok Ads & Short-Form Video Marketing",
        shortTitle: "TikTok Ads",
        kicker: "Short-Form Video Strategy",
        summary:
          "Produce native short-form video concepts and targeted ads that drive brand discoverability and product engagement on TikTok.",
        deliverables: [
          "Short-Form Video Concepting & Scripting Strategy",
          "Spark Ads & Creator Partnership Integration",
          "TikTok Pixel & Events API Configuration",
          "Trend Identification & Creative Refresh Cycles",
          "Campaign Funnel & Conversion Tracking",
        ],
        technologies: ["TikTok Ads Manager", "TikTok Events API", "CapCut Pro"],
        deliverableScope: "TikTok Ad Production & Management",
      },
      {
        id: "social-media-management",
        slug: "social-media-management",
        title: "Social Media Management & Content Strategy",
        shortTitle: "Social Media Management",
        kicker: "Omnichannel Brand Presence",
        summary:
          "Build an engaged community. We manage your social content across LinkedIn, Instagram, Facebook, and Threads with cohesive visual aesthetics and consistent value delivery.",
        deliverables: [
          "Monthly Editorial Content Calendar & Strategic Themes",
          "Custom Branded Graphic Design & Carousels",
          "Community Engagement & Inbound Inquiry Routing",
          "Cross-Platform Distribution & Tagging",
          "Monthly Performance Reporting & Review",
        ],
        technologies: ["Later", "Hootsuite", "Adobe Creative Cloud", "Figma"],
        deliverableScope: "Complete Monthly Social Publishing",
      },
    ],
  },
];

export const ALL_SERVICES: SubService[] = SERVICE_PILLARS.flatMap((p) => p.subServices);

export function getServiceBySlug(slug: string): SubService | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}
