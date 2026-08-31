"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  Eye,
  ExternalLink,
  Download,
  Sparkles,
  Layers,
  ZoomIn,
} from "lucide-react";

export interface FixoriaAsset {
  id: string;
  title: string;
  subtitle: string;
  webpSrc: string;
  pngSrc: string;
  width: number;
  height: number;
  isTall?: boolean;
}

export const FIXORIA_ASSETS: FixoriaAsset[] = [
  {
    id: "01-cover",
    title: "01. Cover & Executive Overview",
    subtitle: "Modern Brand Architecture & Geometric 'F' Logomark System",
    webpSrc: "/case-studies/fixoria/images/01-fixoria-case-study-cover.webp",
    pngSrc: "/case-studies/fixoria/images/01-fixoria-case-study-cover.png",
    width: 1600,
    height: 1080,
  },
  {
    id: "02-presentation",
    title: "02. Brand Architecture & Positioning",
    subtitle: "Comprehensive Visual Identity Framework & Studio Guidelines",
    webpSrc: "/case-studies/fixoria/images/02-fixoria-brand-presentation.webp",
    pngSrc: "/case-studies/fixoria/images/02-fixoria-brand-presentation.png",
    width: 1526,
    height: 2048,
    isTall: true,
  },
  {
    id: "03-logo-construction",
    title: "03. Vector Logomark Construction",
    subtitle: "Architectural Grid Geometry & Directional Angle Alignment",
    webpSrc: "/case-studies/fixoria/images/03-fixoria-logo-construction.webp",
    pngSrc: "/case-studies/fixoria/images/03-fixoria-logo-construction.png",
    width: 1921,
    height: 970,
  },
  {
    id: "04-primary-identity",
    title: "04. Primary Logomark Identity System",
    subtitle: "Monochrome & High-Contrast Cyber Yellow Logomark Variants",
    webpSrc: "/case-studies/fixoria/images/04-fixoria-primary-identity.webp",
    pngSrc: "/case-studies/fixoria/images/04-fixoria-primary-identity.png",
    width: 1921,
    height: 920,
  },
  {
    id: "05-color-typography",
    title: "05. Color Architecture & Typography System",
    subtitle: "Cyber Yellow (#FFE600), Charcoal (#1E1F24) & Space Grotesk Font Matrix",
    webpSrc: "/case-studies/fixoria/images/05-fixoria-color-typography-system.webp",
    pngSrc: "/case-studies/fixoria/images/05-fixoria-color-typography-system.png",
    width: 1021,
    height: 2048,
    isTall: true,
  },
  {
    id: "06-brand-applications-01",
    title: "06. Brand Applications & Corporate Stationery 01",
    subtitle: "Stationery Kit, Executive Business Cards & Employee Badge Systems",
    webpSrc: "/case-studies/fixoria/images/06-fixoria-brand-applications-01.webp",
    pngSrc: "/case-studies/fixoria/images/06-fixoria-brand-applications-01.png",
    width: 993,
    height: 2048,
    isTall: true,
  },
  {
    id: "07-brand-applications-02",
    title: "07. Brand Applications 02 & Digital Systems",
    subtitle: "Mobile Application Interface Icons & Social Media Templates",
    webpSrc: "/case-studies/fixoria/images/07-fixoria-brand-applications-02.webp",
    pngSrc: "/case-studies/fixoria/images/07-fixoria-brand-applications-02.png",
    width: 1920,
    height: 1440,
  },
  {
    id: "08-merchandise-stationery",
    title: "08. Corporate Merchandise & Apparel Tech Packs",
    subtitle: "Embroidered Outerwear, Merchandise Tote Bags & Accessories",
    webpSrc: "/case-studies/fixoria/images/08-fixoria-merchandise-stationery.webp",
    pngSrc: "/case-studies/fixoria/images/08-fixoria-merchandise-stationery.png",
    width: 827,
    height: 2048,
    isTall: true,
  },
  {
    id: "09-environmental-branding",
    title: "09. Environmental Branding & Boardroom Signage",
    subtitle: "Acrylic Interior Signage, Architectural Graphics & Spatial Identity",
    webpSrc: "/case-studies/fixoria/images/09-fixoria-environmental-branding.webp",
    pngSrc: "/case-studies/fixoria/images/09-fixoria-environmental-branding.png",
    width: 843,
    height: 2048,
    isTall: true,
  },
];

export default function FixoriaEditorialGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = FIXORIA_ASSETS.length;

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % total : null));
  }, [total]);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + total) % total : null));
  }, [total]);

  // Keyboard navigation & Esc key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight") nextLightbox();
        if (e.key === "ArrowLeft") prevLightbox();
      }
      if (pdfOpen) {
        if (e.key === "Escape") setPdfOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, pdfOpen, nextLightbox, prevLightbox]);

  // Body overflow locking when modal is open
  useEffect(() => {
    if (lightboxIndex !== null || pdfOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, pdfOpen]);

  // Swipe handlers for mobile lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 50) prevLightbox();
    else if (deltaX < -50) nextLightbox();
    setTouchStartX(null);
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Section Header */}
      <div className="border-b border-[#E0DDDB] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.2em] text-[#9F8BE7] font-bold">
          <Layers className="w-4 h-4 text-[#9F8BE7]" />
          <span>FULL EDITORIAL BRAND GALLERY ({total} HIGH-RESOLUTION PANELS)</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#161616]">
          Fixoria Studio Brand Identity Architecture
        </h2>
        <p className="text-xs sm:text-sm text-[#585858] font-body max-w-2xl leading-relaxed">
          Tap or click any visual panel to inspect high-resolution vector geometry, color specifications, and brand applications in fullscreen.
        </p>
      </div>

      {/* Vertical Long-Form Editorial Gallery */}
      <div className="space-y-10 sm:space-y-14">
        {FIXORIA_ASSETS.map((asset, index) => (
          <article key={asset.id} className="space-y-3 group">
            {/* Panel Title Strip */}
            <div className="flex items-center justify-between gap-4 px-1">
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                  {asset.title}
                </h3>
                <p className="text-xs text-[#585858] font-mono-num">{asset.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="px-3 py-1.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] hover:bg-white text-xs font-mono-num text-[#161616] font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer shrink-0"
              >
                <ZoomIn className="w-3.5 h-3.5 text-[#9F8BE7]" />
                <span className="hidden sm:inline">Inspect Panel</span>
              </button>
            </div>

            {/* Image Container with Natural Height Scaling (No Cropping) */}
            <div
              onClick={() => setLightboxIndex(index)}
              className="relative w-full rounded-2xl sm:rounded-3xl border border-[#E0DDDB] bg-[#FAF7F6] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image using native responsive height to preserve aspect ratio */}
              <img
                src={asset.webpSrc}
                alt={`${asset.title} — Fixoria Studio Brand Identity System by Unified Branding Experts`}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.008]"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200 pointer-events-none">
                <div className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono-num font-bold flex items-center gap-2 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span>Click for Fullscreen View</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Separate PDF Presentation Section Below Gallery */}
      <div className="mt-16 sm:mt-24 p-6 sm:p-12 rounded-3xl bg-[#161616] text-white space-y-6 shadow-2xl border border-[#333]">
        <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.2em] text-[#9F8BE7] font-bold">
          <FileText className="w-4 h-4 text-[#9F8BE7]" />
          <span>COMPLETE BRAND PRESENTATION</span>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Explore the Full Fixoria Studio Portfolio
          </h2>
          <p className="text-xs sm:text-base text-[#A0A0A0] font-body leading-relaxed max-w-3xl">
            View the complete Fixoria Studio identity presentation, including the logo system, visual language, typography, color architecture, branded applications and final presentation work.
          </p>
        </div>

        {/* Premium PDF Preview Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#222] border border-[#333] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-14 rounded-xl bg-amber-500/20 border border-amber-500/40 flex flex-col items-center justify-center text-[#FFE600] font-bold font-mono-num text-xs shrink-0 shadow-xs">
              <FileText className="w-5 h-5 text-[#FFE600] mb-0.5" />
              <span>PDF</span>
            </div>
            <div className="space-y-1 min-w-0">
              <span className="font-display text-base sm:text-lg font-bold text-white block truncate">
                fixoria-complete-portfolio.pdf
              </span>
              <span className="text-xs text-[#888] font-mono-num block">
                1.52 MB • Full Vector Brand Presentation Document
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPdfOpen(true)}
              className="px-6 py-3 rounded-full bg-[#FFE600] hover:bg-[#ebd300] text-[#161616] font-display font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
            >
              <Eye className="w-4 h-4 text-[#161616]" />
              <span>View Full Portfolio</span>
            </button>
            <a
              href="/case-studies/fixoria/portfolio/fixoria-complete-portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono-num text-xs transition-colors flex items-center justify-center gap-1.5"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#A0A0A0]" />
              <span className="hidden xs:inline">Open Tab</span>
            </a>
          </div>
        </div>
      </div>

      {/* FULLSCREEN IMAGE LIGHTBOX MODAL (Z-INDEX 99999 IS ABOVE CHATBOT) */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col justify-between select-none animate-in fade-in duration-200"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Lightbox Top Header */}
          <div className="p-4 sm:p-6 bg-black/80 border-b border-white/10 flex items-center justify-between gap-4 z-20 shrink-0">
            <div className="min-w-0">
              <span className="text-xs font-mono-num text-[#FFE600] font-bold uppercase tracking-wider block">
                Panel {lightboxIndex + 1} of {total}
              </span>
              <h3 className="font-display font-bold text-sm sm:text-lg text-white truncate">
                {FIXORIA_ASSETS[lightboxIndex].title}
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={FIXORIA_ASSETS[lightboxIndex].pngSrc}
                download
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
                title="Download original PNG file"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/20 hover:bg-rose-600 text-white transition-colors cursor-pointer flex items-center justify-center"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Scrollable Viewer Container */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-8 flex items-center justify-center relative">
            {/* Left Nav Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="fixed left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/70 hover:bg-[#FFE600] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-2xl"
              title="Previous Image (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Image Container (Preserves natural height, vertical scrolling for tall panels) */}
            <div
              className="max-w-5xl w-full my-auto flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={FIXORIA_ASSETS[lightboxIndex].webpSrc}
                alt={FIXORIA_ASSETS[lightboxIndex].title}
                className="max-w-full h-auto object-contain rounded-lg shadow-2xl mx-auto border border-white/10"
                style={{ maxHeight: "85vh", width: "auto" }}
              />
              <p className="text-xs text-[#A0A0A0] font-mono-num mt-3 text-center">
                {FIXORIA_ASSETS[lightboxIndex].subtitle}
              </p>
            </div>

            {/* Right Nav Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="fixed right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/70 hover:bg-[#FFE600] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-2xl"
              title="Next Image (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Bar */}
          <div className="p-3 sm:p-4 bg-black/80 border-t border-white/10 flex items-center justify-between text-xs font-mono-num text-[#888] shrink-0">
            <span>Fixoria Studio Brand Identity System</span>
            <span className="hidden sm:inline">Use ← → keys to navigate • Esc to close</span>
          </div>
        </div>
      )}

      {/* FULLSCREEN PDF VIEWER MODAL (Z-INDEX 99999 IS ABOVE CHATBOT) */}
      {pdfOpen && (
        <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-in fade-in duration-200">
          {/* PDF Viewer Header */}
          <div className="p-4 sm:p-5 bg-[#161616] border-b border-[#333] flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#FFE600]/20 border border-[#FFE600]/40 flex items-center justify-center text-[#FFE600] font-bold text-xs shrink-0">
                PDF
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-sm sm:text-base text-white truncate">
                  Fixoria Studio Complete Brand Portfolio
                </h3>
                <span className="text-[11px] text-[#A0A0A0] font-mono-num block">
                  Official Presentation • 1.52 MB
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/case-studies/fixoria/portfolio/fixoria-complete-portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono-num flex items-center gap-1.5 transition-colors"
                title="Open PDF in new browser tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#FFE600]" />
                <span className="hidden sm:inline">Open in New Tab</span>
              </a>

              <button
                type="button"
                onClick={() => setPdfOpen(false)}
                className="p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-rose-600 text-white transition-colors cursor-pointer flex items-center justify-center"
                title="Close PDF Viewer (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Body (iframe with touch scrolling) */}
          <div className="flex-1 w-full bg-[#1e1e1e] relative overflow-hidden flex items-center justify-center">
            <iframe
              src="/case-studies/fixoria/portfolio/fixoria-complete-portfolio.pdf#toolbar=1&navpanes=0"
              title="Fixoria Studio Complete Brand Portfolio PDF"
              className="w-full h-full border-0 block"
            />
          </div>

          {/* PDF Viewer Footer */}
          <div className="p-3 bg-[#161616] border-t border-[#333] flex items-center justify-between text-xs font-mono-num text-[#888] shrink-0">
            <span>Fixoria Studio Complete Portfolio Presentation</span>
            <div className="flex items-center gap-4">
              <a
                href="/case-studies/fixoria/portfolio/fixoria-complete-portfolio.pdf"
                download
                className="text-[#FFE600] hover:underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
