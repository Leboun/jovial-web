"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// DÉSINSCRIPTION des e-mails de relance Jovial Pro (lot C prospects).
// Le lien de l'e-mail arrive ici avec ?t=<jeton>. On demande un clic de confirmation
// (les antivirus de messagerie ouvrent parfois les liens tout seuls : pas de désinscription « fantôme »).
const FN_URL = "https://luwspwiibxzzjvbtklbo.supabase.co/functions/v1/prospect-unsubscribe";

export default function DesabonnementPage() {
  const [token, setToken] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    setToken(new URLSearchParams(window.location.search).get("t") ?? "");
  }, []);

  async function unsubscribe() {
    setState("loading");
    try {
      const res = await fetch(FN_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token }) });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <main className="jovial-block text-white min-h-[80vh] pt-36 pb-20 px-6 flex items-center">
      <div className="max-w-xl mx-auto text-center">
        <Image src="/wallet/jovi-tile.png" alt="Jovi, la mascotte Jovial" width={100} height={100} className="mx-auto rounded-3xl mb-6" />
        {state === "done" ? (
          <>
            <h1 className="text-4xl font-bold mb-4">C&apos;est fait 👋</h1>
            <p className="text-white/80 text-lg leading-relaxed">Tu ne recevras plus nos e-mails au sujet de Jovial Pro. Si tu changes d&apos;avis, écris-nous simplement à hello@getjovial.fr.</p>
          </>
        ) : !token ? (
          <>
            <h1 className="text-4xl font-bold mb-4">Lien incomplet</h1>
            <p className="text-white/80 text-lg leading-relaxed">Ce lien de désinscription ne fonctionne pas. Écris-nous à <a className="underline" href="mailto:hello@getjovial.fr?subject=D%C3%A9sinscription">hello@getjovial.fr</a> et on s&apos;en occupe.</p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-4">Ne plus recevoir nos e-mails ?</h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">Tu ne recevras plus les messages au sujet de Jovial Pro.</p>
            <button
              onClick={unsubscribe}
              disabled={state === "loading"}
              className="inline-flex items-center justify-center bg-[#5CB6AC] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#4aa39a] transition-colors text-lg disabled:opacity-60"
            >
              {state === "loading" ? "Un instant…" : "Me désinscrire"}
            </button>
            {state === "error" && <p className="mt-4 text-white/90">Oups, ça n&apos;a pas marché. Réessaie, ou écris-nous à hello@getjovial.fr.</p>}
          </>
        )}
        <p className="mt-10">
          <Link href="/" className="text-white/80 underline">← Retour à l&apos;accueil</Link>
        </p>
      </div>
    </main>
  );
}
