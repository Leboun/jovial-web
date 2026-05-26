const ITEMS = [
  "Fléchettes",
  "Billard",
  "Pétanque",
  "Baby-foot",
  "Palet breton",
  "Poker",
  "Jeux de société",
  "Quiz",
  "Shuffleboard",
  "Karaoké",
  "Concert",
  "Tournoi",
  "Soirée comedy club",
  "Open mic",
  "Blind test",
  "Soirée jeux",
  "Afterwork",
  "Jam session",
  "Soirée thématique",
  "DJ set",
  "Et bien d'autres…",
];

const TRACK = [...ITEMS, ...ITEMS];

export default function ScrollingBanner() {
  return (
    <div className="overflow-hidden bg-[#2B4E93] py-3 select-none" aria-hidden="true">
      <div className="flex gap-6 w-max animate-scroll-banner">
        {TRACK.map((item, i) => (
          <span
            key={i}
            className="text-white font-black text-2xl uppercase tracking-wide whitespace-nowrap flex items-center gap-6"
          >
            {item}
            <span className="text-[#5CB6AC] text-xl">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
