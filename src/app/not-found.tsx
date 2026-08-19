import React from "react";
import Link from "next/link";
import { Home, Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <title>404: Page Not Found | Unified Branding Experts</title>
      </head>
      <div className="min-h-[75vh] flex items-center justify-center pt-32 pb-24 px-6 max-w-4xl mx-auto text-center space-y-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-[#E0DDDB] space-y-6 shadow-sm w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ERROR 404 — ROUTE NOT FOUND</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-[#161616]">
            Page Not Found.
          </h1>

          <p className="text-sm sm:text-base text-[#585858] max-w-md mx-auto font-body leading-relaxed">
            The page you are looking for may have moved, been renamed, or does not exist on this domain.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 font-display font-bold text-xs sm:text-sm">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-[#161616] text-white hover:bg-black transition-all flex items-center gap-2"
            >
              <Home className="w-4 h-4 text-[#9F8BE7]" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-[#161616] transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#9F8BE7]" />
              <span>Explore Services</span>
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
