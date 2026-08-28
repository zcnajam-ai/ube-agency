import { redirect, RedirectType } from "next/navigation";

export default function OurDigitalMarketingPackagesRedirect() {
  redirect("/digital-marketing-packages", RedirectType.replace);
}
