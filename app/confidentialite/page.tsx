import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Jovial",
  description: "Comment Jovial collecte, utilise et protège vos données personnelles (RGPD).",
};

export default function ConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-[#1a2238]">
      <h1 className="text-3xl md:text-4xl font-black mb-2">Politique de confidentialité</h1>
      <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : 7 octobre 2026</p>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 1 — Qui est responsable de vos données</h2>
        <p className="text-gray-700 leading-relaxed">
          Le responsable des traitements décrits dans la présente politique est la société{" "}
          <strong>Jovial</strong>, éditrice de l&apos;application mobile Jovial et du site getjovial.fr.
        </p>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
          <li><strong>Dénomination sociale :</strong> Jovial</li>
          <li><strong>Forme juridique :</strong> société par actions simplifiée unipersonnelle (SASU)</li>
          <li><strong>Capital social :</strong> 1 000 euros</li>
          <li><strong>RCS :</strong> Saint-Brieuc 109 781 906 — <strong>SIREN :</strong> 109 781 906</li>
          <li><strong>Siège social :</strong> 1 rue des Salicornes, 22120 Yffiniac, France</li>
          <li><strong>Représentant légal :</strong> Esteban Vialette, président</li>
          <li>
            <strong>Adresse électronique :</strong>{" "}
            <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Jovial n&apos;a pas désigné de délégué à la protection des données (DPO). Toute question
          relative à vos données peut être adressée à{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 2 — Responsable de traitement ou sous-traitant selon les services</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Jovial est responsable de traitement</strong> lorsqu&apos;elle détermine elle-même les
          finalités et les moyens du traitement, notamment pour la création et la gestion des comptes,
          le fonctionnement de l&apos;application, la navigation sur le site, les fonctionnalités
          sociales, la sécurité, la prévention de la fraude, le support et les communications propres à
          Jovial.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Jovial peut agir en qualité de sous-traitant</strong> lorsqu&apos;un établissement,
          une association, une collectivité ou un autre partenaire lui confie le traitement de données
          pour son propre compte et selon ses instructions (gestion d&apos;adhérents, réservations,
          billetterie ou messagerie). Dans ce cas, l&apos;organisme concerné demeure responsable du
          traitement correspondant.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 3 — Quelles données sont collectées ?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-[#1a2238]">
                <th className="py-2 pr-4 font-semibold">Catégorie</th>
                <th className="py-2 font-semibold">Exemples et caractère</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 align-top">
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Compte</strong></td>
                <td className="py-2">Nom, prénom, pseudonyme, adresse électronique, identifiant du fournisseur d&apos;authentification (Google, Apple). Nécessaire à la gestion du compte.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Profil</strong></td>
                <td className="py-2">Photo, description, centres d&apos;intérêt, ville, genre. Facultatif.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Profil (espace privé)</strong></td>
                <td className="py-2">Date de naissance, code postal. Facultatif ; stockés dans un espace à accès restreint, non visibles des autres utilisateurs.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Localisation</strong></td>
                <td className="py-2">Position approximative ou précise de l&apos;appareil. Facultatif, soumis à votre autorisation et révocable à tout moment dans les réglages du téléphone.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Réservations et adhésions</strong></td>
                <td className="py-2">Historique des réservations, billets, adhésions, cotisations et statut de paiement.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Paiement</strong></td>
                <td className="py-2">Montant, date, référence de transaction. Les coordonnées bancaires complètes sont traitées directement par le prestataire de paiement ; Jovial ne stocke aucune donnée de carte bancaire.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Contenus</strong></td>
                <td className="py-2">Messages, réactions, avis, photos et autres contenus publiés. Facultatif.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Données techniques</strong></td>
                <td className="py-2">Adresse IP, type d&apos;appareil, système d&apos;exploitation, version de l&apos;application, identifiant de notification push, journaux techniques.</td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><strong>Données d&apos;utilisation</strong></td>
                <td className="py-2">Pages consultées, recherches, interactions et événements techniques.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Jovial ne collecte pas de données appartenant aux catégories particulières visées par
          l&apos;article 9 du RGPD. Évitez de publier des informations sensibles vous concernant ou
          concernant d&apos;autres personnes.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 4 — Pourquoi vos données sont-elles traitées ?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-[#1a2238]">
                <th className="py-2 pr-4 font-semibold">Finalité</th>
                <th className="py-2 font-semibold">Base légale</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 align-top">
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Création et gestion de votre compte</td>
                <td className="py-2">Exécution du contrat (art. 6.1.b)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Fonctionnalités : carte, recherche, réservation, billetterie, adhésion, messagerie, fonctionnalités sociales</td>
                <td className="py-2">Exécution du contrat (art. 6.1.b)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Paiements et facturation</td>
                <td className="py-2">Exécution du contrat (art. 6.1.b) et obligation légale (art. 6.1.c)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Contenus ou établissements proches à partir de votre localisation</td>
                <td className="py-2">Consentement (art. 6.1.a)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Notifications nécessaires au Service (réservations…)</td>
                <td className="py-2">Exécution du contrat (art. 6.1.b)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Notifications promotionnelles et suggestions</td>
                <td className="py-2">Consentement (art. 6.1.a)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Amélioration du Service, statistiques, correction d&apos;anomalies</td>
                <td className="py-2">Intérêt légitime (art. 6.1.f)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Sécurité, prévention de la fraude et modération</td>
                <td className="py-2">Intérêt légitime (art. 6.1.f) et obligations applicables (DSA)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Réponse aux demandes de support</td>
                <td className="py-2">Exécution du contrat ou intérêt légitime</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Respect des obligations légales et demandes des autorités</td>
                <td className="py-2">Obligation légale (art. 6.1.c)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Lorsque le traitement repose sur votre consentement, vous pouvez le retirer à tout moment.
          Le retrait n&apos;affecte pas la licéité des traitements effectués avant ce retrait.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 5 — Qui peut accéder à vos données ?</h2>
        <p className="text-gray-700 leading-relaxed">
          Jovial ne vend ni ne loue vos données. Elles peuvent être accessibles aux personnes
          habilitées de Jovial, à ses prestataires techniques, aux établissements ou partenaires
          lorsque cela est nécessaire à une fonctionnalité que vous utilisez (par exemple, l&apos;achat
          d&apos;un billet transmet à l&apos;organisateur les informations nécessaires), et aux
          autorités lorsque la loi l&apos;exige.
        </p>
        <h3 className="text-base font-semibold pt-1">Prestataires techniques utilisés en production</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-[#1a2238]">
                <th className="py-2 pr-4 font-semibold">Prestataire</th>
                <th className="py-2 pr-4 font-semibold">Rôle</th>
                <th className="py-2 font-semibold">Pays / politique</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 align-top">
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Supabase</strong></td>
                <td className="py-2 pr-4">Base de données, comptes, stockage, fonctions serveur</td>
                <td className="py-2">UE (Suède) — <a className="text-[#2B4E93] underline" href="https://supabase.com/privacy" target="_blank" rel="noreferrer">politique</a></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>OVH</strong></td>
                <td className="py-2 pr-4">Emails et nom de domaine</td>
                <td className="py-2">France — <a className="text-[#2B4E93] underline" href="https://www.ovhcloud.com/fr/personal-data-protection/" target="_blank" rel="noreferrer">politique</a></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Vercel Inc.</strong></td>
                <td className="py-2 pr-4">Hébergement du site, fonctions serveur et mesure d&apos;audience sans cookie</td>
                <td className="py-2">États-Unis — <a className="text-[#2B4E93] underline" href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">politique</a></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Expo</strong></td>
                <td className="py-2 pr-4">Distribution de l&apos;app, mises à jour, relais des notifications push</td>
                <td className="py-2">États-Unis — <a className="text-[#2B4E93] underline" href="https://expo.dev/privacy" target="_blank" rel="noreferrer">politique</a></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Apple</strong></td>
                <td className="py-2 pr-4">Notifications push iOS, distribution App Store</td>
                <td className="py-2">US / Irlande — <a className="text-[#2B4E93] underline" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">politique</a></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Google</strong></td>
                <td className="py-2 pr-4">Push Android (FCM), cartes (Maps), connexion Google</td>
                <td className="py-2">US / Irlande — <a className="text-[#2B4E93] underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">politique</a></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Sentry</strong></td>
                <td className="py-2 pr-4">Rapports de plantage et de performance</td>
                <td className="py-2">UE — <a className="text-[#2B4E93] underline" href="https://sentry.io/privacy/" target="_blank" rel="noreferrer">politique</a></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>Stripe</strong></td>
                <td className="py-2 pr-4">Traitement des paiements (billetterie, offres Pro)</td>
                <td className="py-2">Irlande / US — <a className="text-[#2B4E93] underline" href="https://stripe.com/privacy" target="_blank" rel="noreferrer">politique</a></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4"><strong>RevenueCat</strong></td>
                <td className="py-2 pr-4">Gestion des abonnements in-app (Jovial+)</td>
                <td className="py-2">États-Unis — <a className="text-[#2B4E93] underline" href="https://www.revenuecat.com/privacy" target="_blank" rel="noreferrer">politique</a></td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><strong>Base Adresse Nationale</strong></td>
                <td className="py-2 pr-4">Autocomplétion d&apos;adresses</td>
                <td className="py-2">France (service public)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 6 — Transferts hors de l&apos;Union européenne</h2>
        <p className="text-gray-700 leading-relaxed">
          Jovial privilégie l&apos;hébergement des données dans l&apos;Union européenne. Certains
          prestataires (Vercel, Expo, Apple, Google, Stripe, RevenueCat) sont établis aux États-Unis.
          Ces transferts sont encadrés par des garanties appropriées : le cadre de protection des
          données UE–États-Unis (EU-US Data Privacy Framework) pour les prestataires certifiés
          (notamment Google, Apple, Stripe et Vercel) et/ou les clauses contractuelles types de la
          Commission européenne. Une copie peut être obtenue à{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 7 — Durées de conservation</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-[#1a2238]">
                <th className="py-2 pr-4 font-semibold">Données</th>
                <th className="py-2 font-semibold">Durée</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 align-top">
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Compte et profil</td>
                <td className="py-2">Durée d&apos;utilisation du compte ; effacement immédiat à la suppression, sous réserve des données à conserver légalement.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Compte inactif</td>
                <td className="py-2">Suppression ou anonymisation après 3 ans d&apos;inactivité, après relance préalable.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Contenus publiés et messages</td>
                <td className="py-2">Jusqu&apos;à suppression, fermeture du compte ou besoins de modération, sécurité ou preuve.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Données de localisation</td>
                <td className="py-2">Non conservées au-delà de la durée nécessaire à la fonctionnalité concernée.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Réservations et transactions</td>
                <td className="py-2">Durée nécessaire à la gestion, à la preuve et aux obligations légales.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Pièces comptables et factures</td>
                <td className="py-2">10 ans (obligation légale).</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Journaux techniques</td>
                <td className="py-2">12 mois maximum.</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Trace de modération (versions antérieures de contenus modifiés, contenus signalés)</td>
                <td className="py-2">12 mois, puis suppression automatique.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          <strong>Trace des éditions (modération).</strong> Lorsqu&apos;un contenu public (commentaire
          ou publication) est modifié, sa version précédente est conservée dans un journal de
          modération sécurisé, accessible uniquement aux personnes habilitées, pendant 12 mois au
          maximum, puis supprimée automatiquement. Par respect de la confidentialité des
          correspondances, le contenu des messages privés (conversations individuelles et de groupe)
          n&apos;est pas conservé lors de leur modification ; une copie n&apos;est enregistrée que si
          un message fait l&apos;objet d&apos;un signalement. Vos contenus actifs restent accessibles
          tant que vous ne les supprimez pas et que votre compte est actif.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 8 — Comment vos données sont protégées</h2>
        <p className="text-gray-700 leading-relaxed">
          Jovial met en œuvre des mesures techniques et organisationnelles proportionnées aux risques :
          chiffrement des communications en transit (TLS/HTTPS), protection des données au repos,
          cloisonnement des accès par utilisateur, authentification et contrôle des accès, stockage
          sécurisé des identifiants (mots de passe hachés), sauvegardes, et journalisation lorsque
          nécessaire. En cas de violation susceptible d&apos;engendrer un risque, Jovial procède aux
          notifications requises par le RGPD (CNIL et personnes concernées).
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 9 — Vos droits</h2>
        <p className="text-gray-700 leading-relaxed">
          Conformément au RGPD, vous disposez des droits d&apos;accès, de rectification, d&apos;effacement,
          de limitation, de portabilité, d&apos;opposition, de retrait du consentement, et du droit de
          définir des directives sur le sort de vos données après votre décès.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Directement dans l&apos;application</strong>, vous pouvez à tout moment :{" "}
          <strong>exporter vos données</strong> (Profil → Paramètres → « Exporter mes données ») et{" "}
          <strong>supprimer votre compte</strong> (Profil → Paramètres → « Supprimer mon compte »,
          suppression immédiate).
        </p>
        <p className="text-gray-700 leading-relaxed">
          Vous pouvez aussi écrire à{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
          Jovial répond en principe dans un délai d&apos;un mois. Si vous estimez que vos droits ne sont
          pas respectés, vous pouvez saisir la CNIL (www.cnil.fr).
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 10 — Cookies et autres traceurs</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Site web.</strong> Le site getjovial.fr n&apos;utilise aucun cookie — aucune
          information n&apos;est déposée ni lue sur votre appareil, y compris à des fins publicitaires
          ou de suivi entre sites. La mesure d&apos;audience est réalisée via Vercel Web Analytics, une
          solution sans cookie qui fournit des statistiques agrégées sans suivre les visiteurs entre les
          sites. À ce titre, aucun bandeau de consentement n&apos;est nécessaire.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Application mobile.</strong> L&apos;application n&apos;utilise pas de cookies
          publicitaires. Elle recourt à un stockage technique local nécessaire à son fonctionnement et à
          un identifiant technique de notification push (désactivable dans les réglages du téléphone).
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 11 — Mineurs</h2>
        <p className="text-gray-700 leading-relaxed">
          Le Service est destiné aux personnes âgées de 15 ans et plus. Lorsqu&apos;un traitement repose
          sur le consentement et concerne un enfant de moins de 15 ans, le consentement doit être donné
          ou autorisé conjointement avec le titulaire de l&apos;autorité parentale, conformément au droit
          français. Si vous pensez qu&apos;un compte a été créé en violation de ces règles, contactez{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Article 12 — Modification de la présente politique</h2>
        <p className="text-gray-700 leading-relaxed">
          Jovial peut modifier la présente politique pour tenir compte de l&apos;évolution du Service, de
          ses prestataires ou de la réglementation. En cas de modification substantielle, les
          utilisateurs sont informés par un moyen approprié (courriel ou notification dans
          l&apos;application). La date de dernière mise à jour figure en tête de la présente politique.
        </p>
      </section>
    </main>
  );
}
