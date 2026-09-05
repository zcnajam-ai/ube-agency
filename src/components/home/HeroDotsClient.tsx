"use client";

import React from "react";
import dynamic from "next/dynamic";

const FloatingDotsBackground = dynamic(
  () => import("../common/FloatingDotsBackground"),
  { ssr: false }
);

export default function HeroDotsClient() {
  return <FloatingDotsBackground />;
}
