import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Koertshuis Elektrotechniek | De Lutte",
    template: "%s | Koertshuis Elektrotechniek",
  },
  description: "Uw specialist voor elektrotechniek, storingsdienst en elektrische apparatuur in De Lutte en omgeving. 24/7 bereikbaar op 0541 55 1500.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body style={{ display:"flex", flexDirection:"column", minHeight:"100vh" }}>
        <Navbar />
        <main style={{ flex:1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
