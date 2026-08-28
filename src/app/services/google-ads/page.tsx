import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Search,
  Zap,
  ShoppingBag,
  RefreshCw,
  Target,
  FileCheck,
  Activity,
  Sliders,
  HelpCircle,
  Phone,
  Check,
  LineChart,
} from "lucide-react";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Google Ads Management & Performance Max | Unified Branding Experts",
  description:
    "Google Ads management for businesses ready to reach high-intent customers. Search, Shopping and Performance Max campaigns with conversion tracking, landing page alignment and ongoing optimization.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/google-ads",
  },
  openGraph: {
    title: "Google Ads Management & Performance Max | Unified Branding Experts",
    description:
      "Google Ads management for businesses ready to reach high-intent customers. Search, Shopping and Performance Max campaigns.",
    url: "https://unifiedbrandingexperts.com/services/google-ads",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/project-marketing-1.webp",
        width: 1200,
        height: 630,
        alt: "Google Ads Management - Unified Branding Experts",
      },
    ],
  },
};

export default function GoogleAdsServicePage() {
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
        name: "Google Ads Management",
        item: "https://unifiedbrandingexperts.com/services/google-ads",
      },
    ],
  };

  const faqs = [
    {
      q: "What types of Google Ads do you manage?",
      a: "Depending on the business, campaigns can include Search, Shopping, Performance Max and remarketing.",
    },
    {
      q: "Do you guarantee a specific return on ad spend?",
      a: "No responsible advertising partner can guarantee a fixed return. Performance depends on factors including the offer, pricing, competition, website, budget, market and customer demand.",
    },
    {
      q: "Is the advertising budget included in your management fee?",
      a: "Advertising media spend is normally paid directly to Google and should be treated separately from agency management fees.",
    },
    {
      q: "Can you fix an existing Google Ads account?",
      a: "Yes. Existing accounts can be audited for campaign structure, search terms, conversion tracking, targeting, landing-page alignment and budget allocation.",
    },
    {
      q: "Do you set up conversion tracking?",
      a: "Yes. Tracking setup can include Google Ads conversion actions, Google Analytics 4 and Google Tag Manager where appropriate.",
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

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* Schema Markup */}
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
            <span>GOOGLE ADS MANAGEMENT</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Google Ads Built Around High-Intent Customers
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Reach people who are actively searching for the products and services you sell. Unified Branding Experts plans, builds and manages Google Ads campaigns around search intent, conversion tracking and clear business objectives.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            From Google Search campaigns to Shopping and Performance Max, we focus on creating a structured advertising system that connects keywords, ads, landing pages, audience signals and measurement.
          </p>

          {/* Deliverable Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "High-intent Google Search & Shopping campaigns",
              "Performance Max setup & asset group structuring",
              "Negative keyword lists & search term filtering",
              "GA4 & Google Tag Manager conversion setup",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <ServiceProjectModalTrigger
              label="Plan Your Google Ads Campaign"
              service="Google Ads Management"
              variant="primary"
            />
            <Link
              href="/services/digital-marketing"
              className="px-6 py-3.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-[#161616] font-display font-bold text-xs transition-all flex items-center gap-2 group shadow-xs"
            >
              <span>Explore Digital Marketing Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* HERO VISUAL (Original 3D Google Search Ecosystem Composition) */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-4 shadow-xl">
            <div className="relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#FAF7F6] to-[#EAE6E4] p-6 flex flex-col justify-between border border-[#E0DDDB]">
              {/* Google Search Ecosystem Mockup */}
              <div className="w-full bg-white rounded-2xl border border-[#E0DDDB] p-4 shadow-md space-y-3">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB]">
                  <Search className="w-4 h-4 text-[#9F8BE7]" />
                  <span className="text-xs font-mono-num font-bold text-[#161616]">
                    &quot;best ecommerce growth agency&quot;
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#9F8BE7]/10 border border-[#9F8BE7]/30 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono-num">
                    <span className="font-bold text-[#9F8BE7]">Sponsored Ad</span>
                    <span className="text-[#585858]">unifiedbrandingexperts.com</span>
                  </div>
                  <div className="text-xs font-bold text-[#161616]">
                    Unified Branding Experts | Digital Growth &amp; Ads
                  </div>
                  <div className="text-[10px] text-[#585858] line-clamp-2">
                    Turn commercial search volume into active sales. Custom campaigns with full conversion tracking.
                  </div>
                </div>
              </div>

              {/* Analytics Floating Card */}
              <div className="p-4 rounded-2xl bg-[#161616] text-white space-y-2 border border-white/20 shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono-num">
                  <span className="text-[#DDF160] font-bold">Search Intent Match</span>
                  <span className="text-[#9F8BE7]">High ROAS Target</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div>
                    <span className="text-[10px] text-[#ACACAC] block">Conv. Rate</span>
                    <strong className="text-white text-sm font-mono-num">+34%</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#ACACAC] block">Intent Rank</span>
                    <strong className="text-emerald-400 text-sm font-mono-num">Top 3</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH INTENT SECTION */}
      <section className="space-y-6 max-w-4xl border-t border-[#E0DDDB] pt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-bold">
          <span>INTENT MATRIX</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
          Advertising at the Moment Someone Is Looking
        </h2>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed">
          Google Ads is different from many interruption-based advertising channels. Potential customers are often already expressing intent through what they search. The opportunity is to identify the right searches, understand their commercial value and connect them to the most relevant message and landing page.
        </p>

        <div className="space-y-3 pt-2">
          <span className="text-xs font-mono-num font-bold text-[#161616] uppercase tracking-wider block">
            Our Campaigns Are Built Around:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-[#303030]">
            {[
              "Buyer intent keywords",
              "Geographic targeting",
              "Keyword structure",
              "Negative keyword lists",
              "Ad text relevance",
              "Landing page alignment",
              "Conversion measurement",
              "Budget allocation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#E0DDDB]">
                <Check className="w-3.5 h-3.5 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 8 SERVICES CARDS GRID */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <span>CAMPAIGN CAPABILITIES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Google Advertising Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Google Search Ads",
              desc: "Keyword-based campaigns designed to capture customers actively searching for relevant products or services.",
              icon: <Search className="w-5 h-5 text-[#9F8BE7]" />,
            },
            {
              title: "Performance Max",
              desc: "Multi-channel Google campaigns structured with appropriate assets, audience signals, conversion goals and campaign segmentation.",
              icon: <Zap className="w-5 h-5 text-[#DDF160]" />,
            },
            {
              title: "Google Shopping",
              desc: "Product-focused advertising for eligible eCommerce businesses using structured product feeds and Shopping placements.",
              icon: <ShoppingBag className="w-5 h-5 text-emerald-600" />,
            },
            {
              title: "Remarketing",
              desc: "Campaigns designed to reconnect with previous visitors or audiences when appropriate.",
              icon: <RefreshCw className="w-5 h-5 text-purple-600" />,
            },
            {
              title: "Keyword & Competitor Research",
              desc: "Research designed to identify commercial search opportunities, irrelevant traffic and campaign positioning.",
              icon: <Target className="w-5 h-5 text-rose-500" />,
            },
            {
              title: "Landing Page Alignment",
              desc: "Advertising traffic should arrive on a page that directly addresses the promise made in the ad.",
              icon: <FileCheck className="w-5 h-5 text-blue-600" />,
            },
            {
              title: "Conversion Tracking",
              desc: "Measurement through Google Ads, GA4 and Tag Manager so campaigns can be evaluated using meaningful actions.",
              icon: <Activity className="w-5 h-5 text-amber-500" />,
            },
            {
              title: "Ongoing Optimization",
              desc: "Search-term analysis, negative-keyword management, bidding adjustments, asset testing and budget reviews.",
              icon: <Sliders className="w-5 h-5 text-indigo-600" />,
            },
          ].map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all space-y-3 shadow-xs group"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="font-display font-bold text-base text-[#161616]">
                {card.title}
              </h3>
              <p className="text-xs text-[#585858] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ECOMMERCE LINKING SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#E0DDDB] pt-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-emerald-600 font-bold">
            <span>ECOMMERCE INTEGRATION</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Google Ads for eCommerce
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            For eCommerce brands, paid search works best when product data, landing pages, conversion tracking and merchandising are working together. UBE can connect Google advertising strategy with our broader eCommerce services, helping align:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono-num text-[#303030]">
            {[
              "Shopping campaigns",
              "Performance Max",
              "Product feeds",
              "Product pages",
              "Landing pages",
              "Conversion events",
            ].map((e) => (
              <div key={e} className="p-3 rounded-xl bg-white border border-[#E0DDDB] text-center font-bold">
                {e}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/services/ecommerce"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-[#161616] hover:text-[#9F8BE7] transition-colors border-b border-[#161616] pb-0.5"
            >
              <span>Explore eCommerce Growth Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        {/* PERFORMANCE MAX VISUAL */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-4 shadow-xl">
            <div className="relative h-[320px] sm:h-[360px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#161616] to-[#252525] p-6 text-white flex flex-col justify-between">
              <div className="text-xs font-mono-num text-[#DDF160] uppercase tracking-wider font-bold">
                PERFORMANCE MAX ECOSYSTEM
              </div>

              <div className="space-y-2 text-xs font-mono-num">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between">
                  <span>Google Search</span>
                  <strong className="text-emerald-400">High Intent</strong>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between">
                  <span>Google Shopping</span>
                  <strong className="text-[#9F8BE7]">Product Catalog</strong>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between">
                  <span>YouTube &amp; Display</span>
                  <strong className="text-[#DDF160]">Visual Reach</strong>
                </div>
              </div>

              <div className="text-[11px] text-[#ACACAC]">
                Structured conversion goals &amp; audience signals.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEASUREMENT SECTION (WITH ANALYTICS DASHBOARD VISUAL) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#E0DDDB] pt-16">
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-4 shadow-xl">
            <div className="relative h-[340px] sm:h-[380px] w-full rounded-2xl overflow-hidden bg-[#FAF7F6] p-6 flex flex-col justify-between border border-[#E0DDDB]">
              <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#161616]">
                  <LineChart className="w-4 h-4 text-[#9F8BE7]" />
                  <span>GA4 &amp; GTM Conversion Hub</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-mono-num font-bold">
                  Verified Data
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono-num text-[#585858]">
                <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E0DDDB]">
                  <span>Purchases &amp; Revenue</span>
                  <strong className="text-[#161616]">Tracked</strong>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E0DDDB]">
                  <span>Form Lead Events</span>
                  <strong className="text-[#161616]">Verified</strong>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E0DDDB]">
                  <span>Phone Call Conversions</span>
                  <strong className="text-[#161616]">Logged</strong>
                </div>
              </div>

              <div className="text-[11px] text-[#838383]">
                Zero assumptions. Decisions made strictly on validated conversion events.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <span>DATA VERIFICATION</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Measurement Before Optimization
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Campaign decisions are only as useful as the data behind them. Before aggressively optimizing advertising spend, we review whether the important actions are being measured correctly.
          </p>

          <div className="space-y-2">
            <span className="text-xs font-mono-num font-bold text-[#161616] uppercase tracking-wider block">
              Depending on the business, this can include:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#303030]">
              {[
                "eCommerce Purchases",
                "Qualified Form Submissions",
                "Phone Call Conversions",
                "Booked Consultations",
                "Lead Events",
                "Checkout Activity",
                "Revenue Values",
              ].map((m) => (
                <div key={m} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9F8BE7] shrink-0" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-[#585858]">
            We work with Google Analytics 4 and Google Tag Manager to establish a cleaner measurement foundation.
          </p>
        </div>
      </section>

      {/* 6. OUR PROCESS (6 STEPS) */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-bold">
            <span>CAMPAIGN LIFECYCLE</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            How We Build a Google Ads Campaign
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { step: "01", name: "Audit & Goals", desc: "Understand offer, audience, history and primary goal." },
            { step: "02", name: "Research", desc: "Develop keyword, competitor and landing page insights." },
            { step: "03", name: "Architecture", desc: "Structure campaigns, ad groups, targeting and exclusions." },
            { step: "04", name: "Creative Alignment", desc: "Connect ad messaging with relevant destinations." },
            { step: "05", name: "Tracking Setup", desc: "Verify conversion events before optimizing spend." },
            { step: "06", name: "Optimization", desc: "Review search terms, bidding and budget quality." },
          ].map((proc) => (
            <div
              key={proc.step}
              className="p-5 rounded-3xl bg-white border border-[#E0DDDB] space-y-2 shadow-2xs"
            >
              <span className="text-lg font-mono-num font-bold text-[#9F8BE7]">
                {proc.step}
              </span>
              <h3 className="font-display font-bold text-xs text-[#161616]">
                {proc.name}
              </h3>
              <p className="text-[11px] text-[#585858] leading-relaxed">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs SECTION */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>QUESTIONS &amp; ANSWERS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Google Ads Management FAQs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-2xs"
            >
              <h3 className="font-display font-bold text-base text-[#161616]">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#585858] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CALLOUT CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDF160]/15 border border-[#DDF160]/30 text-xs font-mono-num text-[#DDF160] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HIGH-INTENT ACQUISITION</span>
          </div>
          <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Ready to Reach Customers Already Searching for What You Sell?
          </h3>
          <p className="text-xs sm:text-sm text-[#ACACAC] leading-relaxed">
            Tell us what you are building, where you are now and what you want the next stage to accomplish. Our team will review your requirements and follow up with you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto shrink-0">
          <ServiceProjectModalTrigger
            label="Start Your Project"
            service="Google Ads Management"
            variant="primary"
            className="w-full sm:w-auto !py-4 !px-8 text-sm"
          />
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="px-6 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-xs font-mono-num text-white flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#9F8BE7]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
