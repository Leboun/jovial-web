"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL, DOWNLOAD_HREF } from "@/lib/appLinks";
import { publicSelect } from "@/lib/supabasePublic";

type VenuePreview = { name: string | null; city: string | null; cover_url: string | null; logo_url: string | null };

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
  // Clé secrète du QR (anti-triche, …/v/<id>?k=<clé>) : transmise telle quelle à l'appli.
  // Lue côté navigateur (pas de useSearchParams → pas de Suspense nécessaire).
  const [key, setKey] = useState<string | null>(null);
  useEffect(() => {
    const k = new URLSearchParams(window.location.search).get("k");
    setKey(k && /^[A-Za-z0-9]{4,40}$/.test(k) ? k : null);
  }, []);
  const deepLink = valid ? `jovial://v/${venueId}${key ? `?k=${key}` : ""}` : null;

  // Nom + photo du lieu (lecture publique : lieux approuvés et actifs uniquement).
  const [venue, setVenue] = useState<VenuePreview | null>(null);
  useEffect(() => {
    if (!valid) return;
    publicSelect<VenuePreview>("venues", `id=eq.${venueId}&select=name,city,cover_url,logo_url&limit=1`)
      .then((rows) => setVenue(rows?.[0] ?? null));
  }, [valid, venueId]);

  useEffect(() => {
    if (!deepLink) return;
    // On attend d'avoir lu la clé (si elle est dans l'adresse) avant d'ouvrir l'appli.
    if (/[?&]k=/.test(window.location.search) && !key) return;
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
      {venue?.cover_url || venue?.logo_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={(venue.cover_url || venue.logo_url) as string}
          alt={venue.name ?? "Le lieu"}
          style={{ width: "100%", maxWidth: 340, height: 170, objectFit: "cover", borderRadius: 18, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
        />
      ) : (
        <div style={{ fontSize: 60 }}>🐙</div>
      )}
      <h1 style={{ fontSize: 26, fontWeight: 700, margin: "6px 0 0" }}>
        {venue?.name ? `Tu es chez ${venue.name} !` : "Tu es dans un lieu Jovial !"}
      </h1>
      {venue?.city ? <p style={{ fontSize: 14, opacity: 0.75, margin: 0 }}>{venue.city}</p> : null}
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
      {/* Le passage par le store « oublie » le lieu : on le dit clairement. */}
      <p style={{ fontSize: 14, opacity: 0.9, maxWidth: 320, lineHeight: 1.5, margin: "0 0 8px", background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "10px 14px" }}>
        📲 Une fois l&apos;appli installée, <strong>scanne à nouveau ce QR code</strong> pour valider ta présence.
      </p>
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
