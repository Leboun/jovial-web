import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Jovial",
  description: "Les conditions générales de vente applicables aux abonnements, à la billetterie et aux offres proposés via Jovial.",
};

export default function CgvPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-[#1a2238]">
      <h1 className="text-3xl md:text-4xl font-black mb-2">Conditions générales de vente</h1>
      <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : 7 octobre 2026</p>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 1 — Objet et vendeur</h2>
        <p className="text-gray-700 leading-relaxed">
          Les présentes Conditions Générales de Vente (les « CGV ») régissent les ventes et souscriptions
          réalisées via l&apos;application mobile Jovial et les sites getjovial.fr et pro.getjovial.fr (le
          « Service »). Le vendeur est la société <strong>Jovial</strong>, SASU au capital de 1 000 euros,
          immatriculée au RCS de Saint-Brieuc sous le SIREN 109 781 906, siège social 1 rue des Salicornes,
          22120 Yffiniac (France) —{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
        </p>
        <p className="text-gray-700 leading-relaxed">Les CGV s&apos;appliquent à quatre types d&apos;opérations :</p>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
          <li><strong>Abonnements professionnels</strong> souscrits par les établissements (B2B) ;</li>
          <li><strong>Offres destinées aux associations</strong> (B2B / sans but lucratif) ;</li>
          <li><strong>Abonnement « Jovial+ »</strong> souscrit par les particuliers (B2C) ;</li>
          <li><strong>Billetterie d&apos;événements et bons plans</strong>, pour lesquels Jovial agit en qualité d&apos;intermédiaire entre un organisateur et un acheteur (voir Article 5).</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Les présentes CGV complètent les{" "}
          <a className="text-[#2B4E93] underline" href="/cgu">conditions générales d&apos;utilisation</a>.
          Le fait de passer commande emporte acceptation pleine et entière des CGV applicables à la date de
          la commande.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 2 — Offres et prix</h2>
        <p className="text-gray-700 leading-relaxed">
          Les prix applicables sont ceux affichés lors de la souscription, dans l&apos;application ou
          l&apos;espace professionnel. Les tarifs ci-dessous sont indiqués à titre indicatif à la date de
          mise à jour des présentes et sont susceptibles d&apos;évoluer.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-[#1a2238]">
                <th className="py-2 pr-4 font-semibold">Offre</th>
                <th className="py-2 pr-4 font-semibold">Bénéficiaire</th>
                <th className="py-2 font-semibold">Tarif indicatif</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 align-top">
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Établissement — Visibilité / Rayonnement / Pro</td>
                <td className="py-2 pr-4">Professionnels</td>
                <td className="py-2">290 € / 490 € / 790 € par an, avec 14 jours d&apos;essai gratuit</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Association — Découverte / Active / Rayonnement</td>
                <td className="py-2 pr-4">Associations</td>
                <td className="py-2">0 € / 90 € / 190 € par an</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Jovial+</td>
                <td className="py-2 pr-4">Particuliers</td>
                <td className="py-2">2,99 € / mois (via l&apos;achat intégré App Store ou Google Play)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Billetterie</td>
                <td className="py-2 pr-4">Acheteurs / organisateurs</td>
                <td className="py-2">Prix fixé par l&apos;organisateur ; commission Jovial de 5 % du prix du billet</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Bons plans</td>
                <td className="py-2 pr-4">Acheteurs / établissements</td>
                <td className="py-2">Prix réduit fixé par l&apos;établissement ; commission Jovial de 10 %</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Sauf mention contraire, les prix sont indiqués toutes taxes comprises. Le montant total dû est
          rappelé avant la validation de la commande.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 3 — Commande et conclusion du contrat</h2>
        <p className="text-gray-700 leading-relaxed">
          Avant de valider sa commande, le client prend connaissance du détail de l&apos;offre et de son
          prix total, et confirme son acceptation des présentes CGV. La vente est conclue lors de la
          confirmation du paiement (ou, pour les établissements, dès la mise en place de la période
          d&apos;essai). Un récapitulatif lui est communiqué par un moyen durable.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 4 — Paiement</h2>
        <p className="text-gray-700 leading-relaxed">
          Les abonnements professionnels, offres associations, billets et bons plans sont réglés en ligne
          via le prestataire <strong>Stripe</strong> (carte bancaire, prélèvement SEPA). L&apos;abonnement
          <strong> Jovial+</strong> est souscrit et facturé via votre compte App Store (Apple) ou Google
          Play (Google), selon les conditions de la boutique concernée. Jovial ne conserve aucune donnée de
          carte bancaire.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 5 — Billetterie et bons plans : rôle d&apos;intermédiaire (place de marché)</h2>
        <p className="text-gray-700 leading-relaxed">
          Pour la billetterie et les bons plans, Jovial agit en qualité d&apos;<strong>intermédiaire
          technique</strong> entre l&apos;<strong>organisateur</strong> (établissement, association ou
          partenaire), qui est le <strong>vendeur</strong> du billet ou de l&apos;offre et l&apos;organisateur
          de la prestation, et l&apos;<strong>acheteur</strong>. Jovial n&apos;est pas l&apos;organisateur de
          l&apos;événement et n&apos;est pas partie à la prestation.
        </p>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
          <li>L&apos;identité de l&apos;organisateur et le prix total sont communiqués à l&apos;acheteur avant l&apos;achat.</li>
          <li>Jovial perçoit une commission (5 % pour la billetterie, 10 % pour les bons plans) ; le solde est reversé à l&apos;organisateur via <strong>Stripe Connect</strong>.</li>
          <li>L&apos;organisateur est seul responsable de la description, de la tenue, de l&apos;accès, de l&apos;annulation et du remboursement de son événement ou de son offre.</li>
          <li>Toute réclamation relative à un événement ou à une offre doit être adressée en priorité à l&apos;organisateur.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Lorsqu&apos;une <strong>réservation</strong> requiert un prépaiement demandé par l&apos;établissement,
          le même modèle d&apos;intermédiaire s&apos;applique (paiement via Stripe, l&apos;établissement
          restant responsable de la prestation). De nombreuses réservations sont toutefois gratuites et ne
          donnent lieu à aucun paiement en ligne.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 6 — Droit de rétractation</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Jovial+ (consommateurs).</strong> Vous disposez en principe d&apos;un délai de
          rétractation de quatorze (14) jours. S&apos;agissant d&apos;un contenu numérique fourni
          immédiatement, vous demandez expressément son exécution immédiate et renoncez à votre droit de
          rétractation dès le début de celle-ci (art. L.221-28 du code de la consommation). La facturation
          et la rétractation peuvent par ailleurs suivre les règles de la boutique (Apple / Google).
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Billetterie et bons plans (consommateurs).</strong> Les billets et offres portant sur des
          activités de loisirs ou des prestations devant être fournies à une date ou une période
          déterminée ne bénéficient pas du droit de rétractation (art. L.221-28, 12° du code de la
          consommation). Les conditions d&apos;annulation et de remboursement sont celles de
          l&apos;organisateur.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Professionnels (établissements / associations).</strong> Les souscriptions
          professionnelles relèvent d&apos;un régime distinct ; le droit de rétractation des consommateurs
          ne s&apos;y applique pas, sauf cas prévus par la loi.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 7 — Durée, reconduction et résiliation</h2>
        <p className="text-gray-700 leading-relaxed">
          Les abonnements sont souscrits pour la durée indiquée lors de la commande. Sauf indication
          contraire, ils se renouvellent par tacite reconduction pour une durée identique, sauf
          résiliation avant l&apos;échéance. Vous êtes informé de l&apos;échéance et de la faculté de ne pas
          reconduire dans les conditions prévues par la loi.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Le client peut résilier depuis son espace (ou son compte App Store / Google Play pour Jovial+)
          ou en écrivant à hello@getjovial.fr. Pour les abonnements de consommateurs souscrits en ligne, un
          moyen de résiliation simple et accessible est mis à disposition, conformément à la
          réglementation applicable.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 8 — Remboursements et annulations</h2>
        <p className="text-gray-700 leading-relaxed">
          Pour la billetterie et les bons plans, les conditions d&apos;annulation et de remboursement sont
          définies par l&apos;organisateur. À titre indicatif, un organisateur peut procéder au
          remboursement, et un acheteur peut en faire la demande dans les limites fixées (par exemple
          jusqu&apos;à un certain délai avant le début de l&apos;événement). En cas d&apos;annulation par
          l&apos;organisateur, celui-ci procède au remboursement. Les éventuels remboursements sont opérés
          via Stripe.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 9 — Facturation</h2>
        <p className="text-gray-700 leading-relaxed">
          Une facture ou un justificatif est émis pour chaque paiement et mis à disposition du client. Les
          pièces comptables sont conservées conformément aux obligations légales.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 10 — Responsabilité</h2>
        <p className="text-gray-700 leading-relaxed">
          Jovial fournit une plateforme de mise en relation, de souscription et de billetterie. Jovial
          n&apos;est pas responsable de la tenue des événements, des prestations ni des offres des
          organisateurs. Dans les limites permises par la loi, la responsabilité de Jovial est limitée aux
          dommages directs et prévisibles ; aucune stipulation ne vise à écarter la responsabilité de
          Jovial lorsque la loi l&apos;interdit, notamment à l&apos;égard des consommateurs.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 11 — Réclamations et médiation de la consommation</h2>
        <p className="text-gray-700 leading-relaxed">
          Pour toute réclamation, contactez d&apos;abord{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
          Conformément au code de la consommation, le consommateur peut recourir gratuitement au médiateur
          de la consommation dont relève Jovial :
        </p>
        <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200">
          <strong>CM2C — Centre de la Médiation de la Consommation de Conciliateurs de Justice</strong>
          <br />
          49 rue de Ponthieu, 75008 Paris — Tél. : 01 89 47 00 14 — SIRET : 831 213 871 00021
        </p>
        <p className="text-gray-700 leading-relaxed">
          Le consommateur peut également recourir à la plateforme européenne de règlement en ligne des
          litiges (ec.europa.eu/consumers/odr).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Article 12 — Droit applicable et litiges</h2>
        <p className="text-gray-700 leading-relaxed">
          Les présentes CGV sont régies par le droit français. À défaut de résolution amiable, les
          tribunaux compétents sont ceux désignés par les règles de droit applicables, notamment celles
          protectrices du consommateur.
        </p>
      </section>
    </main>
  );
}
