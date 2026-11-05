"use client";

import { useParams } from "next/navigation";
import ShareRelay from "@/components/ShareRelay";

// Lien de partage depuis l'appli : getjovial.fr/l/<id> → ouvre l'appli au bon endroit.
export default function SharePage() {
  const params = useParams();
  const raw = params?.venueId;
  return <ShareRelay kind="venue" rawId={Array.isArray(raw) ? raw[0] : (raw as string | undefined)} />;
}
