"use client";

import React from "react";
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import MagneticButton from "../common/MagneticButton";

export default function HeroInteractiveCTA() {
  const { openProjectModal } = useScroll();

  return (
    <MagneticButton
      size="lg"
      variant="primary"
      showArrow
      onClick={() => openProjectModal()}
      className="w-full sm:w-auto min-h-[48px] justify-center shadow-[0_4px_20px_rgba(159,139,231,0.4)]"
    >
      Start Your Project
    </MagneticButton>
  );
}
