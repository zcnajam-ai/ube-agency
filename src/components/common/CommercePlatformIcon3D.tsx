"use client";

import React, { useState } from "react";
import {
  Shopify3DIcon,
  Amazon3DIcon,
  Etsy3DIcon,
  EBay3DIcon,
} from "./Brand3DIcons";

export type CommercePlatformType = "shopify" | "amazon" | "etsy" | "ebay";

interface CommercePlatformIcon3DProps {
  platform: CommercePlatformType;
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
  showLabel?: boolean;
  className?: string;
}

const PLATFORM_CONFIG: Record<
  CommercePlatformType,
  {
    name: string;
    bgColor: string;
    borderColor: string;
    glowColor: string;
    icon: (size: number) => React.ReactNode;
  }
> = {
  shopify: {
    name: "Shopify",
    bgColor: "bg-gradient-to-br from-emerald-50 via-white to-lime-50/50",
    borderColor: "border-emerald-200/80 hover:border-emerald-400",
    glowColor: "shadow-[0_10px_30px_rgba(149,191,71,0.22)]",
    icon: (s) => <Shopify3DIcon size={s} className="aria-hidden:true" />,
  },
  amazon: {
    name: "Amazon",
    bgColor: "bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950/40",
    borderColor: "border-amber-500/30 hover:border-amber-400",
    glowColor: "shadow-[0_10px_30px_rgba(255,153,0,0.25)]",
    icon: (s) => <Amazon3DIcon size={s} className="aria-hidden:true" />,
  },
  etsy: {
    name: "Etsy",
    bgColor: "bg-gradient-to-br from-orange-50 via-white to-amber-50/50",
    borderColor: "border-orange-200/80 hover:border-orange-400",
    glowColor: "shadow-[0_10px_30px_rgba(241,100,30,0.22)]",
    icon: (s) => <Etsy3DIcon size={s} className="aria-hidden:true" />,
  },
  ebay: {
    name: "eBay",
    bgColor: "bg-gradient-to-br from-blue-50 via-white to-slate-50",
    borderColor: "border-blue-200/80 hover:border-blue-400",
    glowColor: "shadow-[0_10px_30px_rgba(0,100,210,0.18)]",
    icon: (s) => <EBay3DIcon size={s} className="aria-hidden:true" />,
  },
};

const SIZE_MAP = {
  sm: { container: "w-11 h-11 rounded-xl p-2", iconSize: 24, text: "text-xs" },
  md: { container: "w-14 h-14 rounded-2xl p-2.5", iconSize: 32, text: "text-xs" },
  lg: { container: "w-20 h-20 rounded-3xl p-3.5", iconSize: 44, text: "text-sm" },
  xl: { container: "w-28 h-28 rounded-3xl p-5", iconSize: 64, text: "text-base" },
};

export default function CommercePlatformIcon3D({
  platform,
  size = "md",
  label,
  showLabel = false,
  className = "",
}: CommercePlatformIcon3DProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const config = PLATFORM_CONFIG[platform] || PLATFORM_CONFIG.shopify;
  const sizeConfig = SIZE_MAP[size] || SIZE_MAP.md;
  const platformLabel = label || config.name;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Limit tilt to 4-5 degrees
    const rotateY = (x / (rect.width / 2)) * 5;
    const rotateX = -(y / (rect.height / 2)) * 5;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
      {/* 3D Tile Container */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "600px",
          transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 300ms ease-out, shadow 300ms ease-out",
        }}
        className={`relative aspect-square flex items-center justify-center border ${sizeConfig.container} ${config.bgColor} ${config.borderColor} ${config.glowColor} group cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95`}
      >
        {/* Soft Ambient Light Glow & Specular Overlay */}
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-tr from-transparent via-white/40 to-white/70 opacity-60 pointer-events-none group-hover:opacity-90 transition-opacity" />
        
        {/* Authentic Brand SVG Icon */}
        <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {config.icon(sizeConfig.iconSize)}
        </div>

        {/* Accessible Hidden Text for Screen Readers */}
        <span className="sr-only">{platformLabel} Platform Integration</span>
      </div>

      {/* Visible Platform Label */}
      {showLabel && (
        <span className={`font-display font-bold text-[#161616] ${sizeConfig.text} text-center`}>
          {platformLabel}
        </span>
      )}
    </div>
  );
}
