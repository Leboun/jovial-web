import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Jovial",
  description: "Comment Jovial collecte, utilise et protège tes données personnelles (RGPD).",
};

export default function ConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-[#1a2238]">
      <h1 className="text-3xl md:text-4xl font-black mb-2">Politique de confidentialité</h1>
      <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : juin 2026</p>

      <div className="rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm px-4 py-3 mb-10">
        Document provisoire fourni à titre indicatif. Il doit être complété et validé par un
        conseil juridique (DPO / avocat) avant la mise en service publique.
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        Chez Jovial, on attache une grande importance à la protection de tes données. Cette page
        explique simplement quelles données on collecte, pourquoi, et quels sont tes droits.
      </p>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">1. Responsable du traitement</h2>
        <p className="text-gray-700 leading-relaxed">
          Le responsable du traitement est Jovial — <em>[À COMPLÉTER : entité juridique et adresse]</em>.
          Contact : <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">2. Données collectées</h2>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
          <li><strong>Compte</strong> : prénom, pseudo, adresse e-mail.</li>
          <li><strong>Profil</strong> : photo, bio, ville et, de façon <em>facultative</em>, date de naissance et genre.</li>
          <li><strong>Localisation</strong> : uniquement si tu l'autorises, pour t'afficher les lieux et événements à proximité.</li>
          <li><strong>Usage</strong> : favoris, réservations, participations aux événements, clubs, messages.</li>
          <li><strong>Données techniques</strong> : type d'appareil, identifiant de notification, journaux de connexion.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">3. Finalités &amp; bases légales</h2>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
          <li>Fournir et améliorer le service — <em>exécution du contrat</em>.</li>
          <li>Géolocalisation et notifications push — <em>ton consentement</em> (révocable à tout moment).</li>
          <li>Recommandations et personnalisation — <em>intérêt légitime</em>.</li>
          <li>Sécurité, prévention de la fraude et obligations légales — <em>intérêt légitime / obligation légale</em>.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">4. Destinataires</h2>
        <p className="text-gray-700 leading-relaxed">
          Tes données ne sont jamais vendues. Elles peuvent être traitées par nos prestataires
          techniques agissant pour notre compte : hébergement et base de données, envoi d'e-mails,
          notifications push et gestion des abonnements (Apple App Store / Google Play).
          <em> [À COMPLÉTER : liste précise des sous-traitants]</em>.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">5. Durée de conservation</h2>
        <p className="text-gray-700 leading-relaxed">
          Tes données sont conservées tant que ton compte est actif, puis supprimées ou anonymisées
          dans un délai raisonnable après la suppression de ton compte, sauf obligation légale de
          conservation.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">6. Tes droits</h2>
        <p className="text-gray-700 leading-relaxed">
          Conformément au RGPD, tu disposes d'un droit d'accès, de rectification, d'effacement, de
          portabilité et d'opposition. Tu peux exercer la plupart de ces droits directement dans
          l'application (<strong>Profil → Réglages</strong> : export ou suppression de compte), ou en
          nous écrivant à <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
          Tu peux aussi introduire une réclamation auprès de la CNIL (cnil.fr).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Cookies</h2>
        <p className="text-gray-700 leading-relaxed">
          Le site getjovial.fr utilise des cookies strictement nécessaires à son fonctionnement.
          <em> [À COMPLÉTER : mesure d'audience / cookies tiers le cas échéant, avec recueil du consentement]</em>.
        </p>
      </section>
    </main>
  );
}
