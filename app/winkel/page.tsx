import type { Metadata } from "next";
import WinkelClient from "./WinkelClient";

export const metadata: Metadata = {
  title: "Winkel",
  description: "Bezoek de winkel van Koertshuis Elektrotechniek in De Lutte. Ruime keuze in elektrische apparatuur, schakelmateriaal, verlichting, satelliet & TV en meer.",
  openGraph: {
    title: "Winkel | Koertshuis Elektrotechniek",
    description: "Elektrische apparatuur, schakelmateriaal, verlichting en meer. Bezoek onze winkel in De Lutte.",
  },
};

export default function WinkelPage() {
  return <WinkelClient />;
}
