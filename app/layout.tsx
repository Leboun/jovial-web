import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jovial — Découvre les bars et événements près de toi",
  description: "Jovial te connecte aux meilleurs bars, concerts et événements autour de toi. Télécharge l'app gratuitement.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Jovial — Découvre les bars et événements près de toi",
    description: "Jovial te connecte aux meilleurs bars, concerts et événements autour de toi.",
    url: "https://getjovial.fr",
    siteName: "Jovial",
    locale: "fr_FR",
    type: "website",
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
