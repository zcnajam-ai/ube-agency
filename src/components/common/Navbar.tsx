"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Phone,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import MagneticButton from "./MagneticButton";
import FullscreenMenu from "./FullscreenMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const { openProjectModal } = useScroll();

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const packagesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setPackagesOpen(false);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handlePackagesEnter = () => {
    if (packagesTimeoutRef.current) clearTimeout(packagesTimeoutRef.current);
    setServicesOpen(false);
    setPackagesOpen(true);
  };

  const handlePackagesLeave = () => {
    packagesTimeoutRef.current = setTimeout(() => {
      setPackagesOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-3 md:py-5 px-4 md:px-8 flex justify-center items-center ${
          isScrolled ? "py-2 md:py-3" : ""
        }`}
      >
        <nav
          className={`max-w-7xl w-full mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 relative ${
            isScrolled
              ? "bg-[#FAF7F6]/95 backdrop-blur-xl border border-[#E0DDDB] shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              : "bg-white/90 backdrop-blur-md border border-[#E0DDDB]/80 shadow-[0_2px_15px_rgba(0,0,0,0.03)]"
          }`}
        >
          {/* Official UBE Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative h-6 sm:h-8 md:h-9 w-32 xs:w-36 sm:w-44 md:w-48 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/logo/ube-logo-black.svg"
                alt="Unified Branding Experts"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links with Dropdowns */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            <Link
              href="/work"
              className="px-3 py-1.5 rounded-full text-xs font-display font-semibold text-[#303030] hover:text-[#161616] hover:bg-[#FAF7F6] transition-all"
            >
              Work
            </Link>

            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  servicesOpen
                    ? "bg-[#161616] text-white"
                    : "text-[#303030] hover:text-[#161616] hover:bg-[#FAF7F6]"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#9F8BE7]" : ""
                  }`}
                />
              </button>

              {/* Mega Dropdown Panel for Services */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[740px] z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-6 rounded-3xl bg-white border border-[#E0DDDB] shadow-[0_20px_50px_rgba(0,0,0,0.12)] space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Column 1: Brand & Design */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block border-b border-[#E0DDDB] pb-1.5">
                          Brand &amp; Design
                        </span>
                        <div className="space-y-1.5">
                          <Link
                            href="/best-logo-design-agency"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Logo Design Agency</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">Custom vector identity</p>
                          </Link>

                          <Link
                            href="/professional-web-design-services"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Web Design Services</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">Responsive UI/UX Figma</p>
                          </Link>

                          <Link
                            href="/services/branding"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Brand Strategy &amp; Identity</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">Full brand guidelines</p>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Development & Engineering */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono-num font-bold text-emerald-600 uppercase tracking-wider block border-b border-[#E0DDDB] pb-1.5">
                          Code &amp; Commerce
                        </span>
                        <div className="space-y-1.5">
                          <Link
                            href="/best-website-development-agency"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Website Development</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">Fast Next.js &amp; CMS</p>
                          </Link>

                          <Link
                            href="/custom-web-development"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Custom Web Development</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">Bespoke portals &amp; apps</p>
                          </Link>

                          <Link
                            href="/services/ecommerce"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>eCommerce Growth &amp; Marketplaces</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">Shopify, Amazon, Etsy &amp; eBay</p>
                          </Link>

                          <Link
                            href="/services/mobile-app-development"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Mobile App Engineering</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">iOS &amp; Android MVP</p>
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Growth & AI */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono-num font-bold text-purple-600 uppercase tracking-wider block border-b border-[#E0DDDB] pb-1.5">
                          Growth &amp; AI Systems
                        </span>
                        <div className="space-y-1.5">
                          <Link
                            href="/digital-marketing-services-agency"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Digital Marketing Agency</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">Google, Meta, TikTok Ads</p>
                          </Link>

                          <Link
                            href="/services/aiseo"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>AI SEO &amp; Answer Engines</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">AEO, GEO &amp; Overviews</p>
                          </Link>

                          <Link
                            href="/services/ai-automation"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>AI Automation &amp; CRM</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">Workflows &amp; Chatbots</p>
                          </Link>

                          <Link
                            href="/professional-content-writing-services"
                            onClick={() => setServicesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Content Writing Services</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-[10px] text-[#585858] line-clamp-1">SEO Copywriting &amp; Story</p>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Strip */}
                    <div className="pt-3 border-t border-[#E0DDDB] flex items-center justify-between text-xs">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="font-display font-bold text-[#161616] hover:text-[#9F8BE7] transition-colors flex items-center gap-1"
                      >
                        <span>View All Agency Services Directory →</span>
                      </Link>
                      <Link
                        href="/packages"
                        onClick={() => setServicesOpen(false)}
                        className="text-[11px] font-mono-num text-[#9F8BE7] font-bold hover:underline"
                      >
                        Explore Packages ($299+) →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Packages Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={handlePackagesEnter}
              onMouseLeave={handlePackagesLeave}
            >
              <button
                type="button"
                onClick={() => setPackagesOpen(!packagesOpen)}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  packagesOpen
                    ? "bg-[#161616] text-white"
                    : "text-[#9F8BE7] hover:text-[#161616] hover:bg-[#9F8BE7]/15 font-bold"
                }`}
              >
                <span>Packages</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    packagesOpen ? "rotate-180 text-[#9F8BE7]" : ""
                  }`}
                />
              </button>

              {/* Mega Dropdown Panel for Packages */}
              {packagesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[720px] z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-6 rounded-3xl bg-white border border-[#E0DDDB] shadow-[0_20px_50px_rgba(0,0,0,0.12)] space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Column 1: Design & Brand Packages */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block border-b border-[#E0DDDB] pb-1.5">
                          Design &amp; Brand Packages
                        </span>
                        <div className="space-y-1.5">
                          <Link
                            href="/logo-design-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Logo Packages</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$299+</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">Custom vector logos</p>
                          </Link>

                          <Link
                            href="/web-design-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Web Design Packages</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$300+</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">Responsive UI/UX Figma</p>
                          </Link>

                          <Link
                            href="/branding-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Branding Packages</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$299+</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">Full identity systems</p>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Web & Code Packages */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono-num font-bold text-emerald-600 uppercase tracking-wider block border-b border-[#E0DDDB] pb-1.5">
                          Development Packages
                        </span>
                        <div className="space-y-1.5">
                          <Link
                            href="/ecommerce-growth-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>eCommerce Growth Plans</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$399+</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">Shopify, Amazon, Etsy &amp; eBay</p>
                          </Link>

                          <Link
                            href="/web-design-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Website Dev Plans</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$300+</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">CMS &amp; Next.js platforms</p>
                          </Link>

                          <Link
                            href="/our-custom-web-design-development-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Custom Web &amp; eCom</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$450+</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">Bespoke portals &amp; stores</p>
                          </Link>

                          <Link
                            href="/mobile-app-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Mobile App Plans</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$999+</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">MVP &amp; Native apps</p>
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Growth & AI Packages */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono-num font-bold text-purple-600 uppercase tracking-wider block border-b border-[#E0DDDB] pb-1.5">
                          Growth &amp; AI Packages
                        </span>
                        <div className="space-y-1.5">
                          <Link
                            href="/ai-seo-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>AI SEO Packages</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$349+</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">AEO &amp; AI Overviews</p>
                          </Link>

                          <Link
                            href="/digital-marketing-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Digital Marketing</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$299/mo</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">Paid ads management</p>
                          </Link>

                          <Link
                            href="/tiktok-marketing-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>TikTok Marketing</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$299/mo</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">Viral short video &amp; ads</p>
                          </Link>

                          <Link
                            href="/ai-automation-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>AI Automation Plans</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$349+</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">CRM &amp; AI Chatbots</p>
                          </Link>

                          <Link
                            href="/our-content-writing-packages"
                            onClick={() => setPackagesOpen(false)}
                            className="p-2 rounded-xl hover:bg-[#FAF7F6] block transition-colors group"
                          >
                            <div className="font-display font-bold text-xs text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
                              <span>Content Writing</span>
                              <span className="text-[10px] font-mono-num text-emerald-600 font-bold">$199+</span>
                            </div>
                            <p className="text-[10px] text-[#585858]">SEO Copywriting</p>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Strip */}
                    <div className="pt-3 border-t border-[#E0DDDB] flex items-center justify-between text-xs">
                      <Link
                        href="/packages"
                        onClick={() => setPackagesOpen(false)}
                        className="font-display font-bold text-[#161616] hover:text-[#9F8BE7] transition-colors flex items-center gap-1"
                      >
                        <span>Open Packages Directory Hub →</span>
                      </Link>
                      <span className="text-[11px] font-mono-num text-emerald-600 font-bold">
                        100% Transparent Fixed Rates
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-3 py-1.5 rounded-full text-xs font-display font-semibold text-[#303030] hover:text-[#161616] hover:bg-[#FAF7F6] transition-all"
            >
              About
            </Link>

            <Link
              href="/insights"
              className="px-3 py-1.5 rounded-full text-xs font-display font-semibold text-[#303030] hover:text-[#161616] hover:bg-[#FAF7F6] transition-all"
            >
              Insights
            </Link>

            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-full text-xs font-display font-semibold text-[#303030] hover:text-[#161616] hover:bg-[#FAF7F6] transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Phone link */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs font-mono-num text-[#161616] transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#9F8BE7]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* Estimate / Start Project Magnetic CTA */}
            <MagneticButton
              size="sm"
              variant="primary"
              onClick={() => openProjectModal()}
              className="hidden sm:inline-flex whitespace-nowrap shadow-[0_4px_15px_rgba(159,139,231,0.35)]"
            >
              Estimate Project
            </MagneticButton>

            {/* Mobile / Global Menu Trigger */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              className="w-10 h-10 rounded-full bg-white border border-[#E0DDDB] flex items-center justify-center text-[#161616] hover:border-[#9F8BE7] hover:text-[#9F8BE7] transition-all shadow-xs cursor-pointer group"
            >
              <Menu className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
