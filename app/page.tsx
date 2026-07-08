import DownloadSection from "@/components/DownloadSection";
import FlipCard from "@/components/FlipCard";
import HeroTagline from "@/components/HeroTagline";
import LoopingVideos from "@/components/LoopingVideos";
import ScrollingBanner from "@/components/ScrollingBanner";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, CreditCard, QrCode } from "lucide-react";
import { articles } from "@/lib/articles";

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
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white bg-[#080b14]">

        {/* Vidéo en fond plein écran */}
        <LoopingVideos style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 60%",
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
            🎉 Bientôt disponible — gratuit
          </div>

          {/* Tagline */}
          <HeroTagline />

          {/* Sous-titre */}
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
            Fléchettes, pétanque, jeux de société… karaoké, concerts, tournois — tout ça près de chez toi.
          </p>

          {/* Boutons téléchargement */}
          <div id="telecharger" className="scroll-mt-28 w-full flex flex-col items-center">
            <DownloadSection />
          </div>
          <p className="text-white/35 text-xs mt-4">iOS 16+ et Android 10+. Gratuit, sans publicité.</p>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[#5CB6AC] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-[#5CB6AC]" />
              L&apos;application
              <span className="w-6 h-px bg-[#5CB6AC]" />
            </span>
            <h2 className="text-5xl font-black mt-2 mb-5 bg-gradient-to-r from-[#2B4E93] to-[#5CB6AC] bg-clip-text text-transparent leading-tight uppercase">
              Tout ce qu&apos;il te faut pour sortir
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Découvre des lieux uniques, réserve tes activités, suis les événements — tout en un.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Mockup app à gauche */}
            <div className="w-full max-w-[380px] shrink-0 mx-auto lg:mx-0">
              <Image
                src="/mockup-app.jpg"
                alt="L'app Jovial : carte interactive et fiche établissement"
                width={828}
                height={1792}
                sizes="(max-width: 1024px) 90vw, 380px"
                className="w-full drop-shadow-2xl rounded-[2rem]"
              />
            </div>

            {/* 4 features à droite — mêmes cartes retournables que la page établissements */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FlipCard
                icon="🗺️"
                title="Carte interactive"
                desc="Explore bars, restaurants, guinguettes, tiers-lieux et bien plus autour de toi — en temps réel."
                footer=""
              />
              <FlipCard
                icon="📅"
                title="Événements à venir"
                desc="Concerts, tournois, diffusions de matchs… Ne rate plus rien et ajoute les événements directement à ton agenda."
                footer=""
              />
              <FlipCard
                icon="🎯"
                title="Activités & réservation"
                desc="Fléchettes, billard, palet breton, baby-foot… Découvre les activités disponibles et réserve en quelques secondes."
                footer=""
              />
              <FlipCard
                icon="❤️"
                title="Favoris & alertes"
                desc="Sauvegarde tes lieux préférés et reçois une notification dès qu'ils publient un événement ou une activité."
                footer=""
              />
            </div>
          </div>
        </div>
      </section>


      {/* Établissements — teaser vers /etablissements */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#2B4E93] to-[#2F7D73] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-white/50" />
            Établissements
            <span className="w-6 h-px bg-white/50" />
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4 uppercase leading-tight">
            Tu gères un bar, un resto, un lieu qui bouge ?
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Fais-toi trouver par ceux qui cherchent quoi faire près de chez toi — et encaisse réservations et billets directement dans l&apos;app.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm">
            <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20 font-semibold">
              <MapPin size={15} /> Visible au bon moment
            </span>
            <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20 font-semibold">
              <CreditCard size={15} /> Réservations payées en ligne
            </span>
            <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20 font-semibold">
              <QrCode size={15} /> Billetterie QR
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/etablissements"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2B4E93] font-bold px-8 py-4 rounded-2xl hover:bg-white/90 transition-colors"
            >
              Découvrir Jovial Pro →
            </Link>
            <a
              href="https://pro.getjovial.fr/establishment/offers"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-colors border border-white/25"
            >
              Inscrire mon établissement
            </a>
          </div>
        </div>
      </section>

      {/* Bandeau défilant */}
      <ScrollingBanner />

      {/* Magazine */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-[#5CB6AC] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-6 h-px bg-[#5CB6AC]" />
                Découvrir
                <span className="w-6 h-px bg-[#5CB6AC]" />
              </span>
              <h2 className="text-5xl font-black mt-2 bg-gradient-to-r from-[#2B4E93] to-[#5CB6AC] bg-clip-text text-transparent leading-tight uppercase">CE QUI SE PASSE PRÈS DE CHEZ TOI.</h2>
              <p className="text-gray-600 text-lg mt-4 max-w-xl leading-relaxed">
                Événements à venir, lieux d'activités, scènes locales — près de chez toi.
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
          <h2 className="font-black mb-4 uppercase" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>Ce soir, qu&apos;est-ce qu&apos;on fait ?</h2>
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


