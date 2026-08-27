import { redirect, RedirectType } from "next/navigation";

export default function BestWebsiteDevelopmentAgencyRedirect() {
  redirect("/services/web-design-development", RedirectType.replace);
}
