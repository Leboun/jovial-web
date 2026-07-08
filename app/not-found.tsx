import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 bg-[#2B4E93] text-white">
      <Image
        src="/mascotte.png"
        alt="La mascotte Jovial"
        width={2953}
        height={3283}
        sizes="180px"
        className="w-[160px] md:w-[180px] h-auto mb-8 drop-shadow-2xl"
      />
      <p className="text-[#5CB6AC] font-black text-sm uppercase tracking-[0.2em] mb-3">Erreur 404</p>
      <h1 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
        Cette page s&apos;est perdue en route
      </h1>
      <p className="text-white/70 text-lg max-w-md mb-10">
        Pas de panique — les meilleurs moments t&apos;attendent ailleurs.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="bg-white text-[#2B4E93] font-bold px-7 py-3.5 rounded-2xl hover:bg-white/90 transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/actualites"
          className="bg-white/10 text-white font-bold px-7 py-3.5 rounded-2xl hover:bg-white/20 transition-colors border border-white/25"
        >
          Découvrir les actualités
        </Link>
        <Link
          href="/etablissements"
          className="bg-white/10 text-white font-bold px-7 py-3.5 rounded-2xl hover:bg-white/20 transition-colors border border-white/25"
        >
          Espace établissements
        </Link>
      </div>
    </section>
  );
}
