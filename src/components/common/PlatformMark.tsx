import Image from "next/image";
import { GoogleOfficialIcon } from "./OfficialBrandLogos";

export type PlatformName = "shopify" | "amazon" | "etsy" | "ebay" | "tiktok" | "facebook" | "instagram" | "google" | "googleads" | "walmart";

const platforms: Record<PlatformName, { name: string; source: string }> = {
  shopify: { name: "Shopify", source: "/images/platform-marks/shopify.svg" },
  amazon: { name: "Amazon", source: "/images/platform-marks/amazon.svg" },
  etsy: { name: "Etsy", source: "/images/platform-marks/etsy.svg" },
  ebay: { name: "eBay", source: "/images/platform-marks/ebay.svg" },
  tiktok: { name: "TikTok", source: "/images/platform-marks/tiktok.svg" },
  facebook: { name: "Facebook", source: "/images/platform-marks/facebook.svg" },
  instagram: { name: "Instagram", source: "/images/platform-marks/instagram.svg" },
  google: { name: "Google", source: "/images/platform-marks/google.svg" },
  googleads: { name: "Google Ads", source: "/images/platform-marks/googleads.svg" },
  walmart: { name: "Walmart", source: "https://commons.wikimedia.org/wiki/Special:FilePath/Walmart_spark_(2025).svg" },
};

export function PlatformMark({ platform, size = 40, decorative = false, className = "" }: { platform: PlatformName; size?: number; decorative?: boolean; className?: string }) {
  const { name, source } = platforms[platform];
  if (platform === "google") {
    return <span className={`inline-flex shrink-0 items-center justify-center ${className}`} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : "Google logo"} aria-hidden={decorative || undefined}><GoogleOfficialIcon size={size} /></span>;
  }
  return <Image src={source} alt={decorative ? "" : `${name} logo`} width={size} height={size} unoptimized className={`shrink-0 object-contain ${className}`} />;
}

export function PlatformBadgeRow({ platforms: names, className = "" }: { platforms: readonly PlatformName[]; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`} aria-label="Platforms discussed">
      {names.map((name) => (
        <span key={name} className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-[#E0DDDB] bg-white px-3 py-2 text-xs font-display font-bold text-[#161616] shadow-sm transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none">
          <PlatformMark platform={name} size={25} decorative />
          <span>{platforms[name].name}</span>
        </span>
      ))}
    </div>
  );
}
