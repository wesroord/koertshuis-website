import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://koertshuis-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Koertshuis Elektrotechniek | De Lutte",
    template: "%s | Koertshuis Elektrotechniek",
  },
  description: "Uw specialist voor elektrotechniek, storingsdienst en elektrische apparatuur in De Lutte en omgeving. 24/7 bereikbaar op 0541 55 1500.",
  keywords: ["elektrotechniek", "elektricien", "De Lutte", "storingsdienst", "elektrische installatie", "NEN keuring", "LED verlichting", "domotica", "camerabeveiliging", "Koertshuis"],
  authors: [{ name: "Koertshuis Elektrotechniek B.V." }],
  creator: "Koertshuis Elektrotechniek B.V.",
  publisher: "Koertshuis Elektrotechniek B.V.",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "Koertshuis Elektrotechniek",
    title: "Koertshuis Elektrotechniek | De Lutte",
    description: "Uw specialist voor elektrotechniek, storingsdienst en elektrische apparatuur in De Lutte en omgeving. 24/7 bereikbaar op 0541 55 1500.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Koertshuis Elektrotechniek" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koertshuis Elektrotechniek | De Lutte",
    description: "Uw specialist voor elektrotechniek, storingsdienst en elektrische apparatuur in De Lutte en omgeving.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.png" },
  alternates: { canonical: SITE_URL },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Koertshuis Elektrotechniek B.V.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.gif`,
  image: `${SITE_URL}/elektrotechniek.png`,
  description: "Specialist voor elektrotechniek, storingsdienst en elektrische apparatuur in De Lutte en omgeving.",
  telephone: "+31541551500",
  email: "info@koertshuiselektro.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dorpstraat 34",
    addressLocality: "De Lutte",
    postalCode: "7587 AD",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3683,
    longitude: 7.0347,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, PIN",
  areaServed: ["De Lutte", "Losser", "Oldenzaal", "Enschede", "Overijssel"],
  hasMap: "https://maps.google.com/?q=Dorpstraat+34,+7587+AD+De+Lutte",
  sameAs: [
    "https://www.facebook.com/p/Koertshuis-winkel-100042616847871/",
    "https://www.instagram.com/koertshuis_de_lutte/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </head>
      <body style={{ display:"flex", flexDirection:"column", minHeight:"100vh" }}>
        <Navbar />
        <main style={{ flex:1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
