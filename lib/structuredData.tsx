import { publicSelect } from "@/lib/supabasePublic";

// DONNÉES STRUCTURÉES GOOGLE (audit nov. 2026, n°21) : JSON-LD Événement / Lieu / Organisation,
// pour les résultats enrichis (date, lieu, prix) et une meilleure indexation locale.
// Données publiques uniquement (clé anon + règles RLS : lieux approuvés et actifs, événements publiés).

const BASE = "https://www.getjovial.fr";

/** Bloc <script type="application/ld+json"> échappé (empêche toute évasion du bloc). */
export function JsonLd({ data }: { data: Record<string, unknown> | null }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026"),
      }}
    />
  );
}

const isId = (v: string | undefined): v is string => !!v && /^\d{1,12}$/.test(v);

function postalAddress(street?: string | null, postcode?: string | null, city?: string | null) {
  if (!street && !city) return undefined;
  return {
    "@type": "PostalAddress",
    ...(street ? { streetAddress: street } : {}),
    ...(postcode ? { postalCode: postcode } : {}),
    ...(city ? { addressLocality: city } : {}),
    addressCountry: "FR",
  };
}

const geo = (lat?: number | null, lng?: number | null) =>
  lat != null && lng != null ? { "@type": "GeoCoordinates", latitude: lat, longitude: lng } : undefined;

type EventRow = {
  id: number; title: string | null; description: string | null; starts_at: string | null; ends_at: string | null;
  cover_url: string | null; ticketing_enabled: boolean | null; ticket_price_cents: number | null;
  event_address: string | null; event_city: string | null; event_postcode: string | null; event_lat: number | null; event_lng: number | null;
  venues: { id: number; name: string | null; address: string | null; postcode: string | null; city: string | null; lat: number | null; lng: number | null } | null;
};

export async function eventJsonLd(rawId: string | undefined): Promise<Record<string, unknown> | null> {
  if (!isId(rawId)) return null;
  const e = (await publicSelect<EventRow>(
    "events",
    `id=eq.${rawId}&is_published=eq.true&select=id,title,description,starts_at,ends_at,cover_url,ticketing_enabled,ticket_price_cents,event_address,event_city,event_postcode,event_lat,event_lng,venues(id,name,address,postcode,city,lat,lng)&limit=1`,
  ))?.[0];
  if (!e?.title || !e.starts_at) return null;
  const v = e.venues;
  const url = `${BASE}/e/${e.id}`;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    url,
    startDate: e.starts_at,
    ...(e.ends_at ? { endDate: e.ends_at } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    ...(e.description ? { description: e.description.trim().slice(0, 500) } : {}),
    ...(e.cover_url ? { image: [e.cover_url] } : {}),
    location: {
      "@type": "Place",
      name: v?.name ?? e.event_city ?? "Lieu de l'événement",
      address: postalAddress(e.event_address ?? v?.address, e.event_postcode ?? v?.postcode, e.event_city ?? v?.city),
      geo: geo(e.event_lat ?? v?.lat, e.event_lng ?? v?.lng),
      ...(v?.id ? { url: `${BASE}/l/${v.id}` } : {}),
    },
    ...(v?.name ? { organizer: { "@type": "Organization", name: v.name, url: `${BASE}/l/${v.id}` } } : {}),
    ...(e.ticketing_enabled
      ? { offers: { "@type": "Offer", url, price: ((e.ticket_price_cents ?? 0) / 100).toFixed(2), priceCurrency: "EUR", availability: "https://schema.org/InStock", validFrom: new Date().toISOString().slice(0, 10) } }
      : {}),
  };
}

type VenueRow = {
  id: number; name: string | null; description: string | null; address: string | null; postcode: string | null; city: string | null;
  lat: number | null; lng: number | null; cover_url: string | null; logo_url: string | null; website_url: string | null;
  instagram_url: string | null;
};

export async function venueJsonLd(rawId: string | undefined): Promise<Record<string, unknown> | null> {
  if (!isId(rawId)) return null;
  const v = (await publicSelect<VenueRow>(
    "venues",
    `id=eq.${rawId}&select=id,name,description,address,postcode,city,lat,lng,cover_url,logo_url,website_url,instagram_url&limit=1`,
  ))?.[0];
  if (!v?.name) return null;
  const sameAs = [v.website_url, v.instagram_url].filter((u): u is string => !!u && /^https?:\/\//.test(u) && !/getjovial\.fr/i.test(u));
  return {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: v.name,
    url: `${BASE}/l/${v.id}`,
    ...(v.description ? { description: v.description.trim().slice(0, 500) } : {}),
    ...(v.cover_url || v.logo_url ? { image: [v.cover_url || v.logo_url] } : {}),
    ...(v.logo_url ? { logo: v.logo_url } : {}),
    address: postalAddress(v.address, v.postcode, v.city),
    geo: geo(v.lat, v.lng),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jovial",
  url: BASE,
  logo: `${BASE}/icon.png`,
  slogan: "Trouve ton plan idéal",
  email: "hello@getjovial.fr",
};

/** Lieux et événements à venir pour le plan du site. */
export async function sitemapEntries(): Promise<{ venues: { id: number; updated_at: string | null }[]; events: { id: number; updated_at: string | null }[] }> {
  const today = new Date().toISOString().slice(0, 10);
  const [venues, events] = await Promise.all([
    publicSelect<{ id: number; updated_at: string | null }>("venues", "select=id,updated_at&order=id"),
    publicSelect<{ id: number; updated_at: string | null }>("events", `select=id,updated_at&is_published=eq.true&starts_at=gte.${today}&order=starts_at`),
  ]);
  return { venues: venues ?? [], events: events ?? [] };
}
