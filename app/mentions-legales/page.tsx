import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Jovial",
  description: "Mentions légales du site et de l'application Jovial.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-[#1a2238]">
      <h1 className="text-3xl md:text-4xl font-black mb-2">Mentions légales</h1>
      <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : juin 2026</p>

      <div className="rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm px-4 py-3 mb-10">
        Document provisoire fourni à titre indicatif. Il doit être complété et validé par un
        conseil juridique avant la mise en service publique.
      </div>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Éditeur</h2>
        <p className="text-gray-700 leading-relaxed">
          Le site <strong>getjovial.fr</strong> et l'application <strong>Jovial</strong> sont édités par
          Jovial — <em>[À COMPLÉTER : forme juridique (ex. SASU), capital social, n° RCS / SIREN, adresse du siège social]</em>.
          <br />
          Directeur de la publication : <em>[À COMPLÉTER : nom du représentant légal]</em>.
          <br />
          Contact : <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Hébergement du site</h2>
        <p className="text-gray-700 leading-relaxed">
          Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723,
          États-Unis — <a className="text-[#2B4E93] underline" href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>.
          Les données de l'application sont hébergées au sein de l'Union européenne par notre prestataire
          d'infrastructure <em>[À COMPLÉTER : ex. Supabase / région d'hébergement]</em>.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Propriété intellectuelle</h2>
        <p className="text-gray-700 leading-relaxed">
          La marque Jovial, son logo, sa mascotte, ainsi que l'ensemble des contenus du site et de
          l'application (textes, visuels, interface) sont protégés. Toute reproduction ou utilisation
          sans autorisation préalable écrite est interdite.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Contact</h2>
        <p className="text-gray-700 leading-relaxed">
          Pour toute question relative au site ou à l'application, écris-nous à{" "}
          <a className="text-[#2B4E93] underline" href="mailto:hello@getjovial.fr">hello@getjovial.fr</a>.
        </p>
      </section>
    </main>
  );
}
