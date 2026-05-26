import { Check, Star, Users, Heart, MapPin, Zap, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jovial+ — Passe à l'expérience premium",
  description: "Jovial+ débloque les recommandations personnalisées, les favoris de tes amis et bien plus. Disponible directement dans l'application.",
};

const free = [
  "Carte interactive des bars",
  "Événements à venir",
  "Favoris personnels",
  "Réseau d'amis",
  "Notifications d'événements",
];

const premium = [
  { text: "Tout ce qui est inclus dans Gratuit", highlight: false },
  { text: "Recommandations personnalisées par IA", highlight: true },
  { text: "Favoris & sorties de tes amis", highlight: true },
  { text: "Alertes prioritaires avant tout le monde", highlight: true },
  { text: "Filtres avancés (ambiance, style, prix...)", highlight: true },
  { text: "Badge Jovial+ sur ton profil", highlight: false },
  { text: "Support prioritaire", highlight: false },
];

const faqs = [
  {
    q: "Comment m'abonner à Jovial+ ?",
    a: "L'abonnement Jovial+ se souscrit directement depuis l'application Jovial, dans l'onglet Profil. Le paiement est géré par Apple (App Store) ou Google (Play Store) selon ton appareil.",
  },
  {
    q: "Puis-je annuler à tout moment ?",
    a: "Oui, tu peux annuler ton abonnement à tout moment depuis les paramètres de ton App Store ou Google Play. Tu conserves l'accès jusqu'à la fin de la période payée.",
  },
  {
    q: "Y a-t-il une période d'essai ?",
    a: "Oui ! Jovial+ propose une période d'essai gratuite de 7 jours pour les nouveaux abonnés. Aucun engagement.",
  },
  {
    q: "Mes données sont-elles protégées ?",
    a: "Absolument. Toutes tes données sont hébergées en Europe et protégées conformément au RGPD. Nous ne revendons jamais tes données personnelles.",
  },
];

export default function PremiumPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a1040] via-[#2B1F6B] to-[#1e3a70] text-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#5CB6AC] rounded-full blur-[100px] opacity-15 translate-y-1/3" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20">
            <Star size={12} className="fill-yellow-400 text-yellow-400" /> Premium
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Passe à{" "}
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
              Jovial+
            </span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Découvre une expérience sociale encore plus riche : recommandations sur mesure, sorties de tes amis, alertes en avant-première.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
            <Lock size={18} className="text-[#a78bfa]" />
            <p className="text-sm text-white/80">
              L&apos;abonnement se gère uniquement depuis l&apos;application Jovial
            </p>
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Gratuit vs Jovial+</h2>
            <p className="text-gray-500 mt-3">Tout le monde bénéficie de Jovial gratuitement. Jovial+ va encore plus loin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="mb-6">
                <p className="font-bold text-xl text-gray-900">Gratuit</p>
                <p className="text-3xl font-black mt-2 text-gray-900">0 €<span className="text-base font-medium text-gray-400"> / mois</span></p>
              </div>
              <ul className="space-y-3">
                {free.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <Check size={16} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium */}
            <div className="relative bg-gradient-to-br from-[#2B1F6B] to-[#2B4E93] rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#5CB6AC] text-white text-xs font-bold px-3 py-1 rounded-full">
                7 jours offerts
              </div>
              <div className="mb-6">
                <p className="font-bold text-xl">Jovial+</p>
                <p className="text-3xl font-black mt-2">3,99 €<span className="text-base font-medium text-white/50"> / mois</span></p>
                <p className="text-white/50 text-xs mt-1">ou 34,99 € / an (économise 30%)</p>
              </div>
              <ul className="space-y-3">
                {premium.map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={item.highlight ? "text-[#a78bfa] shrink-0" : "text-white/50 shrink-0"} />
                    <span className={item.highlight ? "text-white font-medium" : "text-white/70"}>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <p className="text-sm text-white/80 mb-1">Disponible dans l&apos;application</p>
                <p className="text-xs text-white/50">Profil → Jovial+ → Commencer l&apos;essai gratuit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Premium */}
      <section className="py-20 px-6 bg-[#f8faff]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Ce que tu débloques avec Jovial+</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                color: "#8B5CF6",
                title: "Recommandations IA",
                desc: "Jovial apprend tes goûts et te suggère les bars et événements qui te correspondent vraiment.",
              },
              {
                icon: Users,
                color: "#5CB6AC",
                title: "Sorties de tes amis",
                desc: "Découvre les bars favoris de tes amis et suis leurs événements à venir.",
              },
              {
                icon: Zap,
                color: "#10B981",
                title: "Alertes prioritaires",
                desc: "Reçois les notifications en avant-première, avant la foule. Ne rate plus jamais les meilleurs spots.",
              },
              {
                icon: Heart,
                color: "#EF4444",
                title: "Favoris enrichis",
                desc: "Organise tes favoris en listes, ajoute des notes, partage des sélections privées avec tes amis.",
              },
              {
                icon: MapPin,
                color: "#2B4E93",
                title: "Filtres avancés",
                desc: "Filtre par ambiance, style de musique, fourchette de prix, horaires d'ouverture et plus.",
              },
              {
                icon: Lock,
                color: "#F59E0B",
                title: "Badge exclusif",
                desc: "Affiche ton badge Jovial+ sur ton profil et montre ton soutien à l'application.",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: f.color + "20" }}>
                    <Icon size={22} style={{ color: f.color }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2B1F6B] to-[#2B4E93] text-white text-center">
        <div className="max-w-xl mx-auto">
          <Star size={40} className="mx-auto mb-5 fill-yellow-400 text-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">Essaie Jovial+ 7 jours gratuitement</h2>
          <p className="text-white/70 mb-8">Sans engagement. Annule à tout moment depuis l&apos;app.</p>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <p className="text-white/80 text-sm mb-2">Pour t&apos;abonner à Jovial+</p>
            <p className="font-semibold">Ouvre l&apos;app Jovial → Profil → Jovial+</p>
          </div>
        </div>
      </section>
    </>
  );
}

