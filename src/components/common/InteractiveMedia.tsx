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
  objectFit?: "cover" | "contain";
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
  objectFit = "cover",
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
        className={`${
          objectFit === "contain"
            ? "object-contain object-center p-1 sm:p-2"
            : "object-cover object-center"
        } transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
      />

      {badgeText && (
        <div className="absolute top-3 left-3 z-10 pointer-events-none hidden sm:block">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-[11px] font-mono-num text-[#161616] font-bold shadow-xs">
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
}
