"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { trackChatbotOpen } from "@/lib/analytics";

interface ConciergeTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ConciergeTrigger({ isOpen, onToggle }: ConciergeTriggerProps) {
  if (isOpen) return null;

  const handleClick = () => {
    trackChatbotOpen();
    onToggle();
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Open UBE Project Concierge"
      aria-expanded={isOpen}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9998] flex items-center gap-2 sm:gap-2.5 px-3.5 py-2.5 sm:px-5 sm:py-3.5 rounded-full bg-[#161616] hover:bg-black text-white border border-[#333] shadow-2xl hover:shadow-[0_0_25px_rgba(159,139,231,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 select-none group cursor-pointer"
    >
      {/* 3D-styled Sparkle Badge with Ambient Pulse */}
      <div className="relative w-6 h-6 rounded-full bg-[#242424] text-[#9F8BE7] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
        <Sparkles className="w-3.5 h-3.5 text-[#9F8BE7] group-hover:scale-110 transition-transform" />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#161616] animate-pulse" />
      </div>

      {/* Label Text */}
      <div className="flex flex-col items-start text-left">
        <span className="font-display text-xs sm:text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
          Ask UBE
          <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] font-mono-num font-bold bg-[#FAF7F6]/10 text-[#9F8BE7] border border-[#9F8BE7]/30">
            Guide
          </span>
        </span>
        <span className="text-[10px] text-[#A0A0A0] font-mono-num hidden sm:block">
          Project Concierge
        </span>
      </div>
    </button>
  );
}
