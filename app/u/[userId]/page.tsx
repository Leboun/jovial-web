"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

// Page relais de profil : getjovial.fr/u/<userId>
// Sur mobile → tente d'ouvrir l'app (schéma jovial://u/<id>) sur le profil de la personne
// (où l'on peut la suivre). Sinon → bouton « Ouvrir dans l'app » + « Découvre Jovial ».
export default function UserProfileRelayPage() {
  const params = useParams();
  const raw = params?.userId;
  const userId = Array.isArray(raw) ? raw[0] : (raw as string | undefined);
  const deepLink = userId ? `jovial://u/${encodeURIComponent(userId)}` : null;

  useEffect(() => {
    if (!deepLink) return;
    const isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent);
    if (isMobile) {
      // Ouvre l'app tout de suite sur mobile ; si elle n'est pas installée, la page reste.
      window.location.href = deepLink;
    }
  }, [deepLink]);

  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "#2B4E93",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div style={{ fontSize: 60, marginBottom: 4 }}>👋</div>
      <h1 style={{ fontSize: 26, fontWeight: 700, margin: "10px 0 6px" }}>
        Rejoins-moi sur Jovial
      </h1>
      <p style={{ fontSize: 15, opacity: 0.88, maxWidth: 340, lineHeight: 1.55, margin: "0 0 26px" }}>
        Ouvre l&apos;application Jovial pour m&apos;ajouter et découvrir les sorties près de toi.
      </p>

      {deepLink ? (
        <a
          href={deepLink}
          style={{
            background: "#fff",
            color: "#2B4E93",
            fontWeight: 700,
            fontSize: 16,
            padding: "14px 30px",
            borderRadius: 14,
            textDecoration: "none",
          }}
        >
          Ouvrir dans l&apos;app Jovial
        </a>
      ) : (
        <p style={{ opacity: 0.85 }}>Ce lien est invalide.</p>
      )}

      <p style={{ fontSize: 13, opacity: 0.72, marginTop: 30 }}>
        Tu n&apos;as pas encore l&apos;app ?{" "}
        <Link href="/" style={{ color: "#fff", textDecoration: "underline" }}>
          Découvre Jovial
        </Link>
      </p>
    </main>
  );
}
