"use client";

import { useState } from "react";

// Remplace XXXXXXXX par ton ID Formspree (formspree.io → nouveau formulaire → copier l'ID)
const FORMSPREE_ID = "xpqnjezp";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white/15 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <p className="text-xl font-bold mb-2">Message envoyé !</p>
        <p className="text-white/70">On reviendra vers vous très vite.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-white/80 mb-1 block">Nom *</label>
          <input
            name="nom"
            type="text"
            required
            placeholder="Votre nom"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-white/80 mb-1 block">Établissement / Événement</label>
          <input
            name="etablissement"
            type="text"
            placeholder="Nom de votre lieu ou événement"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-white/80 mb-1 block">Email *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="votre@email.fr"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-white/80 mb-1 block">Ville</label>
          <input
            name="ville"
            type="text"
            placeholder="Rennes, Brest, Lorient…"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-white/80 mb-1 block">Votre message *</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Parlez-nous de votre lieu, de votre événement, de ce que vous souhaitez mettre en avant…"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="self-center bg-white text-[#2B4E93] font-bold px-10 py-4 rounded-2xl hover:bg-white/90 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer"}
      </button>
      {status === "error" && (
        <p className="text-center text-red-300 text-sm">Une erreur est survenue. Réessayez ou écrivez-nous à contact@getjovial.fr</p>
      )}
    </form>
  );
}
