import RelatedServiceLinks from "@/components/services/RelatedServiceLinks";
import { SHOPIFY_SETUP_START_PRICE } from "@/data/commerce-pricing";
import { PlatformBadgeRow } from "@/components/common/PlatformMark";
import React from "react";
import StoreManagementLink from "@/components/services/StoreManagementLink";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Truck,
} from "lucide-react";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";

export const metadata: Metadata = {
  title: "Dropshipping Store Setup, Sourcing & Management",
  description:
    "Build and manage a dropshipping business with UBE. Compare suppliers, Shopify and marketplace options, product sourcing, fulfillment and contract-based growth plans.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/dropshipping",
  },
  openGraph: {
    title: "Dropshipping Store Setup, Sourcing & Management | UBE",
    description:
      "Product sourcing, Shopify and marketplace setup, supplier connections, fulfillment and managed growth plans with clear contract terms.",
    url: "https://unifiedbrandingexperts.com/services/dropshipping",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/services/dropshipping/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dropshipping store setup, product sourcing and management from Unified Branding Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dropshipping Store Setup, Sourcing & Management | UBE",
    description:
      "Product sourcing, Shopify and marketplace setup, supplier connections, fulfillment and managed growth plans with clear contract terms.",
    images: ["https://unifiedbrandingexperts.com/services/dropshipping/opengraph-image"],
  },
};

export default function DropshippingServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dropshipping Store Setup, Sourcing & Management",
    serviceType: "Dropshipping Store Development, Product Sourcing & Fulfillment",
    provider: {
      "@id": "https://unifiedbrandingexperts.com/#organization",
    },
    areaServed: "United States",
    description:
      "Store setup, product and supplier research, catalog content, fulfillment workflows, launch marketing and ongoing management for eligible eCommerce channels.",
    url: "https://unifiedbrandingexperts.com/services/dropshipping",
    offers: {
      "@type": "Offer",
      name: "Shopify storefront setup starting price; managed services scoped separately",
      price: SHOPIFY_SETUP_START_PRICE.toFixed(2),
      priceCurrency: "USD",
      url: "https://unifiedbrandingexperts.com/ecommerce-growth-packages",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://unifiedbrandingexperts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://unifiedbrandingexperts.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dropshipping",
        item: "https://unifiedbrandingexperts.com/services/dropshipping",
      },
    ],
  };

  const faqs = [
    {
      q: "What does your dropshipping service include?",
      a: "We can scope product and supplier research, brand positioning, store design, product graphics and content, catalog architecture, supplier connections, payment and shipping settings, test orders, analytics, launch marketing and ongoing management. A basic store-build package is narrower than a managed growth agreement; the proposal lists the exact deliverables.",
    },
    {
      q: "Which supplier platforms can you evaluate or connect for a U.S. store?",
      a: "Depending on product fit and account eligibility, our sourcing shortlist can include Shopify Collective, DropCommerce, Spocket, Syncee, Zendrop, Trendsi, Printify, Printful, CJ Dropshipping and DSers. These are platform options, not a claim that every item ships from the U.S. or that we have a formal partnership with each one. We verify warehouse location, shipping terms, quality and integration before choosing a supplier.",
    },
    {
      q: "Can you choose products and create their listings for me?",
      a: "Yes, when product research and catalog production are included in your scope. We compare demand, landed cost, competition, supplier terms and returns, then prepare approved titles, descriptions, graphics, categories, variants and policies. We do not treat an imported supplier feed as a finished product strategy.",
    },
    {
      q: "Can supplier orders, inventory and tracking be automated?",
      a: "Often, yes. We configure supported order routing, inventory and price updates, tracking and customer notifications, then test the actual order flow. Automation varies by supplier, app, sales channel and account permissions. Exceptions such as address errors, backorders and returns still need human handling.",
    },
    {
      q: "Can my Shopify store sell through TikTok Shop too?",
      a: "Yes, if your seller account, products and fulfillment model meet TikTok Shop requirements. We can assess catalog sync, listings, creator content, shop ads and shipping operations. A Shopify product being available does not automatically make it eligible for TikTok Shop.",
    },
    {
      q: "Can I use Amazon, eBay, Etsy or Walmart with dropshipping?",
      a: "We assess each channel separately. eBay permits wholesale-supplier dropshipping but not ordering from another retailer after an eBay sale. Amazon requires you to be the seller of record under its dropshipping policy. Etsy generally prohibits ordinary resale dropshipping, though qualifying original designs made by disclosed production partners may be allowed. Walmart and TikTok Shop also impose seller, shipping and product requirements. Approval is never automatic.",
    },
    {
      q: "How long does a store build or managed program take?",
      a: "We set a delivery schedule after reviewing catalog size, supplier access, product assets and channel approvals. A store build and a managed two, three or six month growth plan have different timelines. The contract identifies milestones and the period used for any performance commitment.",
    },
    {
      q: "Can you source, design, package and ship custom products?",
      a: "Yes, in a separately scoped project we can coordinate original product design, manufacturer research, sampling, packaging, quality checks and delivery through suitable vendors. Private label and manufacturing differ from ready-made app-based dropshipping; minimum orders, inventory, freight, customs, duties and product compliance must be assessed separately.",
    },
    {
      q: "Do you guarantee sales within two, three or six months?",
      a: "Eligible managed plans include the sales commitment specified in the signed package agreement. We often plan around a 60-day investment-recovery objective, then continue toward steadier sales and scaling over the agreed term. The actual target, period, attribution, required budget, client responsibilities and remedy are written in the contract. A stand-alone store build has no automatic sales commitment, and sales revenue is not the same as profit or full investment recovery.",
    },
    {
      q: "Can you guarantee that the store will be profitable?",
      a: "We build and manage toward profitable unit economics, but a revenue or order guarantee is not automatically a net-profit guarantee. Profit accounts for product costs, shipping, duties, fees, refunds, ads, software and operations. If an agreement promises investment recovery or a profit outcome, it must define exactly which costs count, the data source, time period and remedy in writing.",
    },
    {
      q: "What do you mean by return on investment within 60 days?",
      a: "Our 60-day objective is to recover the agreed investment through sales contribution after product, fulfillment, transaction and return costs, not merely to show gross sales equal to our fee. We compare that contribution with agreed project spending such as agency fees, ads and software, without counting any cost twice. Whether recovery itself is guaranteed depends on the selected managed package and its signed terms; no one-size-fits-all ROI number applies to every store.",
    },
    {
      q: "Why will a store build alone not bring the same results as a managed plan?",
      a: "The build makes the store operational, but it does not by itself generate qualified demand or continuously improve the offer. A managed plan adds product tests, technical and on-page SEO, useful content, paid acquisition where budgeted, creative, conversion reviews, order monitoring and reporting. These are separate workstreams with separate fees and client inputs.",
    },
    {
      q: "What happens if the contracted sales target is missed?",
      a: "The signed agreement defines the target, date, reporting source, conditions and specific remedy. We review performance and act on issues throughout the plan instead of waiting until the deadline. We will explain the actual remedy before the client commits; it cannot be inferred from a general website statement.",
    },
    {
      q: "What budget do I need beyond your fee?",
      a: "Budget separately for the commerce platform, domain, apps, samples, product or manufacturing costs, payment and marketplace fees, shipping, returns and any agreed advertising spend. We distinguish one-time build fees from recurring management and media budgets in the scope before launch.",
    },
    {
      q: "Do I own the store and supplier relationships?",
      a: "The client should own the store, domain, seller accounts and customer data under their own business identity. Supplier relationships, product assets and licenses depend on each agreement. We document access and handover so the business can continue after the engagement.",
    },
    {
      q: "What happens if a supplier runs out of stock or misses a delivery?",
      a: "We monitor feeds and operational alerts where included, pause or update affected listings, contact the supplier and communicate with the customer under the approved service process. Backup suppliers may be considered, but substitutions require product, price, quality and channel-policy checks.",
    },
    {
      q: "Can you move my existing catalog to a new store or channel?",
      a: "Yes. We audit the current products, variants, images, URLs, reviews and integrations, then plan migration and redirects where appropriate. Marketplace listings require separate category, identifier, eligibility and policy checks rather than a blind catalog copy.",
    },
    {
      q: "How do you bring traffic and measure whether it converts?",
      a: "A scoped plan may include search optimization, product content, paid acquisition, TikTok creative and email capture. We measure qualified visits, product views, add-to-cart, checkout, orders, average order value, returns, contribution margin and channel spend. A live store alone does not create demand.",
    },
    {
      q: "Will my products appear in Google and AI search?",
      a: "We can build crawlable product and collection pages with accurate titles, descriptions, merchant data, internal links and appropriate structured data, then monitor Search Console and merchant feeds. Search engines and AI assistants choose what to show; no agency can guarantee a specific ranking, citation or sales result from indexing alone.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const deliverables = [
    { title: "Shopify 2.0 Storefront", desc: "Customized responsive theme with clean homepage, product pages, and cart drawer." },
    { title: "Product Catalog & Collections", desc: "Organized categories, variant structuring, and initial imported product listings." },
    { title: "Supplier Integrations", desc: "API connection with DSers, CJ Dropshipping, Zendrop, or private supplier feeds." },
    { title: "Inventory & Price Sync", desc: "Automated stock level tracking and margin price updates from suppliers." },
    { title: "Automated Order Routing", desc: "One-click or automatic order forwarding to supplier fulfillment systems." },
    { title: "Tracking & Customer Emails", desc: "Automated tracking number synchronization and customer shipping notifications." },
    { title: "Payment & Shipping Config", desc: "Shopify Payments, PayPal, multi-currency settings, and shipping rate rules." },
    { title: "Basic SEO & Analytics", desc: "Semantic HTML, meta tags, Google Analytics 4, and search console indexing setup." },
  ];

  const supplierOptions = [
    { name: "Shopify Collective", fit: "Eligible Shopify-to-Shopify brand partnerships and direct supplier fulfillment.", check: "Retailer and supplier eligibility, catalog permissions and settlement." },
    { name: "DropCommerce", fit: "Shortlisting suppliers that ship from the U.S. and Canada.", check: "Actual warehouse, category fit, wholesale terms and delivery promise." },
    { name: "Spocket", fit: "Sourcing across U.S. and European supplier catalogs.", check: "Product-level origin, stock, branded invoicing and returns." },
    { name: "Syncee", fit: "Catalog discovery from U.S. and international suppliers.", check: "Supplier approval, feed accuracy and price or inventory sync." },
    { name: "Zendrop", fit: "Supplier catalog, order flow and selected U.S. fulfillment options.", check: "Warehouse location and processing time for each product." },
    { name: "Trendsi", fit: "Fashion and accessories with U.S. and overseas sourcing options.", check: "Product eligibility, shipping source, returns and content rights." },
    { name: "Printify", fit: "Original-design print-on-demand products across print providers.", check: "Selected provider location, sample quality and production time." },
    { name: "Printful", fit: "Print-on-demand, custom branding options and fulfillment.", check: "Fulfillment location, packaging availability and unit economics." },
    { name: "CJ Dropshipping", fit: "Broad product sourcing and selected U.S. warehouse inventory.", check: "Stock location, shipping method and branded-product lead time." },
    { name: "DSers", fit: "Supplier and order management for eligible AliExpress sourcing.", check: "Vendor reliability, actual shipping origin and customer promise." },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SHOPIFY DROPSHIPPING SYSTEMS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
              Dropshipping Store Setup, Product Sourcing &amp; Fulfillment
            </h1>
            <PlatformBadgeRow platforms={["shopify", "tiktok", "amazon", "etsy", "ebay"]} />

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Build a store around products you can actually source and deliver. We connect the storefront, product content, supplier arrangements, order flow and post-launch work in one scoped plan.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body leading-relaxed max-w-2xl">
            Unified Branding Experts works on Shopify and eligible marketplace selling across TikTok Shop, eBay, Amazon and Etsy. Our scope can cover product and supplier research, branding, graphics, catalog setup, packaging coordination, store development, search foundations, marketing and ongoing operations. Each platform and fulfillment model has different requirements, so we define the channels, supplier responsibilities and deliverables before work begins.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <ServiceProjectModalTrigger
              label="Start Your Dropshipping Store"
              service="Dropshipping Setup"
              variant="primary"
            />
            <Link
              href="/ecommerce-growth-packages"
              className="px-6 py-3.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-[#161616] font-display font-bold text-xs transition-all flex items-center gap-2 group shadow-xs"
            >
              <span>Explore eCommerce Packages</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <nav aria-label="On this page" className="flex flex-wrap gap-2 pt-3 text-sm">
            <span className="w-full font-semibold text-[#303030]">Jump to:</span>
            {[
              { href: "#supplier-options-heading", label: "Suppliers" },
              { href: "#channel-heading", label: "Sales channels" },
              { href: "#launch-plan-heading", label: "Our process" },
              { href: "#profit-heading", label: "Costs and profit" },
              { href: "#dropshipping-faq-heading", label: "Common questions" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="rounded-full border border-[#D8CFF2] bg-white px-3 py-2 font-medium text-[#563B90] hover:bg-[#F4F0FC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B46C1]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5 relative">
          <div className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-4">
              <span className="text-[11px] font-mono-num font-bold text-[#161616]">
                DROPSHIPPING WORKFLOW
              </span>
              <span className="text-[10px] font-mono-num px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                Automated Sync
              </span>
            </div>

            <div className="space-y-3 font-mono-num text-xs">
              <div className="p-3.5 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-between">
                <span className="text-[#585858]">1. Customer Order</span>
                <span className="font-bold text-[#161616]">Shopify Storefront</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-between">
                <span className="text-[#585858]">2. Supplier Route</span>
                <span className="font-bold text-[#9F8BE7]">DSers / CJ / Zendrop</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-between">
                <span className="text-[#585858]">3. Dispatch &amp; Sync</span>
                <span className="font-bold text-emerald-700">Auto Tracking Update</span>
              </div>
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-[#585858] font-body">
                Structured for organized operations &amp; clean order processing.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[#E0DDDB] bg-white p-6 shadow-xs sm:p-10 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono-num text-xs font-bold uppercase tracking-wider text-[#6B4BA7]">THE WORK BEHIND THE STOREFRONT</span>
          <h2 className="font-display text-2xl font-bold text-[#161616] sm:text-3xl">From supplier decision to a customer delivery</h2>
          <p className="font-body text-sm leading-relaxed text-[#585858] sm:text-base">A storefront is one part of the business. We map the product, fulfillment and customer experience before recommending a channel or launch plan.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            { title: "Research products and suppliers", body: "Review product demand, wholesale terms, quality evidence, landed cost, shipping times, returns and supplier reliability. Depending on the project, we evaluate vendors in the U.S., China, Korea, Vietnam, Pakistan and the UAE against the required delivery promise." },
            { title: "Build the brand and catalog", body: "Define positioning, create store and product graphics, organize collections, write useful product information and prepare photography or approved supplier assets." },
            { title: "Connect the operating system", body: "Configure eligible supplier feeds, inventory updates, order routing, shipping settings, test orders, tracking and customer notifications. The available automation depends on each supplier and platform." },
            { title: "Plan custom products when needed", body: "For private-label work, scope product design, manufacturing, packaging, quality checks and logistics separately. This is not the same as importing ready-made dropshipping products." },
            { title: "Launch and manage channels", body: "Support the store and, where eligible, TikTok Shop or marketplace listings. Post-launch plans can include catalog updates, campaign work, operational monitoring and reporting." },
            { title: "Measure the business", body: "Review traffic, conversion, product margin, fulfillment costs, returns and customer feedback. We use those inputs to prioritize improvements rather than treating a store launch as proof of profitable sales." },
          ].map((step) => (
            <div key={step.title} className="rounded-2xl border border-[#E0DDDB] bg-[#FAF7F6] p-5">
              <h3 className="font-display text-lg font-bold text-[#161616]">{step.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-[#585858]">Explore our <Link href="/ecommerce-growth-packages" className="font-semibold text-[#6B4BA7] underline underline-offset-4">store packages</Link>, <Link href="/services/ecommerce-store-management" className="font-semibold text-[#6B4BA7] underline underline-offset-4">ongoing management</Link>, and <Link href="/tiktok-shop" className="font-semibold text-[#6B4BA7] underline underline-offset-4">TikTok Shop work</Link>. Custom sourcing, manufacturing and marketing are quoted in the written scope.</p>
      </section>

      <section className="rounded-3xl border border-[#D8CFF2] bg-[#F4F0FC] p-6 sm:p-10 space-y-4">
        <h2 className="font-display text-2xl font-bold text-[#161616] sm:text-3xl">A managed sales plan with a defined commitment</h2>
        <p className="max-w-4xl font-body text-sm leading-relaxed text-[#414141] sm:text-base">A store build delivers the agreed storefront and operating setup. It cannot create demand by itself. For clients who want us to take responsibility beyond launch, we scope two, three or six month managed programs covering product tests, technical and on-page SEO, AI search readiness, creative, paid acquisition where budgeted, conversion work and day-to-day operations. Eligible managed packages include the sales commitment defined in their signed agreement. We establish the target and the work needed to pursue it before signing, then report progress against the same definition throughout the engagement.</p>
        <p className="max-w-4xl font-body text-sm leading-relaxed text-[#414141] sm:text-base">Our first 60 days focus on earning back the agreed investment through a working offer and measurable sales contribution. After that, we focus on stability, repeatable acquisition and scaling the products and channels that justify more spend. A goal to recover investment is stronger than simply counting orders, so the agreement must say which costs are included and whether investment recovery itself is guaranteed for that specific package.</p>
        <p className="max-w-4xl font-body text-sm leading-relaxed text-[#414141] sm:text-base">A meaningful guarantee has terms: which sales count, the start date and deadline, attribution and reporting source, minimum client approvals and operating or advertising budget, exclusions, and what we do if the target is missed. These go in the signed agreement. We will not advertise one universal target or confuse sales revenue with net profit. If your supplier economics or market conditions make a proposed target unsound, we revise the plan before committing.</p>
        <Link href="/contact" className="inline-flex min-h-11 items-center rounded-full bg-[#9F8BE7] px-6 font-display text-sm font-bold text-[#161616] hover:bg-[#b4a3f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#161616]">Discuss a managed dropshipping plan</Link>
      </section>

      <section className="space-y-6" aria-labelledby="sixty-day-plan-heading">
        <div className="max-w-4xl space-y-3">
          <h2 id="sixty-day-plan-heading" className="font-display text-3xl font-bold text-[#161616]">Why the first 60 days are an operating plan, not a waiting period</h2>
          <p className="font-body text-base leading-relaxed text-[#414141]">A client who buys only a storefront receives a storefront. Sales need product-market fit, a competitive offer, reliable fulfillment and enough qualified people reaching a page that converts. Our managed strategy ties those pieces together instead of asking you to wait for orders after launch.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E0DDDB] bg-white p-6"><span className="font-mono-num text-xs font-bold text-[#6B4BA7]">FOUNDATION</span><h3 className="mt-2 font-display text-lg font-bold text-[#161616]">Prepare the store and offer</h3><p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">Check supplier margins and shipping promises, build product and collection pages, fix technical indexing barriers, set up analytics, and prepare creative and policies. We establish what an order must contribute after variable costs.</p></div>
          <div className="rounded-2xl border border-[#E0DDDB] bg-white p-6"><span className="font-mono-num text-xs font-bold text-[#6B4BA7]">FIRST 60 DAYS</span><h3 className="mt-2 font-display text-lg font-bold text-[#161616]">Acquire, test and optimize</h3><p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">Work on technical, on-page and off-page search where appropriate, AI-readable answers and product content, and an approved mix of Meta, Instagram, TikTok Shop, Google or other campaigns. Compare channel cost with actual orders, fix weak pages and pause products that cannot support the economics.</p></div>
          <div className="rounded-2xl border border-[#E0DDDB] bg-white p-6"><span className="font-mono-num text-xs font-bold text-[#6B4BA7]">60 TO 90 DAYS AND BEYOND</span><h3 className="mt-2 font-display text-lg font-bold text-[#161616]">Stabilize and scale</h3><p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">Improve fulfillment, retention and customer support, expand winning creative or channels, and adjust spend only when the margin model supports it. SEO and AI search work may compound over longer periods; paid campaigns can test demand earlier but require a separate media budget.</p></div>
        </div>
        <p className="font-body text-sm leading-relaxed text-[#585858]">For a 60-day investment-recovery objective, we define investment as the costs written into the plan, not a vague promise that any amount a client spends will be returned. We compare sales contribution after product, fulfillment, transaction and return costs with agreed project spending, including agency, media and software costs as applicable, without double-counting them. A package-specific guarantee applies only when its signed terms explicitly include that outcome. <Link href="/services/ai-seo-agency" className="font-semibold text-[#6B4BA7] underline underline-offset-4">See our AI SEO service</Link>, <Link href="/services/meta-ads" className="font-semibold text-[#6B4BA7] underline underline-offset-4">Meta advertising</Link>, and <Link href="/services/ecommerce-store-management" className="font-semibold text-[#6B4BA7] underline underline-offset-4">store management</Link> for the individual workstreams.</p>
      </section>

      <section className="space-y-8" aria-labelledby="dropshipping-models-heading">
        <div className="max-w-4xl space-y-4">
          <h2 id="dropshipping-models-heading" className="font-display text-3xl font-bold text-[#161616]">Which business model fits your product?</h2>
          <p className="font-body text-base leading-relaxed text-[#414141]">Clients use “dropshipping” for several different operations. The sourcing choice changes your margins, delivery time, brand control and marketplace eligibility. We compare the model before selecting an app or designing a store.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: "Ready-made wholesale dropshipping", body: "List approved products from a wholesaler that holds stock and dispatches each paid order. Confirm authorization, stock updates, returns and how the seller appears on the packing slip. This can test a niche quickly, but shared catalogs are easy for competitors to copy." },
            { title: "Print on demand", body: "Create original artwork or product designs, then have a production partner print and ship after purchase. The key work is the design, mockup accuracy, sample quality, production time and rights to the artwork. It is a useful route for custom apparel and gifts, not a license to resell copied designs." },
            { title: "Private label and custom manufacturing", body: "Develop or adapt a product with a manufacturer, approve samples, negotiate minimum orders, plan packaging and inspections, and choose a warehouse or direct-shipping model. This may require inventory funding, compliance checks, freight and customs, so it needs a separate production scope." },
            { title: "Hybrid brand and marketplace distribution", body: "Use an owned Shopify storefront alongside eligible channels such as TikTok Shop, Amazon, eBay or Walmart. Catalog data may be reused, but each channel needs its own seller approvals, product identifiers, price rules, fulfillment promises and customer-service process." },
          ].map((model) => (
            <div key={model.title} className="rounded-2xl border border-[#E0DDDB] bg-white p-6 shadow-xs">
              <h3 className="font-display text-lg font-bold text-[#161616]">{model.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-[#585858]">{model.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. WHAT IS DROPSHIPPING */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-6 shadow-xs">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
          What Is Dropshipping?
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-4xl">
          <p>
            Dropshipping is an eCommerce fulfillment model where a retail storefront sells products to customers without keeping physical inventory in stock. When an order is placed on your online store, the order details and shipping address are forwarded to a third-party supplier or manufacturer who packages and ships the product directly to the customer.
          </p>
          <p>
            While the core concept reduces upfront inventory cost, running a reliable dropshipping store requires careful setup: structured supplier software connections, accurate product descriptions, clear shipping policies, automated inventory synchronization, and responsive customer service.
          </p>
        </div>
      </section>

      {/* 3. WHAT WE SET UP */}
      <section className="space-y-8">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#9F8BE7] font-bold">
            STORE ARCHITECTURE &amp; DELIVERABLES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#161616]">
            What We Set Up for Your Dropshipping Store
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            We handle the technical and structural components needed to get your dropshipping business online and operational.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((item) => (
            <div key={item.title} className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-[#9F8BE7]/15 flex items-center justify-center text-[#9F8BE7]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-display text-base font-bold text-[#161616] pt-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#585858] font-body leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AUTOMATION WORKFLOW & SUPPLIER INTEGRATIONS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] shadow-xs">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#9F8BE7] font-bold">
            SUPPLIER CONNECTIVITY &amp; AUTOMATION
          </span>
          <h2 className="font-display text-3xl font-bold text-[#161616]">
            Ten sourcing platforms we can assess for U.S. merchants
          </h2>
          <p className="text-sm text-[#585858] font-body leading-relaxed">
            The platform is a starting point, not the supplier decision. We assess these ten ecosystems when they fit the niche and the store&apos;s eligibility. Some connect U.S. suppliers or offer U.S. fulfillment for selected products; others source internationally. We do not present every listing as U.S.-made, U.S.-stocked or already approved for every sales channel.
          </p>
          <p className="text-sm text-[#585858] font-body leading-relaxed">Our assessment checks a sample order, true product cost, shipping origin, processing time, carrier tracking, return address, damaged-item procedure, stock feed, image rights and how disputes are handled. We can also source directly from U.S. wholesalers or evaluate manufacturers in China, Korea, Vietnam, Pakistan and the UAE when the product and shipping promise justify it.</p>
        </div>

        <div className="lg:col-span-6 p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-4 font-mono-num text-xs">
          <span className="font-bold text-[#161616] block border-b border-[#E0DDDB] pb-2">
            CONNECTED FULFILLMENT PIPELINE
          </span>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#9F8BE7] text-white flex items-center justify-center font-bold text-[10px]">1</span>
            <span className="text-[#303030]">Customer places order on your Shopify store</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#9F8BE7] text-white flex items-center justify-center font-bold text-[10px]">2</span>
            <span className="text-[#303030]">Order data routes to connected supplier feed</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-[#9F8BE7] text-white flex items-center justify-center font-bold text-[10px]">3</span>
            <span className="text-[#303030]">Supplier packages &amp; dispatches shipment</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">4</span>
            <span className="text-[#303030]">Tracking and exceptions are checked before customer updates</span>
          </div>
          <p className="text-[#585858] leading-relaxed">We test this flow with real account permissions. Manual review is still needed for failed payments, out-of-stock items, address changes, late dispatch and returns.</p>
        </div>
      </section>

      <section className="space-y-6" aria-labelledby="supplier-options-heading">
        <div className="max-w-4xl space-y-3">
          <h2 id="supplier-options-heading" className="font-display text-3xl font-bold text-[#161616]">How we use each supplier option</h2>
          <p className="font-body text-base leading-relaxed text-[#585858]">We select by product and fulfillment requirements, not by the number of apps installed. A client may need one strong direct supplier instead of ten catalogs. The options below are examples we can evaluate or connect; availability, integrations, fees and the supplier&apos;s location must be confirmed for the specific account and item.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {supplierOptions.map((option) => (
            <div key={option.name} className="min-w-0 rounded-2xl border border-[#E0DDDB] bg-white p-5 shadow-xs">
              <Truck className="h-5 w-5 text-[#6B4BA7]" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold text-[#161616]">{option.name}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[#414141]">{option.fit}</p>
              <p className="mt-3 border-t border-[#E0DDDB] pt-3 font-body text-xs leading-relaxed text-[#585858]"><strong className="text-[#161616]">We verify:</strong> {option.check}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-sm leading-relaxed text-[#585858]">Shopify Collective has <a className="font-semibold text-[#6B4BA7] underline underline-offset-4" href="https://help.shopify.com/en/manual/online-sales-channels/shopify-collective/retailers/requirements-and-considerations">retailer and supplier requirements</a>. A supplier platform listing is not an endorsement or a claim of a formal UBE partnership.</p>
      </section>

      <section className="rounded-3xl border border-[#E0DDDB] bg-white p-6 shadow-xs sm:p-10 space-y-7" aria-labelledby="channel-heading">
        <div className="max-w-4xl space-y-3">
          <h2 id="channel-heading" className="font-display text-3xl font-bold text-[#161616]">Shopify, TikTok Shop, Amazon, eBay, Etsy and Walmart are different sales channels</h2>
          <p className="font-body text-base leading-relaxed text-[#414141]">A supplier being willing to ship does not mean a marketplace permits the product or the fulfillment arrangement. We decide which channels match the product, ownership documents, shipping ability and brand assets before creating listings.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div><h3 className="font-display text-lg font-bold text-[#161616]">Shopify storefront</h3><p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">Your owned storefront gives you control over design, collections, content, customer journey and approved supplier apps. We plan product pages, checkout, shipping policies, email flows, analytics and feeds. <Link href="/shopify" className="font-semibold text-[#6B4BA7] underline underline-offset-4">Explore Shopify development.</Link></p></div>
          <div><h3 className="font-display text-lg font-bold text-[#161616]">TikTok Shop</h3><p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">Product eligibility, seller verification, creator content, live shopping and fulfillment timing affect the plan. We can scope Seller Center setup, catalog sync, creative, affiliates and ads, then monitor dispatch and returns. <Link href="/tiktok-shop" className="font-semibold text-[#6B4BA7] underline underline-offset-4">See TikTok Shop services.</Link></p></div>
          <div><h3 className="font-display text-lg font-bold text-[#161616]">Amazon</h3><p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">We assess seller eligibility, listing rights, product identifiers, category requirements and fulfillment. Under <a href="https://sell.amazon.com/learn/what-is-dropshipping" className="font-semibold text-[#6B4BA7] underline underline-offset-4">Amazon&apos;s dropshipping guidance</a>, the merchant must remain the seller of record. Retailer-branded packing slips or another seller&apos;s details can create policy problems. <Link href="/amazon" className="font-semibold text-[#6B4BA7] underline underline-offset-4">Amazon marketplace support.</Link></p></div>
          <div><h3 className="font-display text-lg font-bold text-[#161616]">eBay</h3><p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">We can plan wholesale-supplier listings, inventory and shipping rules. <a href="https://www.ebay.com/help/selling/listings/dropshipping?id=4176" className="font-semibold text-[#6B4BA7] underline underline-offset-4">eBay permits wholesale-supplier dropshipping</a>, but buying from another retailer or marketplace only after an eBay sale is not allowed. <Link href="/ebay" className="font-semibold text-[#6B4BA7] underline underline-offset-4">eBay setup and management.</Link></p></div>
          <div><h3 className="font-display text-lg font-bold text-[#161616]">Etsy</h3><p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">Etsy is a fit for eligible original designs, custom goods and qualifying production-partner arrangements, not a general resale catalog. <a href="https://help.etsy.com/hc/en-us/articles/23948763872151-Does-Etsy-Allow-Drop-Shipping-or-Reselling" className="font-semibold text-[#6B4BA7] underline underline-offset-4">Etsy&apos;s policy</a> restricts ordinary dropshipping and reselling. We check creative ownership and partner disclosure before recommending Etsy. <Link href="/services/etsy-shop-setup" className="font-semibold text-[#6B4BA7] underline underline-offset-4">Etsy shop setup.</Link></p></div>
          <div><h3 className="font-display text-lg font-bold text-[#161616]">Walmart Marketplace</h3><p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">Seller approval, product compliance, reliable domestic delivery, packaging and tracking determine whether Walmart is appropriate. We evaluate fulfillment against <a href="https://marketplacelearn.walmart.com/guides/Policies%20%26%20standards/Performance/Seller-performance-standards" className="font-semibold text-[#6B4BA7] underline underline-offset-4">Walmart&apos;s seller standards</a> before listing. <Link href="/walmart-marketplace" className="font-semibold text-[#6B4BA7] underline underline-offset-4">Walmart marketplace support.</Link></p></div>
        </div>
      </section>

      <section className="space-y-8" aria-labelledby="launch-plan-heading">
        <div className="max-w-4xl space-y-3">
          <h2 id="launch-plan-heading" className="font-display text-3xl font-bold text-[#161616]">Our process from the first product idea to the first repeat customer</h2>
          <p className="font-body text-base leading-relaxed text-[#414141]">The point is to create a business that can take an order, fulfill it, answer the customer and learn from the result. The order of work matters more than the number of products uploaded.</p>
        </div>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { stage: "01", title: "Validate the opportunity", body: "Discuss your audience, niche, competing offers, intended channels and available capital. We screen for product restrictions, realistic delivery expectations and a price range that can carry acquisition and fulfillment costs." },
            { stage: "02", title: "Shortlist and sample suppliers", body: "Compare landed cost, stock location, packaging, order processing, defect handling, refund terms and access to product content. Where practical, order samples before approving hero products or advertising claims." },
            { stage: "03", title: "Build the brand and offer", body: "Set positioning, product hierarchy, visuals, descriptions and the reasons a buyer should choose this store. Custom graphics and packaging are scoped based on supplier capability and the rights to use each asset." },
            { stage: "04", title: "Configure the storefront and channels", body: "Create the mobile store, collections, product variants, payments, shipping, taxes and policies. Connect only approved feeds and seller accounts, with different listing rules for each marketplace." },
            { stage: "05", title: "Test the full order journey", body: "Place test orders, inspect checkout and mobile pages, confirm order routing, tracking messages, cancellation handling and customer support access. Resolve broken feeds and contradictory delivery promises before campaigns start." },
            { stage: "06", title: "Launch, learn and improve", body: "Use the agreed mix of search, content, social, creators, email and paid media. Read behavior and margin data, improve weak product pages, pause poor-fit products, and report against contract milestones." },
          ].map((step) => (
            <li key={step.stage} className="rounded-2xl border border-[#E0DDDB] bg-white p-6 shadow-xs">
              <span className="font-mono-num text-sm font-bold text-[#6B4BA7]">STAGE {step.stage}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-[#161616]">{step.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[#585858]">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="font-body text-sm leading-relaxed text-[#585858]">Already have a store? We can audit the catalog, suppliers, checkout, traffic sources and unit economics before recommending a rebuild. See the <Link href="/insights/how-to-start-a-dropshipping-business-2026" className="font-semibold text-[#6B4BA7] underline underline-offset-4">dropshipping startup guide</Link> and <Link href="/insights/dropshipping-store-cost-to-build" className="font-semibold text-[#6B4BA7] underline underline-offset-4">store cost breakdown</Link> for preparation questions.</p>
      </section>

      <section className="grid gap-8 rounded-3xl border border-[#E0DDDB] bg-[#F4F0FC] p-6 sm:p-10 lg:grid-cols-2" aria-labelledby="profit-heading">
        <div className="space-y-4">
          <h2 id="profit-heading" className="font-display text-3xl font-bold text-[#161616]">What makes a dropshipping store profitable?</h2>
          <p className="font-body text-sm leading-relaxed text-[#414141]">A store can show orders and still lose money. Before launch we estimate selling price minus supplier product cost, shipping, payment and marketplace fees, duties where applicable, expected returns, advertising and operating costs. The remainder is the contribution available to cover overhead and profit. If the economics only work when every visitor buys or no one returns a product, the product needs a different price, supplier or channel.</p>
          <p className="font-body text-sm leading-relaxed text-[#414141]">We also test whether customers trust the offer: clear product photos and dimensions, credible delivery dates, returns, visible contact information, mobile checkout, and useful answers before purchase. Lower traffic can sometimes outperform more traffic when the audience and offer fit. High click counts with no purchases call for a review of traffic intent, price, shipping surprises, trust and checkout errors before spending more on ads.</p>
        </div>
        <div className="space-y-4 rounded-2xl border border-[#D8CFF2] bg-white p-6">
          <h3 className="font-display text-xl font-bold text-[#161616]">What we track in a managed engagement</h3>
          <ul className="space-y-3 font-body text-sm leading-relaxed text-[#414141]">
            <li><strong>Demand:</strong> qualified sessions and channel source, not vanity visits.</li>
            <li><strong>Buying behavior:</strong> product views, add-to-cart, checkout starts and completed orders.</li>
            <li><strong>Unit economics:</strong> average order value, landed cost, fees, ad spend and contribution margin.</li>
            <li><strong>Operations:</strong> stock accuracy, dispatch time, delivery, returns and support issues.</li>
            <li><strong>Retention:</strong> repeat purchases and email performance where the category supports it.</li>
          </ul>
          <p className="font-body text-xs leading-relaxed text-[#585858]">A guaranteed sales target, if included, is measured by the agreed account data and definitions in the contract. A ranking or an AI citation is never a substitute for completed, fulfilled sales.</p>
        </div>
      </section>

      {/* 5. ECOSYSTEM LINKS & PATHWAYS */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
          Connected eCommerce Ecosystem Pathways
        </h2>
        <p className="text-sm text-[#585858] font-body max-w-3xl">
          Dropshipping storefronts build upon core Shopify development and broader commerce strategy. We also support <Link href="/services/ecommerce-store-management" className="font-semibold text-[#6B4BA7] underline underline-offset-4">post-launch store operations</Link> and <Link href="/services/ai-seo-agency" className="font-semibold text-[#6B4BA7] underline underline-offset-4">search visibility work</Link>. Explore related specialized service pathways:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <Link
            href="/services/shopify-development"
            className="p-6 rounded-2xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all space-y-2 group shadow-2xs"
          >
            <span className="font-display font-bold text-base text-[#161616] group-hover:text-[#9F8BE7] transition-colors flex items-center justify-between">
              <span>Shopify Development</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </span>
            <p className="text-xs text-[#585858] font-body">
              Custom Liquid themes, speed optimization, and bespoke storefront code.
            </p>
          </Link>

          <Link
            href="/services/ecommerce"
            className="p-6 rounded-2xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all space-y-2 group shadow-2xs"
          >
            <span className="font-display font-bold text-base text-[#161616] group-hover:text-[#9F8BE7] transition-colors flex items-center justify-between">
              <span>eCommerce Growth Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </span>
            <p className="text-xs text-[#585858] font-body">
              Multi-channel commerce strategy across Shopify, Amazon, Etsy, and eBay.
            </p>
          </Link>

          <Link
            href="/tiktok-shop"
            className="p-6 rounded-2xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all space-y-2 group shadow-2xs"
          >
            <span className="font-display font-bold text-base text-[#161616] group-hover:text-[#9F8BE7] transition-colors flex items-center justify-between">
              <span>TikTok Shop Setup</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </span>
            <p className="text-xs text-[#585858] font-body">
              In-app social commerce setup for merchants meeting platform eligibility rules.
            </p>
          </Link>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#9F8BE7] font-bold">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 id="dropshipping-faq-heading" className="font-display text-3xl font-bold text-[#161616]">
            Dropshipping questions clients ask before they sign
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs">
              <h3 className="font-display text-base font-bold text-[#161616] flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#9F8BE7] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-[#585858] font-body leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONVERSION CTA BANNER */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#161616] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <h3 className="font-display text-2xl font-bold text-white">
            Ready to Launch Your Dropshipping Store?
          </h3>
          <p className="text-xs sm:text-sm text-[#ACACAC] font-body">
            Let&apos;s discuss your niche, target catalog, supplier tools, and store launch timeline.
          </p>
        </div>
        <ServiceProjectModalTrigger
          label="Start Your Dropshipping Project"
          service="Dropshipping Setup"
          variant="primary"
        />
      </section>
      <StoreManagementLink />

      <RelatedServiceLinks slug="dropshipping" />    </div>
  );
}
