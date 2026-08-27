import { redirect, RedirectType } from "next/navigation";

export default function DigitalMarketingServicesAgencyRedirect() {
  redirect("/services/meta-ads", RedirectType.replace);
}
