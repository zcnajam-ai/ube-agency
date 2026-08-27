import { redirect, RedirectType } from "next/navigation";

export default function ProfessionalContentWritingServicesRedirect() {
  redirect("/services", RedirectType.replace);
}
