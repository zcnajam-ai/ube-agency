import { redirect, RedirectType } from "next/navigation";

export default function OurContentWritingPackagesRedirect() {
  redirect("/packages", RedirectType.replace);
}
