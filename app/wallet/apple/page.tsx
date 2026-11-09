"use client";

import { useEffect, useState } from "react";
import { SUPABASE_URL } from "@/lib/supabasePublic";

// AJOUT D'UN BILLET À APPLE WALLET (nov. 2026) : page d'accueil du lien « Ajouter à Apple
// Wallet » (e-mail de billet ET appli). Avant, le lien ouvrait directement le fichier .pkpass :
// une fois le billet ajouté, Safari restait sur une page noire/blanche sans explication.
// Ici, la page reste affichée pendant et après l'ajout, et dit quoi faire.
// Le jeton (?t=…) est signé et vérifié par la fonction wallet-pass ; on ne fait que le relayer.
export default function AppleWalletPage() {
  const [passUrl, setPassUrl] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("t");
    const ok = !!t && /^[A-Za-z0-9_\-.]{20,600}$/.test(t);
    const url = ok ? `${SUPABASE_URL}/functions/v1/wallet-pass?t=${encodeURIComponent(t!)}` : null;
    setPassUrl(url);
    setChecked(true);
    // Lance l'aperçu Apple automatiquement : la page reste affichée derrière.
    if (url) {
      const timer = setTimeout(() => { window.location.href = url; }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const card: React.CSSProperties = { background: "#FFFFFF", color: "#1E2A40", borderRadius: 20, padding: "22px 20px", width: "100%", maxWidth: 400, textAlign: "left", boxShadow: "0 10px 30px rgba(0,0,0,0.25)" };

  return (
    <main style={{ minHeight: "100dvh", background: "#2B4E93", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px 16px", gap: 18, textAlign: "center" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/wallet/jovi-tile.png" alt="Jovi, la mascotte Jovial" width={96} height={96} style={{ borderRadius: 24 }} />
      {checked && !passUrl ? (
        <div style={card}>
          <h1 style={{ fontSize: 21, fontWeight: 800, margin: "0 0 8px", color: "#2B4E93" }}>Ce lien a expiré</h1>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}>
            Ouvre ton billet dans l&apos;appli Jovial et touche à nouveau « Ajouter à Apple Wallet ». Ton billet reste disponible dans l&apos;appli, même sans réseau.
          </p>
        </div>
      ) : (
        <>
          <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, lineHeight: 1.2 }}>Ton billet arrive dans Cartes 🎟️</h1>
          <div style={card}>
            <p style={{ margin: "0 0 12px", fontSize: 16, lineHeight: 1.5 }}>
              <strong>1.</strong> Sur l&apos;aperçu du billet, touche <strong>« Ajouter »</strong> (ou « Ajouter à Cartes »).
            </p>
            <p style={{ margin: "0 0 12px", fontSize: 16, lineHeight: 1.5 }}>
              <strong>2.</strong> C&apos;est tout ! Ton billet est rangé dans l&apos;app <strong>Cartes</strong> (Wallet) et s&apos;affichera tout seul le jour J.
            </p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "#5B6782" }}>
              Tu peux ensuite fermer cette page et revenir dans Jovial.
            </p>
          </div>
          {passUrl ? (
            <a href={passUrl} style={{ display: "inline-block" }} aria-label="Ajouter à Apple Wallet">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/wallet/btn-apple-wallet.png" alt="Ajouter à Apple Wallet" width={270} height={60} />
            </a>
          ) : null}
          <p style={{ margin: 0, fontSize: 13, opacity: 0.85 }}>L&apos;aperçu ne s&apos;est pas affiché ? Touche le bouton ci-dessus.</p>
        </>
      )}
    </main>
  );
}
