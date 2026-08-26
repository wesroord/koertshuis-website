import type { Metadata } from "next";
import ProjectenClient from "./ProjectenClient";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Bekijk een selectie van gerealiseerde projecten door Koertshuis Elektrotechniek: van complete installaties bij restaurants en winkels tot groepsaccommodaties in De Lutte en omgeving.",
  openGraph: {
    title: "Projecten | Koertshuis Elektrotechniek",
    description: "Gerealiseerde elektrotechnische projecten: complete installaties, LED-verlichting en meer in De Lutte en omgeving.",
  },
  alternates: { canonical: "/projecten" },
};

export default function ProjectenPage() {
  return <ProjectenClient />;
}
