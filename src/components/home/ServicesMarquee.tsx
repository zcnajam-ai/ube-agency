"use client";

import React from "react";

export default function ServicesMarquee() {
  const marqueeItems = [
    "eCommerce Stores",
    "•",
    "Shopify Plus",
    "•",
    "Next.js App Router",
    "•",
    "Brand Strategy & Logo",
    "•",
    "AISEO & GEO Graphs",
    "•",
    "Google & Meta Ads",
    "•",
    "Mobile Applications",
    "•",
    "Headless Commerce",
    "•",
    "Conversion Optimization",
    "•",
  ];

  return (
    <section className="relative py-6 sm:py-8 bg-[#FAF7F6] border-b border-[#E0DDDB] overflow-hidden select-none">
      {/* Top Track (Moving Left) */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span
              key={idx}
              className={`font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight ${
                item === "•"
                  ? "text-[#9F8BE7]"
                  : idx % 4 === 0
                  ? "text-[#161616]"
                  : idx % 4 === 2
                  ? "text-[#9F8BE7]"
                  : "text-[#585858]"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
