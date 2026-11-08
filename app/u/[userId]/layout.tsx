import type { Metadata } from "next";
import { shareMetadata } from "@/lib/sharePreview";

// Aperçu de partage (WhatsApp, Insta, Messenger…) généré côté serveur : audit nov. 2026.
export async function generateMetadata({ params }: { params: Promise<{ userId: string }> }): Promise<Metadata> {
  const { userId } = await params;
  return shareMetadata("user", userId);
}

export default function ShareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
