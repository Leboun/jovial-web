import type { NextConfig } from "next";

// ---------------------------------------------------------------------------
// En-têtes de sécurité HTTP (défense en profondeur pour getjovial.fr)
// ---------------------------------------------------------------------------
// CSP (Content-Security-Policy) : liste blanche des sources autorisées (scripts,
// styles, images, connexions…). DÉMARRÉE EN "Report-Only" : le navigateur SIGNALE
// les violations dans la console SANS RIEN BLOQUER → aucun risque de casser le site.
// Une fois vérifié qu'aucune violation légitime n'apparaît, il suffit de renommer
// l'en-tête "Content-Security-Policy-Report-Only" en "Content-Security-Policy"
// (voir SECURITY_HEADERS ci-dessous) pour l'ACTIVER pour de vrai.
//
// Origines réellement chargées par le site (auditées) : tout est en same-origin
// sauf Formspree (formulaires de contact) et Vercel Analytics.
const CSP = [
  "default-src 'self'",
  // 'unsafe-inline' requis par les scripts d'hydratation inline de Next.js
  // (à retirer plus tard via un nonce + 'strict-dynamic').
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://formspree.io https://vitals.vercel-insights.com",
  "frame-ancestors 'none'", // anti-clickjacking (personne ne peut mettre le site dans une iframe)
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
  // Passer en "Content-Security-Policy" (sans -Report-Only) pour ACTIVER le blocage.
  { key: "Content-Security-Policy-Report-Only", value: CSP },
  // Force HTTPS pendant 1 an sur le domaine et ses sous-domaines (anti-downgrade/MITM).
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "X-Frame-Options", value: "DENY" }, // filet de sécurité anti-clickjacking (navigateurs anciens)
  { key: "X-Content-Type-Options", value: "nosniff" }, // empêche le navigateur de "deviner" un type MIME
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
