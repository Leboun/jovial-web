import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Jovial",
  description: "Les conditions générales d'utilisation du service Jovial.",
};

export default function CguPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-[#1a2238]">
      <h1 className="text-3xl md:text-4xl font-black mb-2">Conditions générales d'utilisation</h1>
      <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : juin 2026</p>

      <div className="rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm px-4 py-3 mb-10">
        Document provisoire fourni à titre indicatif. Il doit être complété et validé par un
        conseil juridique avant la mise en service publique.
      </div>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">1. Objet</h2>
        <p className="text-gray-700 leading-relaxed">
          Les présentes conditions régissent l'utilisation de l'application et du site Jovial, qui
          permettent de découvrir des lieux, activités et événements, de les mettre en favori, de
          réserver, et d'interagir au sein de clubs et de messages.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">2. Acceptation</h2>
        <p className="text-gray-700 leading-relaxed">
          En créant un compte ou en utilisant Jovial, tu acceptes les présentes conditions ainsi que
          notre <a className="text-[#2B4E93] underline" href="/confidentialite">politique de confidentialité</a>.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">3. Compte</h2>
        <p className="text-gray-700 leading-relaxed">
          Tu dois fournir des informations exactes et garder tes identifiants confidentiels. Tu es
          responsable de l'activité réalisée depuis ton compte. L'inscription requiert d'avoir l'âge
          minimum légal applicable.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">4. Règles de conduite</h2>
        <p className="text-gray-700 leading-relaxed">
          Tu t'engages à respecter les autres membres et à ne pas publier de contenu illégal,
          haineux, harcelant ou trompeur. Le non-respect de ces règles peut entraîner la suspension
          ou la suppression du compte. Les espaces communautaires (clubs) sont soumis à une charte de
          respect dédiée.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">5. Contenus</h2>
        <p className="text-gray-700 leading-relaxed">
          Tu conserves tes droits sur les contenus que tu publies, et tu accordes à Jovial une licence
          d'utilisation strictement nécessaire au fonctionnement du service. Tu garantis disposer des
          droits sur les contenus partagés.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">6. Abonnement Jovial+</h2>
        <p className="text-gray-700 leading-relaxed">
          Jovial+ est un abonnement facultatif souscrit et géré via l'App Store (Apple) ou Google Play.
          La facturation, le renouvellement et la résiliation sont régis par les conditions de la
          plateforme concernée.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">7. Responsabilité</h2>
        <p className="text-gray-700 leading-relaxed">
          Jovial met en relation des utilisateurs et des établissements mais n'est pas responsable des
          prestations fournies par ces derniers. Le service est fourni « en l'état » ; nous nous
          efforçons d'en assurer la disponibilité sans pouvoir la garantir en continu.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">8. Résiliation</h2>
        <p className="text-gray-700 leading-relaxed">
          Tu peux supprimer ton compte à tout moment depuis l'application (Profil → Réglages). Nous
          pouvons suspendre ou clôturer un compte en cas de manquement aux présentes conditions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Droit applicable</h2>
        <p className="text-gray-700 leading-relaxed">
          Les présentes conditions sont régies par le droit français. Pour toute question :{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
        </p>
      </section>
    </main>
  );
}
