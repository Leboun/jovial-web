import type { Metadata } from "next";
import { shareMetadata } from "@/lib/sharePreview";
import { JsonLd, venueJsonLd } from "@/lib/structuredData";

// Aperçu de partage (WhatsApp, Insta, Messenger…) généré côté serveur : audit nov. 2026.
export async function generateMetadata({ params }: { params: Promise<{ venueId: string }> }): Promise<Metadata> {
  const { venueId } = await params;
  return shareMetadata("venue", venueId);
}

// Données structurées Google (audit n°21).
export default async function ShareLayout({ children, params }: { children: React.ReactNode; params: Promise<{ venueId: string }> }) {
  const { venueId } = await params;
  const data = await venueJsonLd(venueId);
  return (
    <>
      <JsonLd data={data} />
      {children}
    </>
  );
}
