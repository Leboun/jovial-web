import type { MetadataRoute } from "next";
import { articles, toIsoDate } from "@/lib/articles";
import { PREMIUM_ENABLED } from "@/lib/features";
import { sitemapEntries } from "@/lib/structuredData";

// Lieux et événements à venir ajoutés au plan du site (audit n°21) ; régénéré toutes les heures.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.getjovial.fr";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/actualites`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/etablissements`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/associations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...(PREMIUM_ENABLED ? [{ url: `${base}/premium`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }] : []),
    { url: `${base}/confidentialite`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cgu`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cgv`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/suppression-compte`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/actualites/${a.slug}`,
    lastModified: new Date(toIsoDate(a.date)),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const { venues, events } = await sitemapEntries();
  const venuePages: MetadataRoute.Sitemap = venues.map((v) => ({
    url: `${base}/l/${v.id}`,
    lastModified: v.updated_at ? new Date(v.updated_at) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  const eventPages: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${base}/e/${e.id}`,
    lastModified: e.updated_at ? new Date(e.updated_at) : new Date(),
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages, ...venuePages, ...eventPages];
}
