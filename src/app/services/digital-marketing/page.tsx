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
  Users,
  Video,
  Search,
  Globe,
  Layers,
} from "lucide-react";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Google Ads, Meta Ads & TikTok",
  description:
    "Integrated digital marketing services across Google Ads, Meta Ads (Facebook & Instagram), TikTok Marketing, and paid social performance funnels engineered for revenue growth.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Services | Google Ads, Meta Ads & TikTok | Unified Branding Experts",
    description:
      "Integrated digital marketing services across Google Ads, Meta Ads (Facebook & Instagram), TikTok Marketing, and paid social performance funnels.",
    url: "https://unifiedbrandingexperts.com/services/digital-marketing",
    siteName: "Unified Branding Experts",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 2048,
        height: 676,
        alt: "Digital marketing campaign dashboard showing Google Ads, Meta Ads, TikTok and conversion performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | Google Ads, Meta Ads & TikTok | Unified Branding Experts",
    description:
      "Integrated digital marketing services across Google Ads, Meta Ads, TikTok Marketing, and paid social funnels.",
    images: ["https://unifiedbrandingexperts.com/og-default.png"],
  },
};

export default function DigitalMarketingServiceHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing Services",
    serviceType: "Digital Marketing, Paid Media & Performance Growth",
    provider: {
      "@type": "Organization",
      name: "Unified Branding Experts",
      url: "https://unifiedbrandingexperts.com",
    },
    areaServed: "Global",
    description:
      "Omnichannel digital marketing services covering Google Search & Shopping Ads, Meta (Facebook & Instagram) ad funnels, TikTok Marketing, and paid social campaign management.",
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
        name: "Digital Marketing",
        item: "https://unifiedbrandingexperts.com/services/digital-marketing",
      },
    ],
  };

  const marketingPillars = [
    {
      title: "Google Ads & Performance Max",
      slug: "/services/google-ads",
      desc: "High-intent search, shopping feeds, and Performance Max asset groups targeting buyers at the exact moment of commercial intent.",
      icon: <Search className="w-5 h-5 text-emerald-600" />,
      features: ["Search & Shopping Ads", "Performance Max Scaling", "Negative Match Hygiene", "Server-Side GA4 Tracking"],
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      slug: "/services/meta-ads",
      desc: "Visual direct-response ad funnels, video carousels, dynamic catalog retargeting, and Meta Conversions API (CAPI) integration.",
      icon: <Layers className="w-5 h-5 text-[#9F8BE7]" />,
      features: ["Direct-Response Creative", "Meta Conversions API (CAPI)", "Lookalike Audience Testing", "Catalog Retargeting"],
    },
    {
      title: "TikTok Ads & Short-Form Video",
      slug: "/services/tiktok-marketing",
      desc: "Viral video scripts, Spark Ads creator partnerships, TikTok Shop seller sync, and high-converting native short video ads.",
      icon: <Video className="w-5 h-5 text-rose-500" />,
      features: ["Short-Form Video Scripting", "Spark Ads Creator Sync", "TikTok Events API", "Shoppable Feed Ads"],
    },
    {
      title: "Social Media Management",
      slug: "/services/social-media-management",
      desc: "Cohesive brand publishing, editorial content calendars, graphic carousels, and community engagement across all social channels.",
      icon: <Globe className="w-5 h-5 text-purple-600" />,
      features: ["Editorial Content Calendars", "Custom Graphic Carousels", "Community Management", "Omnichannel Publishing"],
    },
  ];

  const faqs = [
    {
      q: "Which advertising platforms are right for my business stage?",
      a: "For immediate high-intent buyers, Google Search and Shopping Ads deliver quick conversion. For brand discovery and visual products, Meta (Facebook & Instagram) and TikTok Ads build high-volume awareness and customer acquisition. We analyze your unit economics and target audience to allocate media spend effectively.",
    },
    {
      q: "How do you track true campaign return on ad spend (ROAS)?",
      a: "We implement server-side tracking (Meta CAPI, TikTok Events API, GA4) alongside Google Tag Manager. This bypassing browser-level ad blocking to give you accurate conversion value data directly in live reporting dashboards.",
    },
    {
      q: "What is included in UBE digital marketing campaign management?",
      a: "Every engagement includes strategic audience research, creative copywriting, ad asset production, campaign setup, bid management, A/B audience testing, weekly budget reallocation, and transparent reporting.",
    },
  ];

  return (
    <main className="pt-28 pb-20 space-y-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="space-y-10 border-b border-[#E0DDDB] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-emerald-600 font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIGITAL MARKETING SERVICES</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#161616] leading-[1.1]">
              Digital Marketing Services for Search, Social &amp; Paid Growth
            </h1>

            <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl">
              Scale customer acquisition with structured, data-driven paid marketing campaigns across Google, Meta (Facebook &amp; Instagram), and TikTok. Unified Branding Experts connects ad creative, conversion funnels, and tracking into a high-ROAS marketing engine.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ServiceProjectModalTrigger
                service="Digital Marketing & Paid Media"
                label="Start Marketing Campaign"
                variant="primary"
              />
              <Link
                href="/digital-marketing-packages"
                className="px-7 py-3.5 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-[#161616] text-xs font-display font-bold transition-all shadow-xs"
              >
                View Marketing Packages &rarr;
              </Link>
            </div>
          </div>

          {/* HERO VISUAL (Exact Intrinsic 2048/676 Aspect Ratio Container) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative w-full aspect-[2048/676] rounded-3xl overflow-hidden border border-[#E0DDDB] shadow-lg bg-white group">
              <Image
                src="/images/official/digital-marketing/digital-marketing-hero.webp"
                alt="Digital marketing campaign dashboard showing Google Ads, Meta Ads, TikTok and conversion performance"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-center group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE MARKETING PILLARS */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono-num text-emerald-600 font-bold uppercase tracking-wider block">
            OMNICHANNEL PAID ACQUISITION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#161616]">
            Our Primary Digital Marketing Channels
          </h2>
          <p className="text-sm text-[#585858]">
            We build and manage targeted campaigns across search engines and social platforms where your prospective buyers spend their time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketingPillars.map((pillar) => (
            <div
              key={pillar.slug}
              className="p-8 rounded-3xl bg-white border border-[#E0DDDB] shadow-xs hover:border-[#9F8BE7] transition-all space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#585858] leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  {pillar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-[#303030]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E0DDDB]">
                <Link
                  href={pillar.slug}
                  className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#161616] hover:text-[#9F8BE7] transition-colors"
                >
                  <span>Explore {pillar.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAMPAIGN PERFORMANCE STANDARDS & FULL-FUNNEL VISUAL */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono-num text-[#9F8BE7] font-bold uppercase tracking-wider block">
              FULL-FUNNEL DIGITAL MARKETING
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
              Strategies Built Around Your Business Goals
            </h2>
            <p className="text-xs sm:text-sm text-[#585858] leading-relaxed">
              We don&apos;t believe in one-size-fits-all marketing. Every business has different audiences, offers, and customer behaviors. Our strategies are built to attract the right people, bring them in, and turn them into paying customers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E0DDDB] space-y-1">
                <Target className="w-5 h-5 text-emerald-600" />
                <h4 className="font-display font-bold text-xs text-[#161616]">Data-Driven Strategy</h4>
                <p className="text-[11px] text-[#585858]">Every campaign starts with research, insights, and real data — not guesswork.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E0DDDB] space-y-1">
                <TrendingUp className="w-5 h-5 text-[#9F8BE7]" />
                <h4 className="font-display font-bold text-xs text-[#161616]">High-Performing Creative</h4>
                <p className="text-[11px] text-[#585858]">Scroll-stopping ads that connect with your audience and drive action.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E0DDDB] space-y-1">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                <h4 className="font-display font-bold text-xs text-[#161616]">Full Funnel Approach</h4>
                <p className="text-[11px] text-[#585858]">From awareness to conversion, we optimize every step of the customer journey.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E0DDDB] space-y-1">
                <Users className="w-5 h-5 text-blue-600" />
                <h4 className="font-display font-bold text-xs text-[#161616]">Transparent Reporting</h4>
                <p className="text-[11px] text-[#585858]">Clear reports that show what&apos;s working, what&apos;s improving, and what&apos;s next.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full">
            <div className="relative w-full aspect-[1024/684] rounded-2xl overflow-hidden border border-[#E0DDDB] bg-white shadow-md">
              <Image
                src="/images/official/digital-marketing/digital-marketing-funnel.webp"
                alt="Full-funnel digital marketing approach from brand awareness to customer retention"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono-num text-emerald-600 font-bold uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>MARKETING FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
            Digital Marketing Questions Answered
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs">
              <h3 className="font-display font-bold text-base text-[#161616]">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#585858] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CONVERSION BANNER */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
          Ready to Scale Your Paid Marketing Return?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Book a media audit with our Senior Strategy Director to review your current ad accounts, funnel performance, and growth strategy.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <ServiceProjectModalTrigger
            service="Digital Marketing Services"
            label="Schedule Marketing Strategy Session"
            variant="primary"
          />
          <Link
            href="/digital-marketing-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            View Marketing Packages
          </Link>
        </div>
      </section>
    </main>
  );
}
