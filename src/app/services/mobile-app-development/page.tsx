import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Smartphone,
  Layers,
  Code2,
  Cpu,
  BellRing,
  Rocket,
  HelpCircle,
  Phone,
  Check,
  ShieldCheck,
  Zap,
} from "lucide-react";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS, Android & Cross-Platform | Unified Branding Experts",
  description:
    "Build a mobile app your customers keep. UBE designs and develops iOS, Android and cross-platform apps with user-focused UI/UX, backend integrations, testing and launch support.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Services | iOS, Android & Cross-Platform | Unified Branding Experts",
    description:
      "Build a mobile app your customers keep. UBE designs and develops iOS, Android and cross-platform apps with user-focused UI/UX.",
    url: "https://unifiedbrandingexperts.com/services/mobile-app-development",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/official/mobile-app/mobile-app-showcase.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services - Unified Branding Experts",
      },
    ],
  },
};

export default function MobileAppServicePage() {
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
        name: "Mobile App Development",
        item: "https://unifiedbrandingexperts.com/services/mobile-app-development",
      },
    ],
  };

  const faqs = [
    {
      q: "Do you build both iOS and Android apps?",
      a: "Yes. Projects can target iOS, Android or both platforms depending on the audience and scope.",
    },
    {
      q: "Can you build an MVP first?",
      a: "Yes. An MVP is often the most practical way to validate a product concept before investing in a larger feature set.",
    },
    {
      q: "Can the app connect with an existing website or system?",
      a: "Yes, when the existing platform provides appropriate APIs or integration options.",
    },
    {
      q: "Do you design the app as well as develop it?",
      a: "Yes. UI/UX planning and visual design can be part of the same development engagement.",
    },
    {
      q: "Can you help publish the app?",
      a: "Yes. We can prepare the application for App Store and Google Play submission, although final platform approval remains with Apple or Google.",
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
            <span>MOBILE APP DEVELOPMENT</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Mobile App Development for iOS &amp; Android
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Turn your app idea into a mobile product people can actually use. Unified Branding Experts designs and develops mobile applications for iOS, Android and cross-platform environments. We combine product strategy, mobile UI/UX, application development, backend connectivity and launch preparation into one structured process.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            From an early-stage MVP to a more advanced customer platform, the goal is to create an app that feels intuitive, performs reliably and has an architecture capable of evolving with the business.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Native iOS (Swift) & Android (Kotlin) engineering",
              "Cross-platform React Native & Flutter architectures",
              "Thumb-friendly UI/UX design & Figma prototypes",
              "Cloud APIs, push notifications & App Store publishing",
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
              label="Start Your App Project"
              service="Mobile App Development"
              variant="primary"
            />
            <Link
              href="/mobile-app-packages"
              className="px-6 py-3.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-[#161616] font-display font-bold text-xs transition-all flex items-center gap-2 group shadow-xs"
            >
              <span>Explore Mobile App Packages</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* HERO VISUAL (Approved Mobile App Asset) */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-3 shadow-xl">
            <div className="relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-[#FAF7F6]">
              <Image
                src="/images/official/mobile-app/mobile-app-showcase.png"
                alt="iOS and Android mobile application interface development by Unified Branding Experts"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-lg">
                <span className="font-bold">iOS &amp; Android App MVP</span>
                <span className="text-emerald-600 font-bold">App Store Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FROM IDEA TO WORKING PRODUCT */}
      <section className="space-y-6 max-w-4xl border-t border-[#E0DDDB] pt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-bold">
          <span>PRODUCT STRATEGY</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
          More Than App Development
        </h2>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed">
          A successful mobile application requires more than writing code. The product needs a clear purpose, intuitive navigation, reliable backend systems and an experience that makes sense within a few moments of opening the app.
        </p>

        <div className="space-y-3 pt-2">
          <span className="text-xs font-mono-num font-bold text-[#161616] uppercase tracking-wider block">
            We help define the product before development begins, identifying:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#303030] font-medium">
            {[
              "Core user journeys",
              "Essential MVP features",
              "Account & authentication",
              "Third-party integrations",
              "Database & data requirements",
              "Push notification triggers",
              "Payment requirements",
              "Admin control dashboard",
              "Future platform expansion",
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#E0DDDB]">
                <Check className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-[#585858] font-medium pt-2">
          This helps prevent unnecessary complexity from being built into the first version.
        </p>
      </section>

      {/* 3. 8 SERVICE CARDS GRID */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <span>FULL LIFECYCLE CAPABILITIES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            What We Design &amp; Develop
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Mobile Product Strategy",
              desc: "Define the core application, intended users, feature priorities and MVP requirements.",
              icon: <Layers className="w-5 h-5 text-[#9F8BE7]" />,
            },
            {
              title: "UI/UX Design",
              desc: "Wireframes, application flows and high-fidelity mobile interfaces designed around intuitive touch interactions.",
              icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
            },
            {
              title: "iOS Development",
              desc: "Applications designed and engineered specifically for Apple's iOS ecosystem.",
              icon: <Code2 className="w-5 h-5 text-purple-600" />,
            },
            {
              title: "Android Development",
              desc: "Android applications developed for modern devices, tablets and screen configurations.",
              icon: <Zap className="w-5 h-5 text-[#DDF160]" />,
            },
            {
              title: "Cross-Platform Dev",
              desc: "Shared application architectures using React Native or Flutter where appropriate.",
              icon: <Layers className="w-5 h-5 text-rose-500" />,
            },
            {
              title: "Backend & API Development",
              desc: "Authentication, databases, cloud infrastructure, API connections and business logic.",
              icon: <Cpu className="w-5 h-5 text-blue-600" />,
            },
            {
              title: "Push Notifications",
              desc: "Notification architecture for relevant user updates, reminders and engagement.",
              icon: <BellRing className="w-5 h-5 text-amber-500" />,
            },
            {
              title: "App Store Launch Support",
              desc: "Preparation for Apple App Store and Google Play Store submission requirements.",
              icon: <Rocket className="w-5 h-5 text-indigo-600" />,
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

      {/* 4. USER EXPERIENCE SECTION (WITH APP JOURNEY VISUAL) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#E0DDDB] pt-16">
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-3 shadow-xl">
            <div className="relative h-[340px] sm:h-[400px] w-full rounded-2xl overflow-hidden bg-[#FAF7F6]">
              <Image
                src="/images/official/mobile-app/app-journey.jpeg"
                alt="Mobile UX app journey mapping by Unified Branding Experts"
                fill
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <span>TOUCH EXPERIENCE</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Mobile Experiences Designed Around Real User Behavior
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Mobile interfaces have less space and less tolerance for unnecessary friction. We design application journeys around clarity, thumb-friendly interaction, readable content, predictable navigation and clear actions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono-num text-[#303030]">
            {[
              "Onboarding flows",
              "User registration",
              "Custom dashboards",
              "In-app search",
              "User profiles",
              "Mobile checkout",
              "Booking tools",
              "Notifications",
              "Subscription flows",
            ].map((ux) => (
              <div key={ux} className="p-2.5 rounded-xl bg-white border border-[#E0DDDB] text-center font-bold">
                {ux}
              </div>
            ))}
          </div>
          <p className="text-xs text-[#585858] font-medium pt-1">
            The exact experience is designed around the product rather than forcing every application into the same layout.
          </p>
        </div>
      </section>

      {/* 5. APPS WE CAN BUILD GRID */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-emerald-600 font-bold">
            <span>APPLICATION CATEGORIES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Apps We Can Build
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
          {[
            "eCommerce & Shopping",
            "Booking & Services",
            "Customer Portals",
            "Membership Platforms",
            "Marketplace Apps",
            "Business Operations",
            "Delivery & Logistics",
            "Community Products",
            "Startup MVP Products",
            "Custom Platforms",
          ].map((cat) => (
            <div
              key={cat}
              className="p-4 rounded-2xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all text-center space-y-1 shadow-2xs"
            >
              <Smartphone className="w-5 h-5 text-[#9F8BE7] mx-auto" />
              <div className="font-display font-bold text-xs text-[#161616]">
                {cat}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OUR DEVELOPMENT PROCESS (WITH APP PROCESS VISUAL) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#E0DDDB] pt-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-bold">
            <span>DEVELOPMENT LIFECYCLE</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            A Structured Path From Concept to Launch
          </h2>

          <div className="space-y-3">
            {[
              { num: "01", title: "Product Discovery", desc: "Define objectives, users, feature requirements and technical dependencies." },
              { num: "02", title: "Wireframes", desc: "Map screens, interactions and key application journeys." },
              { num: "03", title: "UI Design", desc: "Develop the visual interface and reusable application design system." },
              { num: "04", title: "Development", desc: "Build front-end application functionality and required backend systems." },
              { num: "05", title: "Testing", desc: "Test functionality, responsiveness, device behavior and key user journeys." },
              { num: "06", title: "Launch", desc: "Prepare the production build and support store-submission requirements." },
              { num: "07", title: "Iteration", desc: "Use real product feedback and usage patterns to guide future releases." },
            ].map((p) => (
              <div key={p.num} className="p-3.5 rounded-2xl bg-white border border-[#E0DDDB] flex items-start gap-3 text-xs">
                <span className="font-mono-num font-bold text-[#9F8BE7] text-sm shrink-0">{p.num}</span>
                <div>
                  <strong className="text-[#161616] block">{p.title}</strong>
                  <span className="text-[#585858]">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS VISUAL */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-3 shadow-xl">
            <div className="relative h-[360px] sm:h-[420px] w-full rounded-2xl overflow-hidden bg-[#FAF7F6]">
              <Image
                src="/images/official/mobile-app/app-process.jpeg"
                alt="Mobile app development process visualization"
                fill
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY SECTION (WITH APP TEAM VISUAL) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#E0DDDB] pt-16">
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-3 shadow-xl">
            <div className="relative h-[340px] sm:h-[380px] w-full rounded-2xl overflow-hidden bg-[#FAF7F6]">
              <Image
                src="/images/official/mobile-app/app-team.jpeg"
                alt="Mobile application engineering and backend cloud integration"
                fill
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <span>ENGINEERING STACK</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Technology Selected Around the Product
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Depending on the application requirements, UBE can work with technologies such as:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-num text-xs text-[#161616]">
            {[
              "React Native",
              "Flutter",
              "Swift (iOS)",
              "Kotlin (Android)",
              "Firebase",
              "PostgreSQL",
              "REST APIs",
              "Cloud Infra",
            ].map((t) => (
              <div key={t} className="p-3 rounded-2xl bg-white border border-[#E0DDDB] text-center font-bold shadow-2xs">
                {t}
              </div>
            ))}
          </div>

          <p className="text-xs text-[#585858]">
            The final stack should be selected based on functionality, scale, maintenance requirements and the most practical development approach.
          </p>
        </div>
      </section>

      {/* 8. FAQs SECTION */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>QUESTIONS &amp; ANSWERS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Mobile App Development FAQs
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

      {/* 9. FINAL CALLOUT CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDF160]/15 border border-[#DDF160]/30 text-xs font-mono-num text-[#DDF160] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCT ENGINEERING</span>
          </div>
          <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Have an App Idea Ready to Become a Real Product?
          </h3>
          <p className="text-xs sm:text-sm text-[#ACACAC] leading-relaxed">
            Tell us what you are building, where you are now and what you want the next stage to accomplish. Our team will review your requirements and follow up with you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto shrink-0">
          <ServiceProjectModalTrigger
            label="Start Your Project"
            service="Mobile App Development"
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
