"use client";

import { useEffect, useState } from "react";

// BARRE « DEMANDER UNE DÉMO » fixée en bas de l'écran, sur téléphone uniquement (page Établissements).
// Elle apparaît une fois le haut de page dépassé et se cache quand le formulaire (#contact) est visible,
// pour ne jamais le recouvrir.
export default function StickyDemoBar({ href = "#contact", label = "Demander une démo de 15 min" }: { href?: string; label?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const target = document.getElementById(href.replace(/^.*#/, ""));
    let obs: IntersectionObserver | null = null;
    if (target && "IntersectionObserver" in window) {
      obs = new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.05 });
      obs.observe(target);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs?.disconnect();
    };
  }, [href]);

  const show = scrolled && !formVisible;

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-4 pt-3 bg-white/95 backdrop-blur border-t border-gray-200 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 12px)" }}
      aria-hidden={!show}
    >
      <a
        href={href}
        tabIndex={show ? 0 : -1}
        className="flex items-center justify-center w-full bg-[#5CB6AC] text-white font-bold py-3.5 rounded-2xl hover:bg-[#4aa39a] transition-colors"
      >
        📅 {label}
      </a>
    </div>
  );
}
