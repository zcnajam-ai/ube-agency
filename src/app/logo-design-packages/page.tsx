import { redirect, RedirectType } from "next/navigation";

export default function LogoDesignPackagesRedirect() {
  redirect("/branding-packages", RedirectType.replace);
}
