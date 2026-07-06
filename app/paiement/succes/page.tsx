// Page d'atterrissage après un PAIEMENT réussi (Stripe Checkout, ouvert depuis l'app) :
// réservation d'activité OU billet d'événement (?type=ticket&event=<id>).
// Le statut arrive tout seul dans l'app (webhook + synchro au retour) ; le bouton
// « Revenir dans Jovial » ouvre l'app via le deep link jovial:// (fiche événement si billet).
export const metadata = {
  title: "Paiement confirmé — Jovial",
  robots: { index: false, follow: false },
};

export default async function PaiementSucces({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; event?: string }>;
}) {
  const params = await searchParams;
  const isTicket = params?.type === "ticket";
  const eventId = /^\d+$/.test(params?.event ?? "") ? params!.event : null;
  const appLink = isTicket && eventId ? `jovial://event/${eventId}` : "jovial://";

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f8faff] px-6">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-200 shadow-sm p-8 text-center">
        <div className="text-5xl mb-4">{isTicket ? "🎟️" : "✅"}</div>
        <h1 className="text-2xl font-black text-gray-900 mb-3">Paiement confirmé !</h1>
        {isTicket ? (
          <p className="text-gray-500 leading-relaxed mb-2">
            Ton billet t&apos;attend dans l&apos;application{" "}
            <span className="font-bold text-gray-900">Jovial</span>, sur la fiche de
            l&apos;événement — et il arrive aussi par mail.
          </p>
        ) : (
          <p className="text-gray-500 leading-relaxed mb-2">
            Ta réservation est payée et confirmée. Tout est déjà à jour dans
            « Mes sorties » de l&apos;application{" "}
            <span className="font-bold text-gray-900">Jovial</span>.
          </p>
        )}
        <a
          href={appLink}
          className="inline-block mt-4 mb-3 w-full rounded-2xl bg-gradient-to-r from-[#2B4E93] to-[#5CB6AC] px-6 py-4 text-white font-extrabold text-base"
        >
          Revenir dans Jovial
        </a>
        <p className="text-sm text-gray-400">Bonne sortie ! 🎉</p>
      </div>
    </main>
  );
}
