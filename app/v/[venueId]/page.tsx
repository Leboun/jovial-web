"use client";

import { useEffect, type CSSProperties } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL, DOWNLOAD_HREF } from "@/lib/appLinks";

// QR JOVIAL D'UN LIEU : getjovial.fr/v/<id> (imprimé par l'établissement, kit de
// communication Jovial Pro). Scanné avec l'appareil photo du téléphone :
//   • l'app est installée → on l'ouvre sur la validation de présence (jovial://v/<id>) ;
//   • sinon → la page reste affichée : boutons de téléchargement.
// Un seul QR sert donc à la fois au téléchargement ET à la validation de présence.
export default function VenueQrPage() {
  const params = useParams();
  const raw = params?.venueId;
  const venueId = Array.isArray(raw) ? raw[0] : (raw as string | undefined);
  const valid = !!venueId && /^\d{1,12}$/.test(venueId);
  const deepLink = valid ? `jovial://v/${venueId}` : null;

  useEffect(() => {
    if (!deepLink) return;
    const isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent);
    // Ouvre l'app tout de suite sur mobile ; si elle n'est pas installée, la page reste affichée.
    if (isMobile) window.location.href = deepLink;
  }, [deepLink]);

  const btn: CSSProperties = {
    display: "block",
    width: "100%",
    maxWidth: 320,
    fontWeight: 700,
    fontSize: 16,
    padding: "14px 24px",
    borderRadius: 14,
    textDecoration: "none",
    boxSizing: "border-box",
  };

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
        gap: 12,
      }}
    >
      <div style={{ fontSize: 60 }}>🐙</div>
      <h1 style={{ fontSize: 26, fontWeight: 700, margin: "6px 0 0" }}>Tu es dans un lieu Jovial !</h1>
      <p style={{ fontSize: 16, opacity: 0.9, maxWidth: 340, lineHeight: 1.55, margin: "0 0 14px" }}>
        Valide ta présence avec l&apos;appli Jovial et fais grimper ta collection de sorties.
      </p>

      {deepLink ? (
        <a href={deepLink} style={{ ...btn, background: "#fff", color: "#2B4E93" }}>
          J&apos;ai Jovial : valider ma présence
        </a>
      ) : (
        <p style={{ opacity: 0.85 }}>Ce QR code n&apos;est pas valide.</p>
      )}

      <p style={{ fontSize: 14, opacity: 0.8, margin: "18px 0 4px" }}>Pas encore l&apos;appli ?</p>
      {APP_STORE_URL ? (
        <a href={APP_STORE_URL} style={{ ...btn, background: "transparent", color: "#fff", border: "2px solid #fff" }}>
          Télécharger sur l&apos;App Store
        </a>
      ) : null}
      {PLAY_STORE_URL ? (
        <a href={PLAY_STORE_URL} style={{ ...btn, background: "transparent", color: "#fff", border: "2px solid #fff" }}>
          Télécharger sur Google Play
        </a>
      ) : (
        <Link href={DOWNLOAD_HREF} style={{ fontSize: 14, color: "#fff", textDecoration: "underline" }}>
          Android : bientôt disponible, inscris-toi pour être prévenu
        </Link>
      )}
    </main>
  );
}
