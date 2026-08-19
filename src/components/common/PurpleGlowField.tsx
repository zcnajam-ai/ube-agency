"use client";

import React from "react";

interface PurpleGlowFieldProps {
  className?: string;
  size?: number;
  opacity?: number;
  parallaxSpeed?: number;
  position?: "top-left" | "top-right" | "center" | "bottom-left" | "bottom-right";
}

export default function PurpleGlowField({
  className = "",
  size = 700,
  opacity = 0.08,
  position = "center",
}: PurpleGlowFieldProps) {
  const positionStyles = {
    "top-left": "-top-32 -left-32",
    "top-right": "-top-32 -right-32",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bottom-left": "-bottom-32 -left-32",
    "bottom-right": "-bottom-32 -right-32",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none rounded-full blur-3xl ${positionStyles[position]} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, rgba(159, 139, 231, ${opacity}) 0%, rgba(159, 139, 231, 0) 70%)`,
        willChange: "auto",
      }}
    />
  );
}
