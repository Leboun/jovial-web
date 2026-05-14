import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f1c38] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="font-bold text-xl mb-3">Jovial</p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Découvre les meilleurs bars, concerts et événements près de toi. Gratuit, sans pub, fait avec ❤️ en France.
          </p>
        </div>

        <div>
          <p className="font-semibold text-sm mb-4 text-gray-300 uppercase tracking-wider">L'application</p>
          <ul className="space-y-2">
            <li><Link href="/#concept" className="text-gray-400 text-sm hover:text-white transition-colors">Concept</Link></li>
            <li><Link href="/premium" className="text-gray-400 text-sm hover:text-white transition-colors">Jovial+</Link></li>
            <li><Link href="/etablissements" className="text-gray-400 text-sm hover:text-white transition-colors">Établissements</Link></li>
            <li><Link href="/actualites" className="text-gray-400 text-sm hover:text-white transition-colors">Actualités</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-sm mb-4 text-gray-300 uppercase tracking-wider">Légal</p>
          <ul className="space-y-2">
            <li><Link href="/confidentialite" className="text-gray-400 text-sm hover:text-white transition-colors">Confidentialité</Link></li>
            <li><Link href="/cgu" className="text-gray-400 text-sm hover:text-white transition-colors">CGU</Link></li>
            <li><Link href="/mentions-legales" className="text-gray-400 text-sm hover:text-white transition-colors">Mentions légales</Link></li>
            <li><a href="mailto:contact@jovial.app" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Jovial. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://apps.apple.com/app/jovial/id0000000000"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.jovial.app"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
