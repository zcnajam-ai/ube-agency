import { redirect, RedirectType } from "next/navigation";

export default function BestLogoDesignAgencyRedirect() {
  redirect("/services/branding", RedirectType.replace);
}
