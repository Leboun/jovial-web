import type { Metadata } from "next";
import Link from "next/link";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Actualités — Jovial",
  description: "Découvrez les dernières nouveautés de Jovial : nouvelles fonctionnalités, partenariats et bons plans.",
};

const articles = [
  {
    slug: "lancement-jovial",
    date: "Mai 2026",
    tag: "Lancement",
    tagColor: "#10B981",
    title: "Jovial est lancé ! 🎉",
    excerpt:
      "Après des mois de développement, Jovial est enfin disponible sur App Store et Google Play. Découvrez les bars et événements près de chez vous.",
    readTime: "2 min",
  },
  {
    slug: "jovial-plus",
    date: "Mai 2026",
    tag: "Premium",
    tagColor: "#8B5CF6",
    title: "Présentation de Jovial+",
    excerpt:
      "Jovial+ débarque avec des recommandations personnalisées, les favoris de vos amis et des alertes prioritaires. Essai gratuit 7 jours.",
    readTime: "3 min",
  },
  {
    slug: "etablissements-rejoignez",
    date: "Mai 2026",
    tag: "Établissements",
    tagColor: "#F97316",
    title: "Établissements : rejoignez Jovial",
    excerpt:
      "Bars, clubs, restaurants avec soirées — rejoignez Jovial et connectez-vous à des milliers de noctambules dans votre ville.",
    readTime: "2 min",
  },
];

export default function ActualitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#2B4E93] text-sm font-bold uppercase tracking-widest">Journal</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Actualités Jovial</h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Nouveautés, partenariats, événements — tout ce qui se passe chez Jovial.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-6 bg-[#f8faff]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              {/* Color bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: a.tagColor }} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: a.tagColor + "20", color: a.tagColor }}
                  >
                    {a.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={11} />
                    {a.date}
                  </span>
                </div>
                <h2 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{a.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{a.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{a.readTime} de lecture</span>
                  <Link
                    href={`/actualites/${a.slug}`}
                    className="text-[#2B4E93] text-sm font-semibold hover:underline"
                  >
                    Lire →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="max-w-4xl mx-auto text-center py-20 text-gray-400">
            Les actualités arrivent bientôt...
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-[#2B4E93] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Reste informé</h2>
          <p className="text-white/70 mb-6">Reçois les nouveautés Jovial directement dans ta boite mail.</p>
          <a
            href="mailto:contact@jovial.app?subject=Newsletter%20Jovial"
            className="inline-flex items-center gap-2 bg-white text-[#2B4E93] font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
          >
            S&apos;inscrire à la newsletter
          </a>
        </div>
      </section>
    </>
  );
}
