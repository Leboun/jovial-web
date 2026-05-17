import { Check, BarChart3, Bell, Star, Users, TrendingUp, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jovial pour les établissements — Visibilité & outils pro",
  description: "Gérez votre présence sur Jovial, publiez vos événements et boostez votre visibilité auprès de milliers de noctambules.",
};

const plans = [
  {
    name: "Gratuit",
    price: "0 €",
    period: "",
    desc: "Pour commencer et être visible",
    color: "border-gray-200",
    features: [
      "Fiche établissement sur la carte",
      "Horaires et infos de base",
      "Publication d'événements (3/mois)",
      "Profil visible par tous les utilisateurs",
    ],
    cta: "Créer ma fiche",
    ctaStyle: "border border-[#2B4E93] text-[#2B4E93] hover:bg-[#2B4E93] hover:text-white",
    popular: false,
  },
  {
    name: "Pro",
    price: "29 €",
    period: "/ mois",
    desc: "Pour les établissements qui veulent performer",
    color: "border-[#2B4E93]",
    features: [
      "Tout ce qui est inclus dans Gratuit",
      "Événements illimités",
      "Mise en avant prioritaire sur la carte",
      "Alertes push à tes abonnés",
      "Statistiques de vues et d'engagement",
      "Badge \"établissement vérifié\"",
      "Accès au tableau de bord analytique",
    ],
    cta: "Démarrer l'essai gratuit",
    ctaStyle: "bg-[#2B4E93] text-white hover:bg-[#1e3a70]",
    popular: true,
  },
  {
    name: "Spotlight",
    price: "79 €",
    period: "/ mois",
    desc: "Pour être le numéro 1 de ta zone",
    color: "border-[#F97316]",
    features: [
      "Tout ce qui est inclus dans Pro",
      "Pin ⚡ Spotlight sur la carte (position top)",
      "Recommandé aux utilisateurs Jovial+",
      "Push notifications à toute la ville",
      "Encart publicité en page d'accueil",
      "Support dédié & onboarding personnalisé",
    ],
    cta: "Nous contacter",
    ctaStyle: "bg-[#F97316] text-white hover:bg-orange-600",
    popular: false,
  },
];

const benefits = [
  {
    icon: Users,
    title: "Touche ta cible",
    desc: "Des milliers de noctambules locaux qui cherchent où sortir ce soir — exactement les personnes que tu veux attirer.",
  },
  {
    icon: Bell,
    title: "Notifie tes abonnés",
    desc: "Publie un événement et envoie une notification directe aux utilisateurs qui ont mis ton bar en favori.",
  },
  {
    icon: TrendingUp,
    title: "Mesure ton impact",
    desc: "Vues de ta fiche, clics sur les événements, nouveaux abonnés — suis tes performances en temps réel.",
  },
  {
    icon: Star,
    title: "Booste ta visibilité",
    desc: "Avec Pro et Spotlight, ton établissement remonte dans les résultats et apparaît en premier sur la carte.",
  },
  {
    icon: BarChart3,
    title: "Publie sans limite",
    desc: "Soirées, concerts, happenings, DJ sets — publie autant d'événements que tu veux avec l'offre Pro.",
  },
  {
    icon: Mail,
    title: "Accompagnement inclus",
    desc: "Notre équipe t'aide à optimiser ta fiche et à tirer le meilleur de Jovial pour ton établissement.",
  },
];

export default function EtablissementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0f1c38] text-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F97316] rounded-full blur-[100px] opacity-15 -translate-y-1/2 translate-x-1/3" />

        {/* Bouton Se connecter */}
        <div className="absolute top-6 right-6">
          <a
            href="https://pro.getjovial.fr/establishment/login"
            className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
          >
            Se connecter →
          </a>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20">
            🏪 Pour les établissements
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Mets ton bar{" "}
            <span className="text-[#F97316]">sous les projecteurs</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Rejoins Jovial et connecte ton établissement à des milliers de noctambules qui cherchent où sortir ce soir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pro.getjovial.fr/establishment/signup"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 transition-colors text-lg"
            >
              Inscrire mon établissement
            </a>
            <a
              href="https://pro.getjovial.fr/establishment/login"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-colors text-lg border border-white/20"
            >
              J&apos;ai déjà un compte
            </a>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#2B4E93] text-sm font-bold uppercase tracking-widest">Pourquoi Jovial ?</span>
            <h2 className="text-3xl font-bold mt-3">Tout ce que tu gagnes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-gray-50 rounded-2xl p-6">
                  <div className="w-11 h-11 bg-[#2B4E93]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#2B4E93]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 px-6 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#2B4E93] text-sm font-bold uppercase tracking-widest">Tarifs</span>
            <h2 className="text-3xl font-bold mt-3 mb-4">Simple et transparent</h2>
            <p className="text-gray-500">Sans engagement. Résiliable à tout moment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 flex flex-col ${plan.popular ? "shadow-xl scale-[1.02]" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2B4E93] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Le plus populaire
                  </div>
                )}
                <div className="mb-6">
                  <p className="font-bold text-lg text-gray-900">{plan.name}</p>
                  <div className="flex items-end gap-1 mt-2">
                    <p className="text-4xl font-black text-gray-900">{plan.price}</p>
                    {plan.period && <p className="text-gray-400 text-sm mb-1">{plan.period}</p>}
                  </div>
                  <p className="text-gray-500 text-sm mt-2">{plan.desc}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check size={15} className={`shrink-0 mt-0.5 ${i === 0 && plan.name !== "Gratuit" ? "text-gray-400" : "text-green-500"}`} />
                      <span className={`${i === 0 && plan.name !== "Gratuit" ? "text-gray-400" : "text-gray-700"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:contact@jovial.app?subject=Offre%20Pro%20Jovial%20-%20Établissement"
                  className={`block text-center font-semibold py-3 rounded-xl transition-colors ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA contact */}
      <section className="py-20 px-6 bg-[#2B4E93] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Une question ? On est là.</h2>
          <p className="text-white/70 mb-8">
            Notre équipe te répond sous 24h pour t&apos;aider à choisir la formule adaptée et intégrer ton établissement.
          </p>
          <a
            href="mailto:contact@jovial.app?subject=Question%20établissement"
            className="inline-flex items-center gap-2 bg-white text-[#2B4E93] font-bold px-8 py-4 rounded-2xl hover:bg-white/90 transition-colors"
          >
            <Mail size={18} />
            contact@jovial.app
          </a>
        </div>
      </section>
    </>
  );
}
