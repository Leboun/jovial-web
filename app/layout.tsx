import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd, organizationJsonLd } from "@/lib/structuredData";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getjovial.fr"),
  // Pas de canonical global (audit nov. 2026) : il faisait pointer TOUTES les pages vers
  // l'accueil. Chaque page est sa propre URL officielle ; les liens de partage ont le leur.
  title: "Jovial — Découvre les sorties, activités et événements près de toi",
  description: "Jovial te connecte aux meilleurs lieux, activités et événements autour de toi — bars, cafés, concerts, tournois et bien plus. Carte interactive, réservations, alertes — télécharge l'app gratuitement.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Jovial — Découvre les sorties, activités et événements près de toi",
    description: "Bars, cafés, concerts, activités, tournois… Tout ce qu'il y a à faire près de chez toi, en un coup d'œil. Télécharge Jovial gratuitement.",
    url: "https://www.getjovial.fr",
    siteName: "Jovial",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jovial — Découvre les sorties, activités et événements près de toi",
    description: "Bars, cafés, concerts, activités, tournois… Tout ce qu'il y a à faire près de chez toi.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={organizationJsonLd} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
