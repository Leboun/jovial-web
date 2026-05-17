"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#concept", label: "L'appli" },
  { href: "/premium", label: "Jovial+" },
  { href: "/etablissements", label: "Établissements" },
  { href: "/actualites", label: "Magazine" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo-sm.png" alt="Jovial" width={120} height={61} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-[#2B4E93] transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://apps.apple.com/app/jovial/id0000000000"
            className="bg-[#2B4E93] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#1e3a70] transition-colors"
          >
            Télécharger
          </a>
        </nav>

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
        </div>
      )}
    </header>
  );
}
