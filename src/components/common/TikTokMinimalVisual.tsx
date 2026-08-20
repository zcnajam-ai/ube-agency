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
      className={`relative w-full aspect-[4/3] rounded-3xl bg-[#161616] border border-[#333333] shadow-2xl p-5 sm:p-7 flex flex-col justify-between overflow-hidden text-white select-none group ${className}`}
    >
      {/* Subtle Ambient Radial Gradients (TikTok Cyan & Magenta Glow) */}
      <div className="absolute -top-16 -left-16 w-52 h-52 rounded-full bg-[#25F4EE]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full bg-[#FE2C55]/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#FAF7F6_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      {/* 1. Top Bar: Official TikTok Badge & Live Feed Status */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#222222]/90 border border-[#3A3A3A] backdrop-blur-md">
          <div className="w-5 h-5 flex items-center justify-center">
            <TikTok3DIcon size={18} />
          </div>
          <span className="text-xs font-display font-bold tracking-tight text-white">
            TikTok Commerce &amp; Ads
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#25F4EE]/10 border border-[#25F4EE]/30 text-[10px] font-mono-num font-bold text-[#25F4EE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25F4EE] animate-pulse" />
            LIVE CAMPAIGN
          </span>
        </div>
      </div>

      {/* 2. Center: Audio Waveform & Short-Form Video Viewport */}
      <div className="relative z-10 my-auto py-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FE2C55] to-[#25F4EE] p-0.5 shadow-lg flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#161616] flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-white ml-0.5 fill-white" />
              </div>
            </div>
            <div>
              <div className="text-xs font-display font-bold text-white flex items-center gap-1.5">
                Viral Short-Form Video
                <Sparkles className="w-3 h-3 text-[#25F4EE]" />
              </div>
              <div className="text-[10px] text-[#A0A0A0] font-mono-num flex items-center gap-1">
                <Volume2 className="w-2.5 h-2.5 text-[#FE2C55]" />
                Original Audio • Trending Sound
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#A0A0A0] font-mono-num">
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-[#FE2C55] fill-[#FE2C55]" />
              38.4K
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              1.2K
            </span>
            <span className="flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5 text-[#25F4EE]" />
              4.6K
            </span>
          </div>
        </div>

        {/* Dynamic Engagement Trend Bar */}
        <div className="p-3.5 rounded-2xl bg-[#222222]/80 border border-[#333333] backdrop-blur-md space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono-num">
            <span className="text-[#A0A0A0]">Performance Trajectory</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              High Engagement Rate
            </span>
          </div>

          {/* Minimal Vector Wave Graph */}
          <div className="h-10 w-full flex items-end gap-1 px-1">
            {[24, 38, 30, 45, 60, 52, 75, 68, 88, 95, 82, 100].map((val, idx) => (
              <div
                key={idx}
                style={{ height: `${val}%` }}
                className={`flex-1 rounded-t-sm transition-all duration-500 ${
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
      <div className="relative z-10 flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-6 h-6 rounded-lg bg-[#FE2C55] flex items-center justify-center text-white shrink-0">
            <ShoppingBag className="w-3.5 h-3.5" />
          </div>
          <span className="font-display font-medium text-white truncate max-w-[200px] sm:max-w-[240px]">
            TikTok Shop Integrated Product Anchor
          </span>
        </div>

        <span className="text-[10px] font-mono-num font-bold text-[#25F4EE] px-2 py-0.5 rounded bg-[#25F4EE]/10 border border-[#25F4EE]/30">
          In-Feed Shop
        </span>
      </div>
    </div>
  );
}
