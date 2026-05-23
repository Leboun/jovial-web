import DownloadSection from "@/components/DownloadSection";
import HeroTagline from "@/components/HeroTagline";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, Zap, Heart, Bell, Clock, CalendarDays, Ticket, Gift, MessageCircle } from "lucide-react";
import { articles } from "@/lib/articles";

const features = [
  {
    icon: MapPin,
    title: "Carte interactive",
    description: "Explore bars, restaurants, tiers-lieux, guinguettes et bien plus autour de toi. Filtre par activité, ambiance ou distance.",
    color: "#2B4E93",
  },
  {
    icon: Bell,
    title: "Événements à venir",
    description: "Concerts, soirées, diffusions de matchs, tournois de pétanque… Ne rate plus rien. Ajoute directement les événements à ton calendrier.",
    color: "#F97316",
  },
  {
    icon: Ticket,
    title: "Activités & réservation",
    description: "Baby-foot, fléchettes, billard, palet breton… Découvre les activités disponibles et réserve ta place en quelques secondes depuis l'app.",
    color: "#5CB6AC",
  },
  {
    icon: Heart,
    title: "Favoris & alertes",
    description: "Sauvegarde tes lieux préférés et reçois une notification dès qu'ils publient un nouvel événement ou une nouvelle activité.",
    color: "#EF4444",
  },
  {
    icon: Gift,
    title: "Avantages exclusifs Jovial+",
    description: "Avec Jovial+, profite d'avantages réservés : consommation offerte à l'arrivée, réservation prioritaire, tarif réduit sur les activités et accès early bird aux événements.",
    color: "#8B5CF6",
  },
  {
    icon: Users,
    title: "Réseau d'amis",
    description: "Connecte-toi avec tes amis, partage tes bons plans et coordonnez vos sorties en un clin d'œil.",
    color: "#10B981",
  },
  {
    icon: MessageCircle,
    title: "Groupes communautaires",
    description: "Rejoins des groupes autour de tes passions : amateurs de fléchettes, fans de comedy-club, afterwork du jeudi… Échange, planifie et sors ensemble.",
    color: "#F59E0B",
  },
  {
    icon: Zap,
    title: "100% gratuit",
    description: "Aucune pub, aucun engagement. Télécharge Jovial et commence à explorer dès ce soir.",
    color: "#6366F1",
  },
];

const steps = [
  { number: "01", title: "Télécharge l'app", desc: "Disponible sur App Store et Google Play, gratuitement." },
  { number: "02", title: "Crée ton profil", desc: "Choisis ton pseudo, ajoute tes amis et configure tes préférences." },
  { number: "03", title: "Explore autour de toi", desc: "La carte s'anime avec les bars ouverts et les événements du soir." },
  { number: "04", title: "Profite de ta soirée", desc: "Partage tes bons plans, découvre de nouveaux lieux, vis l'instant." },
];

/** Mockup iPhone 15 Pro en CSS pur */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      position: "relative",
      borderRadius: 48,
      background: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0f0f0f 100%)",
      padding: 10,
      boxShadow: `
        inset 0 0 0 1.5px rgba(255,255,255,0.12),
        inset 0 1px 0 rgba(255,255,255,0.2),
        0 0 0 1px rgba(0,0,0,0.6)
      `,
    }}>
      {/* Dynamic Island */}
      <div style={{
        position: "absolute",
        top: 14,
        left: "50%",
        transform: "translateX(-50%)",
        width: 72,
        height: 22,
        background: "#000",
        borderRadius: 20,
        zIndex: 10,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
      }} />

      {/* Écran */}
      <div style={{
        borderRadius: 40,
        overflow: "hidden",
        aspectRatio: "9 / 19.5",
        background: "#000",
        position: "relative",
      }}>
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", imageRendering: "crisp-edges" }}
        />
        {/* Reflet subtil sur l'écran */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "30%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)",
          pointerEvents: "none",
        }} />
      </div>

      {/* Bouton power */}
      <div style={{
        position: "absolute", right: -3, top: 90,
        width: 3, height: 36,
        background: "linear-gradient(to right, #2a2a2a, #444)",
        borderRadius: "0 3px 3px 0",
      }} />
      {/* Boutons volume */}
      <div style={{
        position: "absolute", left: -3, top: 80,
        width: 3, height: 28,
        background: "linear-gradient(to left, #2a2a2a, #444)",
        borderRadius: "3px 0 0 3px",
      }} />
      <div style={{
        position: "absolute", left: -3, top: 118,
        width: 3, height: 28,
        background: "linear-gradient(to left, #2a2a2a, #444)",
        borderRadius: "3px 0 0 3px",
      }} />
      {/* Bouton silencieux */}
      <div style={{
        position: "absolute", left: -3, top: 55,
        width: 3, height: 16,
        background: "linear-gradient(to left, #2a2a2a, #444)",
        borderRadius: "3px 0 0 3px",
      }} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center">

        {/* ── Photo de fond ── */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <img
            src="/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
        </div>

        {/* ── Overlay : dégradé gauche→droite ── */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.05) 100%)",
          }}
        />

        {/* ── Contenu ── */}
        <div
          className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 pt-32 pb-20"
          style={{ zIndex: 2 }}
        >
          {/* Texte gauche */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20">
              🎉 Disponible gratuitement
            </div>
            <HeroTagline />
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-md">
              Jovial te connecte aux meilleurs bars, concerts et événements autour de toi. Découvre, partage, vis.
            </p>
            <DownloadSection />
            <p className="text-white/40 text-xs mt-4">iOS 16+ et Android 10+. Gratuit, sans publicité.</p>
          </div>

          {/* ── Mockups iPhone ── */}
          <div className="hidden lg:block relative" style={{ height: 660 }}>

            {/* Téléphone ARRIÈRE — fiche établissement, incliné droite */}
            <div style={{
              position: "absolute",
              right: 20,
              bottom: 30,
              width: 240,
              transform: "rotate(8deg)",
              transformOrigin: "bottom center",
              zIndex: 10,
              filter: "drop-shadow(0px 30px 50px rgba(0,0,0,0.65))",
              opacity: 0.95,
            }}>
              <PhoneMockup src="/screen-venue.jpg" alt="Fiche établissement Jovial" />
            </div>

            {/* Téléphone AVANT — carte, légèrement incliné gauche */}
            <div style={{
              position: "absolute",
              left: 20,
              bottom: 0,
              width: 270,
              transform: "rotate(-5deg)",
              transformOrigin: "bottom center",
              zIndex: 20,
              filter: "drop-shadow(0px 40px 70px rgba(0,0,0,0.8))",
            }}>
              <PhoneMockup src="/screen-map.jpg" alt="Carte interactive Jovial" />
            </div>

          </div>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2B4E93] text-sm font-bold uppercase tracking-widest">L&apos;application</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Tout ce qu&apos;il te faut pour sortir</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Découvre des lieux uniques, réserve tes activités, suis les événements et rejoins une communauté de sorties — tout en un.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>

      {/* Comment ça marche */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2B4E93] text-sm font-bold uppercase tracking-widest">Simple & rapide</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Prêt en 2 minutes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-[#2B4E93]/20 z-0" />
                )}
                <div className="relative z-10">
                  <div className="text-4xl font-black text-[#2B4E93]/15 mb-3">{s.number}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[#2B4E93] text-sm font-bold uppercase tracking-widest">Magazine</span>
              <h2 className="text-4xl font-bold mt-3">La vie des bars, racontée</h2>
              <p className="text-gray-500 text-lg mt-3 max-w-xl">
                Portraits de gérants, coups de projecteur sur des établissements, villes qui bougent — on raconte la vie nocturne française.
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
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-5">Prêt pour ce soir ?</h2>
          <p className="text-white/70 text-lg mb-10">
            Télécharge Jovial et découvre ce qui se passe autour de toi.
          </p>
          <div className="flex justify-center">
            <DownloadSection />
          </div>
        </div>
      </section>
    </>
  );
}
