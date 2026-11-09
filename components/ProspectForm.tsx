"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SUPABASE_URL } from "@/lib/supabasePublic";

// FORMULAIRE PROSPECTS (module prospects, lot A, nov. 2026) : « Tu gères un lieu ? ».
// Envoie à la fonction lead-submit (table prospects + alerte au fondateur), puis
// redirige vers /etablissements/merci (bouton « Réserver ma démo »).
// Court volontairement : 5 champs obligatoires, téléphone et message facultatifs.

const VENUE_TYPES: [string, string][] = [
  ["bar", "Bar"],
  ["bar_jeux", "Bar à jeux"],
  ["arcade", "Salle de jeux / arcade"],
  ["billard", "Billard / fléchettes"],
  ["escape", "Escape game"],
  ["bowling", "Bowling"],
  ["karaoke", "Karaoké"],
  ["laser", "Laser game / paintball"],
  ["restaurant", "Restaurant"],
  ["culture", "Salle de concert / culture"],
  ["sport", "Club ou salle de sport"],
  ["association", "Association"],
  ["autre", "Autre"],
];

const input =
  "w-full bg-white/10 border border-white/25 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors";
const label = "text-sm font-semibold text-white/85 mb-1 block";

export default function ProspectForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "too_many">("idle");
  const [missing, setMissing] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const payload = {
      venueName: String(f.get("venueName") ?? ""),
      city: String(f.get("city") ?? ""),
      venueType: String(f.get("venueType") ?? ""),
      firstName: String(f.get("firstName") ?? ""),
      email: String(f.get("email") ?? ""),
      phone: String(f.get("phone") ?? ""),
      message: String(f.get("message") ?? ""),
      consent: f.get("consent") === "on",
      website: String(f.get("website") ?? ""), // champ piège anti-robots
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };
    setStatus("sending");
    setMissing([]);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/lead-submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const first = encodeURIComponent(payload.firstName.trim().split(/\s+/)[0] ?? "");
        router.push(`/etablissements/merci${first ? `?p=${first}` : ""}`);
        return;
      }
      if (res.status === 429) { setStatus("too_many"); return; }
      const body = await res.json().catch(() => ({}));
      if (Array.isArray(body?.fields)) setMissing(body.fields);
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const bad = (k: string) => (missing.includes(k) ? " border-red-300" : "");

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 text-left" noValidate={false}>
      {/* Champ piège : invisible pour un humain, rempli par les robots. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Site web<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="pf-venue">Nom de ton établissement *</label>
          <input id="pf-venue" name="venueName" required minLength={2} maxLength={120} placeholder="Le Break, L'Arcade…" className={input + bad("venueName")} />
        </div>
        <div>
          <label className={label} htmlFor="pf-city">Ville *</label>
          <input id="pf-city" name="city" required minLength={2} maxLength={80} placeholder="Saint-Brieuc, Rennes…" className={input + bad("city")} />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="pf-type">Type de lieu *</label>
        <select id="pf-type" name="venueType" required defaultValue="" className={input + " appearance-none"}>
          <option value="" disabled className="text-gray-900">Choisis…</option>
          {VENUE_TYPES.map(([v, l]) => <option key={v} value={v} className="text-gray-900">{l}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="pf-first">Ton prénom *</label>
          <input id="pf-first" name="firstName" required maxLength={60} placeholder="Camille" autoComplete="given-name" className={input + bad("firstName")} />
        </div>
        <div>
          <label className={label} htmlFor="pf-email">E-mail *</label>
          <input id="pf-email" name="email" type="email" required maxLength={160} placeholder="contact@tonlieu.fr" autoComplete="email" className={input + bad("email")} />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="pf-phone">Téléphone <span className="font-normal text-white/60">(facultatif, pour qu&apos;on t&apos;appelle)</span></label>
        <input id="pf-phone" name="phone" type="tel" maxLength={30} placeholder="06 12 34 56 78" autoComplete="tel" className={input} />
      </div>

      <div>
        <label className={label} htmlFor="pf-msg">Un mot sur ton lieu ou tes attentes <span className="font-normal text-white/60">(facultatif)</span></label>
        <textarea id="pf-msg" name="message" rows={3} maxLength={1500} placeholder="Soirées quiz le jeudi, tournois de billard, on veut remplir les mardis…" className={input + " resize-none"} />
      </div>

      <label className={"flex items-start gap-3 text-sm text-white/85 cursor-pointer" + (missing.includes("consent") ? " text-red-200" : "")}>
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#5CB6AC]" />
        <span>
          J&apos;accepte d&apos;être recontacté(e) par Jovial au sujet de Jovial Pro. Désinscription possible à tout moment.{" "}
          <Link href="/confidentialite" className="underline">Confidentialité</Link>
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-center bg-white text-[#2B4E93] font-bold px-10 py-4 rounded-2xl hover:bg-white/90 transition-colors disabled:opacity-60 text-lg"
      >
        {status === "sending" ? "Envoi en cours…" : "Je veux une démo"}
      </button>

      {status === "error" && (
        <p className="text-center text-red-200 text-sm">
          {missing.length ? "Vérifie les champs en rouge (et la case à cocher)." : "Une erreur est survenue. Réessaie ou écris-nous à hello@getjovial.fr"}
        </p>
      )}
      {status === "too_many" && (
        <p className="text-center text-red-200 text-sm">Tu as déjà envoyé plusieurs demandes : on revient vers toi très vite !</p>
      )}
    </form>
  );
}
