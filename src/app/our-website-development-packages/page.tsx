import { redirect, RedirectType } from "next/navigation";

export default function OurWebsiteDevelopmentPackagesRedirect() {
  redirect("/packages", RedirectType.replace);
}
