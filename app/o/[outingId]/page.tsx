"use client";

import { useParams } from "next/navigation";
import ShareRelay from "@/components/ShareRelay";

// Lien de partage d'une SORTIE DE CLUB : getjovial.fr/o/<id> → ouvre l'appli sur la sortie.
export default function OutingSharePage() {
  const params = useParams();
  const raw = params?.outingId;
  return <ShareRelay kind="outing" rawId={Array.isArray(raw) ? raw[0] : (raw as string | undefined)} />;
}
