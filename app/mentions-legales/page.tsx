import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Jovial",
  description: "Mentions légales du site et de l'application Jovial.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-[#1a2238]">
      <h1 className="text-3xl md:text-4xl font-black mb-2">Mentions légales</h1>
      <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : 27 septembre 2026</p>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">1. Éditeur</h2>
        <p className="text-gray-700 leading-relaxed">
          Le site <strong>getjovial.fr</strong> et l&apos;application <strong>Jovial</strong> sont édités
          par <strong>Jovial</strong>, SASU au capital de 1 000,00 €, immatriculée au RCS de Saint-Brieuc
          sous le SIREN 109 781 906, siège social 1 rue des Salicornes, 22120 Yffiniac (France). TVA
          intracommunautaire : FR78109781906. Email :{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">2. Directeur de la publication</h2>
        <p className="text-gray-700 leading-relaxed">VIALETTE Esteban, représentant légal.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">3. Hébergement</h2>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
          <li>
            <strong>Site web :</strong> Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
            États-Unis — contact : privacy@vercel.com —{" "}
            <a className="text-[#2B4E93] underline" href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>.
          </li>
          <li>
            <strong>Base de données et back-end de l&apos;application :</strong> Supabase, Inc. —
            infrastructure Amazon Web Services (AWS), région Union européenne (Suède) —{" "}
            <a className="text-[#2B4E93] underline" href="https://supabase.com/privacy" target="_blank" rel="noreferrer">supabase.com</a>.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">4. Distribution</h2>
        <p className="text-gray-700 leading-relaxed">
          Application distribuée via l&apos;App Store (Apple Inc.) et Google Play (Google LLC).
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">5. Propriété intellectuelle</h2>
        <p className="text-gray-700 leading-relaxed">
          La marque « Jovial », le personnage « Jovi », les logos et les contenus édités par Jovial sont
          la propriété exclusive de l&apos;éditeur. Toute reproduction ou représentation, totale ou
          partielle, sans autorisation, est interdite.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">6. Données personnelles</h2>
        <p className="text-gray-700 leading-relaxed">
          Les traitements sont décrits dans la{" "}
          <a className="text-[#2B4E93] underline" href="/confidentialite">politique de confidentialité</a>.
          Vous pouvez exercer vos droits (accès, rectification, effacement, etc.) à{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
          Réclamation possible auprès de la CNIL (www.cnil.fr).
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">7. Médiation de la consommation</h2>
        <p className="text-gray-700 leading-relaxed">
          Conformément au code de la consommation, l&apos;éditeur relève du médiateur de la consommation
          suivant :
        </p>
        <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200">
          <strong>CM2C — Centre de la Médiation de la Consommation de Conciliateurs de Justice</strong>
          <br />
          49 rue de Ponthieu, 75008 Paris — Téléphone : 01 89 47 00 14 — SIRET : 831 213 871 00021
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Contact</h2>
        <p className="text-gray-700 leading-relaxed">
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>
        </p>
      </section>
    </main>
  );
}
