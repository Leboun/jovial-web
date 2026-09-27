import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supprimer mon compte — Jovial",
  description: "Comment supprimer votre compte Jovial et les données associées.",
};

export default function SuppressionComptePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-[#1a2238]">
      <h1 className="text-3xl md:text-4xl font-black mb-2">Supprimer mon compte</h1>
      <p className="text-sm text-gray-500 mb-8">Application Jovial, éditée par la société Jovial (SASU).</p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Cette page explique comment supprimer votre compte <strong>Jovial</strong> et les données
        personnelles associées. La suppression est gratuite et peut être demandée à tout moment.
      </p>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Depuis l&apos;application (recommandé)</h2>
        <ol className="list-decimal pl-5 text-gray-700 leading-relaxed space-y-1">
          <li>Ouvrez l&apos;application Jovial et connectez-vous à votre compte.</li>
          <li>Allez dans <strong>Profil</strong> → <strong>Paramètres</strong>.</li>
          <li>Appuyez sur <strong>« Supprimer mon compte »</strong>.</li>
          <li>Confirmez la demande. La suppression est <strong>immédiate et définitive</strong>.</li>
        </ol>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Par e-mail</h2>
        <p className="text-gray-700 leading-relaxed">
          Si vous n&apos;avez plus accès à l&apos;application, écrivez à{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>{" "}
          depuis l&apos;adresse e-mail de votre compte, en indiquant votre demande de suppression. Nous
          la traitons dans un délai d&apos;un mois, conformément au RGPD. Une preuve d&apos;identité peut
          être demandée pour éviter qu&apos;une personne non autorisée agisse à votre place.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Quelles données sont supprimées</h2>
        <p className="text-gray-700 leading-relaxed">
          La suppression efface ou anonymise l&apos;ensemble des données liées à votre compte : profil,
          publications, commentaires, réactions, messages, favoris, abonnements, réservations et
          historique d&apos;utilisation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Données conservées (obligations légales)</h2>
        <p className="text-gray-700 leading-relaxed">
          Certaines données peuvent être conservées lorsque la loi l&apos;impose : notamment les pièces
          comptables et factures liées à un achat, conservées 10 ans au titre des obligations légales.
          Le détail des durées de conservation figure dans notre{" "}
          <a className="text-[#2B4E93] underline" href="/confidentialite">politique de confidentialité</a>.
        </p>
      </section>
    </main>
  );
}
