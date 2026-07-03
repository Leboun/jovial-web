// Page d'atterrissage après un PAIEMENT DE RÉSERVATION réussi (Stripe Checkout,
// ouvert depuis l'app). Le statut « Payé » arrive tout seul dans l'app (webhook).
export const metadata = {
  title: "Paiement confirmé — Jovial",
  robots: { index: false, follow: false },
};

export default function PaiementSucces() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f8faff] px-6">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-200 shadow-sm p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-black text-gray-900 mb-3">Paiement confirmé !</h1>
        <p className="text-gray-500 leading-relaxed mb-2">
          Ta réservation est payée et confirmée. Tu peux fermer cette page et retourner
          dans l&apos;application <span className="font-bold text-gray-900">Jovial</span> —
          tout est déjà à jour dans « Mes sorties ».
        </p>
        <p className="text-sm text-gray-400">Bonne sortie ! 🎉</p>
      </div>
    </main>
  );
}
