"use client";

import React from "react";

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "vertical" | "horizontal";
  className?: string;
  rotate?: number;
  scale?: number;
}

export default function ParallaxElement({
  children,
  className = "",
}: ParallaxElementProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
