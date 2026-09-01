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
  Search,
  Palette,
  Tag,
  Camera,
  Star,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Etsy Shop Setup & Etsy SEO Optimization",
  description:
    "Professional Etsy shop setup and Etsy SEO optimization services. Branded shop banners, 13-tag keyword research, listing copywriting, product mockups, and shop launch strategy.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/etsy-shop-setup",
  },
  openGraph: {
    title: "Etsy Shop Setup & Etsy SEO Optimization",
    description:
      "Professional Etsy shop setup and Etsy SEO optimization services.",
    url: "https://unifiedbrandingexperts.com/services/etsy-shop-setup",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Etsy Shop Setup - Unified Branding Experts",
      },
    ],
  },
};

export default function EtsyShopSetupPage() {
  const serviceIncludes = [
    {
      title: "Complete Etsy Shop Setup & Seller Verification",
      desc: "End-to-end configuration of your Etsy Seller account, payment methods, currency preferences, shipping profiles, tax settings, and shop policies compliant with Etsy standards.",
      icon: <ShoppingBag className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/ecommerce/storefront-setup.jpeg",
    },
    {
      title: "Custom Etsy Shop Branding & Banner Kit",
      desc: "Stand out in search with cohesive visual identity: big carousel banners, mini shop icons, profile avatars, thank-you cards, and order confirmation branding.",
      icon: <Palette className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/branding/branding-hero.jpeg",
    },
    {
      title: "Advanced Etsy SEO & 13-Tag Research",
      desc: "In-depth keyword research using eRank, Marmalead, and EverBee. Optimized listing titles, long-tail tags (all 13 slots utilized), and attribute mapping for high search rankings.",
      icon: <Search className="w-5 h-5 text-purple-600" />,
      image: "/images/official/aiseo/ai-discovery.jpeg",
    },
    {
      title: "High-Converting Listing Copywriting",
      desc: "Direct-response listing descriptions with clear benefit bullet points, dimension guides, material specifications, FAQs, and strong call-to-actions that prevent buyer hesitations.",
      icon: <Tag className="w-5 h-5 text-blue-600" />,
      image: "/images/official/branding/brand-guidelines.jpeg",
    },
    {
      title: "Product Photography Styling & Mockup Curation",
      desc: "Clean, high-resolution lifestyle mockups, zoomable thumbnail graphics, color chart graphics, and video listing covers formatted to maximize Etsy click-through rates.",
      icon: <Camera className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/branding/brand-identity.jpeg",
    },
    {
      title: "Review Strategy & Post-Launch Support",
      desc: "Automated message-to-buyer templates, coupon code workflows for repeat purchases, and customer service frameworks designed to earn 5-star Star Seller status fast.",
      icon: <Star className="w-5 h-5 text-amber-600" />,
      image: "/images/official/automation/system-integration.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Niche Research & Competitor Audit",
      review: "Top-selling Etsy competitors in your niche, pricing benchmarks, and buyer search trends.",
      setup: "A comprehensive keyword matrix and product collection roadmap.",
      avoid: "Entering saturated niches without clear product differentiation or keyword angles.",
    },
    {
      number: "02",
      title: "Shop Branding & Visual Assets",
      review: "Brand colors, shop name, logo mark, and typography aesthetic.",
      setup: "Cohesive desktop and mobile shop banners, icon marks, and shop announcement copy.",
      avoid: "Amateur, mismatched shop graphics that cause shoppers to doubt legitimacy.",
    },
    {
      number: "03",
      title: "Listing Creation & 13-Tag SEO",
      review: "Product dimensions, variations, SKUs, and target search phrases.",
      setup: "Optimized titles, full 13 tags, detailed descriptions, and high-res mockups.",
      avoid: "Keyword stuffing or leaving tag slots blank, cutting your organic reach in half.",
    },
    {
      number: "04",
      title: "Shipping Profiles & Shop Policies",
      review: "Production partners (Printify, Printful), processing times, and return policies.",
      setup: "Automated shipping profiles, international shipping rates, and legally sound shop policies.",
      avoid: "Shipping delays, chargebacks, or suspended accounts due to non-compliant policies.",
    },
    {
      number: "05",
      title: "Shop Launch & Star Seller Strategy",
      review: "Final listing live checks, search ranking tests, and buyer messaging templates.",
      setup: "Official shop launch, launch discount promotion, and ongoing Etsy Ads strategy roadmap.",
      avoid: "Zero sales after launch due to lack of initial ranking momentum.",
    },
  ];

  const faqs = [
    {
      q: "Can you set up print-on-demand (POD) integration for Etsy?",
      a: "Yes. We seamlessly connect your Etsy shop with Printify, Printful, Gelato, or custom production partners for automated order routing and fulfillment.",
    },
    {
      q: "What tools do you use for Etsy SEO keyword research?",
      a: "We utilize eRank, Marmalead, EverBee, and real-time Etsy search suggest data to identify low-competition, high-volume search terms for your 13 tags and listing titles.",
    },
    {
      q: "How many product listings are included in the initial setup?",
      a: "Depending on your selected tier, we typically set up and optimize 5 to 20 initial core listings with complete SEO, mockups, and descriptions, and provide templates for scaling further.",
    },
    {
      q: "Can you help fix an existing Etsy shop that has low views or no sales?",
      a: "Yes. We offer Etsy Shop Audits & Overhauls—rewriting listing titles, updating all 13 tags, improving thumbnail click-through rates, and refreshing shop branding.",
    },
    {
      q: "Who owns the Etsy shop after setup?",
      a: "You own 100% of the Etsy account, payment payouts, and shop credentials. We work collaboratively as your setup partner.",
    },
    {
      q: "What are your Etsy setup packages?",
      a: "Our Etsy shop setup packages start from $299 for basic shop branding & 5 listings setup, up to $699 for full-scale launch suites with advanced SEO and 20 listings.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ETSY SHOP LAUNCH &amp; ETSY SEO SPECIALISTS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Etsy Shop Setup &amp; Etsy SEO Optimization.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Launch a profitable, high-ranking Etsy storefront. We handle everything from <strong className="text-[#161616]">shop branding and banner kits</strong> to <strong className="text-[#161616]">13-tag keyword SEO</strong>, lifestyle mockups, and conversion-optimized listing copy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Custom Etsy shop banners & icon kit",
              "Advanced 13-tag Etsy SEO & keyword research",
              "Conversion-focused listing copywriting",
              "Print-on-demand & shipping profile integration",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact?type=etsy"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Start Your Etsy Shop
            </Link>

            <Link
              href="/branding-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>View Branding Packages</span>
              <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                From $299
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-md group">
            <Image
              src="/images/official/branding/branding-hero.jpeg"
              alt="Unified Branding Experts Etsy Shop Setup Showcase"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">ETSY SEO • 13 TAGS • BRANDING</span>
              <span className="text-emerald-600 font-bold">FROM $299</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/aiseo/ai-discovery.jpeg"
              alt="Etsy SEO and Search Algorithm Ranking"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            SEARCH VISIBILITY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            Dominate Etsy Search with Data-Driven SEO.
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Etsy is a specialized search engine with over 90 million active buyers. Having great products is not enough—if your titles, tags, categories, and attributes don&apos;t match customer search intent, your listings remain invisible.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            We identify high-volume, low-competition buyer keywords and structure your listings to earn organic rank, high click-through rates, and consistent daily sales.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            Built for fast ranking, customer trust, and 5-star Star Seller status.
          </p>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            COMPLETE SETUP DELIVERABLES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our Etsy Setup Service Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            Turnkey Etsy storefront launch covering branding, SEO, listings, and customer experience.
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
            PROVEN WORKFLOW
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Our 5-Step Etsy Launch Process
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
            AFFORDABLE LAUNCH TIERS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Explore Branding &amp; Store Setup Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body">
            Combine Etsy shop launch with professional logo design and full branding starting from $299.
          </p>
        </div>

        <Link
          href="/branding-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View Branding Packages</span>
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
          Ready to Launch Your High-Ranking Etsy Shop?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          From initial seller account setup to advanced 13-tag SEO optimization and banner design.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=etsy"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Start Etsy Shop Setup
          </Link>
          <Link
            href="/branding-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
