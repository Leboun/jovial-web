"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { DOWNLOAD_HREF } from "@/lib/appLinks";
import { PREMIUM_ENABLED } from "@/lib/features";

const links = [
  { href: "/#concept", label: "L'appli" },
  { href: "/associations", label: "Associations" },
  { href: "/actualites", label: "Découvrir" },
  ...(PREMIUM_ENABLED ? [{ href: "/premium", label: "Jovial+" }] : []),
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // Le logo rétrécit légèrement dès qu'on scrolle (en restant centré).
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F2EDE4] border-b border-[#e8e0d4]">
      <div className="w-full px-6 h-16 flex items-center justify-between relative">

        {/* Logo — centré et agrandi, chevauchant le bandeau beige et la vidéo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 top-0 z-10 flex items-center drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
        >
          <Image
            src="/logo-sm.png"
            alt="Jovial"
            width={288}
            height={147}
            priority
            className={`h-auto transition-[width] duration-300 ease-out ${
              scrolled ? "w-[175px] md:w-[224px]" : "w-[225px] md:w-[288px]"
            }`}
          />
        </Link>

        {/* Desktop nav — bord gauche */}
        <div className="hidden xl:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center min-h-11 text-sm text-gray-600 hover:text-[#2B4E93] transition-colors font-medium whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={DOWNLOAD_HREF}
            className="bg-[#2B4E93] text-white text-sm font-semibold inline-flex items-center h-11 px-5 rounded-full hover:bg-[#1e3a70] transition-colors whitespace-nowrap"
          >
            Télécharge
          </a>
        </div>

        {/* Desktop nav — bord droit */}
        <div className="hidden xl:flex items-center gap-3">
          <a
            href="https://pro.getjovial.fr/establishment/start"
            className="inline-flex items-center h-11 text-sm font-semibold text-white bg-[#5CB6AC] px-4 rounded-full hover:bg-[#4aa39a] transition-colors whitespace-nowrap"
          >
            Inscris ton établissement
          </a>
          <a
            href="https://pro.getjovial.fr/establishment/login"
            className="inline-flex items-center h-11 text-sm font-semibold text-[#2B4E93] border-2 border-[#2B4E93] px-4 rounded-full hover:bg-[#2B4E93] hover:text-white transition-colors whitespace-nowrap"
          >
            Se connecter
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="xl:hidden -ml-2 w-11 h-11 flex items-center justify-center text-gray-700"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-6 pt-8 pb-5 flex flex-col gap-2 max-h-[calc(100dvh-4rem)] overflow-y-auto">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 font-medium text-base py-3"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={DOWNLOAD_HREF}
            className="bg-[#2B4E93] text-white text-base font-semibold px-5 py-3 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Télécharger l'app
          </a>
          <a
            href="https://pro.getjovial.fr/establishment/start"
            className="bg-[#5CB6AC] text-white text-base font-semibold px-5 py-3 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Inscris ton établissement
          </a>
          <a
            href="https://pro.getjovial.fr/establishment/login"
            className="text-gray-700 font-medium text-base border border-gray-200 px-5 py-3 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Se connecter
          </a>
        </div>
      )}
    </header>
  );
}

