"use client";

import { useState } from "react";
import { APP_STORE_URL, PLAY_STORE_URL, APP_COMING_SOON } from "@/lib/appLinks";

// Même formulaire Formspree que le contact (champ "source" pour distinguer la waitlist)
const FORMSPREE_ID = "xpqnjezp";

export default function DownloadSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleWaitlist(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-row gap-4 items-center">
        {/* App Store */}
        <button
          disabled={APP_COMING_SOON}
          onClick={() => APP_STORE_URL && window.open(APP_STORE_URL, "_blank")}
          className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed hover:bg-gray-900"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className="text-left">
            <div className="text-[10px] leading-none opacity-70">{APP_COMING_SOON ? "Bientôt sur" : "Disponible sur"}</div>
            <div className="text-sm font-semibold leading-tight">App Store</div>
          </div>
        </button>

        {/* Google Play */}
        <button
          disabled={APP_COMING_SOON}
          onClick={() => PLAY_STORE_URL && window.open(PLAY_STORE_URL, "_blank")}
          className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed hover:bg-gray-900"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.18 23.76c.3.17.65.19.96.05l12.87-7.43-2.79-2.79-11.04 10.17zm-1.81-20.6C1.13 3.5 1 3.89 1 4.32v15.36c0 .43.13.82.37 1.15l.06.06 8.6-8.6v-.2L1.43 3.1l-.06.06zM20.33 10.26l-2.79-1.61-3.14 3.14 3.14 3.14 2.8-1.62c.8-.46.8-1.59-.01-2.05zM4.14.25L17.01 7.68l-2.79 2.79L3.18.3C3.49.16 3.85.18 4.14.25z"/>
          </svg>
          <div className="text-left">
            <div className="text-[10px] leading-none opacity-70">{APP_COMING_SOON ? "Bientôt sur" : "Disponible sur"}</div>
            <div className="text-sm font-semibold leading-tight">Google Play</div>
          </div>
        </button>
      </div>

      {/* Waitlist tant que l'app n'est pas publiée */}
      {APP_COMING_SOON && (
        status === "success" ? (
          <p className="text-sm font-semibold text-[#5CB6AC] mt-1">
            C&apos;est noté ! On te prévient dès que l&apos;app est en ligne 🎉
          </p>
        ) : (
          <>
            <form onSubmit={handleWaitlist} className="flex w-full max-w-sm items-center gap-2 mt-1">
              <input type="hidden" name="source" value="waitlist-app" />
              <input type="hidden" name="_subject" value="Waitlist app Jovial" />
              <input
                name="email"
                type="email"
                required
                placeholder="ton@email.fr"
                aria-label="Ton email pour être prévenu du lancement"
                className="flex-1 min-w-0 bg-white/10 border border-white/25 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#5CB6AC] hover:bg-[#4aa39a] text-white text-sm font-bold px-5 py-2.5 rounded-full whitespace-nowrap transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Envoi…" : "Préviens-moi"}
              </button>
            </form>
            {status === "error" ? (
              <p className="text-xs text-red-300">Oups, ça n&apos;a pas marché. Réessaie ou écris-nous à hello@getjovial.fr</p>
            ) : (
              <p className="text-xs opacity-50">Lancement très prochainement — laisse ton email pour être prévenu·e 🚀</p>
            )}
          </>
        )
      )}
    </div>
  );
}
