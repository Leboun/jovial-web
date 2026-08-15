import { Check, CreditCard, QrCode, RefreshCcw } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FlipCard from "@/components/FlipCard";
import LoopingVideos from "@/components/LoopingVideos";

export const metadata: Metadata = {
  title: "Jovial pour les établissements — Visibilité & outils pro",
  description: "Inscris ton établissement sur Jovial : fiche visible sur la carte, événements, réservations payées en ligne et billetterie clé en main.",
  alternates: { canonical: "/etablissements" },
  openGraph: {
    title: "Jovial pour les établissements — Visibilité & outils pro",
    description: "Inscris ton établissement sur Jovial : fiche visible sur la carte, événements, réservations payées en ligne et billetterie clé en main.",
    url: "https://www.getjovial.fr/etablissements",
    siteName: "Jovial",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/hero-bg.jpg", width: 1200, height: 630, alt: "Jovial pour les établissements" }],
  },
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
      "2 tags d'activités mis en avant",
      "4 événements par an dans l'agenda Jovial",
      "Gestion des réservations sur Jovial Pro",
      "Billetterie d'événements : vente, contrôle des billets et remboursements",
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
    saving: "Tu économises 18 %",
    desc: "Pour animer régulièrement ton établissement, engager ta communauté et gagner en visibilité locale.",
    color: "border-[#2B4E93]",
    popular: true,
    features: [
      "Tout ce qui est inclus dans Visibilité",
      "2 tags d'activités mis en avant",
      "Événements illimités dans l'agenda Jovial",
      "Rappels automatiques J-1 et H-1 (réservations & événements)",
      "Billetterie d'événements : vente, contrôle des billets et remboursements",
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
    saving: "Tu économises 18 %",
    desc: "Pour piloter ta présence, tes réservations et tes prises de parole avec les outils les plus complets.",
    color: "border-[#5CB6AC]",
    popular: false,
    features: [
      "Tout ce qui est inclus dans Rayonnement",
      "3 tags d'activités mis en avant",
      "Événements illimités + rappels automatiques J-1 et H-1",
      "Billetterie d'événements : vente, contrôle des billets et remboursements",
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

const paymentFeatures = [
  {
    icon: CreditCard,
    title: "Réservations payées en ligne",
    desc: "Tes clients réservent et paient directement dans l'app. Tu reçois 95 % du montant sur ton compte bancaire — les 5 % restants couvrent tous les frais, y compris bancaires.",
  },
  {
    icon: QrCode,
    title: "Billetterie d'événements",
    desc: "Vends tes billets dans l'app : billets nominatifs avec QR code, scanner intégré à Jovial Pro pour contrôler l'entrée — par toi ou ton équipe avec des comptes staff.",
  },
  {
    icon: RefreshCcw,
    title: "Remboursements en un clic",
    desc: "Un événement annulé, un imprévu ? Tu rembourses une commande en un clic depuis ton espace, et les billets sont automatiquement invalidés.",
  },
];

export default function EtablissementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2B4E93] via-[#2B4E93] to-[#2F7D73] text-white pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5CB6AC] rounded-full blur-[110px] opacity-25 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#011A5C] rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/4" />

        <div className="absolute top-6 right-6 z-10">
          <a
            href="https://pro.getjovial.fr/establishment/login"
            className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
          >
            Se connecter →
          </a>
        </div>

        <div className="max-w-5xl mx-auto relative flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20">
              🏪 Pour les établissements
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Ton établissement mérite{" "}
              <span className="text-[#8FD9CF]">d&apos;être découvert.</span>
            </h1>
            <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Bar, resto, salle d&apos;activités ou tiers-lieu : Jovial te met sous les yeux de ceux qui cherchent quoi faire près de chez toi — et leur permet de réserver et payer directement dans l&apos;app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          {/* Mascotte — desktop uniquement */}
          <div className="hidden lg:block shrink-0">
            <Image
              src="/mascotte.png"
              alt="La mascotte Jovial"
              width={2953}
              height={3283}
              sizes="260px"
              className="w-[240px] xl:w-[260px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            />
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
              title="Tes fans notifiés en un clic"
              desc="Publie un événement → les utilisateurs qui t'ont mis en favori reçoivent une notification push sur leur téléphone. Pas d'algorithme, pas de pub à payer : tu touches directement ta communauté."
              accent="#2B4E93"
            />
            <FlipCard
              icon="🎯"
              title="Tes activités, trouvées par les bons clients"
              desc="Fléchettes, palet breton, billard, jeux de société… Tes activités ressortent dans la partie Explorer de l'app, là où les utilisateurs choisissent quoi faire."
              accent="#2B4E93"
            />
            <FlipCard
              icon="📅"
              title="Publie et anime tes événements"
              desc="Concerts, tournois, ateliers, happenings… Rappels automatiques J-1 et H-1 envoyés à tes participants pour que personne n'oublie."
              accent="#2B4E93"
              footer="Illimités avec Rayonnement et Pro — 4/an avec Visibilité"
            />
            <FlipCard
              icon="📊"
              title="Pilote tout depuis ton espace Pro"
              desc="Abonnés, réservations, événements, encaissements — un tableau de bord clair pour gérer ta présence Jovial au même endroit."
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

      {/* Paiements & billetterie */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black mt-2 mb-3 bg-gradient-to-r from-[#2B4E93] to-[#5CB6AC] bg-clip-text text-transparent leading-tight uppercase">
              Encaisse en ligne, sans terminal
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Réservations et billets payés directement dans l&apos;app, l&apos;argent versé sur ton compte. Paiements sécurisés par Stripe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paymentFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-[#f8faff] rounded-2xl p-7 border border-gray-100">
                  <div className="w-11 h-11 rounded-xl bg-[#D8F0EE] flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#2F7D73]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
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
            Ils cherchent quoi faire. <span className="text-[#8FD9CF]">Fais-toi trouver.</span>
          </p>
          <p className="text-white/70 text-lg mb-8">
            Rejoins Jovial et sois visible dès aujourd&apos;hui — 14 jours d&apos;essai offerts.
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
            <p className="text-gray-600">Engagement minimum 1 an — paiement annuel ou mensuel.</p>
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
                a: "L'engagement minimum est d'1 an, avec paiement annuel ou mensuel au choix. Tu peux évoluer vers une offre supérieure à tout moment."
              },
              {
                q: "Est-ce que Jovial fonctionne pour tous les types d'établissements ?",
                a: "Oui — bars, restaurants, salles de concert, tiers-lieux, guinguettes, clubs de sport, salles d'activités… Jovial est ouvert à tous les lieux qui accueillent du public et organisent des activités ou événements."
              },
              {
                q: "Comment fonctionnent la billetterie et le paiement en ligne ?",
                a: "Tu actives le paiement en ligne depuis ton espace Jovial Pro (compte de paiement sécurisé Stripe, création guidée). Tes clients paient leur réservation ou leurs billets directement dans l'app, et tu reçois 95 % du montant sur ton compte bancaire — les 5 % restants couvrent l'ensemble des frais. Pour tes événements : billets nominatifs avec QR code, scanner intégré pour contrôler l'entrée (par toi ou ton staff) et remboursement d'une commande en un clic si besoin."
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

