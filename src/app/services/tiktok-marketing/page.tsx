import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Video,
  TrendingUp,
  Target,
  BarChart3,
  Users2,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "TikTok Marketing Services | Video Strategy & Paid Ads",
  description:
    "Short-form video strategy, high-converting TikTok ads, creator partnerships, and data-driven community growth for modern brands.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/tiktok-marketing",
  },
  openGraph: {
    title: "TikTok Marketing Services | Video Strategy & Paid Ads",
    description:
      "Short-form video strategy, high-converting TikTok ads, and creator partnerships.",
    url: "https://unifiedbrandingexperts.com/services/tiktok-marketing",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/project-marketing-1.webp",
        width: 1200,
        height: 630,
        alt: "TikTok Marketing Services - Unified Branding Experts",
      },
    ],
  },
};

export default function TikTokMarketingServicePage() {
  const serviceIncludes = [
    {
      title: "Content Strategy",
      desc: "Random posting rarely goes anywhere. We build a content strategy grounded in your audience, your goals, and what actually performs in your space. That means a clear content calendar, defined themes, and a plan for the trends worth joining.",
      icon: <Layers className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/tiktok/tiktok-growth.jpeg",
    },
    {
      title: "Account Setup & Optimization",
      desc: "Your profile is your first impression. We set up or refine your account with a clear bio, the right category, a strong profile visual, and the details that help TikTok understand and surface your brand.",
      icon: <Video className="w-5 h-5 text-rose-500" />,
      image: "/images/official/tiktok/tiktok-system.jpeg",
    },
    {
      title: "Video Production Guidance",
      desc: "You don't need a film crew to succeed here, but you do need direction. We guide your video production with hooks that stop the scroll, formats that hold attention, and creative frameworks you can repeat.",
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/tiktok/tiktok-growth.jpeg",
    },
    {
      title: "Paid Advertising",
      desc: "Organic reach is powerful, but paid reach is precise. We plan and manage TikTok ad campaigns, from setup and targeting to creative and budget, so your spend reaches the right people and every dollar has a job to do.",
      icon: <Target className="w-5 h-5 text-purple-600" />,
      image: "/images/official/tiktok/tiktok-system.jpeg",
    },
    {
      title: "Influencer & Creator Marketing",
      desc: "The right creator can introduce your brand to an audience that already trusts them. We help identify creators who fit your brand, coordinate partnerships, and shape collaborations that feel authentic.",
      icon: <Users2 className="w-5 h-5 text-blue-600" />,
      image: "/images/official/tiktok/tiktok-growth.jpeg",
    },
    {
      title: "Analytics and Plain-Language Reporting",
      desc: "Guesswork is expensive. We track what matters, from views and engagement to follower growth and conversions, then translate it into plain-language reporting so you always know where your budget is going.",
      icon: <BarChart3 className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/tiktok/tiktok-system.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery and Audience Research",
      review: "Your business goals, your audience, your competitors, and how your space behaves on TikTok.",
      setup: "A clear baseline and a strategy shaped around who you want to reach.",
      avoid: "Posting into a void and guessing at what your audience wants.",
    },
    {
      number: "02",
      title: "Account Setup and Strategy Build",
      review: "Your current profile and content, if you have them.",
      setup: "An optimized account and a content strategy with themes, formats, and a posting plan.",
      avoid: "A scattered presence that confuses viewers and stalls your growth.",
    },
    {
      number: "03",
      title: "Content and Campaign Production",
      review: "The strategy and the ideas most likely to land with your audience.",
      setup: "Content guidance, creative direction, and paid campaigns ready to launch.",
      avoid: "Producing videos that look fine but never reach the right feed.",
    },
    {
      number: "04",
      title: "Launch and Community Growth",
      review: "How your content and ads perform once they're live.",
      setup: "Active publishing, campaign management, and engagement that builds a following.",
      avoid: "Treating TikTok as post-and-forget and leaving momentum on the table.",
    },
    {
      number: "05",
      title: "Reporting and Refinement",
      review: "Your reach, engagement, follower growth, and conversions over time.",
      setup: "Clear reporting and ongoing adjustments based on what the data shows.",
      avoid: "Repeating what doesn't work and losing ground as trends shift.",
    },
  ];

  const faqs = [
    {
      q: "Do I need fancy cameras or studio equipment?",
      a: "No. TikTok audiences value authenticity and relatability over glossy commercial production. High-quality phone video paired with a compelling hook and good audio often significantly outperforms expensive studio shoots.",
    },
    {
      q: "How many times a week should a brand post on TikTok?",
      a: "Consistency is key. For most growing brands, posting 3 to 5 targeted videos per week creates steady algorithm momentum without overwhelming production capacity.",
    },
    {
      q: "Can TikTok drive actual eCommerce and B2B sales?",
      a: "Yes. TikTok has evolved into a primary product discovery search engine. With TikTok Shop integrations, link-in-bio funnels, and targeted lead generation ads, short-form video drives direct commercial outcomes.",
    },
    {
      q: "How does paid TikTok advertising work alongside organic posts?",
      a: "Organic content tests which hooks and angles resonate with viewers. We then take the top-performing organic videos and amplify them with paid ad spend to reach thousands of targeted buyers.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIRAL SHORT-FORM VIDEO</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Turn Scrolls Into Sales on the App Everyone&apos;s Watching.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Your customers are on TikTok right now. Not browsing casually, but watching, saving, and buying. A single video can put a small brand in front of millions overnight. But without the right strategy, your content disappears into the feed and takes your budget with it.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            At Unified Branding Experts, we help you show up where attention actually lives. We build TikTok strategies that grow your following, sharpen your content, and turn views into real customers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Content strategy built around what viewers watch",
              "Account setup and optimization for discovery",
              "Paid ad campaigns that reach high-intent buyers",
              "Clear analytics that tie effort to real ROI",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Request TikTok Strategy
            </Link>

            <Link
              href="/tiktok-marketing-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>Explore TikTok Packages</span>
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
              alt="Unified Branding Experts TikTok Marketing and Video Strategy"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">HOOKS • STRATEGY • ADS</span>
              <span className="text-emerald-600 font-bold">PLANS FROM $299/MO</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Is TikTok Marketing? */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/tiktok/tiktok-system.jpeg"
              alt="TikTok Growth Engine and Video System"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            SHORT-FORM REVOLUTION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Is TikTok Marketing?
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            TikTok marketing is the practice of growing your business on TikTok through content, community, and paid promotion working together.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            The platform rewards relevance over polish. A phone-shot video that speaks to the right people can outperform a studio production that misses the mark. That&apos;s what makes TikTok such fertile ground for small businesses. You don&apos;t need the biggest budget. You need the right message, sent to the right feed, at the right moment.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            TikTok marketing isn&apos;t a lucky viral moment. It&apos;s a system you build and refine over time.
          </p>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            VIRAL CAPABILITIES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our TikTok Marketing Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            From your first creative framework to full paid campaign scaling.
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
                  <h3 className="font-display text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
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
            Our 5-Step TikTok Process
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

      {/* 5. Package Cross-Link Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-[#F4EFEB] border-2 border-[#9F8BE7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9F8BE7]/15 text-xs font-mono-num text-[#161616] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#9F8BE7]" />
            <span>TRANSPARENT TIKTOK PACKAGES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Looking for Dedicated TikTok Packages?
          </h2>
          <p className="text-sm text-[#585858] font-body">
            Compare our 5 tiers: Starter ($299/mo), Growth ($699/mo), Pro ($1,499/mo), Authority ($2,999/mo), and Enterprise.
          </p>
        </div>

        <Link
          href="/tiktok-marketing-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View All TikTok Packages</span>
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
          Ready to Grow on TikTok?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Start with a focused content presence or scale into high-converting paid campaigns.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=tiktok"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Request TikTok Strategy
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
