import type { Metadata } from "next";
import { SUPABASE_ANON_KEY, SUPABASE_URL, publicSelect } from "@/lib/supabasePublic";

// APERÇUS DE PARTAGE (audit nov. 2026) : métadonnées générées CÔTÉ SERVEUR pour chaque lien
// partagé (/e, /l, /v, /c, /o, /u). WhatsApp, Instagram, Messenger, iMessage lisent ces balises :
// avant, tous les liens affichaient l'aperçu générique « Jovial ».
// Données publiques uniquement (clé anon + règles RLS / fonction dédiée pour les sorties).

export type ShareKind = "event" | "venue" | "club" | "outing" | "user";
type Preview = { title: string; description: string; image: string | null };

const FALLBACK_IMAGE = "/opengraph-image";

function isId(v: string | undefined): v is string {
  return !!v && /^\d{1,12}$/.test(v);
}

function frDate(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" });
}

async function rpc<T>(fn: string, body: Record<string, unknown>): Promise<T[] | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? (data as T[]) : null;
  } catch {
    return null;
  }
}

async function loadPreview(kind: ShareKind, id: string): Promise<Preview | null> {
  if (kind === "event") {
    const r = (await publicSelect<{ title: string | null; starts_at: string | null; cover_url: string | null; venues: { name: string | null; city: string | null } | null }>(
      "events", `id=eq.${id}&select=title,starts_at,cover_url,venues(name,city)&limit=1`))?.[0];
    if (!r) return null;
    const where = [r.venues?.name, r.venues?.city].filter(Boolean).join(", ");
    return {
      title: r.title ?? "Un événement",
      description: [frDate(r.starts_at), where].filter(Boolean).join(" · ") + " — Ouvre-le dans Jovial pour voir qui y va.",
      image: r.cover_url,
    };
  }
  if (kind === "venue") {
    const r = (await publicSelect<{ name: string | null; city: string | null; description: string | null; cover_url: string | null; logo_url: string | null }>(
      "venues", `id=eq.${id}&select=name,city,description,cover_url,logo_url&limit=1`))?.[0];
    if (!r) return null;
    return {
      title: [r.name ?? "Un lieu", r.city].filter(Boolean).join(" · "),
      description: (r.description?.trim() || "Activités, événements et bons plans") + " — à découvrir sur Jovial.",
      image: r.cover_url || r.logo_url,
    };
  }
  if (kind === "club") {
    const r = (await publicSelect<{ name: string | null; description: string | null; cover_image_url: string | null; avatar_image_url: string | null }>(
      "community_groups", `id=eq.${id}&select=name,description,cover_image_url,avatar_image_url&limit=1`))?.[0];
    if (!r) return null;
    return {
      title: `${r.name ?? "Un club"} · club Jovial`,
      description: (r.description?.trim().slice(0, 150) || "Un club pour sortir ensemble") + " — Rejoins-le sur Jovial.",
      image: r.cover_image_url || r.avatar_image_url,
    };
  }
  if (kind === "outing") {
    const r = (await rpc<{ title: string | null; starts_at: string | null; location_label: string | null; cover_url: string | null; club_name: string | null; goers: number | null }>(
      "public_outing_preview", { p_id: Number(id) }))?.[0];
    if (!r) return { title: "Une sortie de club sur Jovial", description: "On t'invite à une sortie ! Ouvre-la dans Jovial pour voir qui y va.", image: null };
    const goers = Number(r.goers ?? 0);
    return {
      title: r.title ?? "Une sortie de club",
      description: [frDate(r.starts_at), r.location_label, r.club_name ? `Club ${r.club_name}` : null].filter(Boolean).join(" · ")
        + (goers > 0 ? ` — ${goers} ${goers > 1 ? "personnes y vont" : "personne y va"}.` : " — Dis « J'y vais » sur Jovial."),
      image: r.cover_url,
    };
  }
  // user : prénom seulement (profils publics), jamais de nom de famille
  const r = (await publicSelect<{ firstname: string | null; handle: string | null; avatar_url: string | null }>(
    "profiles", `user_id=eq.${id}&select=firstname,handle,avatar_url&limit=1`))?.[0];
  if (!r) return null;
  const name = r.firstname || (r.handle ? `@${r.handle}` : "Un ami");
  return { title: `${name} t'invite sur Jovial`, description: "Suis ses sorties, rejoins sa bande et découvre ce qui se passe près de chez toi.", image: r.avatar_url };
}

const PATH: Record<ShareKind, string> = { event: "e", venue: "l", club: "c", outing: "o", user: "u" };

/** Métadonnées d'une page de partage. `path` force le préfixe (ex. « v » pour le QR d'un lieu). */
export async function shareMetadata(kind: ShareKind, rawId: string | undefined, path?: string): Promise<Metadata> {
  const id = kind === "user" ? (rawId && /^[0-9a-f-]{36}$/i.test(rawId) ? rawId : undefined) : (isId(rawId) ? rawId : undefined);
  const p = id ? await loadPreview(kind, id) : null;
  const url = `/${path ?? PATH[kind]}/${rawId ?? ""}`;
  const title = p?.title ?? "Jovial — Découvre les sorties près de toi";
  const description = p?.description ?? "Concerts, activités, tournois et sorties entre amis près de chez toi. Télécharge Jovial gratuitement.";
  const images = [{ url: p?.image || FALLBACK_IMAGE, alt: title }];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Jovial", locale: "fr_FR", type: kind === "event" ? "article" : "website", images },
    twitter: { card: "summary_large_image", title, description, images: images.map((i) => i.url) },
  };
}
