import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.getjovial.fr";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/actualites`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/etablissements`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/actualites/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
