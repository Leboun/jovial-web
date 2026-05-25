import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jovial — Découvre les bars et événements près de toi",
  description: "Jovial te connecte aux meilleurs bars, concerts, activités et événements autour de toi. Carte interactive, réservations, alertes — télécharge l'app gratuitement.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Jovial — Découvre les bars et événements près de toi",
    description: "Bars, concerts, fléchettes, comedy clubs… Tout ce qui se passe près de chez toi, en un coup d'œil. Télécharge Jovial gratuitement.",
    url: "https://getjovial.fr",
    siteName: "Jovial",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://getjovial.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jovial — Bars, concerts, activités près de toi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jovial — Découvre les bars et événements près de toi",
    description: "Bars, concerts, fléchettes, comedy clubs… Tout ce qui se passe près de chez toi.",
    images: ["https://getjovial.fr/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
