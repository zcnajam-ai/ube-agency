/**
 * Unified Branding Experts — AI Concierge Knowledge Base
 * Official Grounded Reference for Services, Packages, Pricing, Deliverables & Case Studies.
 */

export interface ServiceKnowledge {
  slug: string;
  name: string;
  category: string;
  route: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  bestFor: string;
  startingPrice?: string;
  packageRoute?: string;
}

export interface PackageKnowledge {
  id: string;
  category: string;
  name: string;
  price: string;
  badge?: string;
  tagline: string;
  features: string[];
  route: string;
}

export interface ProjectKnowledge {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  deliverables: string[];
  route: string;
}

export const UBE_SERVICES_KNOWLEDGE: ServiceKnowledge[] = [
  {
    slug: "web-design-development",
    name: "Web Design & Custom Development",
    category: "Design & Code",
    route: "/services/web-design-development",
    packageRoute: "/web-design-packages",
    tagline: "High-Performance Modern Web Design & Next.js Architecture",
    summary:
      "We design and build bespoke, conversion-focused websites using Next.js, React, Tailwind CSS, and headless CMS integrations. Fast load times, responsive UI, and seamless user experiences.",
    deliverables: [
      "Custom responsive design (Desktop & Mobile)",
      "Next.js App Router & clean React architecture",
      "Headless CMS integration (Sanity / WordPress / Strapi)",
      "Technical on-page SEO & Schema markup",
      "Interactive micro-animations with GSAP / Framer Motion",
      "Conversion-optimized lead capture funnels",
    ],
    bestFor:
      "Businesses seeking a modern, fast, custom website that converts visitors into qualified clients.",
    startingPrice: "$399",
  },
  {
    slug: "shopify-development",
    name: "Shopify Store Setup & Theme Development",
    category: "eCommerce",
    route: "/services/shopify-development",
    packageRoute: "/our-website-development-packages",
    tagline: "High-Converting Shopify Stores & Liquid Theme Customization",
    summary:
      "Complete Shopify and Shopify Plus setup, custom 2.0 Liquid sections, app integrations, payment gateway routing, and responsive checkout optimization.",
    deliverables: [
      "Official Shopify 2.0 theme configuration",
      "Custom product page & collection layouts",
      "One-click checkout setup with Apple Pay, Shop Pay, PayPal",
      "Inventory & shipping profile configuration",
      "Clean 301 URL redirect mapping & rank protection",
      "Email marketing (Klaviyo) & review app integrations",
    ],
    bestFor:
      "DTC brands, retail sellers, and brands launching or scaling their independent online storefront.",
    startingPrice: "$499",
  },
  {
    slug: "ecommerce",
    name: "eCommerce Store Engineering & Headless Architecture",
    category: "eCommerce",
    route: "/services/ecommerce",
    packageRoute: "/our-custom-web-design-development-packages",
    tagline: "Scalable Multi-Channel Digital Storefronts",
    summary:
      "End-to-end commerce engineering covering custom catalog architecture, international multi-currency pricing, ERP feeds, and headless commerce platforms.",
    deliverables: [
      "Modular catalog & product filtering systems",
      "Multi-currency & international tax configuration",
      "Slide-out instant cart & automated cart recovery",
      "ERP / CRM inventory and customer syncing",
    ],
    bestFor:
      "High-SKU retailers and established businesses needing robust commerce infrastructure.",
    startingPrice: "$799",
  },
  {
    slug: "branding",
    name: "Brand Strategy & Logo Design",
    category: "Branding",
    route: "/services/branding",
    packageRoute: "/branding-packages",
    tagline: "Distinctive Visual Identities & Comprehensive Brand Guidelines",
    summary:
      "We craft enduring brand identity systems—from bespoke logo design and typography pairings to packaging die-lines, color architectures, and complete brand style bibles.",
    deliverables: [
      "Primary logo, secondary marks & monogram badges",
      "Curated typography pairings & color palettes",
      "Full vector asset kit (SVG, EPS, AI, PNG, PDF)",
      "Digital & physical brand style guidelines",
      "Packaging die-lines, labels & unboxing mockups",
      "Social media profile & template kits",
    ],
    bestFor:
      "New businesses launching with confidence or established brands undergoing a professional rebrand.",
    startingPrice: "$299",
  },
  {
    slug: "aiseo",
    name: "AI SEO, AEO & GEO Search Optimization",
    category: "Search & Visibility",
    route: "/services/aiseo",
    packageRoute: "/ai-seo-packages",
    tagline: "Optimize for Google Search, AI Overviews, ChatGPT & Perplexity",
    summary:
      "Next-generation search optimization combining traditional organic SEO with Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) using structured JSON-LD entity graphs.",
    deliverables: [
      "JSON-LD structured entity schema graphs",
      "Conversational answer architecture for AI Overviews",
      "Technical Core Web Vitals & crawl efficiency audit",
      "High-intent commercial keyword mapping",
      "IndexNow instant search engine pinging",
      "Authoritative editorial content strategy",
    ],
    bestFor:
      "Brands wanting to maintain top organic rankings and ensure visibility across AI answer engines.",
    startingPrice: "$349",
  },
  {
    slug: "google-ads",
    name: "Google Ads & Performance Max Campaigns",
    category: "Paid Advertising",
    route: "/services/google-ads",
    packageRoute: "/our-digital-marketing-packages",
    tagline: "High-Intent Search, Shopping & Performance Max Media Buying",
    summary:
      "Precision paid search management focusing on bottom-of-funnel customer intent, negative keyword scrubbing, Shopping feed optimization, and verified ROAS tracking.",
    deliverables: [
      "Search, Shopping & Performance Max setup",
      "Negative keyword lists & search term filtering",
      "Conversion tracking with Google Tag Manager",
      "Ad copywriting & headline variant testing",
      "Transparent bi-weekly reporting dashboards",
    ],
    bestFor:
      "Businesses seeking immediate, measurable lead flow or eCommerce product sales from searchers.",
    startingPrice: "$499/mo",
  },
  {
    slug: "meta-ads",
    name: "Meta Ads (Facebook & Instagram Paid Acquisition)",
    category: "Paid Advertising",
    route: "/services/meta-ads",
    packageRoute: "/our-digital-marketing-packages",
    tagline: "Creative-Led Paid Social Acquisition & Retargeting Funnels",
    summary:
      "Full-funnel Meta advertising campaigns blending scroll-stopping video/image ad creatives, server-side Conversions API (CAPI) tracking, and custom audience segmentation.",
    deliverables: [
      "Static & motion video ad creative development",
      "Server-side Meta Conversions API (CAPI) setup",
      "Audience prospecting, lookalikes & dynamic retargeting",
      "A/B creative testing matrix",
    ],
    bestFor:
      "eCommerce brands and visual service providers seeking scalable social media customer acquisition.",
    startingPrice: "$499/mo",
  },
  {
    slug: "tiktok-marketing",
    name: "TikTok Marketing & Paid Ads",
    category: "Social Commerce",
    route: "/services/tiktok-marketing",
    packageRoute: "/tiktok-marketing-packages",
    tagline: "Native Video Creative & Shoppable TikTok Advertising",
    summary:
      "Short-form video strategy, creator-style UGC ad production, Spark Ads management, and TikTok algorithm optimization.",
    deliverables: [
      "Native vertical video concepts and scripting",
      "TikTok Ads Manager campaign execution",
      "Spark Ads boosting of organic creator posts",
      "TikTok Pixel & Events API conversion tracking",
    ],
    bestFor:
      "Consumer brands, apparel, beauty, and digital products targeting high-engagement demographics.",
    startingPrice: "$399/mo",
  },
  {
    slug: "tiktok-shop-setup",
    name: "TikTok Shop Setup & Affiliate System",
    category: "Social Commerce",
    route: "/services/tiktok-shop-setup",
    packageRoute: "/tiktok-marketing-packages",
    tagline: "Sell Products Directly Inside TikTok Feeds & Creator Affiliate Portals",
    summary:
      "Complete TikTok Shop merchant registration, catalog synchronization with Shopify, and creator affiliate commission program configuration.",
    deliverables: [
      "TikTok Shop Seller Center verification",
      "Shopify product catalog sync & inventory linking",
      "TikTok Affiliate creator commission program setup",
      "Shoppable video product anchor tagging",
    ],
    bestFor:
      "eCommerce sellers wanting direct in-app checkout without sending users to external websites.",
    startingPrice: "$499",
  },
  {
    slug: "etsy-shop-setup",
    name: "Etsy Shop Setup & Marketplace SEO",
    category: "Marketplace",
    route: "/services/etsy-shop-setup",
    packageRoute: "/branding-packages",
    tagline: "Etsy Store Launch, Keyword Optimization & Packaging Standards",
    summary:
      "Professional shop banner branding, 13-tag keyword SEO, competitive pricing architecture, and shipping profile configuration for Etsy merchants.",
    deliverables: [
      "Custom Etsy shop banner and icon branding",
      "Product listing title & 13-tag keyword research",
      "Etsy payment & shipping profile configuration",
      "Customer packaging insert templates",
    ],
    bestFor:
      "Makers, vintage curators, custom apparel creators, and digital product merchants.",
    startingPrice: "$349",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development (iOS & Android)",
    category: "Engineering",
    route: "/services/mobile-app-development",
    packageRoute: "/mobile-app-packages",
    tagline: "Native & Cross-Platform Mobile Applications with React Native",
    summary:
      "Full-cycle mobile app engineering from UX wireframes and biometric device connections to cloud backend APIs and official App Store / Google Play publishing.",
    deliverables: [
      "Cross-platform React Native / Flutter codebase",
      "Intuitive mobile UX/UI with interactive prototypes",
      "Secure user authentication & cloud database syncing",
      "Push notifications, in-app purchases & camera/sensor access",
      "Complete App Store and Google Play review submission",
    ],
    bestFor:
      "Founders building software startups, health/fitness tech, or brands needing a dedicated customer mobile app.",
    startingPrice: "$1,499",
  },
  {
    slug: "ai-automation",
    name: "AI Automation & CRM Workflow Pipelines",
    category: "Automation",
    route: "/services/ai-automation",
    packageRoute: "/ai-automation-packages",
    tagline: "Automate Lead Follow-Up, AI Chatbots & Multi-System Pipelines",
    summary:
      "Custom AI agents, intelligent customer support chatbots, CRM workflow automations (HubSpot, GoHighLevel, Zapier, Make), and automated lead qualification sequences.",
    deliverables: [
      "Custom 24/7 AI chatbot tailored to company data",
      "Automated instant lead SMS/email follow-up sequences",
      "CRM pipeline routing & appointment booking automations",
      "Multi-app integration connecting eCommerce, forms, and databases",
    ],
    bestFor:
      "Service businesses and sales teams wanting to eliminate manual busywork and follow up instantly with every lead.",
    startingPrice: "$499",
  },
  {
    slug: "social-media-management",
    name: "Social Media Management & Content Strategy",
    category: "Content & Social",
    route: "/services/social-media-management",
    packageRoute: "/our-content-writing-packages",
    tagline: "Cohesive Visual Feeds, Content Creation & Community Engagement",
    summary:
      "Consistent, branded social media posting, custom graphic designs, short-form video editing, copywriting, and engagement monitoring across Instagram, LinkedIn, and Facebook.",
    deliverables: [
      "Monthly content calendar & graphic design",
      "Engaging captions with strategic hashtag sets",
      "Reels / Shorts video editing and cover design",
      "Active community comment & message monitoring",
    ],
    bestFor:
      "Brands needing an active, polished social media presence without spending 20+ hours a week creating content.",
    startingPrice: "$399/mo",
  },
];

export const UBE_PACKAGES_KNOWLEDGE: PackageKnowledge[] = [
  // Branding Packages
  {
    id: "branding-startup",
    category: "Branding",
    name: "Startup Identity Package",
    price: "$299",
    tagline: "Essential visual foundation for new ventures and independent creators.",
    features: [
      "2 Custom Logo Design Concepts",
      "High-Resolution Vector Formats (PNG, JPG, SVG)",
      "Primary Brand Color Palette (HEX & RGB)",
      "Curated Typography Pairings Guide",
      "Full Commercial Copyright Ownership",
      "3 Business Day Initial Delivery",
    ],
    route: "/branding-packages#branding-startup",
  },
  {
    id: "branding-classic",
    category: "Branding",
    name: "Classic Brand Kit",
    price: "$499",
    badge: "Most Popular",
    tagline: "Comprehensive visual identity system for growing commercial businesses.",
    features: [
      "4 Bespoke Logo Design Concepts",
      "Master Vector Asset Kit (AI, EPS, SVG, PNG, PDF)",
      "Secondary Marks, Watermarks & Monogram Badge",
      "Standard 10-Page Brand Guidelines PDF",
      "Social Media Avatar & Header Kit (3 Platforms)",
      "Print-Ready Double-Sided Business Card Design",
      "Unlimited Logo Revisions",
    ],
    route: "/branding-packages#branding-classic",
  },
  {
    id: "branding-growth",
    category: "Branding",
    name: "Growth Brand Ecosystem",
    price: "$899",
    tagline: "Full-scale corporate identity, collateral, and marketing asset matrix.",
    features: [
      "6 Premium Logo Concepts with 3D Mockup Visualizations",
      "Complete Brand Identity Bible (25+ Pages)",
      "Full Stationery Kit (Letterhead, Envelope, Invoice)",
      "Social Media Kit with 6 Editable Figma/Canva Templates",
      "Product Packaging / Label Concept Die-Line",
      "Dedicated Senior Art Director & Priority Support",
    ],
    route: "/branding-packages#branding-growth",
  },
  {
    id: "branding-enterprise",
    category: "Branding",
    name: "Enterprise Brand System",
    price: "$1,499",
    tagline: "Multi-touchpoint brand architecture for scaling firms and multi-product brands.",
    features: [
      "Comprehensive Brand Strategy Workshop & Positioning",
      "Bespoke Typography Licensing Recommendations",
      "Custom 3D Brand Mark & Animated Logo Intro (4K Video)",
      "Complete Retail & Digital Packaging Spec Sheet",
      "Investor Presentation Pitch Deck Template (15 Slides)",
      "Comprehensive Digital Brand Guidelines Portal",
    ],
    route: "/branding-packages#branding-enterprise",
  },
  {
    id: "branding-bespoke",
    category: "Branding",
    name: "Bespoke 360 Ecosystem",
    price: "$2,499",
    tagline: "Full omnichannel brand creation with custom 3D assets and web UI kit.",
    features: [
      "End-to-End Brand System Architecture",
      "Custom 3D Iconography & Illustrated Asset Library",
      "Complete Figma Design System & UI Component Kit",
      "Full Physical Product Unboxing & Packaging Die-Lines",
      "Multi-Regional Brand Localization Guidelines",
      "1-on-1 Creative Direction Consultation & Ongoing Advisory",
    ],
    route: "/branding-packages#branding-bespoke",
  },

  // AI SEO Packages
  {
    id: "aiseo-local",
    category: "AI SEO",
    name: "Local Entity AI SEO",
    price: "$349",
    tagline: "Essential structured data and local visibility optimization.",
    features: [
      "Google Business Profile & Local Entity Schema",
      "On-Page Technical Audit & Core Web Vitals Fixes",
      "Structured FAQ JSON-LD Implementation",
      "Local Citation & NAP Consistency Check",
      "Monthly Keyword & Local Answer Tracking",
    ],
    route: "/ai-seo-packages#aiseo-local",
  },
  {
    id: "aiseo-national",
    category: "AI SEO",
    name: "National AEO Growth",
    price: "$699",
    badge: "Most Popular",
    tagline: "Structured Answer Engine Optimization for commercial search queries.",
    features: [
      "Complete JSON-LD Entity Graph Architecture",
      "Answer Engine Optimization (AEO) for Google AI Overviews",
      "IndexNow Instant Search Engine Indexing Setup",
      "2 High-Intent Commercial Content Blueprints / Month",
      "Technical Core Web Vitals Optimization",
      "Competitor Gap Analysis & Citation Mapping",
    ],
    route: "/ai-seo-packages#aiseo-national",
  },
  {
    id: "aiseo-authority",
    category: "AI SEO",
    name: "Generative Authority Engine",
    price: "$1,299",
    tagline: "Comprehensive Generative Engine Optimization (GEO) across ChatGPT & Perplexity.",
    features: [
      "Full Entity & Brand Knowledge Graph Calibration",
      "Generative Engine Optimization (GEO) for ChatGPT & Perplexity",
      "4 Structured Editorial Pillar Articles / Month",
      "Advanced Schema: Article, Service, Organization & Breadcrumbs",
      "Search Engine Bot Accessibility & Crawl Optimization",
      "Dedicated Technical SEO Strategist",
    ],
    route: "/ai-seo-packages#aiseo-authority",
  },
  {
    id: "aiseo-enterprise",
    category: "AI SEO",
    name: "Enterprise Omni-Search",
    price: "$1,999",
    tagline: "Multi-category domination across conventional and AI search channels.",
    features: [
      "Custom Knowledge Graph API & Real-Time Data Sync",
      "8 Technical Long-Form Entity Guides / Month",
      "Multi-Domain & Sub-Brand Schema Governance",
      "Continuous Bot Log File Analysis & Crawl Budget Scaling",
      "Competitor AI Citation Monitoring & Sentiment Auditing",
      "Weekly Strategic Check-In & Custom Looker Studio Dashboard",
    ],
    route: "/ai-seo-packages#aiseo-enterprise",
  },
  {
    id: "aiseo-global",
    category: "AI SEO",
    name: "Global Search Dominance",
    price: "$2,999",
    tagline: "International multi-language AI search infrastructure and enterprise authority.",
    features: [
      "Multi-Language & Hreflang Entity Graph Localization",
      "Full-Scale Editorial Production Engine (12+ Articles/Month)",
      "High-Authority Digital PR & Entity Citation Network",
      "Executive Knowledge Graph & Thought Leadership Optimization",
      "Custom Crawl Engine & Instant API Discovery Pipeline",
      "24/7 Priority Support & Dedicated Senior Director",
    ],
    route: "/ai-seo-packages#aiseo-global",
  },

  // AI Automation Packages
  {
    id: "ai-auto-routing",
    category: "AI Automation",
    name: "Lead Routing & Follow-Up",
    price: "$499",
    tagline: "Instant automated lead notification, SMS/email sequences, and CRM pipeline routing.",
    features: [
      "Instant SMS & Email Lead Alerts (Under 60 seconds)",
      "CRM Pipeline Integration (HubSpot / GoHighLevel / Zapier)",
      "Multi-Step Automated Follow-Up Nurture Sequence",
      "Form & Webhook Verification Testing",
    ],
    route: "/ai-automation-packages",
  },
  {
    id: "ai-auto-chatbot",
    category: "AI Automation",
    name: "Omnichannel AI Chatbot",
    price: "$899",
    badge: "Recommended",
    tagline: "Trained 24/7 AI chatbot for website and social channels with lead capture.",
    features: [
      "Custom-Trained AI Chatbot Grounded in Company Data",
      "Website & WhatsApp / Instagram Direct Integration",
      "Automated Lead Qualification & Appointment Booking",
      "Live Human Handoff Notification System",
    ],
    route: "/ai-automation-packages",
  },
  {
    id: "ai-auto-crm",
    category: "AI Automation",
    name: "Full CRM Automation Engine",
    price: "$1,499",
    tagline: "End-to-end sales pipeline, invoicing, review collection, and operational workflows.",
    features: [
      "Complete Sales & Fulfillment Pipeline Automation",
      "Automated Customer Review Request Sequences",
      "Stripe / QuickBooks Invoicing Automation",
      "Weekly Performance Analytics & Error Monitoring",
    ],
    route: "/ai-automation-packages",
  },

  // TikTok Marketing Packages
  {
    id: "tiktok-starter",
    category: "TikTok Marketing",
    name: "Creator Starter Package",
    price: "$399",
    tagline: "Organic profile setup, video templates, and initial ad campaign structure.",
    features: [
      "TikTok Business Account Setup & Verification",
      "3 UGC-Style Video Concepts & Script Blueprints",
      "TikTok Ads Manager Pixel Setup",
      "Target Audience & Interest Mapping",
    ],
    route: "/tiktok-marketing-packages",
  },
  {
    id: "tiktok-viral",
    category: "TikTok Marketing",
    name: "Viral Scaling & Spark Ads",
    price: "$799",
    badge: "Popular",
    tagline: "Creator collaboration outreach, Spark Ads media buying, and weekly creative tests.",
    features: [
      "6 UGC Creator Video Creatives / Month",
      "Spark Ads Management & Bid Optimization",
      "TikTok Shop Affiliate Creator Program Setup",
      "Weekly Creative Performance Reporting",
    ],
    route: "/tiktok-marketing-packages",
  },

  // Mobile App Packages
  {
    id: "app-mvp",
    category: "Mobile Apps",
    name: "MVP Starter App",
    price: "$1,499",
    tagline: "Essential functional mobile application for startups and prototype validation.",
    features: [
      "Cross-Platform React Native (iOS & Android)",
      "Core UI/UX Screen Designs (Up to 8 Screens)",
      "User Authentication & Cloud Database Setup",
      "App Store & Google Play Submission Support",
    ],
    route: "/mobile-app-packages",
  },
  {
    id: "app-native",
    category: "Mobile Apps",
    name: "Production Native Application",
    price: "$2,999",
    badge: "Recommended",
    tagline: "Full-scale mobile application with payments, real-time sync, and push notifications.",
    features: [
      "Complete Custom UI/UX Design System (15+ Screens)",
      "Stripe In-App Purchases & Subscription Billing",
      "Push Notifications & Offline Local Storage",
      "Admin Analytics Dashboard & API Backend",
    ],
    route: "/mobile-app-packages",
  },
];

export const UBE_PROJECTS_KNOWLEDGE: ProjectKnowledge[] = [
  {
    slug: "everhome-real-estate-brand-system",
    title: "Everhome Modern Real Estate Brand Architecture & Visual System",
    client: "Everhome Real Estate",
    category: "Brand Strategy & Visual Identity System",
    summary:
      "A place that truly feels like home: Minimalist real estate visual language, custom geometric framing logomark, Gotham Pro typography, Moon Mist & Pastel Stone palette, and property catalogue / app design.",
    deliverables: ["Bespoke Geometric Logomark System", "Gotham Pro Typography & Color Spec", "Print Catalogue & Digital App Assets"],
    route: "/work/everhome-real-estate-brand-system",
  },
  {
    slug: "eaudacity-luxury-fragrance-brand-system",
    title: "Eau'dacity Luxury Fragrance & Visual Identity System",
    client: "Eau'dacity Parfums",
    category: "Brand Strategy & Packaging Architecture",
    summary:
      "A minimalist luxury identity system with Helvetica Neue Bold typography, amber glass bottle mockups, tactile folding cartons, and a direct-to-consumer digital storefront.",
    deliverables: ["Bespoke Packaging Asset Matrix", "Amber Glass Bottle System", "Omnichannel Retail & Digital Integration"],
    route: "/work/eaudacity-luxury-fragrance-brand-system",
  },
  {
    slug: "botane-plant-based-luxury-beauty",
    title: "Botāne Plant-Based Luxury Perfume & Visual Identity",
    client: "Botāne Beauty & Fragrance",
    category: "Botanical Branding & Packaging System",
    summary:
      "A botanical luxury identity combining Big Caslon CC serif typography, Cream (#F9E7D8) and Forest Green (#064E30) palette, eco-luxury packaging die-lines, and social commerce kits.",
    deliverables: ["Brand Bible & Style Guide", "Eco-Luxury Sustainable Packaging Spec", "Social Commerce & In-Store Guidelines"],
    route: "/work/botane-plant-based-luxury-beauty",
  },
  {
    slug: "bugle-chaser-outdoor-apparel-brand",
    title: "Bugle Chaser Outdoor Apparel & Lifestyle Brand Engine",
    client: "Bugle Chaser Outdoor Co.",
    category: "Apparel Merchandise & eCommerce Storefront",
    summary:
      "Archery elk mascot emblem, Legend M54 typography, technical apparel tech-packs, and an automated Shopify store with dropshipping supplier fulfillment.",
    deliverables: ["Merchandise SKU Lineup", "Dropshipping Fulfillment Flow", "Mobile-First Responsive Shopify Storefront"],
    route: "/work/bugle-chaser-outdoor-apparel-brand",
  },
  {
    slug: "apex-storefront-engine",
    title: "Apex Storefront & eCommerce Platform",
    client: "Apex Lifestyle Goods",
    category: "eCommerce & Shopify Plus",
    summary:
      "Next.js and Shopify Plus storefront architecture with restructured product catalog filtering, slide-out cart, and multi-currency checkout.",
    deliverables: ["Responsive Checkout Funnel", "Catalog Filter Architecture", "Multi-Currency Global Payment Processing"],
    route: "/work",
  },
  {
    slug: "aura-health-mobile-app",
    title: "Aura Connected Mobile Experience",
    client: "Aura Wellness Technologies",
    category: "Mobile Application (iOS & Android)",
    summary:
      "Cross-platform React Native health application with intuitive biometric data charts, offline-first SQLite caching, and Bluetooth device connectivity.",
    deliverables: ["Cross-Platform Single Codebase", "Offline-First Local Data Sync", "Production App Store Deployment"],
    route: "/work",
  },
];

export const UBE_COMPANY_KNOWLEDGE = {
  name: "Unified Branding Experts",
  shortName: "UBE",
  tagline: "We Build Brands That Move. Sell. Scale.",
  fullTagline: "Strategy, Creativity & Technology Unified Under One High-Performance Growth System",
  phone: "+1 224-266-8081",
  email: "info@unifiedbrandingexperts.com",
  location: "Texas, USA",
  experience: "15+ Years of Digital Craft",
  ratings: {
    trustpilot: "Verified Trustpilot Profile (Read Reviews)",
    google: "Verified Google Business Profile (Read Reviews)",
  },
  process: [
    { step: 1, name: "Discovery & Scope Alignment", desc: "Understanding goals, audience, and technical specs." },
    { step: 2, name: "Strategy & Architecture", desc: "Crafting wireframes, moodboards, and development roadmaps." },
    { step: 3, name: "Design & Engineering", desc: "Building custom visual identities, clean code, and fast web assets." },
    { step: 4, name: "Quality Assurance & Testing", desc: "Rigorous responsive testing, SEO auditing, and speed checks." },
    { step: 5, name: "Launch & Growth Scaling", desc: "Deployment, indexing, ad campaign activation, and ongoing support." },
  ],
};
