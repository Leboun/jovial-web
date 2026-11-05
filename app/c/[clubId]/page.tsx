"use client";

import { useParams } from "next/navigation";
import ShareRelay from "@/components/ShareRelay";

// Lien de partage depuis l'appli : getjovial.fr/c/<id> → ouvre l'appli au bon endroit.
export default function SharePage() {
  const params = useParams();
  const raw = params?.clubId;
  return <ShareRelay kind="club" rawId={Array.isArray(raw) ? raw[0] : (raw as string | undefined)} />;
}
