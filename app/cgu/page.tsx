import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Jovial",
  description: "Les conditions générales d'utilisation du service Jovial.",
};

export default function CguPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-[#1a2238]">
      <h1 className="text-3xl md:text-4xl font-black mb-2">Conditions générales d&apos;utilisation</h1>
      <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : 7 octobre 2026</p>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 1 — Objet</h2>
        <p className="text-gray-700 leading-relaxed">
          Les présentes Conditions Générales d&apos;Utilisation (les « CGU ») définissent les conditions
          dans lesquelles vous pouvez accéder et utiliser l&apos;application mobile Jovial et le site
          getjovial.fr (ensemble, le « Service »), édités par la société Jovial. Toute utilisation du
          Service suppose l&apos;acceptation pleine et entière des présentes CGU. Si vous ne les acceptez
          pas, vous ne devez pas utiliser le Service.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 2 — Éditeur</h2>
        <p className="text-gray-700 leading-relaxed">
          Le Service est édité par la société Jovial, SASU au capital de 1 000 euros, immatriculée au RCS
          de Saint-Brieuc sous le SIREN 109 781 906, siège social 1 rue des Salicornes, 22120 Yffiniac
          (France). Contact :{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
          Les informations complètes figurent dans les{" "}
          <a className="text-[#2B4E93] underline" href="/mentions-legales">mentions légales</a>.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 3 — Définitions</h2>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
          <li><strong>Utilisateur :</strong> toute personne qui accède au Service ou y crée un compte.</li>
          <li><strong>Compte :</strong> l&apos;espace personnel créé pour accéder aux fonctionnalités.</li>
          <li><strong>Contenu :</strong> toute information publiée par un Utilisateur (message, photo, avis, réaction, sondage, publication…).</li>
          <li><strong>Organisateur :</strong> un établissement, une association, une collectivité ou tout partenaire proposant un lieu, un événement, une activité, une réservation ou une billetterie via le Service.</li>
          <li><strong>Jovial+ :</strong> l&apos;offre d&apos;abonnement payant donnant accès à des fonctionnalités additionnelles.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 4 — Acceptation et modification des CGU</h2>
        <p className="text-gray-700 leading-relaxed">
          Vous acceptez les CGU lors de la création de votre compte et à chaque utilisation du Service.
          Jovial peut les modifier pour tenir compte de l&apos;évolution du Service ou de la
          réglementation. En cas de modification substantielle, vous en êtes informé par un moyen
          approprié. La poursuite de l&apos;utilisation après l&apos;entrée en vigueur des CGU modifiées
          vaut acceptation.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 5 — Accès au Service et compte</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Âge minimum.</strong> Le Service est réservé aux personnes âgées d&apos;au moins 15 ans.
          En dessous de cet âge, l&apos;autorisation du titulaire de l&apos;autorité parentale est requise
          dans les conditions prévues par la loi.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Création du compte.</strong> Vous pouvez créer un compte via une adresse électronique ou
          un fournisseur d&apos;authentification (Google, Apple). Vous vous engagez à fournir des
          informations exactes, à ne créer qu&apos;un seul compte et à préserver la confidentialité de vos
          identifiants. Vous êtes responsable de toute activité réalisée depuis votre compte. En cas
          d&apos;utilisation non autorisée, prévenez-nous à hello@getjovial.fr.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 6 — Description du Service</h2>
        <p className="text-gray-700 leading-relaxed">
          Jovial permet notamment de découvrir des lieux, événements et activités à proximité,
          d&apos;interagir avec une communauté (amis, clubs, publications, messagerie), d&apos;organiser et
          de rejoindre des sorties, de réserver ou d&apos;acheter des billets, et de souscrire à
          l&apos;offre Jovial+. Le Service est susceptible d&apos;évoluer.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 7 — Contenus publiés par les Utilisateurs</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Responsabilité.</strong> Vous êtes seul responsable des Contenus que vous publiez et
          garantissez disposer des droits nécessaires sur ceux-ci.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Contenus interdits — tolérance zéro.</strong> Il est strictement interdit de publier des
          Contenus illicites, diffamatoires, injurieux, haineux, discriminatoires ou incitant à la haine
          ou à la violence ; constitutifs de harcèlement, de menace ou d&apos;atteinte à la vie privée ;
          à caractère pornographique ou contraire à la dignité humaine ; portant atteinte aux droits de
          propriété intellectuelle ; comportant des données personnelles de tiers sans autorisation ; ou
          trompeurs, frauduleux ou relevant du spam. Jovial applique une tolérance zéro à l&apos;égard des
          contenus offensants et peut retirer tout Contenu contraire aux CGU ou à la loi, sans préavis.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Licence.</strong> En publiant un Contenu, vous concédez à Jovial une licence non
          exclusive, gratuite et mondiale permettant d&apos;héberger, reproduire, afficher et diffuser ce
          Contenu aux seules fins de fournir et promouvoir le Service. Cette licence prend fin à la
          suppression du Contenu ou du compte, sous réserve des besoins de sécurité, de preuve ou des
          obligations légales.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 8 — Modération, signalement et sanctions</h2>
        <p className="text-gray-700 leading-relaxed">
          Le Service met à votre disposition des outils pour signaler un Contenu ou un Utilisateur,
          bloquer un Utilisateur et masquer des Contenus. Jovial peut modérer, retirer des Contenus,
          avertir, suspendre ou supprimer un compte en cas de manquement aux CGU ou à la loi, dans le
          respect de la réglementation applicable, notamment le règlement (UE) 2022/2065 sur les services
          numériques (DSA).
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 9 — Jovial+ (abonnement payant)</h2>
        <p className="text-gray-700 leading-relaxed">
          Jovial+ donne accès à des fonctionnalités additionnelles décrites dans l&apos;application. Il est
          souscrit et géré via votre compte App Store (Apple) ou Google Play (Google). Le prix, toutes
          taxes comprises, est indiqué avant la souscription. Sauf indication contraire,
          l&apos;abonnement est à reconduction automatique et se renouvelle sauf désactivation au moins
          24 heures avant la fin de la période en cours ; la gestion et la résiliation s&apos;effectuent
          dans les réglages de votre compte App Store ou Google Play. L&apos;abonnement donnant accès à un
          contenu numérique fourni immédiatement, vous demandez son exécution immédiate et renoncez à
          votre droit de rétractation dès le début de cette exécution (art. L.221-28 du code de la
          consommation).
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 10 — Billetterie, réservations et offres</h2>
        <p className="text-gray-700 leading-relaxed">
          Pour les billets, réservations et offres proposés par un Organisateur, Jovial agit en qualité
          d&apos;intermédiaire technique ; l&apos;Organisateur demeure responsable de son événement, de sa
          prestation ou de son offre (description, tenue, accès, annulation et remboursement).
          Lorsqu&apos;un paiement en ligne est requis — notamment pour les billets payants, les bons plans,
          ou les réservations pour lesquelles l&apos;établissement demande un prépaiement — il est traité
          par Stripe ; Jovial ne stocke aucune donnée de carte bancaire et peut percevoir une commission.
          De nombreuses réservations sont gratuites et ne donnent lieu à aucun paiement en ligne. Les
          conditions d&apos;annulation et de remboursement sont celles de l&apos;Organisateur, à qui toute
          réclamation relative à un événement doit être adressée en priorité.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 11 — Propriété intellectuelle</h2>
        <p className="text-gray-700 leading-relaxed">
          La marque « Jovial », le personnage « Jovi », les logos, l&apos;interface, les textes, graphismes
          et éléments du Service sont la propriété exclusive de Jovial ou de ses partenaires. Jovial vous
          concède un droit d&apos;utilisation personnel, non exclusif et non transférable du Service. Toute
          reproduction, représentation ou exploitation non autorisée est interdite.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 12 — Données personnelles</h2>
        <p className="text-gray-700 leading-relaxed">
          Le traitement de vos données est décrit dans la{" "}
          <a className="text-[#2B4E93] underline" href="/confidentialite">politique de confidentialité</a>,
          accessible depuis le Service.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 13 — Responsabilité</h2>
        <p className="text-gray-700 leading-relaxed">
          Le Service est fourni « en l&apos;état ». Jovial met en œuvre des moyens raisonnables pour en
          assurer le bon fonctionnement, sans garantir une disponibilité ou une absence d&apos;erreur
          permanentes. Jovial n&apos;est pas responsable des Contenus publiés par les Utilisateurs, des
          événements et offres proposés par les Organisateurs, ni des interactions, rencontres et sorties
          entre Utilisateurs, qui relèvent de votre seule responsabilité et pour lesquelles il vous
          appartient de faire preuve de prudence. Dans les limites permises par la loi, la responsabilité
          de Jovial est limitée aux dommages directs et prévisibles ; aucune stipulation ne vise à exclure
          la responsabilité de Jovial lorsque la loi l&apos;interdit, notamment à l&apos;égard des
          consommateurs.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 14 — Disponibilité et évolution du Service</h2>
        <p className="text-gray-700 leading-relaxed">
          Jovial peut faire évoluer, suspendre ou interrompre tout ou partie du Service, notamment pour
          des raisons de maintenance, de sécurité ou d&apos;évolution technique, en s&apos;efforçant de
          limiter les désagréments.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 15 — Durée, résiliation et suppression du compte</h2>
        <p className="text-gray-700 leading-relaxed">
          Les présentes CGU s&apos;appliquent pendant toute la durée d&apos;utilisation du Service. Vous
          pouvez supprimer votre compte à tout moment depuis les réglages de l&apos;application
          (« Supprimer mon compte »). Jovial peut suspendre ou supprimer un compte en cas de manquement aux
          CGU ou à la loi.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Article 16 — Droit applicable et règlement des litiges</h2>
        <p className="text-gray-700 leading-relaxed">
          Les présentes CGU sont régies par le droit français. En cas de litige, contactez d&apos;abord{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>{" "}
          afin de rechercher une solution amiable. Conformément au code de la consommation, vous pouvez
          recourir gratuitement au médiateur de la consommation dont relève Jovial :
        </p>
        <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200">
          <strong>CM2C — Centre de la Médiation de la Consommation de Conciliateurs de Justice</strong>
          <br />
          49 rue de Ponthieu, 75008 Paris — Tél. : 01 89 47 00 14 — SIRET : 831 213 871 00021
        </p>
        <p className="text-gray-700 leading-relaxed">
          Vous pouvez également recourir à la plateforme européenne de règlement en ligne des litiges
          (ec.europa.eu/consumers/odr). À défaut de résolution amiable, les tribunaux compétents sont
          ceux désignés par les règles de droit applicables, notamment protectrices du consommateur.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Article 17 — Contact</h2>
        <p className="text-gray-700 leading-relaxed">
          Pour toute question relative aux présentes CGU :{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
        </p>
      </section>
    </main>
  );
}
