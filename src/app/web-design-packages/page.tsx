import { redirect, RedirectType } from "next/navigation";

export default function WebDesignPackagesRedirect() {
  redirect("/packages", RedirectType.replace);
}
