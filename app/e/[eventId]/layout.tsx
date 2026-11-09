import type { Metadata } from "next";
import { shareMetadata } from "@/lib/sharePreview";
import { JsonLd, eventJsonLd } from "@/lib/structuredData";

// Aperçu de partage (WhatsApp, Insta, Messenger…) généré côté serveur : audit nov. 2026.
export async function generateMetadata({ params }: { params: Promise<{ eventId: string }> }): Promise<Metadata> {
  const { eventId } = await params;
  return shareMetadata("event", eventId);
}

// Données structurées Google (audit n°21).
export default async function ShareLayout({ children, params }: { children: React.ReactNode; params: Promise<{ eventId: string }> }) {
  const { eventId } = await params;
  const data = await eventJsonLd(eventId);
  return (
    <>
      <JsonLd data={data} />
      {children}
    </>
  );
}
