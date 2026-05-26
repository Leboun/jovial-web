import DownloadSection from "@/components/DownloadSection";
import HeroTagline from "@/components/HeroTagline";
import LoopingVideos from "@/components/LoopingVideos";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Heart, Bell, Clock, Ticket } from "lucide-react";
import { articles } from "@/lib/articles";

const features = [
  {
    icon: MapPin,
    title: "Carte interactive",
    description: "Explore bars, restaurants, guinguettes, tiers-lieux et bien plus autour de toi — en temps réel.",
    color: "#2B4E93",
  },
  {
    icon: Bell,
    title: "Événements à venir",
    description: "Concerts, tournois, diffusions de matchs… Ne rate plus rien et ajoute les événements directement à ton agenda.",
    color: "#5CB6AC",
  },
  {
    icon: Ticket,
    title: "Activités & réservation",
    description: "Fléchettes, billard, palet breton, baby-foot… Découvre les activités disponibles et réserve en quelques secondes.",
    color: "#5CB6AC",
  },
  {
    icon: Heart,
    title: "Favoris & alertes",
    description: "Sauvegarde tes lieux préférés et reçois une notification dès qu'ils publient un événement ou une activité.",
    color: "#EF4444",
  },
];

const steps = [
  { number: "01", title: "Télécharge l'app", desc: "Disponible sur App Store et Google Play, gratuitement." },
  { number: "02", title: "Crée ton profil", desc: "Choisis ton pseudo, ajoute tes amis et configure tes préférences." },
  { number: "03", title: "Explore autour de toi", desc: "La carte s'anime avec les établissements ouverts autour de toi, leurs activités et événements." },
  { number: "04", title: "Profite de ta soirée", desc: "Partage tes bons plans, découvre de nouveaux lieux, vis l'instant." },
];

/** Mockup iPhone — SVG frame sur screenshot (aucun clip CSS sur l'image) */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Screenshot — aucun border-radius, aucun overflow, aucun clip */}
      <div style={{
        position: "absolute",
        top: "1.3%",
        left: "2.8%",
        right: "2.8%",
        bottom: "1.3%",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }} />
      {/* SVG frame par-dessus — masque les coins, ajoute le châssis */}
      <img
        src="/iphone-frame.svg"
        alt={alt}
        style={{ width: "100%", display: "block", position: "relative", zIndex: 2 }}
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — vidéo plein écran + texte centré + 1 mockup */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white">

        {/* Vidéo en fond plein écran */}
        <LoopingVideos style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 75%",
          zIndex: 0,
        }} />

        {/* Overlay sombre + dégradé vers le bas */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to bottom, rgba(20,30,70,0.55) 0%, rgba(43,78,147,0.4) 50%, rgba(10,15,40,0.65) 100%)"
        }} />

        {/* Contenu centré */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-12 w-full max-w-5xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 border border-white/20">
            🎉 Disponible gratuitement
          </div>

          {/* Tagline */}
          <HeroTagline />

          {/* Sous-titre */}
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
            Bars, concerts, fléchettes, comedy clubs… Tout ce qui se passe près de chez toi, en un coup d&apos;œil.
          </p>

          {/* Boutons téléchargement */}
          <DownloadSection />
          <p className="text-white/35 text-xs mt-4">iOS 16+ et Android 10+. Gratuit, sans publicité.</p>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2B4E93] text-sm font-bold uppercase tracking-widest">L&apos;application</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Tout ce qu&apos;il te faut pour sortir</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Découvre des lieux uniques, réserve tes activités, suis les événements — tout en un.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Mockup carte à gauche */}
            <div className="w-full max-w-[380px] shrink-0 mx-auto lg:mx-0">
              <img
                src="/mockup-map.png"
                alt="Carte interactive Jovial"
                className="w-full drop-shadow-2xl"
              />
            </div>

            {/* 4 features à droite */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: f.color + "20" }}
                    >
                      <Icon size={22} style={{ color: f.color }} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Magazine */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[#2B4E93] text-sm font-bold uppercase tracking-widest">Découvrir</span>
              <h2 className="text-4xl font-bold mt-3">Adresses, événements, festivals.</h2>
              <p className="text-gray-500 text-lg mt-3 max-w-xl">
                Tout ce qui se passe près de chez toi — bars, concerts, activités et festivals en Bretagne et partout en France.
              </p>
            </div>
            <Link
              href="/actualites"
              className="hidden md:inline-flex items-center gap-2 text-[#2B4E93] font-semibold text-sm hover:underline shrink-0"
            >
              Tous les articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/actualites/${a.slug}`} className="group block">
                <article className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="h-1.5 w-full" style={{ backgroundColor: a.tagColor }} />
                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full mb-4 w-fit"
                      style={{ backgroundColor: a.tagColor + "18", color: a.tagColor }}
                    >
                      {a.tagEmoji} {a.tag}
                    </span>
                    <h3 className="font-bold text-gray-900 leading-snug mb-3 flex-1 group-hover:text-[#2B4E93] transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{a.excerpt}</p>
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

          <div className="mt-8 text-center md:hidden">
            <Link href="/actualites" className="text-[#2B4E93] font-semibold text-sm hover:underline">
              Voir tous les articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 px-6 bg-[#2B4E93] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ce soir, qu&apos;est-ce qu&apos;on fait ?</h2>
          <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
            Concerts, fléchettes, terrasses, comedy clubs — tout ce qui se passe près de chez toi, maintenant.
          </p>

          {/* Étapes inline */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 text-sm">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
              <span className="text-lg">📲</span>
              <span className="font-semibold">Télécharge</span>
            </div>
            <span className="text-white/30 hidden sm:block">→</span>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
              <span className="text-lg">🗺️</span>
              <span className="font-semibold">Explore autour de toi</span>
            </div>
            <span className="text-white/30 hidden sm:block">→</span>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
              <span className="text-lg">🎯</span>
              <span className="font-semibold">Réserve</span>
            </div>
            <span className="text-white/30 hidden sm:block">→</span>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
              <span className="text-lg">🎉</span>
              <span className="font-semibold">Profite</span>
            </div>
          </div>

          <div className="flex justify-center">
            <DownloadSection />
          </div>
          <p className="text-white/30 text-xs mt-5">Gratuit, sans publicité. iOS 16+ et Android 10+.</p>
        </div>
      </section>
    </>
  );
}

