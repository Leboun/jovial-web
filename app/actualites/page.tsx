import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Découvrir — Jovial",
  description: "Adresses, événements, festivals — tout ce qui se passe près de chez toi. Bars, concerts, activités en Bretagne et partout en France.",
};

const categories = [
  { emoji: "📍", label: "Adresses", color: "#2B4E93" },
  { emoji: "🗓️", label: "À venir", color: "#10B981" },
  { emoji: "🎪", label: "Festivals", color: "#F59E0B" },
  { emoji: "🎯", label: "Activités", color: "#EF4444" },
  { emoji: "🏙️", label: "Villes", color: "#5CB6AC" },
];

export default function MagazinePage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[#5CB6AC] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-[#5CB6AC]" />
            Découvrir
            <span className="w-6 h-px bg-[#5CB6AC]" />
          </span>
          <h1 className="text-5xl font-black mt-2 mb-4 bg-gradient-to-r from-[#2B4E93] to-[#5CB6AC] bg-clip-text text-transparent leading-tight uppercase">Adresses, événements, festivals.</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Tout ce qui se passe près de chez toi — bars, concerts, activités et festivals en Bretagne et partout en France.
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

      {/* CTA formulaire de contact */}
      <section className="py-16 px-6 bg-[#2B4E93] text-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-4xl font-black mb-3 uppercase">Un lieu, un événement à faire découvrir ?</p>
            <p className="text-white/70 text-lg">
              Bar, salle de concert, festival, activité… Vous avez quelque chose à mettre en avant ? On vous contacte.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

