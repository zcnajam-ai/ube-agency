"use client";

import React from "react";

interface DimensionalServiceBadgeProps {
  pillarId: string;
  size?: "sm" | "md" | "lg";
}

export default function DimensionalServiceBadge({
  pillarId,
  size = "md",
}: DimensionalServiceBadgeProps) {
  const isCommerce = pillarId.includes("commerce");
  const isApps = pillarId.includes("experience") || pillarId.includes("apps");
  const isBrand = pillarId.includes("brand");

  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  }[size];

  if (isCommerce) {
    return (
      <div className={`${sizeClasses} relative rounded-2xl bg-gradient-to-br from-white to-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center shadow-sm overflow-hidden group-hover:scale-105 transition-transform`}>
        {/* Layered 3D Store/Payment Elements */}
        <div className="absolute inset-1.5 rounded-xl bg-gradient-to-tr from-[#9F8BE7]/20 to-transparent border border-[#9F8BE7]/30" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-6 h-4 rounded bg-[#161616] text-white flex items-center justify-center text-[8px] font-mono-num font-bold shadow-xs">
            PAY
          </div>
          <div className="w-4 h-1 bg-[#DDF160] rounded-full mt-1 animate-pulse" />
        </div>
      </div>
    );
  }

  if (isApps) {
    return (
      <div className={`${sizeClasses} relative rounded-2xl bg-gradient-to-br from-white to-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center shadow-sm overflow-hidden group-hover:scale-105 transition-transform`}>
        {/* Layered 3D Browser & Phone Panels */}
        <div className="absolute top-2 left-2 w-7 h-5 rounded-md bg-white border border-[#E0DDDB] shadow-xs flex items-center px-1">
          <div className="w-1 h-1 rounded-full bg-[#9F8BE7]" />
        </div>
        <div className="absolute bottom-2 right-2 w-5 h-8 rounded-md bg-[#161616] border border-white/20 shadow-xs flex flex-col items-center justify-between py-1">
          <div className="w-2 h-0.5 bg-white/40 rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#DDF160]" />
        </div>
      </div>
    );
  }

  if (isBrand) {
    return (
      <div className={`${sizeClasses} relative rounded-2xl bg-gradient-to-br from-white to-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center shadow-sm overflow-hidden group-hover:scale-105 transition-transform`}>
        {/* 3D Brand Monogram & Prism */}
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#9F8BE7] to-[#161616] flex items-center justify-center font-display font-black text-white text-xs shadow-xs transform rotate-6 group-hover:rotate-0 transition-transform">
          U
        </div>
      </div>
    );
  }

  // Growth & AISEO
  return (
    <div className={`${sizeClasses} relative rounded-2xl bg-gradient-to-br from-white to-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center shadow-sm overflow-hidden group-hover:scale-105 transition-transform`}>
      {/* 3D Neural Node Graph */}
      <div className="relative flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-[#9F8BE7] flex items-center justify-center shadow-xs">
          <div className="w-2 h-2 rounded-full bg-white animate-ping" />
        </div>
        <div className="absolute -top-2 -right-2 w-2.5 h-2.5 rounded-full bg-[#DDF160] border border-[#161616]" />
        <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-[#161616]" />
      </div>
    </div>
  );
}
