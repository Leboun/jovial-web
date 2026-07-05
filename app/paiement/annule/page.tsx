// Page d'atterrissage quand le PAIEMENT est abandonné (Stripe Checkout annulé) :
// réservation (reste enregistrée, payable plus tard) OU billet (?type=ticket&event=<id>,
// la place n'est pas décomptée — l'achat peut être relancé depuis la fiche événement).
export const metadata = {
  title: "Paiement annulé — Jovial",
  robots: { index: false, follow: false },
};

export default async function PaiementAnnule({
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
        <div className="text-5xl mb-4">💳</div>
        <h1 className="text-2xl font-black text-gray-900 mb-3">Paiement annulé</h1>
        {isTicket ? (
          <p className="text-gray-500 leading-relaxed mb-2">
            Pas de souci — aucune place n&apos;a été débitée. Tu peux reprendre
            l&apos;achat quand tu veux depuis la fiche de l&apos;événement dans
            l&apos;application <span className="font-bold text-gray-900">Jovial</span>.
          </p>
        ) : (
          <p className="text-gray-500 leading-relaxed mb-2">
            Pas de souci — ta réservation est toujours enregistrée. Tu peux la payer quand
            tu veux depuis l&apos;application <span className="font-bold text-gray-900">Jovial</span>,
            onglet Profil → « Mes sorties ».
          </p>
        )}
        <a
          href={appLink}
          className="inline-block mt-4 mb-3 w-full rounded-2xl bg-gradient-to-r from-[#2B4E93] to-[#5CB6AC] px-6 py-4 text-white font-extrabold text-base"
        >
          Revenir dans Jovial
        </a>
        <p className="text-sm text-gray-400">À tout de suite dans l&apos;app 👋</p>
      </div>
    </main>
  );
}
