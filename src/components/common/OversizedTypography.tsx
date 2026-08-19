"use client";

import React from "react";

interface OversizedTypographyProps {
  text: string;
  direction?: "left" | "right";
  className?: string;
  strokeOnly?: boolean;
}

export default function OversizedTypography({
  text,
  className = "",
  strokeOnly = true,
}: OversizedTypographyProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute w-full overflow-hidden select-none z-0 ${className}`}
    >
      <div
        className={`font-display font-black text-[12vw] sm:text-[14vw] tracking-tighter whitespace-nowrap uppercase leading-none opacity-[0.035] ${
          strokeOnly ? "text-transparent stroke-text" : "text-[#161616]"
        }`}
        style={{
          WebkitTextStroke: strokeOnly ? "1.5px #161616" : "none",
        }}
      >
        {text}
      </div>
    </div>
  );
}
