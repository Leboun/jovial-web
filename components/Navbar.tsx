"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#concept", label: "L'appli" },
  { href: "/actualites", label: "Découvrir" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F2EDE4] border-b border-[#e8e0d4]">
      <div className="w-full px-6 h-16 flex items-center justify-between relative">

        {/* Logo — centré absolument */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <Image src="/logo-sm.png" alt="Jovial" width={120} height={61} priority />
        </Link>

        {/* Desktop nav — bord gauche */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-[#2B4E93] transition-colors font-medium whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://apps.apple.com/app/jovial/id0000000000"
            className="bg-[#2B4E93] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#1e3a70] transition-colors whitespace-nowrap"
          >
            Téléchargez
          </a>
        </div>

        {/* Desktop nav — bord droit */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/etablissements"
            className="text-sm font-semibold text-white bg-[#5CB6AC] px-4 py-2 rounded-full hover:bg-[#e06010] transition-colors whitespace-nowrap"
          >
            Inscrivez votre établissement
          </a>
          <a
            href="https://pro.getjovial.fr/establishment/login"
            className="text-sm font-semibold text-[#2B4E93] border-2 border-[#2B4E93] px-4 py-2 rounded-full hover:bg-[#2B4E93] hover:text-white transition-colors whitespace-nowrap"
          >
            Se connecter
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 font-medium text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://apps.apple.com/app/jovial/id0000000000"
            className="bg-[#2B4E93] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Télécharger l'app
          </a>
          <a
            href="https://pro.getjovial.fr/establishment/login"
            className="text-gray-700 font-medium text-sm border border-gray-200 px-5 py-2.5 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Se connecter
          </a>
        </div>
      )}
    </header>
  );
}

