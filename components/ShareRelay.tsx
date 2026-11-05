"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL, DOWNLOAD_HREF } from "@/lib/appLinks";
import { publicSelect } from "@/lib/supabasePublic";

// PAGE RELAIS D'UN PARTAGE (audit nov. 2026) : getjovial.fr/e/<id> (événement),
// /l/<id> (lieu), /c/<id> (club). Avant, partager depuis l'appli envoyait un texte sans
// lien, ou un lien vers le téléchargement : l'ami ne retrouvait jamais l'événement.
//   • Sur téléphone avec l'appli → elle s'ouvre directement au bon endroit (jovial://…).
//   • Sinon → aperçu (photo, titre, date, lieu) + boutons de téléchargement.

export type ShareKind = "event" | "venue" | "club";

type Preview = { title: string; subtitle: string | null; image: string | null };

const DEEP_PATH: Record<ShareKind, string> = { event: "event", venue: "venue", club: "groups" };
const LABEL: Record<ShareKind, { open: string; invalid: string; emoji: string; pitch: string }> = {
  event: { open: "Voir l'événement dans Jovial", invalid: "Cet événement n'existe plus.", emoji: "🎉", pitch: "On t'a partagé un événement. Ouvre-le dans Jovial pour voir qui y va et réserver ta place." },
  venue: { open: "Voir le lieu dans Jovial", invalid: "Ce lieu n'est plus disponible.", emoji: "📍", pitch: "On t'a partagé un lieu. Découvre ses activités, ses événements et ses bons plans dans Jovial." },
  club: { open: "Voir le club dans Jovial", invalid: "Ce club n'est pas public ou n'existe plus.", emoji: "🤝", pitch: "On t'invite à découvrir ce club. Rejoins-le dans Jovial pour ne rater aucune sortie." },
};

function formatDate(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" });
}

async function loadPreview(kind: ShareKind, id: string): Promise<Preview | null> {
  if (kind === "event") {
    const rows = await publicSelect<{ title: string | null; starts_at: string | null; cover_url: string | null; venues: { name: string | null; city: string | null } | null }>(
      "events",
      `id=eq.${id}&select=title,starts_at,cover_url,venues(name,city)&limit=1`,
    );
    const r = rows?.[0];
    if (!r) return null;
    const where = [r.venues?.name, r.venues?.city].filter(Boolean).join(" · ");
    return { title: r.title ?? "Un événement", subtitle: [formatDate(r.starts_at), where].filter(Boolean).join(" — ") || null, image: r.cover_url };
  }
  if (kind === "venue") {
    const rows = await publicSelect<{ name: string | null; city: string | null; cover_url: string | null; logo_url: string | null }>(
      "venues",
      `id=eq.${id}&select=name,city,cover_url,logo_url&limit=1`,
    );
    const r = rows?.[0];
    if (!r) return null;
    return { title: r.name ?? "Un lieu", subtitle: r.city, image: r.cover_url || r.logo_url };
  }
  const rows = await publicSelect<{ name: string | null; description: string | null; cover_image_url: string | null; avatar_image_url: string | null }>(
    "community_groups",
    `id=eq.${id}&select=name,description,cover_image_url,avatar_image_url&limit=1`,
  );
  const r = rows?.[0];
  if (!r) return null;
  return { title: r.name ?? "Un club", subtitle: r.description ? r.description.slice(0, 120) : null, image: r.cover_image_url || r.avatar_image_url };
}

export default function ShareRelay({ kind, rawId }: { kind: ShareKind; rawId: string | undefined }) {
  const valid = !!rawId && /^\d{1,12}$/.test(rawId);
  const deepLink = valid ? `jovial://${DEEP_PATH[kind]}/${rawId}` : null;
  const txt = LABEL[kind];

  const [preview, setPreview] = useState<Preview | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!valid || !rawId) { setLoaded(true); return; }
    loadPreview(kind, rawId).then((p) => { setPreview(p); setLoaded(true); });
  }, [kind, rawId, valid]);

  useEffect(() => {
    if (!deepLink) return;
    const isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent);
    // Sur mobile on tente d'ouvrir l'appli ; si elle n'est pas installée, la page reste affichée.
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

  const gone = loaded && valid && !preview;

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
        padding: "24px 16px",
        gap: 12,
      }}
    >
      {preview?.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview.image}
          alt={preview.title}
          style={{ width: "100%", maxWidth: 340, height: 180, objectFit: "cover", borderRadius: 18, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
        />
      ) : (
        <div style={{ fontSize: 60 }}>{txt.emoji}</div>
      )}

      {!valid || gone ? (
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: "6px 0 0", maxWidth: 340 }}>{txt.invalid}</h1>
      ) : (
        <>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: "6px 0 0", maxWidth: 340, lineHeight: 1.2 }}>
            {preview?.title ?? " "}
          </h1>
          {preview?.subtitle ? (
            <p style={{ fontSize: 14, opacity: 0.8, margin: 0, maxWidth: 340, lineHeight: 1.45, textTransform: "none" }}>{preview.subtitle}</p>
          ) : null}
          <p style={{ fontSize: 15, opacity: 0.9, maxWidth: 340, lineHeight: 1.55, margin: "6px 0 14px" }}>{txt.pitch}</p>
          {deepLink ? (
            <a href={deepLink} style={{ ...btn, background: "#fff", color: "#2B4E93" }}>
              {txt.open}
            </a>
          ) : null}
        </>
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
