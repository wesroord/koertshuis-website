import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Koertshuis Elektrotechniek in De Lutte. Bel 0541 55 1500, stuur een e-mail of bezoek ons op Dorpstraat 34. Voor storingen 24/7 bereikbaar.",
  openGraph: {
    title: "Contact | Koertshuis Elektrotechniek",
    description: "Neem contact op met Koertshuis Elektrotechniek. Bel 0541 55 1500 of bezoek ons in De Lutte.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
