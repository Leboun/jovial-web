"use client";

import { useState } from "react";

// Mini-test « Es-tu éligible ? » — volontairement bienveillant : tous les chemins
// mènent à « Oui ! ». Il lève le doute et oriente vers la bonne inscription
// (établissement ou association).
const OFFERS = [
  "Des activités (billard, fléchettes, escape game…)",
  "Des événements (concerts, tournois, lotos…)",
  "Une bonne table ou un bon verre",
  "Une super ambiance à faire découvrir",
  "Un peu de tout ça !",
];

export default function EligibilityCheck() {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [kind, setKind] = useState<"etab" | "asso" | null>(null);

  const isAsso = kind === "asso";
  const signupHref = isAsso
    ? "https://pro.getjovial.fr/establishment/asso/offers"
    : "https://pro.getjovial.fr/establishment/offers";
  const signupLabel = isAsso ? "Inscrire mon association" : "Inscrire mon établissement";

  const reset = () => {
    setStep(0);
    setKind(null);
  };

  return (
    <div className="max-w-xl mx-auto bg-[#f8faff] border border-gray-100 rounded-2xl p-6 sm:p-8 text-left min-h-[280px] flex flex-col justify-center">
      {step > 0 && step < 3 && (
        <div className="flex items-center gap-1.5 mb-6">
          {[1, 2].map((n) => (
            <span key={n} className={`h-1.5 rounded-full flex-1 ${step >= n ? "bg-[#5CB6AC]" : "bg-gray-200"}`} />
          ))}
        </div>
      )}

      {step === 0 && (
        <div className="text-center">
          <p className="text-3xl mb-2">🤔</p>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Pas sûr que ce soit pour toi ?</h3>
          <p className="text-gray-500 text-sm mb-6">Fais le test en 10 secondes — spoiler : ça va bien se passer.</p>
          <button
            onClick={() => setStep(1)}
            className="inline-flex items-center gap-2 bg-[#5CB6AC] text-white font-bold px-7 py-3 rounded-xl hover:bg-[#4aa39a] transition-colors"
          >
            C&apos;est parti →
          </button>
        </div>
      )}

      {step === 1 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#5CB6AC] mb-2">Question 1 / 2</p>
          <h3 className="text-lg font-bold text-gray-900 mb-5">Tu gères plutôt…</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => { setKind("etab"); setStep(2); }}
              className="text-left p-4 rounded-xl border border-gray-200 bg-white hover:border-[#2B4E93] hover:shadow-sm transition-all"
            >
              <span className="text-2xl">🏪</span>
              <span className="block font-bold text-gray-900 mt-1">Un établissement</span>
              <span className="block text-gray-500 text-xs mt-0.5">Bar, resto, café, salle de jeux, loisirs…</span>
            </button>
            <button
              onClick={() => { setKind("asso"); setStep(2); }}
              className="text-left p-4 rounded-xl border border-gray-200 bg-white hover:border-[#2B4E93] hover:shadow-sm transition-all"
            >
              <span className="text-2xl">🤝</span>
              <span className="block font-bold text-gray-900 mt-1">Une association</span>
              <span className="block text-gray-500 text-xs mt-0.5">Sport, culture, comité des fêtes…</span>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#5CB6AC] mb-2">Question 2 / 2</p>
          <h3 className="text-lg font-bold text-gray-900 mb-5">Chez toi, on trouve…</h3>
          <div className="flex flex-col gap-2.5">
            {OFFERS.map((o) => (
              <button
                key={o}
                onClick={() => setStep(3)}
                className="text-left px-4 py-3 rounded-xl border border-gray-200 bg-white hover:border-[#2B4E93] hover:shadow-sm text-sm font-semibold text-gray-700 transition-all"
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center">
          <p className="text-4xl mb-3">🎉</p>
          <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase leading-tight">Oui, ta place est sur Jovial&nbsp;!</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            {isAsso
              ? "Ton association peut être sur la carte, publier ses événements et vendre ses billets — gratuitement pour commencer."
              : "Ton établissement peut être sur la carte, publier ses événements et encaisser ses réservations — avec 14 jours d'essai gratuit."}
          </p>
          <a
            href={signupHref}
            className="inline-flex items-center justify-center gap-2 bg-[#5CB6AC] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#4aa39a] transition-colors text-lg"
          >
            {signupLabel} →
          </a>
          <div className="mt-4">
            <button onClick={reset} className="text-gray-400 text-sm hover:text-gray-600 underline">
              Refaire le test
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
