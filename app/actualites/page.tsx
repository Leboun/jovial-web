import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Magazine — Jovial",
  description: "Portraits de gérants, histoires d'établissements, villes qui bougent, artistes émergents — le magazine de la vie nocturne française.",
};

const categories = [
  { emoji: "🏠", label: "Portrait d'établissement", color: "#2B4E93" },
  { emoji: "👤", label: "Portrait de gérant", color: "#10B981" },
  { emoji: "🏙️", label: "Ville & Quartier", color: "#F97316" },
  { emoji: "🎤", label: "Artiste", color: "#8B5CF6" },
  { emoji: "🎭", label: "Scène & Soirée", color: "#EF4444" },
  { emoji: "🎪", label: "Festival & Off", color: "#F59E0B" },
];

export default function MagazinePage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#2B4E93] text-sm font-bold uppercase tracking-widest">Magazine</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-900">La vie des bars, racontée</h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Portraits de gérants, histoires d&apos;établissements, villes qui bougent, artistes émergents, soirées mémorables — on raconte la vie nocturne française.
          </p>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-8 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat.label}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border"
                style={{ borderColor: cat.color + "40", color: cat.color, backgroundColor: cat.color + "10" }}
              >
                {cat.emoji} {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article à la une */}
      {featured && (
        <section className="py-12 px-6 bg-[#f8faff]">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">À la une</p>
            <Link href={`/actualites/${featured.slug}`} className="group block">
              <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-2 w-full" style={{ backgroundColor: featured.tagColor }} />
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: featured.tagColor + "18", color: featured.tagColor }}
                    >
                      {featured.tagEmoji} {featured.tag}
                    </span>
                    {featured.city && (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                        <MapPin size={11} />
                        {featured.city}
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#2B4E93] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
                  <div className="flex items-center gap-5 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5"><Calendar size={13} />{featured.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={13} />{featured.readTime} de lecture</span>
                    <span className="text-[#2B4E93] font-semibold group-hover:underline">Lire l&apos;article →</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Grille d'articles */}
      <section className="py-12 px-6 bg-[#f8faff]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((a) => (
            <Link key={a.slug} href={`/actualites/${a.slug}`} className="group block">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="h-1.5 w-full" style={{ backgroundColor: a.tagColor }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: a.tagColor + "18", color: a.tagColor }}
                    >
                      {a.tagEmoji} {a.tag}
                    </span>
                    {a.city && (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                        <MapPin size={11} />
                        {a.city}
                      </span>
                    )}
                  </div>
                  <h2 className="font-bold text-gray-900 text-lg mb-3 leading-snug flex-1 group-hover:text-[#2B4E93] transition-colors">
                    {a.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{a.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={11} />
                      {a.readTime} de lecture
                    </span>
                    <span className="text-[#2B4E93] text-sm font-semibold group-hover:underline">Lire →</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA proposer un article */}
      <section className="py-16 px-6 bg-[#2B4E93] text-white text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-3xl font-bold mb-4">Ton bar mérite un article ?</p>
          <p className="text-white/70 mb-8">
            Tu gères un établissement avec une histoire à raconter ? On vient à ta rencontre.
          </p>
          <a
            href="mailto:contact@getjovial.fr?subject=Proposition%20article%20Magazine%20Jovial"
            className="inline-flex items-center gap-2 bg-white text-[#2B4E93] font-bold px-8 py-4 rounded-2xl hover:bg-white/90 transition-colors"
          >
            Nous écrire
          </a>
        </div>
      </section>
    </>
  );
}
