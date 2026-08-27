"use client";

import React from "react";
import {
  Play,
  TrendingUp,
  ShoppingBag,
  Sparkles,
  Volume2,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { TikTok3DIcon } from "./Brand3DIcons";

interface TikTokMinimalVisualProps {
  className?: string;
}

export default function TikTokMinimalVisual({ className = "" }: TikTokMinimalVisualProps) {
  return (
    <div
      className={`relative w-full aspect-[4/5] xs:aspect-[1/1] sm:aspect-[4/3] max-h-[440px] sm:max-h-none rounded-3xl bg-[#161616] border border-[#333333] shadow-2xl p-4 sm:p-7 flex flex-col justify-between overflow-hidden text-white select-none group ${className}`}
    >
      {/* Subtle Ambient Radial Gradients (TikTok Cyan & Magenta Glow) */}
      <div className="absolute -top-16 -left-16 w-52 h-52 rounded-full bg-[#25F4EE]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full bg-[#FE2C55]/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#FAF7F6_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      {/* 1. Top Bar: Official TikTok Badge & Live Feed Status */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#222222]/90 border border-[#3A3A3A] backdrop-blur-md min-w-0">
          <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shrink-0">
            <TikTok3DIcon size={16} />
          </div>
          <span className="text-[11px] sm:text-xs font-display font-bold tracking-tight text-white whitespace-nowrap truncate">
            TikTok Commerce &amp; Ads
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#25F4EE]/10 border border-[#25F4EE]/30 text-[9px] sm:text-[10px] font-mono-num font-bold text-[#25F4EE] whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25F4EE] animate-pulse shrink-0" />
            LIVE CAMPAIGN
          </span>
        </div>
      </div>

      {/* 2. Center: Audio Waveform & Short-Form Video Viewport */}
      <div className="relative z-10 my-auto py-2 space-y-2.5 sm:space-y-3">
        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#FE2C55] to-[#25F4EE] p-0.5 shadow-lg flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-[#161616] flex items-center justify-center">
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white ml-0.5 fill-white" />
              </div>
            </div>
            <div className="min-w-0">
              <div className="text-[11px] sm:text-xs font-display font-bold text-white flex items-center gap-1.5 whitespace-nowrap truncate">
                <span>Viral Short-Form Video</span>
                <Sparkles className="w-3 h-3 text-[#25F4EE] shrink-0" />
              </div>
              <div className="text-[9px] sm:text-[10px] text-[#A0A0A0] font-mono-num flex items-center gap-1 whitespace-nowrap truncate">
                <Volume2 className="w-2.5 h-2.5 text-[#FE2C55] shrink-0" />
                <span>Original Audio • Trending Sound</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-xs text-[#A0A0A0] font-mono-num whitespace-nowrap shrink-0">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FE2C55] fill-[#FE2C55] shrink-0" />
              38.4K
            </span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" />
              1.2K
            </span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <Share2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#25F4EE] shrink-0" />
              4.6K
            </span>
          </div>
        </div>

        {/* Dynamic Engagement Trend Bar */}
        <div className="p-2.5 sm:p-3.5 rounded-2xl bg-[#222222]/80 border border-[#333333] backdrop-blur-md space-y-2">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono-num gap-1">
            <span className="text-[#A0A0A0] whitespace-nowrap">Performance Trajectory</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1 whitespace-nowrap">
              <TrendingUp className="w-3 h-3 shrink-0" />
              High Engagement Rate
            </span>
          </div>

          {/* Minimal Vector Wave Graph */}
          <div className="h-8 sm:h-10 w-full flex items-end gap-1 px-0.5 sm:px-1">
            {[24, 38, 30, 45, 60, 52, 75, 68, 88, 95, 82, 100].map((val, idx) => (
              <div
                key={idx}
                style={{ height: `${val}%` }}
                className={`flex-1 rounded-t-xs transition-all duration-500 ${
                  idx >= 8
                    ? "bg-gradient-to-t from-[#FE2C55] to-[#25F4EE]"
                    : "bg-[#404040] group-hover:bg-[#555555]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bottom Pill: Shoppable Product Overlay */}
      <div className="relative z-10 flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md min-w-0">
        <div className="flex items-center gap-2 text-xs min-w-0 flex-1">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#FE2C55] flex items-center justify-center text-white shrink-0">
            <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <span className="font-display font-medium text-[11px] sm:text-xs text-white truncate min-w-0">
            TikTok Shop Integrated Product Anchor
          </span>
        </div>

        <span className="text-[9px] sm:text-[10px] font-mono-num font-bold text-[#25F4EE] px-2 py-0.5 rounded bg-[#25F4EE]/10 border border-[#25F4EE]/30 whitespace-nowrap shrink-0">
          In-Feed Shop
        </span>
      </div>
    </div>
  );
}
