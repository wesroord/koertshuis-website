import type { Metadata } from "next";
import ProjectenClient from "./ProjectenClient";

export const metadata: Metadata = {
  title: "Projecten | Koertshuis Elektrotechniek",
  description: "Bekijk onze gerealiseerde projecten op het gebied van elektrotechnische installaties, verlichting en meer.",
};

export default function ProjectenPage() {
  return <ProjectenClient />;
}
