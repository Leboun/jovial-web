import { Check, MapPin, Bell, TrendingUp, Calendar, Users, Star } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FlipCard from "@/components/FlipCard";
import LoopingVideos from "@/components/LoopingVideos";

export const metadata: Metadata = {
  title: "Jovial pour les établissements — Visibilité & outils pro",
  description: "Inscrivez votre établissement sur Jovial, publiez vos événements et boostez votre visibilité auprès de milliers d'utilisateurs locaux.",
};

const plans = [
  {
    name: "Offre Visibilité",
    badge: null,
    tagline: "Présence essentielle",
    price: "290 €",
    period: "/ an",
    saving: null,
    desc: "Pour être présent sur Jovial, afficher ta fiche et publier jusqu'à 4 événements par an.",
    color: "border-gray-200",
    popular: false,
    features: [
      "Fiche établissement complète (photos, horaires, réseaux sociaux)",
      "Apparition sur la carte interactive et les recherches Jovial",
      "1 tag d'activité mis en avant",
      "4 événements par an dans l'agenda Jovial",
      "Gestion des réservations sur Jovial Pro",
      "Avantages exclusifs pour les membres Premium Jovial",
      "Kit de communication inclus",
    ],
    cta: "Choisir Visibilité",
    ctaHref: "https://pro.getjovial.fr/establishment/offers",
    ctaStyle: "border border-[#2B4E93] text-[#2B4E93] hover:bg-[#2B4E93] hover:text-white",
  },
  {
    name: "Offre Rayonnement",
    badge: "Recommandée",
    tagline: "Animation locale",
    price: "490 €",
    period: "/ an",
    saving: "Vous économisez 18%",
    desc: "Pour animer régulièrement ton établissement, engager ta communauté et gagner en visibilité locale.",
    color: "border-[#2B4E93]",
    popular: true,
    features: [
      "Tout ce qui est inclus dans Visibilité",
      "2 tags d'activités mis en avant",
      "Événements illimités dans l'agenda Jovial",
      "Rappels automatiques J-1 et H-1 (réservations & événements)",
      "Accès et animation du Club Jovial",
      "2 passages dans le carrousel Top lieux par an",
      "1 boost Explore (24h dans ta zone) par an",
      "Kit de communication inclus",
    ],
    cta: "Choisir Rayonnement",
    ctaHref: "https://pro.getjovial.fr/establishment/offers",
    ctaStyle: "bg-[#2B4E93] text-white hover:bg-[#1e3a70]",
  },
  {
    name: "Offre Pro",
    badge: "Le plus complet",
    tagline: "Pilotage complet",
    price: "790 €",
    period: "/ an",
    saving: "Vous économisez 18%",
    desc: "Pour piloter ta présence, tes réservations et tes prises de parole avec les outils les plus complets.",
    color: "border-[#5CB6AC]",
    popular: false,
    features: [
      "Tout ce qui est inclus dans Rayonnement",
      "3 tags d'activités mis en avant",
      "Événements illimités + rappels automatiques J-1 et H-1",
      "Club Jovial avec administration complète",
      "6 passages dans le carrousel Top lieux par an",
      "1 boost Explore (24h dans ta zone) par mois",
      "1 notification de proximité ciblée par an (accord utilisateurs)",
      "Reporting analytique sur demande (visibilité, interactions, participation)",
    ],
    cta: "Choisir Pro",
    ctaHref: "https://pro.getjovial.fr/establishment/offers",
    ctaStyle: "bg-[#5CB6AC] text-white hover:bg-[#4aa39a]",
  },
];

const benefits = [
  {
    icon: MapPin,
    title: "Sois visible au bon moment",
    desc: "Quand un utilisateur cherche un lieu, une activité ou un événement près de chez lui, ton établissement apparaît en premier sur la carte Jovial.",
  },
  {
    icon: Bell,
    title: "Notifie ta communauté",
    desc: "Publie un événement ou une nouveauté et tes abonnés reçoivent une notification directe sur leur téléphone — sans algorithme, sans filtre.",
  },
  {
    icon: TrendingUp,
    title: "Mesure ton impact",
    desc: "Vues de ta fiche, clics sur tes événements, nouveaux abonnés — suis tes performances en temps réel depuis ton tableau de bord.",
  },
  {
    icon: Star,
    title: "Remonte dans les résultats",
    desc: "Avec les offres Rayonnement et Pro, ton établissement est mis en avant sur la carte et dans les recherches Jovial de ta zone.",
  },
  {
    icon: Calendar,
    title: "Publie tes événements sans limite",
    desc: "Concerts, tournois, ateliers, happenings… publie autant d'événements que tu veux et rappelle automatiquement tes participants J-1 et H-1.",
  },
  {
    icon: Users,
    title: "Accompagnement inclus",
    desc: "Notre équipe t'aide à optimiser ta fiche, configurer tes outils et tirer le meilleur de Jovial pour ton établissement.",
  },
];

export default function EtablissementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2B4E93] text-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#5CB6AC] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3" />

        <div className="absolute top-6 right-6">
          <a
            href="https://pro.getjovial.fr/establishment/login"
            className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
          >
            Se connecter →
          </a>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20">
            🏪 Pour les établissements
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Mets ton établissement{" "}
            <span className="text-[#5CB6AC]">sous les projecteurs</span>
          </h1>
          <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Rejoins Jovial et connecte ton établissement à des milliers d&apos;utilisateurs locaux qui cherchent des lieux, des activités et des événements près de chez eux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pro.getjovial.fr/establishment/offers"
              className="inline-flex items-center justify-center gap-2 bg-[#5CB6AC] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#4aa39a] transition-colors text-lg"
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

      {/* Bénéfices — Flip cards */}
      <section className="py-20 px-6 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[#5CB6AC] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-[#5CB6AC]" />
              Pourquoi Jovial ?
              <span className="w-6 h-px bg-[#5CB6AC]" />
            </span>
            <h2 className="text-5xl font-black mt-2 mb-3 bg-gradient-to-r from-[#2B4E93] to-[#5CB6AC] bg-clip-text text-transparent leading-tight uppercase">
              Sois là où tes clients te cherchent.
            </h2>
            <p className="text-gray-600 text-sm">Passe ta souris sur chaque carte pour en savoir plus →</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FlipCard
              icon="📍"
              title="Visible sur la carte dès l'inscription"
              desc="Un utilisateur ouvre Jovial pour trouver quelque chose à faire près de chez lui — ton établissement apparaît sur sa carte, sans qu'il ait à te chercher."
              accent="#2B4E93"
            />
            <FlipCard
              icon="🔔"
              title="Tes clients notifiés en un clic"
              desc="Publie un événement → tes abonnés reçoivent une notification push sur leur téléphone. Pas d'algorithme, pas de boost payant à la pièce. Direct."
              accent="#2B4E93"
            />
            <FlipCard
              icon="🎯"
              title="Tes activités, trouvées par les bons clients"
              desc="Fléchettes, palet breton, billard, jeux de société… Chaque activité que tu proposes devient un filtre de recherche sur la carte Jovial."
              accent="#2B4E93"
            />
            <FlipCard
              icon="📅"
              title="Publie autant d'événements que tu veux"
              desc="Concerts, tournois, ateliers, happenings… Rappels automatiques J-1 et H-1 envoyés à tes participants pour que personne n'oublie."
              accent="#2B4E93"
            />
            <FlipCard
              icon="📊"
              title="Suis ce qui attire du monde chez toi"
              desc="Vues, clics, abonnés, réservations — un tableau de bord clair pour piloter ta visibilité et savoir ce qui fonctionne vraiment."
              accent="#2B4E93"
            />
            <FlipCard
              icon="🤝"
              title="On t'accompagne de A à Z"
              desc="Notre équipe configure ta fiche avec toi, te fournit un kit de communication clé en main et reste disponible pour t'aider à performer sur Jovial."
              accent="#2B4E93"
            />
          </div>
        </div>
      </section>

      {/* Vidéo interlude */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0f1c38]">
        <LoopingVideos style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 60%",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to bottom, rgba(15,28,56,0.82) 0%, rgba(43,78,147,0.7) 50%, rgba(15,28,56,0.82) 100%)"
        }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
          <p className="text-4xl md:text-5xl font-black leading-tight mb-5 uppercase">
            Ton établissement mérite d&apos;être découvert.
          </p>
          <p className="text-white/70 text-lg mb-8">
            Rejoins Jovial et sois visible dès aujourd&apos;hui — gratuitement.
          </p>
          <a
            href="https://pro.getjovial.fr/establishment/offers"
            className="inline-flex items-center gap-2 bg-[#5CB6AC] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#4aa39a] transition-colors text-lg"
          >
            Inscrire mon établissement →
          </a>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 px-6 bg-[#f8faff]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[#5CB6AC] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-[#5CB6AC]" />
              Tarifs
              <span className="w-6 h-px bg-[#5CB6AC]" />
            </span>
            <h2 className="text-5xl font-black mt-2 mb-2 bg-gradient-to-r from-[#2B4E93] to-[#5CB6AC] bg-clip-text text-transparent leading-tight uppercase">
              Simple et transparent
            </h2>
            <p className="text-gray-600">Engagement minimum 1 an — paiement annuel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 flex flex-col ${plan.popular ? "shadow-xl scale-[1.02]" : ""}`}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1"
                    style={{ backgroundColor: plan.name === "Offre Pro" ? "#5CB6AC" : "#2B4E93" }}
                  >
                    {plan.name === "Offre Pro" ? "✦" : "★"} {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <p className="font-bold text-lg text-gray-900">{plan.name}</p>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-0.5">{plan.tagline}</p>
                  <div className="flex items-end gap-1 mt-3">
                    <p className="text-4xl font-black text-gray-900">{plan.price}</p>
                    <p className="text-gray-400 text-sm mb-1">{plan.period}</p>
                  </div>
                  {plan.saving && (
                    <span className="inline-block mt-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      {plan.saving}
                    </span>
                  )}
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">{plan.desc}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        size={15}
                        className={`shrink-0 mt-0.5 ${i === 0 && plan.name !== "Offre Visibilité" ? "text-gray-400" : "text-green-500"}`}
                      />
                      <span className={`${i === 0 && plan.name !== "Offre Visibilité" ? "text-gray-400" : "text-gray-700"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  className={`block text-center font-semibold py-3 rounded-xl transition-colors ${plan.ctaStyle}`}
                >
                  {plan.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#5CB6AC] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-[#5CB6AC]" />
              FAQ
              <span className="w-6 h-px bg-[#5CB6AC]" />
            </span>
            <h2 className="text-5xl font-black mt-2 bg-gradient-to-r from-[#2B4E93] to-[#5CB6AC] bg-clip-text text-transparent leading-tight uppercase">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Comment inscrire mon établissement ?",
                a: "Clique sur \"Inscrire mon établissement\", crée ton compte sur Jovial Pro et suis les étapes pour configurer ta fiche. Notre équipe valide ton établissement sous 24h."
              },
              {
                q: "Quelle est la différence entre les 3 offres ?",
                a: "L'offre Visibilité (290€/an) te permet d'être présent sur la carte et de publier jusqu'à 4 événements par an. L'offre Rayonnement (490€/an) inclut des événements illimités, des rappels automatiques J-1/H-1 et un boost de visibilité. L'offre Pro (790€/an) est le pack complet : 3 tags d'activités, boost mensuel Explore, notifications ciblées et reporting analytique."
              },
              {
                q: "Y a-t-il un engagement ?",
                a: "L'engagement minimum est d'1 an, avec paiement annuel. Tu peux évoluer vers une offre supérieure à tout moment."
              },
              {
                q: "Est-ce que Jovial fonctionne pour tous les types d'établissements ?",
                a: "Oui — bars, restaurants, salles de concert, tiers-lieux, guinguettes, clubs de sport, salles d'activités… Jovial est ouvert à tous les lieux qui accueillent du public et organisent des activités ou événements."
              },
              {
                q: "Comment fonctionne le Kit de communication ?",
                a: "Dès ton inscription, tu reçois un kit clé en main : affiche à imprimer, visuels réseaux sociaux, QR code renvoyant vers ta fiche Jovial — tout pour communiquer sur ta présence sur l'app."
              },
              {
                q: "Puis-je gérer plusieurs établissements ?",
                a: "Oui, avec l'offre Pro tu peux administrer plusieurs établissements depuis un seul tableau de bord Jovial Pro."
              },
            ].map((item) => (
              <details key={item.q} className="group bg-gray-50 rounded-2xl px-6 py-5 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  {item.q}
                  <span className="text-[#2B4E93] text-xl font-light ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section className="py-16 px-6 bg-[#2B4E93] text-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Une question ? On est là.</h2>
            <p className="text-white/70 text-lg">
              Notre équipe te répond sous 24h pour t&apos;aider à choisir la formule adaptée et intégrer ton établissement.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

