import type { Metadata } from "next";

// Page de remerciement après le formulaire prospects : jamais indexée.
export const metadata: Metadata = {
  title: "Merci ! · Jovial Pro",
  robots: { index: false, follow: false },
};

export default function MerciLayout({ children }: { children: React.ReactNode }) {
  return children;
}
