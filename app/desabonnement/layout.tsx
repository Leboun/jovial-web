import type { Metadata } from "next";

// Page de désinscription des e-mails prospects : jamais indexée.
export const metadata: Metadata = {
  title: "Désinscription · Jovial",
  robots: { index: false, follow: false },
};

export default function DesabonnementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
