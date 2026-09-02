import { Check, MapPin, Ticket, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FlipCard from "@/components/FlipCard";

export const metadata: Metadata = {
  title: "Jovial pour les associations — Visibilité locale & billetterie",
  description:
    "Inscris ton association sur Jovial : fiche visible sur la carte, événements, billetterie gratuite ou payante et Club Jovial pour recruter des bénévoles. Offre découverte gratuite.",
  alternates: { canonical: "/associations" },
  openGraph: {
    title: "Jovial pour les associations — Visibilité locale & billetterie",
    description:
      "Inscris ton association sur Jovial : fiche sur la carte, événements, billetterie gratuite ou payante et Club Jovial. Offre découverte gratuite.",
    url: "https://www.getjovial.fr/associations",
    siteName: "Jovial",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/hero-bg.jpg", width: 1200, height: 630, alt: "Jovial pour les associations" }],
  },
};

const plans = [
  {
    name: "Asso Découverte",
    badge: null,
    tagline: "Ta vitrine gratuite",
    price: "0 €",
    period: "",
    desc: "Pour exister sur Jovial, afficher ta fiche et publier ton premier événement de l'année — sans rien payer.",
    color: "border-gray-200",
    popular: false,
    features: [
      "Ta fiche dans l'annuaire : activités, horaires, contact",
      "Visible par tous ceux qui cherchent une sortie près de chez eux",
      "Ton épingle sur la carte pendant tes événements (le temps de l'événement)",
      "Ton premier événement de l'année dans l'agenda Jovial",
      "Billetterie intégrée : billets gratuits ou payants, QR scanné à l'entrée",
    ],
    cta: "Commencer gratuitement",
    ctaHref: "https://pro.getjovial.fr/establishment/asso/offers",
    ctaStyle: "border border-[#2B4E93] text-[#2B4E93] hover:bg-[#2B4E93] hover:text-white",
  },
  {
    name: "Asso Active",
    badge: "Recommandée",
    tagline: "Recrute et anime ta communauté",
    price: "90 €",
    period: "/ an",
    desc: "Pour te faire repérer sur la carte, rythmer ta saison et fédérer tes membres et bénévoles.",
    color: "border-[#2B4E93]",
    popular: true,
    features: [
      "Tout ce qui est inclus dans Découverte",
      "Ton épingle sur la carte en permanence : on te repère au premier coup d'œil",
      "Jusqu'à 6 événements par an pour rythmer ta saison",
      "Ton Club Jovial : fédère tes membres et recrute des bénévoles",
    ],
    cta: "Choisir Active",
    ctaHref: "https://pro.getjovial.fr/establishment/asso/offers",
    ctaStyle: "bg-[#2B4E93] text-white hover:bg-[#1e3a70]",
  },
  {
    name: "Asso Rayonnement",
    badge: "Le plus complet",
    tagline: "Fais vivre toute ta commune",
    price: "190 €",
    period: "/ an",
    desc: "Pour programmer sans limite, être mis en avant dans toute ta région et suivre ce qui marche.",
    color: "border-[#5CB6AC]",
    popular: false,
    features: [
      "Tout ce qui est inclus dans Active",
      "Événements illimités : programme autant que tu veux",
      "Un événement mis en avant chaque semestre, vu par toute ta région",
      "Tes statistiques de fréquentation pour voir ce qui marche",
    ],
    cta: "Choisir Rayonnement",
    ctaHref: "https://pro.getjovial.fr/establishment/asso/offers",
    ctaStyle: "bg-[#5CB6AC] text-white hover:bg-[#4aa39a]",
  },
];

const highlights = [
  {
    icon: MapPin,
    title: "Sur la carte, au bon moment",
    desc: "Quelqu'un cherche quoi faire ce week-end près de chez lui — ta fiche et tes événements apparaissent, sans qu'il ait à te connaître à l'avance.",
  },
  {
    icon: Ticket,
    title: "Billetterie gratuite ou payante",
    desc: "Loto, concert, repas, tournoi : distribue des billets gratuits pour gérer ta jauge, ou encaisse en ligne. Billets à QR code, scannés à l'entrée depuis ton téléphone.",
  },
  {
    icon: Users,
    title: "Ton Club Jovial pour tes bénévoles",
    desc: "Fédère tes membres, publie tes annonces et recrute des bénévoles au même endroit — un mini réseau social rien que pour ta communauté.",
  },
];

export default function AssociationsPage() {
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
              🤝 Pour les associations
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Ton association mérite{" "}
              <span className="text-[#8FD9CF]">d&apos;être connue.</span>
            </h1>
            <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Sport, culture, solidarité, comité des fêtes… Jovial met ton association et tes événements sous les yeux des habitants qui cherchent quoi faire près de chez eux — et te donne une billetterie clé en main. Gratuit pour commencer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://pro.getjovial.fr/establishment/asso/offers"
                className="inline-flex items-center justify-center gap-2 bg-[#5CB6AC] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#4aa39a] transition-colors text-lg"
              >
                Inscrire mon association
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
              Fais connaître ton asso, remplis tes événements.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FlipCard
              icon="📍"
              title="Repérable sur la carte"
              desc="Un habitant ouvre Jovial pour trouver une sortie près de chez lui — ton association apparaît sur la carte, sans qu'il ait à te chercher."
              accent="#2B4E93"
              footer="Épingle permanente dès Asso Active · pendant tes événements en gratuit"
            />
            <FlipCard
              icon="🎟️"
              title="Billetterie gratuite ou payante"
              desc="Loto, concert, repas de quartier, tournoi… Distribue des billets gratuits pour gérer ta jauge, ou encaisse en ligne. QR code scanné à l'entrée depuis ton téléphone."
              accent="#2B4E93"
            />
            <FlipCard
              icon="🔔"
              title="Tes fans notifiés en un clic"
              desc="Publie un événement → les habitants qui t'ont mise en favori reçoivent une notification. Pas d'algorithme, pas de pub à payer : tu touches directement ta communauté."
              accent="#2B4E93"
            />
            <FlipCard
              icon="🤝"
              title="Ton Club Jovial pour tes bénévoles"
              desc="Fédère tes membres, publie tes annonces et recrute des bénévoles au même endroit — un espace communautaire rien que pour ton asso."
              accent="#2B4E93"
              footer="Inclus à partir d'Asso Active"
            />
            <FlipCard
              icon="📅"
              title="Publie et anime tes événements"
              desc="Vide-greniers, spectacles, initiations, assemblées… Un agenda clair, et des rappels automatiques envoyés à tes participants pour que personne n'oublie."
              accent="#2B4E93"
              footer="Illimités avec Rayonnement"
            />
            <FlipCard
              icon="🎉"
              title="Gratuit pour commencer"
              desc="L'offre Découverte est gratuite, à vie : ta fiche, ta visibilité et ton premier événement de l'année, sans sortir un centime."
              accent="#2B4E93"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black mt-2 mb-3 bg-gradient-to-r from-[#2B4E93] to-[#5CB6AC] bg-clip-text text-transparent leading-tight uppercase">
              Les mêmes outils que les pros, pour ton asso
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Visibilité, événements et billetterie — pensés pour la vie associative, à un prix associatif.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((f) => {
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
              Un tarif pensé pour les assos
            </h2>
            <p className="text-gray-600">Commence gratuitement, passe à une offre supérieure quand tu veux.</p>
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
                    style={{ backgroundColor: plan.name === "Asso Rayonnement" ? "#5CB6AC" : "#2B4E93" }}
                  >
                    {plan.name === "Asso Rayonnement" ? "✦" : "★"} {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <p className="font-bold text-lg text-gray-900">{plan.name}</p>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-0.5">{plan.tagline}</p>
                  <div className="flex items-end gap-1 mt-3">
                    <p className="text-4xl font-black text-gray-900">{plan.price}</p>
                    {plan.period && <p className="text-gray-400 text-sm mb-1">{plan.period}</p>}
                  </div>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">{plan.desc}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        size={15}
                        className={`shrink-0 mt-0.5 ${i === 0 && plan.name !== "Asso Découverte" ? "text-gray-400" : "text-green-500"}`}
                      />
                      <span className={`${i === 0 && plan.name !== "Asso Découverte" ? "text-gray-400" : "text-gray-700"}`}>
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
          <p className="text-center text-gray-400 text-sm mt-8 max-w-2xl mx-auto">
            À l&apos;inscription, on te demande ton numéro RNA (le numéro de ton association au répertoire national) pour vérifier qu&apos;il s&apos;agit bien d&apos;une association.
          </p>
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
                q: "C'est vraiment gratuit ?",
                a: "Oui. L'offre Asso Découverte est gratuite et sans limite de durée : ta fiche dans l'annuaire, ta visibilité auprès des habitants et ton premier événement de l'année, sans rien payer. Tu passes à Asso Active (90 €/an) ou Rayonnement (190 €/an) seulement si tu veux l'épingle sur la carte, plus d'événements et le Club Jovial.",
              },
              {
                q: "Quels types d'associations peuvent s'inscrire ?",
                a: "Toutes : sport, musique, culture, vie locale, loisirs, solidarité, environnement, économie sociale, comités des fêtes… Si ton association organise des activités ou des événements ouverts au public, Jovial est fait pour toi.",
              },
              {
                q: "Comment inscrire mon association ?",
                a: "Clique sur \"Inscrire mon association\", crée ton compte sur Jovial Pro et renseigne ton numéro RNA (le numéro de ton association au répertoire national des associations). Ta fiche apparaît ensuite dans l'application.",
              },
              {
                q: "Comment fonctionne la billetterie pour un loto, un concert ou un repas ?",
                a: "Depuis ton espace, tu crées un événement et tu ajoutes des billets — gratuits (pour gérer ta jauge et les inscriptions) ou payants (encaissés en ligne). Chaque billet a un QR code que tu scannes à l'entrée depuis ton téléphone. Pour les billets payants, tu reçois l'argent sur le compte de l'association.",
              },
              {
                q: "Quelle est la différence avec une inscription établissement ?",
                a: "C'est le même outil, avec des tarifs et un parcours pensés pour les associations : une offre gratuite pour démarrer, un vocabulaire associatif (bénévoles, adhérents) et une vérification par numéro RNA plutôt que par SIRET.",
              },
              {
                q: "Le Club Jovial, c'est quoi ?",
                a: "Un espace communautaire réservé à ton association : tu y publies tes annonces, tu fédères tes membres et tu peux recruter des bénévoles. C'est inclus à partir de l'offre Asso Active.",
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
              Écris-nous et on t&apos;aide à inscrire ton association et à préparer ton premier événement sur Jovial.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
