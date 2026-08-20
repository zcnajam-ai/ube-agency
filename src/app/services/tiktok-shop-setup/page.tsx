import React from "react";
import Link from "next/link";
import Image from "next/image";
import TikTokMinimalVisual from "@/components/common/TikTokMinimalVisual";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Video,
  ShoppingBag,
  TrendingUp,
  Share2,
  DollarSign,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "TikTok Shop Setup & Creator Affiliate Marketing",
  description:
    "End-to-end TikTok Shop setup and marketing. TikTok Seller Center verification, product catalog sync, Creator Affiliate program management, and Shoppable Video Ads.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/tiktok-shop-setup",
  },
  openGraph: {
    title: "TikTok Shop Setup & Creator Affiliate Marketing",
    description:
      "End-to-end TikTok Shop setup and Creator Affiliate program management.",
    url: "https://unifiedbrandingexperts.com/services/tiktok-shop-setup",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/project-marketing-1.webp",
        width: 1200,
        height: 630,
        alt: "TikTok Shop Setup - Unified Branding Experts",
      },
    ],
  },
};

export default function TikTokShopSetupPage() {
  const serviceIncludes = [
    {
      title: "TikTok Seller Center Account Verification",
      desc: "Complete business registration, tax documentation, banking verification, and warehouse fulfillment settings compliant with strict TikTok Shop seller policies.",
      icon: <ShoppingBag className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/tiktok/tiktok-growth.jpeg",
    },
    {
      title: "Shopify / WooCommerce Product Catalog Sync",
      desc: "Real-time automated integration connecting your existing Shopify or WooCommerce store directly to TikTok Shop for instant stock, order, and pricing synchronization.",
      icon: <Share2 className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/ecommerce/storefront-setup.jpeg",
    },
    {
      title: "TikTok Shop Affiliate Program & Creator Outreach",
      desc: "Recruit hundreds of creators to promote your products. We set up commission rates, target creator discovery lists, manage sample requests, and track affiliate GMV.",
      icon: <TrendingUp className="w-5 h-5 text-purple-600" />,
      image: "/images/official/tiktok/tiktok-growth.jpeg",
    },
    {
      title: "Shoppable Video Ads & Spark Ads Amplification",
      desc: "Turn organic viral videos into paid revenue drivers with direct in-feed shopping links, anchor product tags, and conversion-optimized Spark Ads campaigns.",
      icon: <Video className="w-5 h-5 text-blue-600" />,
      image: "/images/official/tiktok/tiktok-growth.jpeg",
    },
    {
      title: "Live Shopping Stream Architecture",
      desc: "Technical setup for live selling: real-time flash sales, pin-to-screen featured products, live coupon drops, and moderator workflow optimization.",
      icon: <Zap className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/branding/branding-hero.jpeg",
    },
    {
      title: "Seller Performance & Compliance Governance",
      desc: "Maintain flawless seller health scores: on-time dispatch rate, low cancellation rates, customer service response times, and review dispute management.",
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
      image: "/images/official/automation/system-integration.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Seller Center Registration",
      review: "Your business identity, tax credentials, bank account, and logistics setup.",
      setup: "Verified TikTok Seller account and official storefront branding assets.",
      avoid: "Account registration rejection due to mismatched documentation.",
    },
    {
      number: "02",
      title: "Catalog Integration & Sync",
      review: "Product variants, image compliance, inventory counts, and price points.",
      setup: "Automated real-time inventory feed connecting Shopify to TikTok Shop.",
      avoid: "Overselling out-of-stock items and receiving severe TikTok late dispatch penalties.",
    },
    {
      number: "03",
      title: "Affiliate Commission Structure",
      review: "Profit margins, target creator tiers, and competitor commission benchmarks.",
      setup: "Open plan, targeted plan, and sample distribution workflows in Creator Center.",
      avoid: "Setting unsustainable commission rates or failing to attract top-performing creators.",
    },
    {
      number: "04",
      title: "Shoppable Content & Spark Ads",
      review: "High-performing organic creator videos and short-form video hooks.",
      setup: "Shoppable anchor tags on videos and calibrated Spark Ads budget scaling.",
      avoid: "Running boring corporate ads that TikTok users instantly swipe past.",
    },
    {
      number: "05",
      title: "Fulfillment & GMV Scaling",
      review: "Daily order volume, return rates, customer inquiries, and seller health metrics.",
      setup: "Automated label printing, tracking sync, and ongoing affiliate creator campaigns.",
      avoid: "Violations of TikTok's strict 2-day dispatch window that risk account suspension.",
    },
  ];

  const faqs = [
    {
      q: "Can I connect my existing Shopify store to TikTok Shop?",
      a: "Yes. We install and configure the official TikTok for Shopify connector, enabling automatic real-time sync of products, inventory levels, order data, and tracking numbers.",
    },
    {
      q: "How does the TikTok Shop Affiliate program work?",
      a: "We set up commission rates (e.g., 10-20%) so TikTok creators can add your product to their videos with zero upfront cost to you. You only pay the creator a commission when a verified sale occurs.",
    },
    {
      q: "What are TikTok's requirements for TikTok Shop sellers?",
      a: "Sellers must provide verified government business registration, tax identification (EIN/SSN in US), US-based shipping and return addresses, and maintain a dispatch time within 2 business days.",
    },
    {
      q: "Do you help produce video creatives for TikTok Shop?",
      a: "Yes. Our TikTok Marketing packages include UGC creator sourcing, hook scripting, video editing, and Spark Ads media buying to scale winning videos.",
    },
    {
      q: "How fast can we launch TikTok Shop?",
      a: "Account verification and product catalog sync typically take 3 to 7 business days. Creator affiliate campaigns can begin immediately following product approval.",
    },
    {
      q: "What are your TikTok Marketing & Shop package prices?",
      a: "Our TikTok marketing plans start at $299/mo for Starter management, $699/mo for Growth with creator outreach, and $1,499/mo for Authority omnichannel scaling.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TIKTOK SHOP SETUP &amp; VIRAL COMMERCE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            TikTok Shop Setup &amp; Creator Affiliate Marketing.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Tap into the world&apos;s fastest-growing social commerce engine. We handle <strong className="text-[#161616]">TikTok Seller Center verification</strong>, <strong className="text-[#161616]">Shopify catalog sync</strong>, Creator Affiliate recruitment, and high-converting Shoppable Video Ads.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Verified TikTok Seller Center setup & compliance",
              "Real-time Shopify & WooCommerce catalog sync",
              "Creator affiliate outreach & sample workflows",
              "Shoppable video ads & Spark Ads media buying",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact?type=tiktok-shop"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Launch TikTok Shop
            </Link>

            <Link
              href="/tiktok-marketing-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>View TikTok Packages</span>
              <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                From $299/mo
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <TikTokMinimalVisual />
        </div>
      </section>

      {/* 2. Deep Dive */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/ecommerce/storefront-setup.jpeg"
              alt="TikTok Shop Frictionless In-App Checkout"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            VIRAL COMMERCE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            The Most Frictionless Checkout in eCommerce.
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            TikTok Shop removes the traditional friction of clicking an ad and loading an external browser. Users can buy with saved shipping and payment credentials in just 2 taps without ever leaving the TikTok feed.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            Combined with the Creator Affiliate marketplace, you can mobilize hundreds of creators to promote your products on pure commission, scaling your GMV without risky upfront ad spend.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            Turn social attention directly into profitable, scalable revenue.
          </p>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            COMPLETE SCOPE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our TikTok Shop Service Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            Full-spectrum seller onboarding, catalog engineering, affiliate recruitment, and paid scaling.
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

      {/* 4. Process Steps */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            PROVEN METHODOLOGY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Our 5-Step TikTok Shop Process
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

      {/* 5. Package CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-[#F4EFEB] border-2 border-[#9F8BE7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono-num text-emerald-600 font-bold uppercase tracking-wider block">
            MONTHLY GROWTH PLANS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Explore TikTok Marketing &amp; Shop Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body">
            Compare Starter ($299/mo), Growth ($699/mo), and Authority ($1,499/mo) TikTok management tiers.
          </p>
        </div>

        <Link
          href="/tiktok-marketing-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View TikTok Packages</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      {/* 6. FAQs */}
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

      {/* 7. Final CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready to Scale Your Sales on TikTok Shop?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          From Seller Center setup and Shopify sync to massive affiliate creator recruitment campaigns.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=tiktok-shop"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Launch TikTok Shop
          </Link>
          <Link
            href="/tiktok-marketing-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
