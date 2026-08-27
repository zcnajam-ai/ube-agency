import { redirect, RedirectType } from "next/navigation";

export default function ProfessionalWebDesignServicesRedirect() {
  redirect("/services/web-design-development", RedirectType.replace);
}
