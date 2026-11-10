"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DEMO_BOOKING_URL } from "@/lib/appLinks";

// PAGE « MERCI » du formulaire prospects (lot A) : on profite de la motivation du moment
// pour proposer tout de suite la démo de 30 min (Cal.com). Tant que le lien Cal.com n'est
// pas renseigné (lib/appLinks.ts), on rassure : « on t'appelle / t'écrit sous 24 h ».
export default function MerciPage() {
  const [first, setFirst] = useState("");
  const [asso, setAsso] = useState(false);
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setAsso(sp.get("t") === "asso");
    const p = sp.get("p") ?? "";
    setFirst(p.replace(/[^\p{L}\p{M}' -]/gu, "").slice(0, 30));
  }, []);

  return (
    <main className="jovial-block text-white min-h-[80vh] pt-36 pb-20 px-6 flex items-center">
      <div className="max-w-xl mx-auto text-center">
        <Image src="/wallet/jovi-tile.png" alt="Jovi, la mascotte Jovial" width={110} height={110} className="mx-auto rounded-3xl mb-6" />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Merci{first ? ` ${first}` : ""} ! 🎉</h1>
        <p className="text-white/80 text-lg leading-relaxed mb-8">
          Ta demande est bien arrivée. {DEMO_BOOKING_URL
            ? (asso ? "Choisis maintenant un créneau : en 30 minutes, on te montre comment Jovial peut faire venir du monde à tes événements." : "Choisis maintenant un créneau : en 30 minutes, on te montre comment Jovial peut remplir ton lieu.")
            : (asso ? "On te recontacte sous 24 h (jours ouvrés) pour te montrer Jovial en 30 minutes." : "On te recontacte sous 24 h (jours ouvrés) pour te montrer Jovial Pro en 30 minutes.")}
        </p>
        {DEMO_BOOKING_URL ? (
          <a
            href={DEMO_BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 bg-[#5CB6AC] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#4aa39a] transition-colors text-lg"
          >
            📅 Réserver ma démo de 30 min
          </a>
        ) : (
          <a
            href="mailto:hello@getjovial.fr?subject=D%C3%A9mo%20Jovial%20Pro"
            className="inline-flex items-center justify-center gap-2 bg-[#5CB6AC] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#4aa39a] transition-colors text-lg"
          >
            ✉️ Une question ? Écris-nous
          </a>
        )}
        <div className="mt-10 bg-white/10 border border-white/20 rounded-2xl p-6 text-left">
          <p className="font-bold mb-3">En attendant, ce que Jovial {asso ? "" : "Pro "}t&apos;apporte :</p>
          {asso ? (
          <ul className="space-y-2 text-white/85">
            <li>📍 Ta fiche visible par ceux qui cherchent quoi faire près de chez eux.</li>
            <li>🗺️ Tes événements affichés sur la carte de l&apos;appli.</li>
            <li>🎟️ Une billetterie gratuite ou payante, avec QR code à l&apos;entrée.</li>
          </ul>
          ) : (
          <ul className="space-y-2 text-white/85">
            <li>📍 Ton lieu sur la carte Jovial, visible par ceux qui cherchent quoi faire près de chez eux.</li>
            <li>🎟️ Billetterie et réservations payées directement dans l&apos;appli.</li>
            <li>📣 Tes événements et tes bons plans publiés en 2 minutes.</li>
          </ul>
          )}
        </div>
        <p className="mt-8">
          <Link href={asso ? "/associations" : "/etablissements"} className="text-white/80 underline">← Retour à la page {asso ? "associations" : "établissements"}</Link>
        </p>
      </div>
    </main>
  );
}
