import { redirect } from "next/navigation";

export default function RedirectToIntro() {
  return redirect("/intro");
}
