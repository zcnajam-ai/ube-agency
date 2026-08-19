import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Layers, Palette, Type, CheckCircle2 } from "lucide-react";
import { FEATURED_PROJECTS, getProjectBySlug } from "@/data/projects";
import { Heading3DSparkle, Heading3DGrowth, Heading3DShield } from "@/components/common/Brand3DIcons";

export function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
    alternates: {
      canonical: `https://unifiedbrandingexperts.com/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Unified Branding Experts`,
      description: project.tagline,
      url: `https://unifiedbrandingexperts.com/work/${project.slug}`,
      siteName: "Unified Branding Experts",
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto space-y-16">
      {/* Back Link */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-xs font-mono-num text-[#585858] hover:text-[#161616] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>BACK TO PORTFOLIO</span>
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Heading3DSparkle size={16} />
            <span>{project.category}</span>
          </div>
          <span className="text-xs font-mono-num text-[#585858]">
            {project.client} • {project.year} • Platform: {project.platform}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-[1.1]">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-[#585858] font-body leading-relaxed max-w-3xl">
          {project.tagline}
        </p>
      </div>

      {/* Hero Visual */}
      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#E0DDDB] shadow-md bg-white">
        <Image
          src={project.heroImage}
          alt={`${project.title} Case Study Overview by Unified Branding Experts`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Project Deliverables Strip (Part 10: Factual deliverables) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {project.results.map((res) => (
          <div
            key={res.label}
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] text-center space-y-1 shadow-xs"
          >
            <span className="font-display font-bold text-xl sm:text-2xl text-[#161616] block">
              {res.metric}
            </span>
            <span className="text-xs text-[#585858] font-body block">{res.label}</span>
          </div>
        ))}
      </div>

      {/* Challenge, Strategy & Execution (Part 10 Structure) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
          <div className="text-xs font-mono-num font-bold text-rose-600 uppercase tracking-wider">
            1. The Challenge
          </div>
          <h2 className="font-display text-lg font-bold text-[#161616]">
            Initial Roadblocks
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
          <div className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider">
            2. Strategic Direction
          </div>
          <h2 className="font-display text-lg font-bold text-[#161616]">
            UBE Recommendations
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
            {project.strategy}
          </p>
        </div>

        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
          <div className="text-xs font-mono-num font-bold text-emerald-600 uppercase tracking-wider">
            3. Execution &amp; Scope
          </div>
          <h2 className="font-display text-lg font-bold text-[#161616]">
            Services Delivered
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
            {project.execution}
          </p>
        </div>
      </div>

      {/* Brand Specifications (Typography & Palette) */}
      {(project.typography || project.palette) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.typography && (
            <div className="p-7 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono-num text-[#9F8BE7] font-bold">
                <Type className="w-4 h-4" />
                <span>TYPOGRAPHY SYSTEM</span>
              </div>
              <div className="font-display text-xl font-bold text-[#161616]">
                {project.typography}
              </div>
              <p className="text-xs text-[#585858] leading-relaxed">
                Selected for optimal brand legibility, visual hierarchy, and cross-platform consistency.
              </p>
            </div>
          )}

          {project.palette && (
            <div className="p-7 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono-num text-[#9F8BE7] font-bold">
                <Palette className="w-4 h-4" />
                <span>COLOR SPECIFICATIONS</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.palette.map((color) => (
                  <div key={color} className="flex items-center gap-2">
                    <span
                      className="w-6 h-6 rounded-full border border-black/10 shadow-xs block"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-mono-num text-xs text-[#585858]">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Visual Showcase Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono-num uppercase tracking-wider text-[#9F8BE7] font-bold">
            <Layers className="w-4 h-4" />
            <span>VISUAL ASSET MATRIX &amp; PACKAGING MOCKUPS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.galleryImages.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white shadow-xs group"
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} Asset Showcase ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonial Quote if available */}
      {project.testimonial && (
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-4 shadow-xs">
          <blockquote className="font-display text-lg sm:text-xl font-bold text-[#161616] leading-relaxed">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <div className="text-xs font-mono-num text-[#9F8BE7] font-bold">
            {project.testimonial.author} — {project.testimonial.role}
          </div>
        </div>
      )}

      {/* Technology Stack & Bottom CTA */}
      <div className="p-8 rounded-3xl bg-white border border-[#E0DDDB] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
        <div>
          <span className="text-xs font-mono-num text-[#585858] uppercase block mb-2 font-bold">
            Technologies &amp; Systems Deployed
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/contact"
          className="px-8 py-3.5 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-xs sm:text-sm hover:bg-[#b4a3f7] transition-all shrink-0 text-center shadow-xs"
        >
          Discuss Your Project
        </Link>
      </div>
    </div>
  );
}
