import { redirect, RedirectType } from "next/navigation";

export default function DigitalMarketingServicesAgencyRedirect() {
  redirect("/services/digital-marketing", RedirectType.replace);
}
