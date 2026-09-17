import { ImageResponse } from "next/og";

// Image d'aperçu (Open Graph / Messenger / réseaux) générée dynamiquement : carte bleu marine
// « Jovial » + accroche. Remplace l'ancien logo-sm.png qui apparaissait comme un carré blanc.
// La convention de fichier Next.js câble automatiquement og:image + twitter:image.
export const runtime = "edge";
export const alt = "Jovial — Trouve ta prochaine sortie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2B4E93 0%, #16294F 100%)",
          color: "#FFFFFF",
        }}
      >
        <div style={{ fontSize: 150, fontWeight: 700 }}>Jovial</div>
        <div style={{ fontSize: 46, fontWeight: 700, opacity: 0.95, marginTop: 8 }}>
          Trouve ta prochaine sortie
        </div>
        <div style={{ fontSize: 28, opacity: 0.72, marginTop: 34 }}>
          Bars · concerts · fléchettes · comedy clubs
        </div>
      </div>
    ),
    { ...size }
  );
}
