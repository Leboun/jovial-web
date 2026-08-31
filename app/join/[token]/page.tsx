"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

// Page relais d'invitation de club : getjovial.fr/join/<token>
// Sur mobile → tente d'ouvrir l'app (schéma jovial://) qui résout le token et fait rejoindre.
// Sinon → bouton « Ouvrir dans l'app » + retour vers le site.
export default function JoinClubPage() {
  const params = useParams();
  const raw = params?.token;
  const token = Array.isArray(raw) ? raw[0] : (raw as string | undefined);
  const deepLink = token ? `jovial://groups/join?token=${encodeURIComponent(token)}` : null;

  useEffect(() => {
    if (!deepLink) return;
    const isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent);
    if (isMobile) {
      // Ouvre l'app tout de suite sur mobile ; si elle n'est pas installée, la page reste affichée.
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
      <div style={{ fontSize: 60, marginBottom: 4 }}>🐙</div>
      <h1 style={{ fontSize: 26, fontWeight: 700, margin: "10px 0 6px" }}>
        Rejoins ce club sur Jovial
      </h1>
      <p style={{ fontSize: 15, opacity: 0.88, maxWidth: 340, lineHeight: 1.55, margin: "0 0 26px" }}>
        Ouvre l&apos;application Jovial pour rejoindre le club et retrouver tes potes.
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
        <p style={{ opacity: 0.85 }}>Ce lien d&apos;invitation est invalide.</p>
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
