import type { Metadata } from "next";

// Page technique (lien personnel signé) : jamais indexée.
export const metadata: Metadata = {
  title: "Ajouter ton billet à Apple Wallet · Jovial",
  robots: { index: false, follow: false },
};

export default function AppleWalletLayout({ children }: { children: React.ReactNode }) {
  return children;
}
