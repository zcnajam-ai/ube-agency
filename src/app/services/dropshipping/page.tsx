import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Truck,
  RefreshCw,
  Layers,
  Settings2,
  Package,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Dropshipping Store Setup & Automation | Shopify Dropshipping Services | Unified Branding Experts",
  description:
    "Launch a professional dropshipping store with supplier integrations, product setup, inventory sync and automated fulfillment. Unified Branding Experts builds Shopify dropshipping systems designed for organized store operations and scalable growth.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/dropshipping",
  },
  openGraph: {
    title: "Dropshipping Store Setup & Automation | Unified Branding Experts",
    description:
      "Professional Shopify dropshipping store development, supplier integrations (DSers, CJ Dropshipping, Zendrop), inventory sync, and order routing.",
    url: "https://unifiedbrandingexperts.com/services/dropshipping",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Dropshipping Store Setup & Automation - Unified Branding Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dropshipping Store Setup & Automation | Unified Branding Experts",
    description:
      "Professional Shopify dropshipping store development, supplier integrations, inventory sync, and automated fulfillment workflows.",
    images: ["https://unifiedbrandingexperts.com/og-default.png"],
  },
};

export default function DropshippingServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dropshipping Store Setup & Automation Services",
    serviceType: "eCommerce Storefront Setup & Fulfillment Automation",
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: "https://unifiedbrandingexperts.com",
    },
    areaServed: "Worldwide",
    description:
      "Launch a professional dropshipping store with supplier integrations, product catalog setup, inventory sync and automated fulfillment routing.",
    url: "https://unifiedbrandingexperts.com/services/dropshipping",
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
        name: "Dropshipping",
        item: "https://unifiedbrandingexperts.com/services/dropshipping",
      },
    ],
  };

  const faqs = [
    {
      q: "Can you build a complete dropshipping store?",
      a: "Yes. We build complete, launch-ready Shopify dropshipping stores including theme customization, product catalog importing, supplier app integration, payment checkout configuration, and order-routing workflows.",
    },
    {
      q: "Which suppliers can you connect?",
      a: "We integrate with leading dropshipping supplier platforms including DSers (AliExpress), CJ Dropshipping, Zendrop, and custom CSV/API private supplier feeds.",
    },
    {
      q: "Can you import products for me?",
      a: "Yes. We import and format initial product listings, structure categories and collections, refine titles and descriptions for clarity, and set initial pricing margins.",
    },
    {
      q: "Can you automate fulfillment?",
      a: "Yes. We configure automated supplier order routing so incoming customer orders push directly to your supplier for fulfillment, and tracking numbers sync back automatically.",
    },
    {
      q: "Can a dropshipping store connect to TikTok Shop?",
      a: "Yes, provided the store meets TikTok Shop seller eligibility, business documentation requirements, product policies, and local shipping timeframe criteria. We can connect your eligible catalog to TikTok Shop.",
    },
    {
      q: "Do I own the Shopify store?",
      a: "Yes. You own 100% of your Shopify account, domain, store content, and customer data once setup is transferred to you.",
    },
    {
      q: "How long does setup take?",
      a: "Standard dropshipping store builds are completed in 7 to 14 business days depending on package tier and catalog size.",
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
            Dropshipping Store Setup &amp; Supplier Automation
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Launch a dropshipping business with the storefront, supplier connections and fulfillment workflows working together from the beginning.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body leading-relaxed max-w-2xl">
            Unified Branding Experts builds professional dropshipping stores with organized product catalogs, supplier integrations, inventory synchronization, order-routing workflows and responsive customer experiences. Whether you are starting with Shopify, connecting an existing supplier or expanding into additional product categories, we structure the system so the operational side of the store is easier to manage as it grows.
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
            Supported Supplier Platforms &amp; Integrations
          </h2>
          <p className="text-sm text-[#585858] font-body leading-relaxed">
            We configure storefront integrations with major dropshipping supplier applications and private supplier feeds. Supported integration examples include:
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              "DSers (AliExpress)",
              "CJ Dropshipping",
              "Zendrop",
              "Private Supplier CSV / APIs",
            ].map((sup) => (
              <div key={sup} className="p-3 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-bold text-[#161616] flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{sup}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-4 font-mono-num text-xs">
          <span className="font-bold text-[#161616] block border-b border-[#E0DDDB] pb-2">
            AUTOMATED FULFILLMENT PIPELINE
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
            <span className="text-[#303030]">Tracking number syncs back &amp; notifies customer</span>
          </div>
        </div>
      </section>

      {/* 5. ECOSYSTEM LINKS & PATHWAYS */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
          Connected eCommerce Ecosystem Pathways
        </h2>
        <p className="text-sm text-[#585858] font-body max-w-3xl">
          Dropshipping storefronts build upon core Shopify development and broader commerce strategy. Explore related specialized service pathways:
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
            href="/services/tiktok-shop-setup"
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
          <h2 className="font-display text-3xl font-bold text-[#161616]">
            Dropshipping Setup Questions
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
    </div>
  );
}
