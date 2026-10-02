import { COMPANY_INFO } from "@/data/company";

export const SOCIAL_PROFILES = [
  { name: "Facebook", href: COMPANY_INFO.socials.facebook, icon: "facebook" },
  { name: "Instagram", href: COMPANY_INFO.socials.instagram, icon: "instagram" },
  { name: "LinkedIn", href: COMPANY_INFO.socials.linkedin, icon: "linkedin" },
  { name: "Pinterest", href: COMPANY_INFO.socials.pinterest, icon: "pinterest" },
  { name: "X", href: COMPANY_INFO.socials.x, icon: "x" },
  { name: "GitHub", href: COMPANY_INFO.socials.github, icon: "github" },
  { name: "Crunchbase", href: COMPANY_INFO.ratings.crunchbase.url, icon: "crunchbase" },
  { name: "Clutch", href: COMPANY_INFO.socials.clutch, icon: "clutch" },
] as const;
