import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL, DOWNLOAD_HREF } from "@/lib/appLinks";
import { PREMIUM_ENABLED } from "@/lib/features";

export default function Footer() {
  return (
    <footer className="bg-[#FFE8BF] text-[#242D41] border-t border-[#EAD2A6]">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="font-black text-2xl mb-1 jovial-grad-text uppercase tracking-wide">Jovial</p>
          <p className="text-[#6B6152] text-sm leading-relaxed max-w-xs mt-2">
            Fléchettes, pétanque, karaoké, concerts… Tous les bons plans près de chez toi.
          </p>
        </div>

        <div>
          <p className="font-semibold text-sm mb-4 text-[#6B6152] uppercase tracking-wider">L'application</p>
          <ul>
            <li><Link href="/#concept" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">Concept</Link></li>
            <li><Link href="/etablissements" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">Établissements</Link></li>
            <li><Link href="/etablissements#contact" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">Tu gères un lieu ? Demande une démo</Link></li>
            <li><Link href="/associations" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">Associations</Link></li>
            <li><Link href="/actualites" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">Découvrir</Link></li>
            {PREMIUM_ENABLED && <li><Link href="/premium" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">Jovial+</Link></li>}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-sm mb-4 text-[#6B6152] uppercase tracking-wider">Légal</p>
          <ul>
            <li><Link href="/confidentialite" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">Confidentialité</Link></li>
            <li><Link href="/cgu" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">CGU</Link></li>
            <li><Link href="/cgv" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">CGV</Link></li>
            <li><Link href="/mentions-legales" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">Mentions légales</Link></li>
            <li><Link href="/suppression-compte" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">Supprimer mon compte</Link></li>
            <li><a href="mailto:hello@getjovial.fr" className="inline-flex items-center min-h-11 min-w-11 text-[#6B6152] text-sm hover:text-[#2B4E93] transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#EAD2A6]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#6B6152] text-xs">© {new Date().getFullYear()} Jovial. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a
              href={APP_STORE_URL || DOWNLOAD_HREF}
              className="inline-flex items-center min-h-11 px-1 text-[#6B6152] text-xs hover:text-[#2B4E93] transition-colors"
            >
              App Store
            </a>
            <a
              href={PLAY_STORE_URL || DOWNLOAD_HREF}
              className="inline-flex items-center min-h-11 px-1 text-[#6B6152] text-xs hover:text-[#2B4E93] transition-colors"
            >
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
