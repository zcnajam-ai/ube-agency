import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Share2,
  Palette,
  Users,
  RefreshCw,
  ShoppingBag,
  Target,
  Activity,
  Sliders,
  HelpCircle,
  Phone,
  Check,
  Video,
  Layers,
  Filter,
} from "lucide-react";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Meta Ads Management | Facebook & Instagram Advertising",
  description:
    "Facebook and Instagram advertising built around creative testing, audience strategy, retargeting and conversion measurement. UBE manages Meta Ads for eCommerce, lead generation and growth campaigns.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/meta-ads",
  },
  openGraph: {
    title: "Meta Ads Management | Facebook & Instagram Advertising | Unified Branding Experts",
    description:
      "Facebook and Instagram advertising built around creative testing, audience strategy, retargeting and conversion measurement.",
    url: "https://unifiedbrandingexperts.com/services/meta-ads",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Meta Ads Management - Unified Branding Experts",
      },
    ],
  },
};

export default function MetaAdsServicePage() {
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
        name: "Meta Ads Management",
        item: "https://unifiedbrandingexperts.com/services/meta-ads",
      },
    ],
  };

  const faqs = [
    {
      q: "Do you manage both Facebook and Instagram ads?",
      a: "Yes. Both platforms are managed through the Meta advertising ecosystem, with placements selected according to the campaign and creative strategy.",
    },
    {
      q: "Can you create the ad creative?",
      a: "Creative strategy and production scope can be included depending on the engagement. This may include static graphics, short-form concepts, messaging and creative variations.",
    },
    {
      q: "Do you guarantee sales from Meta Ads?",
      a: "No. Advertising performance depends on the product, offer, pricing, creative, website, competition, budget and market demand. We focus on building and improving the campaign system rather than promising a guaranteed outcome.",
    },
    {
      q: "Can you advertise Shopify products?",
      a: "Yes. Meta advertising can be integrated with eligible Shopify and eCommerce stores, including catalog-based campaigns and website conversion tracking.",
    },
    {
      q: "Do you install Meta Pixel?",
      a: "Tracking setup can include Meta Pixel and Conversions API where technically appropriate.",
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
            <span>META ADS MANAGEMENT</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Facebook &amp; Instagram Ads Built to Turn Attention Into Action
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Meta gives brands access to enormous audiences, but reach alone does not create a successful campaign. Unified Branding Experts develops Facebook and Instagram advertising around the combination of creative, audience strategy, offer positioning, landing-page experience and conversion measurement.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            We build campaigns for businesses that need customer acquisition, lead generation, retargeting or eCommerce growth without relying on one ad or one audience to do all the work.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Facebook & Instagram direct-response funnels",
              "Structured creative testing & hook variations",
              "Meta Pixel & Conversions API (CAPI) setup",
              "Dynamic catalog & retargeting ad sequences",
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
              label="Plan Your Meta Ads Campaign"
              service="Meta Ads Management"
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

        {/* HERO VISUAL (Glossy Dimensional Meta Ad Composition) */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-4 shadow-xl">
            <div className="relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#FAF7F6] to-[#EAE6E4] p-6 flex flex-col justify-between border border-[#E0DDDB]">
              {/* Smartphone Display Card */}
              <div className="w-full bg-[#161616] text-white rounded-2xl p-4 border border-white/20 shadow-2xl space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono-num">
                  <span className="text-[#9F8BE7] font-bold">Sponsored • Meta Feed</span>
                  <span className="text-[#DDF160]">FB &amp; IG Placements</span>
                </div>
                <div className="space-y-2">
                  <div className="h-28 w-full bg-gradient-to-tr from-[#9F8BE7]/40 via-purple-600/30 to-[#DDF160]/30 rounded-xl flex items-center justify-center p-3 text-center">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-white block">Visual Hook Creative</span>
                      <span className="text-[9px] text-[#DDF160] font-mono-num">Direct Response Ad</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold pt-1">
                    <span>Engineered Brand Growth</span>
                    <span className="px-3 py-1 rounded-md bg-[#9F8BE7] text-[#161616] text-[10px]">Shop Now</span>
                  </div>
                </div>
              </div>

              {/* Conversion Nodes Overlay */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#E0DDDB] text-xs font-mono-num flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2 text-[#161616] font-bold">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span>Meta CAPI Sync</span>
                </div>
                <span className="text-emerald-700 font-bold text-[10px]">Active Signal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREATIVE MATTERS SECTION */}
      <section className="space-y-6 max-w-4xl border-t border-[#E0DDDB] pt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-bold">
          <span>SCROLL INTERVENTION</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
          On Meta, the Ad Has to Earn the Click
        </h2>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed">
          People usually open Facebook and Instagram to consume content rather than search for a business. That means the creative has to interrupt the scroll for the right reason.
        </p>

        <div className="space-y-3 pt-2">
          <span className="text-xs font-mono-num font-bold text-[#161616] uppercase tracking-wider block">
            We approach Meta advertising as a continuous testing system combining:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-[#303030]">
            {[
              "Opening video hooks",
              "Visual concepts",
              "Offer positioning",
              "Messaging angles",
              "Ad format variations",
              "Audience signals",
              "Landing page alignment",
              "Conversion data loop",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#E0DDDB]">
                <Check className="w-3.5 h-3.5 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-[#585858] font-medium pt-1">
          The objective is not simply to create more ads. It is to understand which combinations create meaningful customer action.
        </p>
      </section>

      {/* 3. 8 SERVICES CARDS GRID */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <span>PAID SOCIAL CAPABILITIES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Facebook &amp; Instagram Advertising Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Campaign Strategy",
              desc: "Campaign architecture based on the objective, offer, audience and customer journey.",
              icon: <Share2 className="w-5 h-5 text-[#9F8BE7]" />,
            },
            {
              title: "Creative Strategy",
              desc: "Concepts, hooks, messaging directions and creative testing frameworks for paid social.",
              icon: <Palette className="w-5 h-5 text-emerald-600" />,
            },
            {
              title: "Audience Strategy",
              desc: "Broad, interest, custom and lookalike audience approaches where appropriate for available data.",
              icon: <Users className="w-5 h-5 text-purple-600" />,
            },
            {
              title: "Retargeting",
              desc: "Reconnect with visitors, engaged audiences, customers or product viewers through relevant campaign sequences.",
              icon: <RefreshCw className="w-5 h-5 text-[#DDF160]" />,
            },
            {
              title: "eCommerce & Catalog Ads",
              desc: "Product-focused advertising using catalog and dynamic product experiences where store setup supports them.",
              icon: <ShoppingBag className="w-5 h-5 text-rose-500" />,
            },
            {
              title: "Lead Generation",
              desc: "Campaigns designed around qualified inquiries, consultations and other defined lead actions.",
              icon: <Target className="w-5 h-5 text-blue-600" />,
            },
            {
              title: "Meta Pixel & CAPI",
              desc: "Tracking architecture designed to improve measurement and event visibility where technically appropriate.",
              icon: <Activity className="w-5 h-5 text-amber-500" />,
            },
            {
              title: "Ongoing Testing",
              desc: "Continuous evaluation of creative, messaging, audiences, placement and campaign structure.",
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

      {/* 4. ECOMMERCE SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#E0DDDB] pt-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-emerald-600 font-bold">
            <span>STOREFRONT ALIGNMENT</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Meta Advertising for eCommerce Brands
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Paid social works best when advertising and the storefront are treated as one customer journey. UBE can align Meta campaigns with:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono-num text-[#303030]">
            {[
              "Product positioning",
              "Shopify storefronts",
              "Collection pages",
              "Product landing pages",
              "Catalog setup",
              "Remarketing funnels",
              "Checkout behavior",
              "Conversion events",
            ].map((item) => (
              <div key={item} className="p-3 rounded-xl bg-white border border-[#E0DDDB] text-center font-bold">
                {item}
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

        {/* CREATIVE VARIATIONS VISUAL */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-4 shadow-xl">
            <div className="relative h-[320px] sm:h-[360px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#161616] to-[#252525] p-6 text-white flex flex-col justify-between">
              <div className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-wider font-bold">
                CREATIVE VARIATION ENGINE
              </div>

              <div className="space-y-2 text-xs font-mono-num">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#DDF160]" />
                    <span>Short-Form Video Hook</span>
                  </div>
                  <strong className="text-[#DDF160]">Var A</strong>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span>Carousel Product Grid</span>
                  </div>
                  <strong className="text-emerald-400">Var B</strong>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#9F8BE7]" />
                    <span>Problem / Solution Banner</span>
                  </div>
                  <strong className="text-[#9F8BE7]">Var C</strong>
                </div>
              </div>

              <div className="text-[11px] text-[#ACACAC]">
                Continuous creative iteration &amp; audience testing.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FUNNEL ARCHITECTURE SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#E0DDDB] pt-16">
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-4 shadow-xl">
            <div className="relative h-[340px] sm:h-[380px] w-full rounded-2xl overflow-hidden bg-[#FAF7F6] p-6 flex flex-col justify-between border border-[#E0DDDB]">
              <div className="text-xs font-mono-num font-bold text-[#161616] border-b border-[#E0DDDB] pb-3 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#9F8BE7]" />
                <span>Meta Funnel Architecture</span>
              </div>

              <div className="space-y-2 text-xs font-mono-num">
                <div className="p-2.5 rounded-lg bg-white border border-[#E0DDDB] flex justify-between">
                  <span>1. Ad Creative Hook</span>
                  <strong className="text-[#9F8BE7]">Top of Funnel</strong>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E0DDDB] flex justify-between">
                  <span>2. Landing Page Match</span>
                  <strong className="text-emerald-600">Mid Funnel</strong>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#E0DDDB] flex justify-between">
                  <span>3. Retargeting Sequence</span>
                  <strong className="text-purple-600">Bottom of Funnel</strong>
                </div>
                <div className="p-2.5 rounded-lg bg-[#161616] text-white flex justify-between">
                  <span>4. Verified Conversion</span>
                  <strong className="text-[#DDF160]">Purchase / Lead</strong>
                </div>
              </div>

              <div className="text-[11px] text-[#585858]">
                End-to-end user acquisition framework.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <span>CREATIVE SYSTEM</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Build a Creative Testing System — Not a Single Winning Ad
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Ad performance changes. Audiences become familiar with creative, offers change and competitors enter the feed. Instead of relying on one asset indefinitely, we develop testable variations around:
          </p>

          <div className="grid grid-cols-2 gap-2.5 text-xs text-[#303030]">
            {[
              "Opening video hooks",
              "Static graphic concepts",
              "Short-form video ads",
              "Product demonstrations",
              "Problem / solution messaging",
              "Benefit-led concepts",
              "Offer presentation styles",
              "Call to action variations",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#585858]">
            The objective is to create an ongoing learning process that informs future campaign decisions.
          </p>
        </div>
      </section>

      {/* 6. OUR PROCESS (7 STEPS) */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-bold">
            <span>CAMPAIGN LIFECYCLE</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Our Meta Advertising Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
          {[
            { step: "01", name: "Discovery", desc: "Understand product, margin & goals." },
            { step: "02", name: "Tracking", desc: "Verify Meta Pixel & CAPI signals." },
            { step: "03", name: "Architecture", desc: "Plan funnel stages & audiences." },
            { step: "04", name: "Creative", desc: "Develop copy, hooks & visual directions." },
            { step: "05", name: "Launch", desc: "Deploy with budget controls." },
            { step: "06", name: "Optimize", desc: "Evaluate creative response & spend." },
            { step: "07", name: "Iteration", desc: "Guide future creative tests." },
          ].map((proc) => (
            <div
              key={proc.step}
              className="p-4 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-2xs"
            >
              <span className="text-base font-mono-num font-bold text-[#9F8BE7]">
                {proc.step}
              </span>
              <h3 className="font-display font-bold text-xs text-[#161616]">
                {proc.name}
              </h3>
              <p className="text-[10px] text-[#585858] leading-relaxed">
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
            Meta Ads Management FAQs
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
            <span>PAID SOCIAL GROWTH</span>
          </div>
          <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Ready to Build a More Structured Paid Social Growth System?
          </h3>
          <p className="text-xs sm:text-sm text-[#ACACAC] leading-relaxed">
            Tell us what you are building, where you are now and what you want the next stage to accomplish. Our team will review your requirements and follow up with you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto shrink-0">
          <ServiceProjectModalTrigger
            label="Start Your Project"
            service="Meta Ads Management"
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
