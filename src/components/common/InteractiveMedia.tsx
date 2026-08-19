"use client";

import React from "react";
import Image from "next/image";

interface InteractiveMediaProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  badgeText?: string;
  enableTilt?: boolean;
  enableParallax?: boolean;
  enableReveal?: boolean;
  revealType?: string;
}

export default function InteractiveMedia({
  src,
  alt,
  aspectRatio = "aspect-[16/10]",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  badgeText,
}: InteractiveMediaProps) {
  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl sm:rounded-3xl bg-[#FAF7F6] group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {badgeText && (
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-[11px] font-mono-num text-[#161616] font-bold shadow-xs">
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
}
