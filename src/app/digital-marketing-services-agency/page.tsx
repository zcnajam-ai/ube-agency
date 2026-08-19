import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Target,
  BarChart3,
  Search,
  Users2,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services Agency | Full-Funnel Performance Marketing | Unified Branding Experts",
  description:
    "Data-driven digital marketing services. Multi-channel paid acquisition across Google Ads, Meta, and TikTok, conversion rate optimization, and transparent ROI reporting.",
  alternates: {
    canonical: "/digital-marketing-services-agency",
  },
};

export default function DigitalMarketingServicesAgencyPage() {
  const serviceIncludes = [
    {
      title: "Google Ads & Performance Max Scaling",
      desc: "Capture high-intent commercial keywords with exact-match search architectures, negative keyword matrices, optimized Google Shopping feeds, and smart value-based bidding.",
      icon: <Search className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/aiseo/ai-discovery.jpeg",
    },
    {
      title: "Meta Ads (Facebook & Instagram) Direct Response",
      desc: "Engage targeted audiences with scroll-stopping UGC creatives, Advantage+ catalog shopping ads, dynamic retargeting sequences, and server-side Conversions API (CAPI) tracking.",
      icon: <Target className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/branding/branding-hero.jpeg",
    },
    {
      title: "TikTok Marketing, Viral Video & TikTok Shop",
      desc: "Turn attention into direct sales with short-form video hooks, creator whitelisting, Spark Ads amplification, and direct TikTok Shop storefront integrations.",
      icon: <TrendingUp className="w-5 h-5 text-rose-500" />,
      image: "/images/official/tiktok/tiktok-growth.jpeg",
    },
    {
      title: "Conversion Rate Optimization (CRO) & Funnels",
      desc: "Driving traffic is half the battle. We optimize landing page friction, cart checkouts, mobile ergonomics, and A/B offer variations to maximize revenue per site visitor.",
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      image: "/images/official/ecommerce/storefront-setup.jpeg",
    },
    {
      title: "Retention, Email & CRM Flow Automation",
      desc: "Build compounding customer lifetime value (LTV) with automated Klaviyo/CRM email sequences, SMS alerts, post-purchase win-backs, and VIP loyalty marketing.",
      icon: <Users2 className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/automation/system-integration.jpeg",
    },
    {
      title: "Transparent Plain-Language ROI Reporting",
      desc: "No confusing agency jargon. We track what matters: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Cost Per Lead (CPL), and bottom-line net profit.",
      icon: <BarChart3 className="w-5 h-5 text-amber-600" />,
      image: "/images/official/aiseo/ai-monitoring.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audience Research & Funnel Audit",
      review: "Your customer lifetime value, historical ad data, top-converting angles, and competitor ads.",
      setup: "A multi-channel growth roadmap, budget allocation model, and target KPI benchmarks.",
      avoid: "Burning ad spend on broad audiences without clear commercial intent.",
    },
    {
      number: "02",
      title: "Tracking Calibration & CAPI Setup",
      review: "Server-side tracking, Google Tag Manager, Meta CAPI, and TikTok Events API.",
      setup: "100% accurate conversion data pipelines that bypass browser cookie loss.",
      avoid: "Under-reporting conversions and algorithm miscalibration due to broken pixel data.",
    },
    {
      number: "03",
      title: "High-Velocity Creative Production",
      review: "Direct-response copywriting, visual hooks, product photography, and UGC video scripts.",
      setup: "A structured ad creative testing matrix with multiple angles, hooks, and formats.",
      avoid: "Ad fatigue caused by running the same stagnant creative for months.",
    },
    {
      number: "04",
      title: "Campaign Launch & Bid Optimization",
      review: "Daily cost-per-acquisition (CPA), click-through rates (CTR), and conversion values.",
      setup: "Active budget scaling toward winning ad sets and pruning unprofitable keywords.",
      avoid: "Over-spending on non-converting search terms or audience segments.",
    },
    {
      number: "05",
      title: "Scaling & Retention Growth",
      review: "Weekly return on ad spend (ROAS), customer retention rates, and email flow revenue.",
      setup: "Aggressive scaling of proven ad winners and synchronized retention automations.",
      avoid: "Hit-or-miss spikes that fail to generate compounding long-term revenue.",
    },
  ];

  const faqs = [
    {
      q: "What ad platforms do you specialize in?",
      a: "We manage paid advertising across Google Ads (Search, Shopping, Performance Max, YouTube), Meta Ads (Facebook & Instagram), TikTok Ads & TikTok Shop, and LinkedIn Ads for B2B enterprises.",
    },
    {
      q: "How do you ensure our ad tracking is accurate?",
      a: "We deploy server-side Conversions API (CAPI) and Google Tag Manager Server Containers. This ensures 100% of purchase and lead events are transmitted directly from your server to ad algorithms, bypassing browser ad-blockers and iOS privacy restrictions.",
    },
    {
      q: "What ad budget should I start with?",
      a: "For our Starter tier ($299/mo management), we recommend a minimum ad spend of $1,000 to $2,500/mo. For Growth ($699/mo) and Pro ($1,499/mo), brands typically spend between $3,000 and $25,000+/mo.",
    },
    {
      q: "Are ad creatives and copywriting included in your management?",
      a: "Yes. Our digital marketing packages include custom ad copy variations, direct-response graphic design, hook scripting, and landing page conversion recommendations.",
    },
    {
      q: "How often will I receive performance reports?",
      a: "You receive access to a 24/7 real-time ROI dashboard, weekly summary updates, and scheduled monthly strategy review calls with your dedicated media buyer.",
    },
    {
      q: "What are your digital marketing package prices?",
      a: "Our monthly marketing management plans start at $299/mo for Starter, $699/mo for Growth, $1,499/mo for Authority, and $2,999/mo for Enterprise scaling.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-FUNNEL PERFORMANCE MARKETING</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Digital Marketing Services Agency Driven by Revenue.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Traffic is useful, but revenue is better. We build synchronized paid advertising and growth funnels across <strong className="text-[#161616]">Google</strong>, <strong className="text-[#161616]">Meta</strong>, and <strong className="text-[#161616]">TikTok</strong> to acquire profitable customers and scale your business sustainably.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            At Unified Branding Experts, we focus on targeting the right audience, refining campaigns, and continuously measuring results to ensure every dollar spent contributes to business growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Multi-channel paid media (Google, Meta, TikTok)",
              "Server-side Conversions API (CAPI) tracking",
              "Conversion rate optimization (CRO) built-in",
              "Transparent weekly performance & ROAS dashboards",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact?type=marketing"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Request Marketing Strategy
            </Link>

            <Link
              href="/our-digital-marketing-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>View Marketing Packages</span>
              <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                From $299/mo
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-md group">
            <Image
              src="/images/official/tiktok/tiktok-growth.jpeg"
              alt="Unified Branding Experts Digital Marketing Agency Showcase"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">GOOGLE • META • TIKTOK • CRO</span>
              <span className="text-emerald-600 font-bold">FROM $299/MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive: Why Synchronized Multi-Channel Matters */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/aiseo/ai-discovery.jpeg"
              alt="Multi-Channel Advertising Attribution"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            PROFITABLE ACQUISITION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            Full-Funnel Media Buying That Scales.
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Running isolated ads on a single channel leaves massive revenue on the table. Modern buyers discover products on TikTok, research credibility on Google, and convert through Meta retargeting.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            We build connected media strategies where top-of-funnel viral attention feeds middle-of-funnel consideration and bottom-of-funnel high-intent conversion, driving compounding ROAS across all channels.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            Data-backed growth systems engineered to lower your customer acquisition costs.
          </p>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            GROWTH CHANNELS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our Digital Marketing Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            Full-spectrum paid acquisition, conversion rate optimization, and automated retention systems.
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
            Our 5-Step Marketing Process
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
            Explore Digital Marketing Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body">
            Compare Starter ($299/mo), Growth ($699/mo), Pro ($1,499/mo), and Enterprise ($2,999/mo) marketing packages.
          </p>
        </div>

        <Link
          href="/our-digital-marketing-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View Marketing Packages</span>
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
          Ready to Scale Your Customer Acquisition?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Start with a focused paid channel or scale into an omni-channel growth engine.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=marketing"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Request Marketing Strategy
          </Link>
          <Link
            href="/our-digital-marketing-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
