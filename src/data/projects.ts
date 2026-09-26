export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  projectType: "website-build" | "brand-identity";
  industry: string;
  tagline: string;
  year?: string;
  platform: string;
  liveUrl?: string;
  clientDescription?: string;
  galleryAltText?: string[];
  caseStudySections?: Array<{
    heading: string;
    paragraphs: string[];
  }>;
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
    projectType: "brand-identity",
    industry: "Design studio",
    tagline: "Explore efficient solutions: Modern geometric 'F' logomark, signature Cyber Yellow palette, and complete print collateral / merchandise kit",
    year: undefined,
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
      { metric: "Identity", label: "Geometric F mark and vector system" },
      { metric: "Applications", label: "Stationery, badges and merchandise" },
      { metric: "Digital", label: "App UI and social brand assets" },
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
  },
  {
    id: "happy-knot-creations",
    slug: "happy-knot-creations-shopify-storefront",
    title: "Happy Knot Creations Shopify Store Case Study",
    client: "Happy Knot Creations",
    category: "eCommerce & Shopify D2C Storefront",
    projectType: "website-build",
    industry: "Handmade crochet and gifts",
    tagline: "Shopify storefront, store management, and AI SEO for a handmade crochet and custom amigurumi business.",
    year: undefined,
    platform: "Shopify",
    liveUrl: "https://happyknotcreations.com/",
    clientDescription: "Happy Knot Creations is a handmade crochet business based in Pahrump, Nevada. Its storefront presents made-to-order amigurumi, ready-to-shop plushies, themed collections, and crochet gifts.",
    services: [
      "Custom Shopify Storefront",
      "Shopify Store Management",
      "AI SEO",
    ],
    summary:
      "UBE's project brief records Shopify storefront development, ongoing store management, and AI SEO for Happy Knot Creations. The current live storefront presents custom-order entry points alongside ready-to-shop handmade products, themed collection navigation, product detail pages, customer reviews, and information about the maker.",
    challenge:
      "The live store serves two distinct shopping needs: customers can browse finished handmade items or start a custom-order conversation. Product groupings such as Ocean Friends, Animal Friends, Custom Friends, and Gifts for Crocheters help visitors narrow a varied handmade catalog without treating every item as the same kind of purchase. The project brief supplied by UBE identifies Shopify build, store management, and AI SEO as the scope; no prior-platform migration or sales challenge is documented.",
    strategy:
      "The current store makes two buying paths visible: browse ready-to-buy handmade products or start a custom-order conversation. Its navigation also groups products by theme and customer interest. UBE’s confirmed scope for this project is Shopify storefront work, ongoing store management, and AI SEO. This case study does not claim a marketplace migration, custom checkout, or specific third-party integration without project records to support it.",
    execution:
      "The current Shopify experience includes collection pages, product detail pages with product imagery and purchase controls, a custom-order route, review content, and business information about the maker and order fulfillment. UBE's owner-provided scope also includes ongoing store management and AI SEO. Specific theme-code changes, schema deployments, packaging work, and social-media deliverables are not included here because they have not been independently documented.",
    results: [
      { metric: "Shopify", label: "Storefront build (scope supplied by UBE)" },
      { metric: "Management", label: "Ongoing store management (scope supplied by UBE)" },
      { metric: "AI SEO", label: "Search optimization (scope supplied by UBE)" },
    ],
    heroImage: "/images/projects/happy-knot/maker-workspace.webp",
    galleryImages: [
      "/images/projects/happy-knot/maker-workspace.webp",
      "/images/projects/happy-knot/crochet-plush.webp",
      "/images/projects/happy-knot/storefront-hero.webp",
      "/images/projects/happy-knot/ocean-friends-collection.webp",
    ],
    galleryAltText: [
      "Handmade crocheted plushies displayed on shelves in the maker's workspace",
      "Handmade crochet plush shown on the Happy Knot Creations store",
      "Handmade crochet plush displayed on the Happy Knot Creations storefront",
      "Pastel crochet ocean animals displayed together in a collection photograph",
    ],
    caseStudySections: [
      {
        heading: "The Client",
        paragraphs: [
          "Happy Knot Creations is a handmade crochet business based in Pahrump, Nevada. Its current Shopify storefront presents ready-to-shop plushies alongside custom-order entry points, giving visitors a way to browse available work or ask about a made-to-order piece. The products and imagery on the live site show a small-batch, maker-led catalog rather than a mass-produced toy range.",
          "This case study focuses on the digital commerce system and the visible customer experience. It does not imply that UBE designed the crochet products, authored customer reviews, or controls the production capacity and fulfillment schedule. Those details belong to the business and can change as its catalog and availability change.",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "A handmade catalog asks shoppers to make several decisions before they can confidently place an order. They need to distinguish an item that is currently available from a custom request, understand what kinds of products the maker offers, and find enough detail to decide whether a particular plush or gift suits their needs. A storefront that treats every product as one undifferentiated list makes that discovery harder, especially when the catalog includes different characters, themes, and purchase expectations.",
          "Custom work creates a second interaction pattern. A ready-to-buy product can use the familiar product page and cart flow; a made-to-order request may require a conversation about the desired character, timing, or other details. The site therefore needs to make the distinction understandable without presenting a custom request as if it were an immediately available item. The live store now exposes both product browsing and custom-order routes. This description refers to what visitors can see; it does not assert a specific internal production workflow or turnaround time.",
          "The business also has to communicate the character of handmade work through the screen. Product photographs, collection names, descriptions, maker information, and support details each help set expectations. These elements should work together: imagery introduces the item, collection structure helps the shopper orient, and product-level information supports the purchase decision. On mobile, where many visitors encounter a store in a narrow viewport, these paths must remain understandable without relying on hover behavior or dense navigation.",
          "UBE’s owner-provided project scope identifies three connected responsibilities: Shopify storefront development, ongoing store management, and AI SEO. No project analytics, baseline rankings, sales figures, or conversion data were supplied for this case study. The challenge is therefore described as a commerce and discovery problem, not as a claim that the business had a particular revenue, traffic, or search-performance issue.",
        ],
      },
      {
        heading: "What UBE Built and Managed",
        paragraphs: [
          "UBE’s confirmed work includes a Shopify storefront for the business. The current public experience gives shoppers access to a homepage, themed product collections, individual product pages, cart and purchase controls, business information, and a custom-order path. These are the visible storefront areas a prospective customer can review today. The case study does not attribute every current detail to a particular custom-code change because implementation records identifying theme edits or application settings were not available for this write-up.",
          "The collection structure helps visitors browse by interest instead of needing to know a specific product name first. Current navigation and collection content include groupings such as Ocean Friends, Animal Friends, Custom Friends, Fantasy Friends, and Gifts for Crocheters. These labels establish useful entry points for different shopping intentions: find a particular style, explore a theme, consider a custom creation, or shop for someone who crochets. Collection names and availability may evolve with the maker’s catalog, so this page describes the public site observed during review rather than promising a fixed inventory.",
          "Product pages provide the next level of decision support. Shoppers can view product imagery and the purchase controls associated with an item, then continue into the store’s cart flow. For a handmade catalog, the product page is where the broad story of the collection meets the specific item under consideration. Clear photography and product-specific information matter because the customer is evaluating an individual crafted object, not a generic SKU with no visual distinction.",
          "The project scope also includes ongoing store management. That is an owner-confirmed service responsibility, but the records provided do not enumerate a dated task log, specific publishing cadence, or every managed product change. We therefore describe the service at the confirmed level and do not invent a number of listings updated, campaigns launched, or hours of support. This distinction keeps the case study useful without converting a service category into an unsupported performance claim.",
          "AI SEO is the third owner-confirmed part of the scope. The current website can be explored by people and crawlers through its public pages and descriptive collection/product content, but the evidence available for this story does not establish which structured-data changes, page-level optimizations, or indexing outcomes UBE implemented. We do not claim that the site has been cited by a particular AI answer engine or that a ranking improved. The case study records AI SEO as project scope and leaves outcome measurement for a future version if dated implementation records or Search Console data become available.",
        ],
      },
      {
        heading: "How the Work Maps to The Unified System™",
        paragraphs: [
          "The Unified System™ is UBE’s current four-stage model: Brand, Build, Launch, and Scale. The available project brief confirms storefront development, management, and AI SEO, but it does not provide dated project notes proving that every stage was delivered in a particular sequence. The mapping below is an editorial way to explain how these confirmed responsibilities fit together; it is not a claim that a complete brand identity or a specific four-stage engagement was separately commissioned.",
          "Build is the clearest documented connection: the Shopify storefront gives the business a place to present its catalog and accept online orders. The live experience includes collection discovery, product detail pages, a cart flow, and a route for custom inquiries. This is the foundation on which product presentation and ongoing store operations can be organized.",
          "Launch describes the discoverability layer. AI SEO is part of the scope supplied by UBE, but no implementation checklist or measured search outcome was provided. The responsible conclusion is that search optimization was included as a service area, while exact technical deliverables and visibility changes remain unverified in the evidence available for this case study.",
          "Scale connects to ongoing management: a handmade business can update its catalog and customer-facing information as products and availability change. UBE confirms store management was included, but this page does not imply a guaranteed sales trajectory, a defined monthly volume of updates, or a specific retention period. Brand remains a supporting consideration expressed through the maker’s own product identity and photography; a separate UBE brand-identity package is not claimed here.",
        ],
      },
      {
        heading: "Visible Storefront Evidence and Limits",
        paragraphs: [
          "The current public storefront provides observable evidence of the shopping experience: themed collections, product imagery, product pages, purchase controls, custom-order information, reviews displayed by the merchant, and maker/business information. These are descriptions of the live site at the time this case study was prepared. Reviews shown on the merchant’s website are not presented as UBE testimonials, and no review markup or rating claim is added here.",
          "No verified before-and-after analytics, revenue, order count, average order value, organic impressions, search positions, conversion rate, or traffic report was supplied. For that reason, this case study reports the deliverable categories and current storefront structure rather than a numerical business result. Store performance also depends on factors outside a build or management engagement, including product demand, pricing, available stock, fulfillment, customer service, and ongoing promotion.",
          "The strongest next evidence for a fuller results section would be an owner-approved project timeline, implementation notes, a list of specific management tasks, and permissioned analytics or Search Console comparisons. Until those records are available, the live site and UBE’s confirmed scope are the boundaries of what we claim.",
        ],
      },
    ],
    technologies: ["Shopify", "Store management", "AI SEO"],
    accentColor: "#B79BD6",
    typography: "Playfair Display, Quicksand & Nunito",
    palette: ["#F7B7C2", "#B79BD6", "#A8B987", "#FFF7F1", "#E9A3B0"],
  },
  {
    id: "shipster-supply",
    slug: "shipster-supply",
    title: "Shipster Supply Shopify Store Case Study",
    client: "Shipster Supply",
    category: "eCommerce Storefront & Catalog Experience",
    projectType: "website-build",
    industry: "Home, camping, outdoor cooking, and everyday goods",
    tagline: "Shopify storefront, ongoing store management, and AI SEO for a wide-ranging home and outdoor catalog.",
    year: undefined,
    platform: "Shopify",
    liveUrl: "https://shipstersupply.com/",
    clientDescription: "Shipster Supply is an online retailer presenting home, kitchen, camping, outdoor-cooking, furniture, and storage products through a Shopify storefront.",
    services: ["Shopify Storefront", "Shopify Store Management", "AI SEO"],
    summary:
      "UBE’s confirmed project scope for Shipster Supply includes Shopify storefront work, ongoing store management, and AI SEO. The current live shop spans home and outdoor categories, with collection landing points, product pages, cart controls, shipping and support information, and policy pages. This case study describes that visible experience and the scope UBE supplied; it does not claim measured sales, traffic, or search outcomes.",
    challenge:
      "A wide-ranging catalog creates an information-architecture challenge: a shopper looking for a kitchen item should not have to navigate through camping gear, while someone comparing outdoor cooking products needs a clear way to explore grills, fire pits, cookware, and accessories. The public store brings together products for different rooms, uses, and purchase contexts. Its organization has to help people orient themselves before they begin comparing individual items.",
    strategy:
      "The storefront uses category and collection entry points to separate major shopping contexts. The case study describes the current public structure rather than attributing unrecorded custom code or third-party integrations to UBE. UBE’s confirmed scope is Shopify storefront work, management, and AI SEO; the exact theme changes and optimization checklist were not included in the evidence available for this write-up.",
    execution:
      "The live Shopify experience includes collection discovery, product cards with visible pricing and availability states, product detail pages, cart actions, shipping and support information, and store policies. The current home page also presents product groupings and category links for the store’s home, camping, cooking, furniture, and outdoor ranges. These observations document the storefront a visitor can use today; they are not claims about a particular code customization.",
    results: [
      { metric: "Shopify", label: "Storefront project scope confirmed by UBE" },
      { metric: "Management", label: "Ongoing store-management scope confirmed by UBE" },
      { metric: "AI SEO", label: "Search-optimization scope confirmed by UBE" },
    ],
    heroImage: "/images/projects/shipster-supply/hero.webp",
    galleryImages: [
      "/images/projects/shipster-supply/hero.webp",
      "/images/projects/shipster-supply/camping-accessories.webp",
      "/images/projects/shipster-supply/furniture.webp",
      "/images/projects/shipster-supply/fire-pit.webp",
    ],
    galleryAltText: [
      "Shipster Supply homepage banner featuring its outdoor and camping brand presentation",
      "Camping accessories collection image shown on Shipster Supply",
      "Furniture category image shown on Shipster Supply",
      "Fire pit category image shown on Shipster Supply",
    ],
    caseStudySections: [
      {
        heading: "The Client",
        paragraphs: [
          "Shipster Supply presents a broad online assortment across home, kitchen, furniture, camping, outdoor cooking, fire pits, hunting blinds, and storage. Its live homepage introduces the retailer with the message “Gear Up for Bigger Adventures,” then gives visitors ways to browse collections and product features. The breadth is part of the store’s identity: the catalog is not limited to one product type or one room in the home.",
          "UBE’s project brief confirms Shopify storefront work, ongoing store management, and AI SEO for the client. The scope is stated at that service level because the source material does not include a dated implementation log, approved task list, or access to private analytics. Product availability, pricing, delivery options, and site content can change; the screenshots and descriptions here represent the public store observed during this review.",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "A general merchandise catalog can become difficult to navigate when unrelated products share a single browsing path. Home décor, kitchen appliances, camping accessories, furniture, grills, fire pits, hunting blinds, and storage products answer different customer needs. A visitor who arrives with a specific task—such as choosing a camping stove or browsing a storage solution—benefits from category links that make the next step easy to identify.",
          "The catalog also asks customers to evaluate products with different kinds of specifications. A piece of furniture, an outdoor grill, and a camping accessory are not compared using the same details. Product pages and category structures therefore need to let each item retain its own description, imagery, options, pricing, and availability without flattening the experience into a generic list. The live storefront displays product cards, product detail pages, quick add or choose-options controls, and sold-out states for some items. These are visible interface features, not evidence of a particular conversion result.",
          "A second requirement is clarity around practical purchase questions. The current store includes support and policy links and tells shoppers that shipping options are shown at checkout based on the item and delivery destination. Its homepage also displays a delivery message. These customer-facing details matter because delivery expectations, product options, returns, and pre-purchase questions can affect whether a shopper feels ready to proceed. This case study reports the public information architecture, not UBE’s authorship of the retailer’s policy terms or its fulfillment operations.",
          "UBE’s confirmed scope is the Shopify storefront, management, and AI SEO. We did not receive records showing the client’s original business goals, catalog size at launch, previous platform, launch timeline, or search baseline. Consequently, the challenge is framed through the observable complexity of a multi-category store rather than a claim about a prior technical failure, lost sales, or quantified SEO problem.",
        ],
      },
      {
        heading: "What UBE Built and Managed",
        paragraphs: [
          "The confirmed build work centers on a Shopify storefront that supports multiple category and collection paths. The current navigation exposes Home, Shop, Collections, and Contact. From the homepage, visitors can move into areas such as Camping Accessories, Furniture, Cookware & Appliances, Fire Pits & Accessories, Home Decor, Grills & Outdoor Cooking, Hunting & Blinds, and Storage & Organization. These routes give distinct parts of the catalog a recognizable starting point.",
          "Collection and featured-product sections bring selected inventory into the home page. The current page presents home and living products, outdoor-cooking merchandise, and outdoor favorites, with product cards that show item names, imagery, prices, sale labels, and availability where applicable. Product cards include actions such as Add to cart or Choose options. Those labels are useful evidence of the shopping flow a visitor encounters, but this description does not imply that every product section or merchandising rule was custom-developed by UBE.",
          "At the product level, the Shopify experience allows shoppers to reach detail pages, review the displayed product information, select options when the item requires them, and use the cart flow. Product-level information matters especially in broad catalogs because the shopper needs to assess each item on its own terms. We have not been given a project record listing the number of products UBE uploaded or the exact variant, collection, or app configuration performed, so none of those quantities or integrations are claimed.",
          "The project brief also confirms store management. A managed Shopify store may require catalog upkeep, review of storefront content, changes to collections, maintenance of customer-facing details, or other agreed operational tasks. For Shipster Supply, the available evidence confirms the management service category but does not identify each task, its dates, or its cadence. We therefore do not publish unsupported counts of products maintained, promotional campaigns, support tickets, or monthly hours.",
          "AI SEO is the third scope area supplied by UBE. The public store contains crawlable category and product routes, descriptive item names, product-specific content, and navigational paths that expose the assortment. Those visible elements help explain how a search engine or answer engine can encounter the catalog, but they do not prove that a particular JSON-LD implementation, indexation result, AI citation, or ranking change was delivered. Such implementation details should be added only if the project record confirms them.",
          "The live storefront also publishes practical help content and operational information. Its homepage has shipping and product-selection prompts, contact links, and policy navigation. These components let customers look for answers without treating every question as a sales inquiry. The exact wording of policies is controlled by the merchant, and the current live content may be updated independently of the work described in this case study.",
        ],
      },
      {
        heading: "How the Work Maps to The Unified System™",
        paragraphs: [
          "The Unified System™ is UBE’s current Brand → Build → Launch → Scale model. The owner-provided project scope confirms Shopify storefront work, ongoing management, and AI SEO. It does not contain dated records proving that all four stages were performed as a named engagement, so this section maps the confirmed service areas to the current methodology rather than claiming a documented historical stage-by-stage delivery.",
          "Build is visible in the Shopify storefront and its routes into a diverse catalog. The category and collection hierarchy gives products distinct browsing contexts, while product pages and cart controls support the next actions. The current implementation also shows how home and outdoor ranges can sit under one commerce experience without requiring every shopper to browse every category.",
          "Launch connects to the discoverability and readiness work represented by AI SEO. UBE confirms that AI SEO was included in the project scope; however, there is no optimization checklist or before-and-after report available for publication. We therefore identify the service without suggesting guaranteed indexing, rankings, organic traffic, or AI-answer citations.",
          "Scale corresponds to ongoing store management: the store’s product range, categories, and customer-facing information can be maintained as the retailer’s operation changes. The available brief confirms that ongoing management was part of the work, but it does not establish the duration or specific volume of changes. Brand, the first stage, is not represented as a separately delivered brand-identity project here; the public storefront’s existing brand presentation is shown as client context only.",
        ],
      },
      {
        heading: "Visible Storefront Evidence and Results",
        paragraphs: [
          "The public website provides a concrete view of the current customer experience: category-based navigation, collection pages, featured products, product details, cart controls, visible pricing and availability, contact information, shipping content, customer support sections, and policy pages. A shopper can browse across home, kitchen, camping, furniture, and outdoor-cooking needs from a single Shopify storefront. These are observable deliverables and interface characteristics—not financial results.",
          "No verified project analytics, organic Search Console comparison, revenue report, conversion data, sales volume, average order value, or customer-acquisition result was provided. This case study makes no numeric performance claim. The current store shows product prices, sale labels, reviews, and availability because those are part of its public retail experience; they are not presented as proof of UBE’s results or endorsements of UBE.",
          "To strengthen the results record later, UBE would need an owner-approved project timeline, a list of exact build and management deliverables, AI SEO implementation notes, and permissioned analytics or Search Console comparisons. Until those materials are available, this page stays within the confirmed scope and visible evidence. Commerce outcomes also depend on the product assortment, price, stock, delivery, customer service, merchandising, demand, and ongoing marketing—not only on the storefront itself.",
        ],
      },
    ],
    technologies: ["Shopify", "Store management", "AI SEO"],
    accentColor: "#9F8BE7",
  },
  {
    id: "everhome-real-estate",
    slug: "everhome-real-estate-brand-system",
    title: "Everhome Modern Real Estate Brand Architecture & Visual System",
    client: "Everhome Real Estate",
    category: "Brand Strategy & Visual Identity System",
    projectType: "brand-identity",
    industry: "Real estate",
    tagline: "A place that truly feels like home: Minimalist real estate visual language, custom logomark, and multi-channel asset matrix",
    year: undefined,
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
      { metric: "Identity", label: "Geometric logo system" },
      { metric: "Visual system", label: "Typography and color specifications" },
      { metric: "Applications", label: "Print and digital assets" },
    ],
    heroImage: "/images/projects/everhome/hero.webp",
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
  },
  {
    id: "eaudacity-fragrance",
    slug: "eaudacity-luxury-fragrance-brand-system",
    title: "Eau'dacity Luxury Fragrance & Visual Identity System",
    client: "Eau'dacity Parfums",
    category: "Brand Strategy & Packaging Architecture",
    projectType: "brand-identity",
    industry: "Fragrance and beauty",
    tagline: "Monochromatic fragrance identity and packaging design concepts.",
    year: undefined,
    platform: "Figma / Adobe Illustrator / 3D concept assets",
    services: ["Brand Identity", "Packaging Design", "Typography & Color Systems"],
    summary:
      "A minimalist brand identity and packaging concept project for Eau'dacity Parfums. Available design assets show a monochromatic type direction, amber bottle concepts, carton artwork, and digital brand applications. The project is presented as design work only; no live storefront is included.",
    challenge:
      "Creating an unmistakably modern, high-end aesthetic that stands out in the luxury fragrance space while maintaining stark visual elegance across physical packaging, digital media, and retail signage.",
    strategy:
      "We recommended a high-contrast monochromatic identity system paired with warm amber glass product photography and minimalist packaging typography to emphasize premium craft.",
    execution:
      "The existing project assets document logo and seal directions, folding-carton concepts, glass bottle mockups, and social editorial layouts. This case study does not represent the packaging as manufactured or claim that UBE built an eCommerce site for this project.",
    results: [
      { metric: "Identity", label: "Logo and typography direction" },
      { metric: "Packaging", label: "Bottle and carton design concepts" },
      { metric: "Applications", label: "Retail and digital design assets" },
    ],
    heroImage: "/images/projects/eaudacity/hero.webp",
    galleryImages: [
      "/images/projects/eaudacity/showcase-0.jpg",
      "/images/projects/eaudacity/showcase-2.jpg",
      "/images/projects/eaudacity/showcase-7.jpg",
      "/images/projects/eaudacity/showcase-8.jpg",
      "/images/projects/eaudacity/showcase-9.jpg",
      "/images/projects/eaudacity/showcase-10.jpg",
    ],
    technologies: ["Figma", "Adobe Illustrator", "3D Packaging Mockups"],
    accentColor: "#C8A265",
    typography: "Helvetica Neue Bold",
    palette: ["#000000", "#FFFFFF", "#C8A265", "#FAF7F6"],
  },
  {
    id: "botane-beauty",
    slug: "botane-plant-based-luxury-beauty",
    title: "Botāne Plant-Based Luxury Perfume & Visual Identity",
    client: "Botāne Beauty & Fragrance",
    category: "Botanical Branding & Packaging System",
    projectType: "brand-identity",
    industry: "Beauty and fragrance",
    tagline: "Brand identity and packaging design concepts for a botanical beauty and fragrance brand.",
    year: undefined,
    platform: "Adobe design tools / packaging concepts",
    services: ["Brand Identity", "Packaging Design", "Retail Visual Assets"],
    summary:
      "A botanical visual identity and packaging concept system for Botāne Beauty & Fragrance, using the existing project artwork's Big Caslon CC and Azo Sans typography direction, cream and forest-green palette, floral mark, and product-presentation assets. Product formulation, material sourcing, and manufacturing claims are not established by the design files and are not made here.",
    challenge:
      "The design brief called for a recognizable beauty identity that could combine botanical visual cues with a refined product presentation. The available project assets document visual identity and packaging concepts; they do not verify product ingredients, environmental performance, or manufactured packaging materials.",
    strategy:
      "The available artwork pairs editorial serif typography with botanical green accents and tactile-looking packaging mockups. This describes the visual direction only; it does not make a claim about product formulation or manufactured materials.",
    execution:
      "We created custom floral ligature logomarks, geometric foliage patterns, luxury packaging die-lines, retail counter displays, and curated social media launch kits.",
    results: [
      { metric: "Complete", label: "Brand Bible & Style Guide" },
      { metric: "Identity", label: "Logo, type, and color direction" },
      { metric: "Packaging", label: "Packaging design concepts" },
      { metric: "Applications", label: "Social and in-store design assets" },
    ],
    heroImage: "/images/projects/botane/hero.webp",
    galleryImages: [
      "/images/projects/botane/showcase-7.jpg",
      "/images/projects/botane/showcase-6.jpg",
      "/images/projects/botane/showcase-5.jpg",
      "/images/projects/botane/showcase-8.jpg",
      "/images/projects/botane/showcase-2.jpg",
      "/images/projects/botane/showcase-1.jpg",
    ],
    technologies: ["Adobe Illustrator", "Cinema 4D", "Packaging concept design"],
    accentColor: "#064E30",
    typography: "Big Caslon CC / Azo Sans",
    palette: ["#F9E7D8", "#064E30", "#161616", "#FFFFFF"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return FEATURED_PROJECTS.find((p) => p.slug === slug);
}
