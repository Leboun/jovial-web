import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowLeft, MapPin } from "lucide-react";
import { articles, getArticle } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Jovial Magazine`,
    description: article.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      elements.push(<div key={key++} className="h-4" />);
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-gray-900 mt-8 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    } else {
      // Handle inline bold **text** and italic *text*
      const parts = trimmed.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
      const rendered = parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return part;
      });
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed text-lg mb-0">
          {rendered}
        </p>
      );
    }
  }
  return elements;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-28 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2B4E93] transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Retour au Magazine
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ backgroundColor: article.tagColor + "18", color: article.tagColor }}
            >
              {article.tagEmoji} {article.tag}
            </span>
            {article.city && (
              <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                <MapPin size={11} />
                {article.city}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            {article.title}
          </h1>

          <p className="text-gray-500 text-xl leading-relaxed mb-8">{article.excerpt}</p>

          <div className="flex items-center gap-5 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {article.readTime} de lecture
            </span>
            <span>Par {article.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose-custom">
          <div className="space-y-5">{renderContent(article.content)}</div>
        </div>
      </section>

      {/* CTA app */}
      <section className="py-14 px-6 bg-[#f8faff] border-y border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-[#2B4E93] rounded-3xl p-8 text-white">
          <div className="flex-1">
            <p className="text-lg font-bold mb-1">Découvre ces bars sur Jovial</p>
            <p className="text-white/70 text-sm">Carte interactive, événements, réservations — tout est là.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://apps.apple.com/app/jovial"
              className="bg-white text-[#2B4E93] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.jovial.app"
              className="bg-white/15 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-white/25 transition-colors border border-white/20"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">À lire aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((a) => (
                <Link key={a.slug} href={`/actualites/${a.slug}`} className="group block">
                  <article className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full mb-4 w-fit"
                      style={{ backgroundColor: a.tagColor + "18", color: a.tagColor }}
                    >
                      {a.tagEmoji} {a.tag}
                    </div>
                    <h3 className="font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#2B4E93] transition-colors flex-1">
                      {a.title}
                    </h3>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={11} />
                      {a.readTime} de lecture
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
