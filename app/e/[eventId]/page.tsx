"use client";

import { useParams } from "next/navigation";
import ShareRelay from "@/components/ShareRelay";

// Lien de partage depuis l'appli : getjovial.fr/e/<id> → ouvre l'appli au bon endroit.
export default function SharePage() {
  const params = useParams();
  const raw = params?.eventId;
  return <ShareRelay kind="event" rawId={Array.isArray(raw) ? raw[0] : (raw as string | undefined)} />;
}
