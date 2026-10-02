import type { Metadata } from "next";
import type { ReactNode } from "react";
import Hero from "@/components/home/Hero";
import GradientLab from "@/components/home/GradientLab";

export const metadata: Metadata = {
  title: "Gradient background concepts — preview",
  description: "Private visual comparison of three UBE background directions.",
  robots: { index: false, follow: false },
};

export default function GradientLabPage(): ReactNode {
  return (
    <GradientLab>
      <Hero gradientPreview />
    </GradientLab>
  );
}
