import DownloadSection from "@/components/DownloadSection";
import { MapPin, Users, Zap, Heart, Star, Bell } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Carte interactive",
    description: "Explore les bars et événements autour de toi sur une carte en temps réel.",
    color: "#2B4E93",
  },
  {
    icon: Bell,
    title: "Événements à venir",
    description: "Ne rate plus aucun concert, soirée ou afterwork. Ajoute-les à ton calendrier.",
    color: "#F97316",
  },
  {
    icon: Users,
    title: "Réseau d'amis",
    description: "Connecte-toi avec tes amis, partage tes bars favoris et planifiez vos sorties.",
    color: "#10B981",
  },
  {
    icon: Heart,
    title: "Favoris & suivi",
    description: "Sauvegarde les lieux que tu aimes et reçois des alertes quand ils publient.",
    color: "#EF4444",
  },
  {
    icon: Star,
    title: "Recommandations",
    description: "Jovial+ te suggère des lieux selon tes goûts et les coups de cœur de tes amis.",
    color: "#8B5CF6",
  },
  {
    icon: Zap,
    title: "100% gratuit",
    description: "Aucune pub, aucun engagement. Jovial est et restera gratuit pour les utilisateurs.",
    color: "#F59E0B",
  },
];

const steps = [
  { number: "01", title: "Télécharge l'app", desc: "Disponible sur App Store et Google Play, gratuitement." },
  { number: "02", title: "Crée ton profil", desc: "Choisis ton pseudo, ajoute tes amis et configure tes préférences." },
  { number: "03", title: "Explore autour de toi", desc: "La carte s'anime avec les bars ouverts et les événements du soir." },
  { number: "04", title: "Profite de ta soirée", desc: "Partage tes bons plans, découvre de nouveaux lieux, vis l'instant." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2B4E93] text-white overflow-hidden pt-32 pb-24 px-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20">
              🎉 Disponible gratuitement
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              La vie nocturne,{" "}
              <span className="text-[#F97316]">dans ta poche</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-md">
              Jovial te connecte aux meilleurs bars, concerts et événements autour de toi. Découvre, partage, vis.
            </p>
            <DownloadSection />
            <p className="text-white/40 text-xs mt-4">iOS 16+ et Android 10+. Gratuit, sans publicité.</p>
          </div>

          {/* Phone mockup */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-64 h-[520px] bg-[#1e3a70] rounded-[3rem] border-4 border-white/20 shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full" />
              <div className="text-center px-6">
                <MapPin size={48} className="mx-auto mb-3 text-[#F97316]" />
                <p className="text-sm font-medium text-white/60">Capture d&apos;écran à venir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: "100%", label: "Gratuit" },
            { value: "0", label: "Publicités" },
            { value: "🇫🇷", label: "Fait en France" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-[#2B4E93]">{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2B4E93] text-sm font-bold uppercase tracking-widest">L&apos;application</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Tout ce qu&apos;il te faut pour sortir</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Une seule app pour découvrir les bars, suivre les événements et retrouver tes amis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
