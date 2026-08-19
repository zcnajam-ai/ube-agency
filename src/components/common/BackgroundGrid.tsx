"use client";

import React from "react";

interface BackgroundGridProps {
  className?: string;
  size?: number;
  opacity?: number;
  maskRadial?: boolean;
}

export default function BackgroundGrid({
  className = "",
  size = 64,
  opacity = 0.04,
  maskRadial = true,
}: BackgroundGridProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 select-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(22, 22, 22, ${opacity}) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(22, 22, 22, ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        maskImage: maskRadial
          ? "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)"
          : undefined,
        WebkitMaskImage: maskRadial
          ? "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)"
          : undefined,
      }}
    />
  );
}
