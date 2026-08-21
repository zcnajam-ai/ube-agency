export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  tagline: string;
  year: string;
  platform: string;
  services: string[];
  summary: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: Array<{
    metric: string;
    label: string;
  }>;
  heroImage: string;
  galleryImages: string[];
  technologies: string[];
  accentColor: string;
  typography?: string;
  palette?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "fixoria-studio",
    slug: "fixoria-studio-brand-identity-system",
    title: "Fixoria Studio Modern Brand Architecture & Product System",
    client: "Fixoria Studio",
    category: "Brand Strategy & Product Identity System",
    tagline: "Explore efficient solutions: Modern geometric 'F' logomark, signature Cyber Yellow palette, and complete print collateral / merchandise kit",
    year: "2026",
    platform: "Figma / Adobe Illustrator / Print & Merch Architecture",
    services: ["Brand Strategy & Identity", "Vector Logomark Architecture", "Stationery & Collateral Kit", "Merchandise & Apparel Design"],
    summary:
      "A bold, modern visual identity and product system engineered for Fixoria Studio. Featuring a signature geometric 'F' logomark with an integrated directional corner triangle, vibrant Cyber Yellow (#FFE600) and Dark Charcoal (#1E1F24) color dynamics, employee badge systems, outdoor apparel, merchandise tote bags, and mobile app UI guidelines.",
    challenge:
      "Developing a high-energy, memorable corporate visual identity that bridges modern digital software utility with tangible physical merchandise and corporate stationery.",
    strategy:
      "We crafted a bold geometric 'F' emblem framed by clean architectural grids, paired with high-contrast Cyber Yellow (#FFE600) and Charcoal typography to project efficiency, confidence, and creative precision.",
    execution:
      "We delivered primary logomark matrices, employee identification badges, premium embroidered headwear & merchandise tote bags, dual-tone business cards, boardroom acrylic signage, and mobile application UI icons.",
    results: [
      { metric: "100%", label: "Bespoke Geometric 'F' Vector Architecture" },
      { metric: "Omnichannel", label: "Print Stationery, ID Badges & Merch Kit" },
      { metric: "Complete", label: "Mobile App UI & Social Brand System" },
    ],
    heroImage: "/images/projects/fixoria/hero.png",
    galleryImages: [
      "/images/projects/fixoria/hero.png",
      "/images/projects/fixoria/showcase-1.png",
      "/images/projects/fixoria/showcase-2.png",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Space Grotesk", "Merchandise Tech Packs"],
    accentColor: "#FFE600",
    typography: "Space Grotesk & Outfit (Bold, Medium, Regular)",
    palette: ["#FFE600", "#1E1F24", "#FFFFFF"],
    testimonial: {
      quote:
        "Unified Branding Experts captured Fixoria's vision with extraordinary clarity. The bold yellow and black identity system instantly elevated our brand presence across digital apps, stationery, and team merchandise.",
      author: "Milan Jak",
      role: "Operations Director, Fixoria Studio",
    },
  },
  {
    id: "happy-knot-creations",
    slug: "happy-knot-creations-shopify-storefront",
    title: "Happy Knot Creations Custom Shopify Storefront & Brand Experience",
    client: "Happy Knot Creations",
    category: "eCommerce & Shopify D2C Storefront",
    tagline: "Handmade Crochet Plushies & Custom Amigurumi: Bespoke Shopify 2.0 storefront, mobile-first product catalog, and optimized D2C checkout",
    year: "2026",
    platform: "Shopify 2.0 / Liquid / Custom Checkout",
    services: [
      "Custom Shopify Storefront",
      "Brand Identity & Creative Direction",
      "AISEO & Content Optimization",
      "Social Media Management & Reels",
    ],
    summary:
      "A bespoke direct-to-consumer Shopify storefront and complete brand ecosystem engineered for Happy Knot Creations (happyknotcreations.com). Designed specifically for artisanal handcrafted crochet plushies, custom amigurumi, and nursery gifts with intuitive collection categorization, high-resolution product galleries, structured AISEO content architecture, and a cohesive social media content strategy.",
    challenge:
      "Transitioning a handcrafted artisan boutique from marketplace fee dependency (Etsy) to an independent, high-converting branded Shopify storefront with full ownership over visual identity, customer relationships, search engine discovery, and social media growth.",
    strategy:
      "We engineered a complete brand experience: custom logo refinement, Playfair & Quicksand typography, warm blush & sage color palette, structured AISEO schema markup, and mobile-first Shopify theme design with instant Shop Pay checkout.",
    execution:
      "We designed custom Liquid collection templates, multi-variant plushie product pages, AI-powered product descriptions and blog content planning, custom packaging inserts and care guides, and social media reel content templates.",
    results: [
      { metric: "100%", label: "Bespoke Shopify 2.0 Storefront & Brand System" },
      { metric: "Direct D2C", label: "Independent Brand Storefront & Domain" },
      { metric: "Structured", label: "AISEO Content & Social Media Strategy" },
    ],
    heroImage: "/images/projects/happy-knot/hero.png",
    galleryImages: [
      "/images/projects/happy-knot/hero.png",
      "/images/projects/happy-knot/storefront-design.png",
      "/images/projects/happy-knot/brand-identity.png",
      "/images/projects/happy-knot/aiseo-content.png",
      "/images/projects/happy-knot/social-media.png",
    ],
    technologies: ["Shopify 2.0", "Liquid", "AISEO & Schema Markup", "Figma / Brand Identity", "Social Media Management"],
    accentColor: "#B79BD6",
    typography: "Playfair Display, Quicksand & Nunito",
    palette: ["#F7B7C2", "#B79BD6", "#A8B987", "#FFF7F1", "#E9A3B0"],
    testimonial: {
      quote:
        "Unified Branding Experts built an online store and visual system that truly reflects the love and craft behind Happy Knot Creations. Our collectors and gift shoppers love how simple and fast it is to order directly from us.",
      author: "Happy Knot Creations Team",
      role: "Founders, Happy Knot Creations",
    },
  },
  {
    id: "everhome-real-estate",
    slug: "everhome-real-estate-brand-system",
    title: "Everhome Modern Real Estate Brand Architecture & Visual System",
    client: "Everhome Real Estate",
    category: "Brand Strategy & Visual Identity System",
    tagline: "A place that truly feels like home: Minimalist real estate visual language, custom logomark, and multi-channel asset matrix",
    year: "2026",
    platform: "Figma / Adobe Illustrator / Print & Digital",
    services: ["Custom Logo Design", "Visual Identity System", "Brand Strategy", "Stationery & Collateral"],
    summary:
      "Everhome is a modern real estate company that helps people find not just square metres, but a place that truly feels like home. The brand name reflects the idea of 'home forever'—a space where roots are built, memories are created, and a sense of stability begins. The brand identity combines a contemporary approach with warmth and comfort, emphasizing trust, stability, and care through clean geometric forms and a restrained earthy palette.",
    challenge:
      "Establishing an authentic, reassuring real estate identity that communicates institutional reliability and investment safety while delivering modern aesthetic warmth and approachable elegance.",
    strategy:
      "We crafted a geometric framing logomark inspired by the hand gesture of photographers searching for the perfect composition, paired with the clarity of Gotham Pro typography and a nature-inspired architectural color palette.",
    execution:
      "We engineered the complete brand identity system: primary logomarks and safe zone matrices, Gotham Pro typography guidelines, Moon Mist & Pastel Stone color specs, property catalogues, agent ID badges, stationery kits, and mobile application UI components.",
    results: [
      { metric: "100%", label: "Bespoke Geometric Logomark System" },
      { metric: "Complete", label: "Gotham Pro Typography & Color Spec" },
      { metric: "Omnichannel", label: "Print Catalogue & Digital App Assets" },
    ],
    heroImage: "/images/projects/everhome/hero.jpg",
    galleryImages: [
      "/images/projects/everhome/showcase-1.jpg",
      "/images/projects/everhome/showcase-2.jpg",
      "/images/projects/everhome/showcase-3.jpg",
      "/images/projects/everhome/showcase-4.jpg",
      "/images/projects/everhome/showcase-5.jpg",
      "/images/projects/everhome/showcase-6.jpg",
      "/images/projects/everhome/showcase-7.jpg",
      "/images/projects/everhome/showcase-8.jpg",
      "/images/projects/everhome/showcase-9.jpg",
      "/images/projects/everhome/showcase-10.jpg",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Gotham Pro Typography", "Architectural Mockups"],
    accentColor: "#989388",
    typography: "Gotham Pro (Bold, Medium, Regular, Light)",
    palette: ["#E4E7DD", "#D0CEC1", "#989388", "#1E1F1D", "#FFFFFF"],
    testimonial: {
      quote:
        "The visual identity and brand system created by Unified Branding Experts gave Everhome an immediate sense of warmth, trust, and architectural elegance. Clients and property developers resonated with our vision instantly.",
      author: "Marcus Lindqvist",
      role: "Managing Director, Everhome Real Estate",
    },
  },
  {
    id: "eaudacity-fragrance",
    slug: "eaudacity-luxury-fragrance-brand-system",
    title: "Eau'dacity Luxury Fragrance & Visual Identity System",
    client: "Eau'dacity Parfums",
    category: "Brand Strategy & Packaging Architecture",
    tagline: "Monochromatic luxury identity, bespoke bottle packaging, and high-converting fragrance storefront",
    year: "2025",
    platform: "Shopify / Figma / Cinema 4D",
    services: ["Brand Strategy & Logo", "Luxury Packaging Design", "Typography & Color Systems", "eCommerce Experience"],
    summary:
      "A minimalist brand system for Eau'dacity luxury perfumery. Featuring monochromatic typography (Helvetica Neue Bold), premium gold/amber glass bottle packaging, tactile retail unboxing systems, and a direct-to-consumer digital storefront.",
    challenge:
      "Creating an unmistakably modern, high-end aesthetic that stands out in the luxury fragrance space while maintaining stark visual elegance across physical packaging, digital media, and retail signage.",
    strategy:
      "We recommended a high-contrast monochromatic identity system paired with warm amber glass product photography and minimalist packaging typography to emphasize premium craft.",
    execution:
      "We designed custom logomarks, secondary seals, embossed folding cartons, glass bottle mockups, social media editorial templates, and a streamlined direct-to-consumer storefront.",
    results: [
      { metric: "100%", label: "Bespoke Packaging Asset Matrix" },
      { metric: "Custom", label: "Amber Glass Bottle System" },
      { metric: "Omnichannel", label: "Retail & Digital Integration" },
    ],
    heroImage: "/images/projects/eaudacity/hero.jpg",
    galleryImages: [
      "/images/projects/eaudacity/showcase-0.jpg",
      "/images/projects/eaudacity/showcase-2.jpg",
      "/images/projects/eaudacity/showcase-7.jpg",
      "/images/projects/eaudacity/showcase-8.jpg",
      "/images/projects/eaudacity/showcase-9.jpg",
      "/images/projects/eaudacity/showcase-10.jpg",
    ],
    technologies: ["Figma", "Adobe Illustrator", "3D Packaging Mockups", "Shopify"],
    accentColor: "#C8A265",
    typography: "Helvetica Neue Bold",
    palette: ["#000000", "#FFFFFF", "#C8A265", "#FAF7F6"],
    testimonial: {
      quote:
        "The brand system and packaging design by Unified Branding Experts gave Eau'dacity an immediate aura of luxury and prestige. Retail buyers and online customers were captivated from day one.",
      author: "Camille Laurent",
      role: "Founder & Master Perfumer, Eau'dacity",
    },
  },
  {
    id: "botane-beauty",
    slug: "botane-plant-based-luxury-beauty",
    title: "Botāne Plant-Based Luxury Perfume & Visual Identity",
    client: "Botāne Beauty & Fragrance",
    category: "Botanical Branding & Packaging System",
    tagline: "Bloom Your Beauty: Organic botanical perfume branding, luxury packaging, and retail visual system",
    year: "2026",
    platform: "Shopify / Adobe Suite / Print Packaging",
    services: ["Brand Identity & Logo", "Eco-Luxury Packaging Design", "Social Commerce Strategy", "Retail Display Guidelines"],
    summary:
      "A bespoke botanical luxury brand identity for Botāne Plant-Based Perfume. Integrating classic Big Caslon CC and contemporary Azo Sans typography, an earthy palette of Cream (#F9E7D8), Forest Green (#064E30), and Deep Noir (#161616), custom glass bottles, eco-friendly folding cartons, and curated social media commerce kits.",
    challenge:
      "Bridging the gap between 100% plant-based organic ethics and ultra-premium luxury aesthetics without falling into generic greenwashing tropes.",
    strategy:
      "We paired classic editorial serif typography with rich botanical green accents and tactile embossed packaging to communicate clean formulation with luxury heritage.",
    execution:
      "We created custom floral ligature logomarks, geometric foliage patterns, luxury packaging die-lines, retail counter displays, and curated social media launch kits.",
    results: [
      { metric: "Complete", label: "Brand Bible & Style Guide" },
      { metric: "Eco-Luxury", label: "Sustainable Packaging Spec" },
      { metric: "Omnichannel", label: "Social Commerce & In-Store" },
    ],
    heroImage: "/images/projects/botane/hero.jpg",
    galleryImages: [
      "/images/projects/botane/showcase-7.jpg",
      "/images/projects/botane/showcase-6.jpg",
      "/images/projects/botane/showcase-5.jpg",
      "/images/projects/botane/showcase-8.jpg",
      "/images/projects/botane/showcase-2.jpg",
      "/images/projects/botane/showcase-1.jpg",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Cinema 4D", "Shopify"],
    accentColor: "#064E30",
    typography: "Big Caslon CC / Azo Sans",
    palette: ["#F9E7D8", "#064E30", "#161616", "#FFFFFF"],
    testimonial: {
      quote:
        "Botāne's visual identity and packaging designed by UBE elevated our organic perfume to the level of heritage luxury houses. It gives our customers a truly magical unboxing experience.",
      author: "Aria Montgomery",
      role: "Founder & Creative Director, Botāne",
    },
  },
  {
    id: "bugle-chaser-apparel",
    slug: "bugle-chaser-outdoor-apparel-brand",
    title: "Bugle Chaser Outdoor Apparel & Lifestyle Brand Engine",
    client: "Bugle Chaser Outdoor Co.",
    category: "Apparel Merchandise & eCommerce Storefront",
    tagline: "Outdoor apparel branding, rugged merchandise lineup, and automated Shopify store",
    year: "2025",
    platform: "Shopify / Print-on-Demand & Dropshipping",
    services: ["Logo & Mascot Design", "Apparel & Merchandise Design", "Shopify Store Setup", "Social Video Advertising"],
    summary:
      "A complete lifestyle brand ecosystem for Bugle Chaser outdoor and hunting apparel. Combining the rugged Legend M54 and Robotto typography, Forest Black and Neon Green (#8BC53F) color system, technical merchandise (hoodies, headwear, flasks, outdoor gear), and a mobile-first eCommerce storefront.",
    challenge:
      "Creating an authentic outdoor brand identity with broad appeal to hunting and outdoor enthusiasts while establishing a seamless direct-to-consumer apparel store with automated fulfillment.",
    strategy:
      "We developed a high-visibility archery elk motif, high-contrast merchandise apparel mockups, and an automated Shopify store integrated with supplier dropshipping fulfillment.",
    execution:
      "We produced the master mascot emblem, hoodie & headwear collection tech-packs, Shopify storefront theme setup, payment gateway configuration, and short-form ad creatives.",
    results: [
      { metric: "15+", label: "Merchandise SKUs Configured" },
      { metric: "Automated", label: "Dropshipping Fulfillment Flow" },
      { metric: "Mobile-First", label: "Responsive Shopify Theme" },
    ],
    heroImage: "/images/projects/bugle-chaser/hero.jpg",
    galleryImages: [
      "/images/projects/bugle-chaser/showcase-4.jpg",
      "/images/projects/bugle-chaser/showcase-5.jpg",
      "/images/projects/bugle-chaser/showcase-7.jpg",
      "/images/projects/bugle-chaser/showcase-8.jpg",
      "/images/projects/bugle-chaser/showcase-13.jpg",
      "/images/projects/bugle-chaser/showcase-17.jpg",
    ],
    technologies: ["Illustrator", "Photoshop", "Shopify", "TikTok Ads Manager", "Meta Ads"],
    accentColor: "#8BC53F",
    typography: "Legend M54 / Robotto",
    palette: ["#000000", "#8BC53F", "#FFFFFF", "#FAF7F6"],
    testimonial: {
      quote:
        "UBE nailed our vision on the first pass. From the emblem to our hats, hoodies, and storefront, they built a brand that our community wears with genuine pride.",
      author: "Hunter Sterling",
      role: "Founder, Bugle Chaser",
    },
  },
  {
    id: "apex-commerce",
    slug: "apex-storefront-engine",
    title: "Apex Storefront & eCommerce Platform",
    client: "Apex Lifestyle Goods",
    category: "eCommerce & Shopify Plus",
    tagline: "Clean Shopify Plus storefront architecture with structured product collections and streamlined checkout",
    year: "2025",
    platform: "Shopify Plus / Next.js",
    services: ["Shopify Plus", "Theme Customization", "Payment Gateways", "Collection Architecture"],
    summary:
      "A complete re-engineering of an online retail store. We developed a clean Next.js and Shopify Plus storefront, organized high-volume product catalogs, and optimized the mobile shopping experience.",
    challenge:
      "The client experienced mobile navigation friction and complex product filters during high-traffic sales events, leading to buyer hesitation and cart drop-offs.",
    strategy:
      "We restructured product categories with clean filtering, introduced an instant slide-out cart, and configured one-click mobile checkout with Apple Pay and Shop Pay.",
    execution:
      "We built custom Shopify Liquid templates, optimized product imagery pipelines, connected ERP inventory feeds, and implemented multi-currency pricing rules.",
    results: [
      { metric: "Mobile-First", label: "Responsive Checkout Funnel" },
      { metric: "Optimized", label: "Catalog Filter Architecture" },
      { metric: "Multi-Currency", label: "Global Payment Processing" },
    ],
    heroImage: "/images/projects/project-ecommerce-1.webp",
    galleryImages: [
      "/images/projects/project-ecommerce-1.webp",
      "/images/projects/project-ecommerce-2.webp",
    ],
    technologies: ["Next.js", "Shopify Plus", "Tailwind CSS", "Stripe", "Klaviyo"],
    accentColor: "#9F8BE7",
    testimonial: {
      quote:
        "Unified Branding Experts transformed our online store into a responsive, easy-to-manage platform. The checkout process is clean and our customers love the mobile navigation.",
      author: "David Vance",
      role: "VP of Digital, Apex Lifestyle",
    },
  },
  {
    id: "vanguard-identity",
    slug: "vanguard-brand-system",
    title: "Vanguard Brand Architecture & Visual System",
    client: "Vanguard Capital Partners",
    category: "Brand Strategy & Identity",
    tagline: "Corporate rebranding, typography guidelines, and digital asset kit",
    year: "2025",
    platform: "Figma / Digital Asset Bible",
    services: ["Brand Strategy", "Logo Design", "Visual Guidelines", "Typography System"],
    summary:
      "A comprehensive brand identity for an institutional advisory firm. We developed a timeless typographic identity, geometric monogram, precision grid systems, and a digital brand guidelines kit.",
    challenge:
      "Vanguard's legacy visual branding lacked visual hierarchy across their divisions and failed to project modern technical sophistication.",
    strategy:
      "We designed an authoritative geometric monogram paired with bespoke typography and a deep obsidian and champagne palette codified in a comprehensive brand guidelines guide.",
    execution:
      "We crafted vector logo packages, corporate stationery templates, digital presentation decks, social media asset templates, and web UI component guidelines.",
    results: [
      { metric: "Unified", label: "Across 8 Divisional Sub-Brands" },
      { metric: "60+ Pages", label: "Comprehensive Brand Guidelines" },
      { metric: "Complete", label: "Master Vector Asset Matrix" },
    ],
    heroImage: "/images/projects/project-brand-1.webp",
    galleryImages: [
      "/images/projects/project-brand-1.webp",
      "/images/projects/project-brand-2.webp",
    ],
    technologies: ["Figma", "Illustrator", "After Effects", "Cinema 4D"],
    accentColor: "#38BDF8",
    testimonial: {
      quote:
        "The brand kit and guidelines developed by UBE gave our company an unmistakable visual foundation that our clients and partners immediately commended.",
      author: "Marcus Vance",
      role: "Managing Director, Vanguard",
    },
  },
  {
    id: "aura-mobile-app",
    slug: "aura-health-mobile-app",
    title: "Aura Connected Mobile Experience",
    client: "Aura Wellness Technologies",
    category: "Mobile Application (iOS & Android)",
    tagline: "Cross-platform mobile application with intuitive biometric data visualization",
    year: "2026",
    platform: "React Native / iOS & Android",
    services: ["iOS Development", "Android App", "UX/UI Architecture", "Cloud APIs"],
    summary:
      "A mobile application connecting smart hardware with personalized daily health analytics. Built with intuitive navigation, fluid micro-interactions, and real-time Bluetooth device synchronization.",
    challenge:
      "Designing an interface capable of rendering rich daily health trends and telemetry without cluttering mobile screens or lagging on mid-tier hardware.",
    strategy:
      "We structured a modular card-based UI with clear data hierarchy, offline-first local caching, and lightweight chart components.",
    execution:
      "We engineered the React Native application, implemented secure authentication flows, built Bluetooth telemetry synchronizers, and prepared App Store & Google Play deployment assets.",
    results: [
      { metric: "Cross-Platform", label: "Single Codebase iOS & Android" },
      { metric: "Offline-First", label: "Local SQLite Data Sync" },
      { metric: "App Store", label: "Full Production Deployment" },
    ],
    heroImage: "/images/projects/project-mobile-1.webp",
    galleryImages: [
      "/images/projects/project-mobile-1.webp",
      "/images/projects/project-mobile-2.webp",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    accentColor: "#10B981",
  },
  {
    id: "hyperscale-growth",
    slug: "hyperscale-aiseo-paid-acquisition",
    title: "NovaTech Search Discovery & Paid Marketing Engine",
    client: "NovaTech Cloud Platforms",
    category: "AISEO & Performance Marketing",
    tagline: "Structured entity optimization and multi-channel Google & Meta acquisition funnels",
    year: "2026",
    platform: "Google Ads / Meta Ads / JSON-LD Schema",
    services: ["AISEO (GEO/AEO)", "Google Search & Shopping", "Meta Ads", "Technical Schema"],
    summary:
      "A search optimization and paid media campaign. We positioned the client across high-intent search queries and generative search engines while configuring conversion tracking.",
    challenge:
      "Navigating shifting search behaviors across traditional Google Search and conversational AI answers while keeping customer acquisition organized.",
    strategy:
      "We deployed structured JSON-LD entity schema, structured FAQ content, exact-match keyword search groups, and Meta server-side Conversions API.",
    execution:
      "We published structured content architectures, calibrated Google Performance Max campaigns, built dedicated landing pages, and set up Looker Studio reporting dashboards.",
    results: [
      { metric: "Structured", label: "JSON-LD Entity Graph Schema" },
      { metric: "Full-Funnel", label: "Google & Meta Paid Tracking" },
      { metric: "Verified", label: "Server-Side Conversions API" },
    ],
    heroImage: "/images/projects/project-marketing-1.webp",
    galleryImages: [
      "/images/projects/project-marketing-1.webp",
      "/images/projects/project-marketing-2.webp",
    ],
    technologies: ["JSON-LD Graphs", "Google Ads", "Meta CAPI", "Looker Studio"],
    accentColor: "#F59E0B",
    testimonial: {
      quote:
        "Unified Branding Experts helped us structure both our paid advertising and technical search presence. Clear communication, solid deliverables, and zero fluff.",
      author: "Elena Rostova",
      role: "Chief Growth Officer, NovaTech",
    },
  },
  {
    id: "lumina-custom-web",
    slug: "lumina-enterprise-digital-platform",
    title: "Lumina Enterprise Experience & Web Portal",
    client: "Lumina Industrial Systems",
    category: "Custom Web Application & UI/UX",
    tagline: "Interactive product visualizer and high-performance corporate web portal",
    year: "2025",
    platform: "Next.js / TypeScript / Sanity CMS",
    services: ["Custom Web Development", "Next.js App Router", "Responsive UI", "Headless CMS"],
    summary:
      "A corporate web platform for an industrial systems manufacturer. Features an interactive product spec explorer, global content distribution, and automated lead routing to enterprise CRM.",
    challenge:
      "The client had an expansive portfolio of technical systems that were difficult for prospective buyers to navigate through static PDF catalogs.",
    strategy:
      "We engineered a modular Next.js web application with interactive specification tables, instant search filtering, and clear quotation request workflows.",
    execution:
      "We built custom Next.js App Router pages, integrated Sanity headless CMS for marketing team editing, and automated inquiry routing to HubSpot CRM.",
    results: [
      { metric: "Modular", label: "Sanity Headless CMS Setup" },
      { metric: "Interactive", label: "Product Spec Filter Engine" },
      { metric: "Automated", label: "HubSpot CRM Lead Routing" },
    ],
    heroImage: "/images/projects/project-web-1.webp",
    galleryImages: [
      "/images/projects/project-web-1.webp",
      "/images/projects/project-web-2.webp",
    ],
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    accentColor: "#EC4899",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return FEATURED_PROJECTS.find((p) => p.slug === slug);
}
