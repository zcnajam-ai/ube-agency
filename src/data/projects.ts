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
    heroImage: "/case-studies/fixoria/images/01-fixoria-case-study-cover.webp",
    galleryImages: [
      "/case-studies/fixoria/images/01-fixoria-case-study-cover.webp",
      "/case-studies/fixoria/images/02-fixoria-brand-presentation.webp",
      "/case-studies/fixoria/images/03-fixoria-logo-construction.webp",
      "/case-studies/fixoria/images/04-fixoria-primary-identity.webp",
      "/case-studies/fixoria/images/05-fixoria-color-typography-system.webp",
      "/case-studies/fixoria/images/06-fixoria-brand-applications-01.webp",
      "/case-studies/fixoria/images/07-fixoria-brand-applications-02.webp",
      "/case-studies/fixoria/images/08-fixoria-merchandise-stationery.webp",
      "/case-studies/fixoria/images/09-fixoria-environmental-branding.webp",
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
    heroImage: "/images/projects/happy-knot/hero.webp",
    galleryImages: [
      "/images/projects/happy-knot/hero.webp",
      "/images/projects/happy-knot/storefront-design.webp",
      "/images/projects/happy-knot/brand-identity.webp",
      "/images/projects/happy-knot/aiseo-content.webp",
      "/images/projects/happy-knot/social-media.webp",
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return FEATURED_PROJECTS.find((p) => p.slug === slug);
}
