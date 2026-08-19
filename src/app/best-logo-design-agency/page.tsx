import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Palette,
  Layers,
  ShieldCheck,
  Zap,
  Eye,
  Type,
  FileCheck,
  Maximize2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Logo Design Agency | Custom Brand Mark & Identity",
  description:
    "Custom logo design and brand identity services. 100% original vector logos, multiple concepts, full copyright ownership, and complete brand style guidelines.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/best-logo-design-agency",
  },
  openGraph: {
    title: "Best Logo Design Agency | Custom Brand Mark & Identity",
    description:
      "Custom logo design and brand identity services. 100% original vector logos, multiple concepts, and full copyright ownership.",
    url: "https://unifiedbrandingexperts.com/best-logo-design-agency",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/project-brand-1.webp",
        width: 1200,
        height: 630,
        alt: "Logo Design Agency - Unified Branding Experts",
      },
    ],
  },
};

export default function BestLogoDesignAgencyPage() {
  const serviceIncludes = [
    {
      title: "Strategic Brand Discovery & Concept Research",
      desc: "Every logo begins with an understanding of your business goals, target audience psychology, and competitive positioning. We research your space to ensure your mark communicates a clear, differentiated value proposition.",
      icon: <Eye className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/branding/brand-strategy.jpeg",
    },
    {
      title: "Multiple Original Custom Logo Concepts",
      desc: "Receive 2 to 6 distinct, handcrafted logo concepts built from scratch by senior identity designers. We explore diverse styles—wordmarks, emblems, abstract marks, and combination marks—tailored to your vision.",
      icon: <Palette className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/branding/logo-design.jpeg",
    },
    {
      title: "Comprehensive Vector Master File Delivery",
      desc: "Every logo is engineered with scalability in mind. Delivered in all industry-standard vector formats (AI, EPS, SVG) and web-optimized raster formats (transparent PNG, high-res JPG, PDF) for digital, screen, and billboard printing.",
      icon: <Maximize2 className="w-5 h-5 text-purple-600" />,
      image: "/images/official/branding/brand-identity.jpeg",
    },
    {
      title: "Color Palettes & Typography Architecture",
      desc: "A logo is only as strong as the system behind it. We provide complete color codes (HEX, RGB, CMYK, Pantone) and paired typography hierarchies for headings, body copy, and digital user interfaces.",
      icon: <Type className="w-5 h-5 text-blue-600" />,
      image: "/images/official/branding/brand-guidelines.jpeg",
    },
    {
      title: "Cross-Platform Layout Variations",
      desc: "We supply horizontal, vertical, stacked, and icon-only favicon versions of your mark, ensuring flawless readability on website navbars, mobile apps, social media avatars, packaging, and embroidered apparel.",
      icon: <Layers className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/branding/branding-hero.jpeg",
    },
    {
      title: "100% Full Intellectual Property & Copyright Transfer",
      desc: "You receive full, unrestricted legal ownership of your logo upon completion. No recurring licensing fees, no trademark complications—just 100% exclusive rights for life.",
      icon: <FileCheck className="w-5 h-5 text-amber-600" />,
      image: "/images/official/branding/brand-identity.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Brand Research",
      review: "Your company vision, audience demographics, competitors, and core values.",
      setup: "A strategic creative brief and visual moodboard defining the aesthetic direction.",
      avoid: "Designing generic or misaligned marks that fail to connect with target buyers.",
    },
    {
      number: "02",
      title: "Concept Generation & Sketching",
      review: "Visual metaphors, typographic treatments, and icon geometry.",
      setup: "2 to 6 unique, original custom logo concepts presented on real-world mockups.",
      avoid: "Cookie-cutter AI templates or stock icons that degrade brand credibility.",
    },
    {
      number: "03",
      title: "Refinement & Polish",
      review: "Your feedback, preferred concept selection, and specific revision notes.",
      setup: "Refined proportions, optical kerning, color palette fine-tuning, and layout balance.",
      avoid: "Unbalanced geometry or awkward scaling that looks blurry on small mobile screens.",
    },
    {
      number: "04",
      title: "Brand Guidelines & Asset Export",
      review: "Final approved mark across digital, print, light, and dark backgrounds.",
      setup: "Complete vector master pack (AI, EPS, SVG, PNG, JPG, PDF) plus Brand Style Guide.",
      avoid: "Missing vector source files or blurry low-resolution assets when ordering printing.",
    },
    {
      number: "05",
      title: "Copyright Handoff & Launch",
      review: "All production deliverables, usage permissions, and copyright documentation.",
      setup: "100% commercial intellectual property transfer and post-launch asset support.",
      avoid: "Legal trademark disputes and unauthorized licensing restrictions down the road.",
    },
  ];

  const faqs = [
    {
      q: "How many custom logo concepts will I receive?",
      a: "Depending on your selected package, you will receive 2, 4, or 6 distinct, handcrafted logo concepts exploring different visual directions and styles. Each concept is presented in high resolution with real-world application mockups (signage, business cards, website headers).",
    },
    {
      q: "What is your typical turnaround time for logo design?",
      a: "Initial concepts are delivered within 48 to 72 business hours. Revisions and final file packages typically take 3 to 5 business days in total, depending on the speed of client feedback.",
    },
    {
      q: "What file formats will I receive upon completion?",
      a: "You receive high-resolution vector source files (Adobe Illustrator .AI, Editable .EPS, Scalable Vector Graphics .SVG) as well as web-ready transparent .PNG, print-ready .PDF, and high-res .JPG formats in full color, black, and white versions.",
    },
    {
      q: "Do I own 100% full rights to my logo?",
      a: "Yes. Once final payment and design approval are complete, all copyright and intellectual property rights are 100% transferred to your business. You own the mark forever with zero ongoing licensing fees.",
    },
    {
      q: "Can you help trademark or register my new logo?",
      a: "We design all logos from scratch to ensure originality and trademark viability. While legal trademark registration is handled through government trademark offices (such as the USPTO), we provide all necessary vector assets and documentation required for filing.",
    },
    {
      q: "What if I need brand collateral like business cards or social media banners?",
      a: "Our Brand Starter ($599) and Brand Identity Suite ($1,199) packages include complete social media kits, business card stationery designs, letterheads, and comprehensive brand guidelines PDF documentation.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CUSTOM BRAND IDENTITY &amp; LOGO DESIGN</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Best Logo Design Agency for Modern Brands.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            A logo is more than a visual mark—it is the foundation of your brand identity. At <strong className="text-[#161616]">Unified Branding Experts</strong>, we design logos that communicate your personality, build instant credibility, and stay memorable across every digital and print touchpoint.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            Our logo design process blends brand psychology, visual storytelling, and strategic identity design to create logos that are timeless, memorable, and adaptable across digital and print platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "100% custom vector mark & typography",
              "2 to 6 unique concepts in 48-72 hours",
              "Full source files (AI, EPS, SVG, PNG)",
              "100% full commercial copyright ownership",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact?type=logo"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Start Your Logo Design
            </Link>

            <Link
              href="/logo-design-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>View Logo Packages</span>
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
              src="/images/official/branding/logo-design.jpeg"
              alt="Unified Branding Experts Custom Logo Design Showcase"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">VECTOR • COPYRIGHT • STYLE GUIDE</span>
              <span className="text-emerald-600 font-bold">FROM $299</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive: What Makes a Great Logo */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/branding/brand-identity.jpeg"
              alt="Brand Identity and Scalable Vector Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            IDENTITY STRATEGY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            Why Logo Design Is the Anchor of Your Brand.
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            In today&apos;s competitive digital landscape, a customer decides whether your business is trustworthy within 3 seconds of seeing your visual mark. A poorly executed or generic logo signals amateurism, while a polished, distinctive mark commands premium pricing and respect.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            Every logo we create is built with scalability in mind, ensuring it performs flawlessly on website headers, mobile app icons, social media avatars, business cards, apparel, and large billboard displays.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            We don&apos;t just design graphics—we build memorable brand marks that inspire customer loyalty.
          </p>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            COMPLETE DELIVERABLES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our Logo Design Service Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            Comprehensive brand identity components engineered for cross-platform scalability.
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
            Our 5-Step Logo Design Process
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

      {/* 5. Package CTA Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-[#F4EFEB] border-2 border-[#9F8BE7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono-num text-emerald-600 font-bold uppercase tracking-wider block">
            TRANSPARENT PRICING TIERS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Explore Logo Design Packages &amp; Pricing
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body">
            Compare our Basic Logo ($299), Brand Starter ($599), Brand Identity Suite ($1,199), and Full Brand System ($2,499) packages.
          </p>
        </div>

        <Link
          href="/logo-design-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View Logo Packages</span>
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
          Ready for a Logo That Commands Authority?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Start with our Logo Essentials plan or step into a full visual brand identity system.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=logo"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Start Logo Design
          </Link>
          <Link
            href="/logo-design-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
