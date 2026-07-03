// Page d'atterrissage quand le PAIEMENT DE RÉSERVATION est abandonné (Stripe
// Checkout annulé). La réservation reste enregistrée, payable plus tard.
export const metadata = {
  title: "Paiement annulé — Jovial",
  robots: { index: false, follow: false },
};

export default function PaiementAnnule() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f8faff] px-6">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-200 shadow-sm p-8 text-center">
        <div className="text-5xl mb-4">💳</div>
        <h1 className="text-2xl font-black text-gray-900 mb-3">Paiement annulé</h1>
        <p className="text-gray-500 leading-relaxed mb-2">
          Pas de souci — ta réservation est toujours enregistrée. Tu peux la payer quand
          tu veux depuis l&apos;application <span className="font-bold text-gray-900">Jovial</span>,
          onglet Profil → « Mes sorties ».
        </p>
        <p className="text-sm text-gray-400">À tout de suite dans l&apos;app 👋</p>
      </div>
    </main>
  );
}
