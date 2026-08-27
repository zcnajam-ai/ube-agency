import { redirect, RedirectType } from "next/navigation";

export default function CustomWebDevelopmentRedirect() {
  redirect("/services/web-design-development", RedirectType.replace);
}
