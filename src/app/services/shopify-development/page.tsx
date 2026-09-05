import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  ShoppingBag,
  Zap,
  Settings2,
  RefreshCw,
  CreditCard,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Store Setup & Custom Theme Development",
  description:
    "End-to-end Shopify store setup and custom theme development. Custom Shopify Plus stores, dropshipping automation, 3PL inventory sync, and responsive checkout flows.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/shopify-development",
  },
  openGraph: {
    title: "Shopify Store Setup & Custom Theme Development",
    description:
      "End-to-end Shopify store setup and custom theme development with responsive storefront and ecommerce performance analytics.",
    url: "https://unifiedbrandingexperts.com/services/shopify-development",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 2048,
        height: 684,
        alt: "Shopify store setup and custom theme development with responsive storefront and ecommerce performance analytics",
      },
    ],
  },
};

export default function ShopifyDevelopmentPage() {
  const serviceIncludes = [
    {
      title: "Custom Shopify 2.0 Theme Architecture",
      desc: "Bespoke Liquid and JSON templates engineered with modular drag-and-drop sections. Built without bloated third-party page builders for clean maintenance and content updates.",
      icon: <ShoppingBag className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/ecommerce/storefront-setup.jpeg",
    },
    {
      title: "Streamlined Checkout & Cart Funnels",
      desc: "Slide-out cart drawers, tiered shipping bars, upsell configurations, bundles, and Shopify Checkout Extensibility configured to simplify purchasing.",
      icon: <CreditCard className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/shopify/shopify-conversion-metrics.webp",
    },
    {
      title: "3PL, ERP & Multi-Warehouse Inventory Sync",
      desc: "Automated synchronization with fulfillment centers, ShipStation, multi-location warehouse routing, and dropshipping supplier feeds (DSers, CJ).",
      icon: <Truck className="w-5 h-5 text-purple-600" />,
      image: "/images/official/ecommerce/multichannel-growth.jpeg",
    },
    {
      title: "Performance & Core Web Vitals Optimization",
      desc: "Optimized asset loading, responsive image formats, lazy-loaded offscreen media, and streamlined app configurations that support fast mobile browsing.",
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      image: "/images/official/shopify/shopify-performance.webp",
    },
    {
      title: "Custom App Development & Private APIs",
      desc: "Private Shopify apps, custom discount calculators, wholesale B2B pricing portals, and tailor-made third-party API connectors.",
      icon: <Settings2 className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/automation/system-integration.jpeg",
    },
    {
      title: "Store Migration & 301 Redirect Mapping",
      desc: "Migrate from WooCommerce, Magento, BigCommerce, or Etsy to Shopify with organized data mapping: customer records, order archives, and complete 301 URL redirect maps to support organic search continuity.",
      icon: <RefreshCw className="w-5 h-5 text-amber-600" />,
      image: "/images/official/branding/brand-strategy.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Catalog Mapping",
      review: "Product variants, SKU hierarchies, collections, pricing structures, and shipping logic.",
      setup: "A structured Shopify Information Architecture map and collection wireframes.",
      avoid: "Disorganized collections and messy navigation menus that confuse shoppers.",
    },
    {
      number: "02",
      title: "Custom UI/UX & Theme Build",
      review: "Brand visual assets, color palettes, product photography, and mobile ergonomics.",
      setup: "A bespoke Shopify 2.0 theme built with clean Liquid code and native section blocks.",
      avoid: "Heavy bloated templates loaded with slow, conflicting third-party app widgets.",
    },
    {
      number: "03",
      title: "App Configuration & Logistics",
      review: "Payment gateways (Shopify Payments, Stripe, PayPal), automated taxes, and 3PL routing.",
      setup: "Configured shipping zones, Klaviyo email integration, and inventory sync pipelines.",
      avoid: "Failed checkout transactions, tax miscalculations, or delayed shipping sync.",
    },
    {
      number: "04",
      title: "Performance & Conversion Testing",
      review: "Mobile checkout flow, discount codes, currency conversion, and page load times.",
      setup: "End-to-end test purchases across iOS, Android, Safari, and Chrome browsers.",
      avoid: "Bugs at the point of purchase causing abandoned carts on launch day.",
    },
    {
      number: "05",
      title: "Launch & Team Onboarding",
      review: "Domain DNS setup, Google Search Console sitemap submission, and analytics calibration.",
      setup: "Live storefront launch, admin video walkthrough training, and 30-day post-launch support.",
      avoid: "Downtime during launch or feeling lost managing your orders and inventory.",
    },
  ];

  const faqs = [
    {
      q: "How long does a custom Shopify store setup take?",
      a: "A standard custom Shopify build typically takes 7 to 14 business days, depending on product catalog size, custom functionality requirements, and app integrations.",
    },
    {
      q: "Can you help set up automated dropshipping on Shopify?",
      a: "Yes. We configure automated supplier feeds (DSers, Zendrop, CJ Dropshipping, or private agents), automated order fulfillment, and real-time tracking number syncing.",
    },
    {
      q: "Will my Shopify store load quickly on mobile devices?",
      a: "Yes. We build clean Shopify 2.0 themes without heavy code bloat, optimizing image formats (WebP) and minifying scripts to achieve sub-second load times and 90+ Lighthouse speed scores.",
    },
    {
      q: "Can you migrate my existing store from WooCommerce or Etsy to Shopify?",
      a: "Yes. We handle 100% of product data, customer accounts, past orders, and critical 301 URL redirects so you retain all your organic search engine rankings.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Shopify Store Setup & Custom Theme Development Services",
    serviceType: "eCommerce Development",
    provider: {
      "@type": "Organization",
      name: "Unified Branding Experts",
      url: "https://unifiedbrandingexperts.com",
    },
    areaServed: "Worldwide",
    description: "End-to-end Shopify store setup and custom theme development. Custom Shopify Plus stores, dropshipping automation, 3PL inventory sync, and responsive checkout flows.",
    url: "https://unifiedbrandingexperts.com/services/shopify-development",
    offers: {
      "@type": "Offer",
      price: "450.00",
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
        name: "Shopify Development",
        item: "https://unifiedbrandingexperts.com/services/shopify-development",
      },
    ],
  };

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
      {/* 1. HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SHOPIFY EXPERTS &amp; ECOMMERCE ARCHITECTURE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Shopify Store Setup &amp; Custom Theme Development.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            We build custom, reliable <strong className="text-[#161616]">Shopify &amp; Shopify Plus</strong> stores engineered for clean navigation, automated dropshipping/3PL logistics, and fast mobile browsing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Custom Shopify 2.0 modular theme architecture",
              "Fast load times & mobile-optimized layouts",
              "Automated dropshipping & 3PL warehouse sync",
              "Streamlined checkout & upsell configuration",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact?type=shopify"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Start Your Shopify Store
            </Link>

            <Link
              href="/our-custom-web-design-development-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>View eCom Packages</span>
              <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                From $450
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        {/* HERO VISUAL (Exact Intrinsic 2048/684 Aspect Ratio Container) */}
        <div className="lg:col-span-5 relative w-full">
          <div className="relative w-full aspect-[2048/684] rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-md group">
            <Image
              src="/images/official/shopify/shopify-development-hero.webp"
              alt="Shopify store setup and custom theme development with responsive storefront and ecommerce performance analytics"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">SHOPIFY • DROPSHIPPING • ECOMMERCE</span>
              <span className="text-emerald-600 font-bold">FROM $450</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEEP DIVE (WITH SHOPIFY PERFORMANCE VISUAL) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative w-full aspect-[1024/684] rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/shopify/shopify-performance.webp"
              alt="Shopify mobile storefront optimization, fast loading speeds, and checkout conversion features"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            STOREFRONT ARCHITECTURE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            Why Shopify Built by UBE Outperforms Generic Templates.
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Many generic templates suffer from unnecessary code overhead, conflicting plugins, and slow mobile rendering. A streamlined storefront makes browsing and purchasing straightforward for your customers.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            We build native Shopify storefronts with custom section architecture, clean Liquid logic, and responsive loading speeds, providing a frictionless shopping experience.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            Scale your brand on a rock-solid commerce foundation built for millions in GMV.
          </p>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="space-y-12">
        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FAF7F6] to-white border-2 border-[#9F8BE7] shadow-sm mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">SHOPIFY AI SEARCH READINESS</span>
          <p className="text-sm font-body text-[#161616] font-medium">Learn how Shopify product data, Merchant Center and AI search optimization work together.</p>
        </div>
        <Link href="/insights/shopify-ai-seo-guide" className="px-5 py-2.5 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-xs hover:bg-[#b4a3f7] transition-all shrink-0 flex items-center gap-1.5 shadow-xs">
          <span>Read Shopify AI SEO Guide</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            TECHNICAL SCOPE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our Shopify Development Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            Full-spectrum storefront design, backend logistics automation, and conversion optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceIncludes.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white border border-[#E0DDDB] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#9F8BE7] transition-all group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F6]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROCESS STEPS */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            LAUNCH SPRINT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Our 5-Step Shopify Development Process
          </h2>
        </div>

        <div className="space-y-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="font-display font-black text-3xl text-[#9F8BE7] font-mono-num">
                  {step.number}
                </span>
                <h3 className="font-display text-base font-bold text-[#161616]">{step.title}</h3>
              </div>

              <div className="md:col-span-3 text-xs text-[#585858]">
                <strong className="text-[#161616] block mb-0.5">What we review:</strong>
                <span>{step.review}</span>
              </div>

              <div className="md:col-span-3 text-xs text-[#585858]">
                <strong className="text-[#161616] block mb-0.5">What we set up:</strong>
                <span>{step.setup}</span>
              </div>

              <div className="md:col-span-3 text-xs text-rose-700 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                <strong className="block mb-0.5 font-bold">What this helps you avoid:</strong>
                <span>{step.avoid}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PACKAGE CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-[#F4EFEB] border-2 border-[#9F8BE7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono-num text-emerald-600 font-bold uppercase tracking-wider block">
            AFFORDABLE ECOMMERCE PACKAGES
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Explore eCommerce Packages &amp; Pricing
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body">
            Compare Custom Web &amp; eCommerce Basic ($450), Standard ($700), and Enterprise ($1,400) packages.
          </p>
        </div>

        <Link
          href="/our-custom-web-design-development-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View eCom Packages</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      {/* 6. FAQS */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            FREQUENT QUESTIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs"
            >
              <h3 className="font-display text-base font-bold text-[#161616] flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#9F8BE7] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready to Build Your High-Velocity Shopify Store?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          From new brand launches to high-volume store redesigns and custom migrations.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=shopify"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Start Shopify Project
          </Link>
          <Link
            href="/our-custom-web-design-development-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
