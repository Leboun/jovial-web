// On alterne une activite puis un evenement, une activite, un evenement...
const ACTIVITES = [
  "Fléchettes",
  "Billard",
  "Pétanque",
  "Baby-foot",
  "Palet breton",
  "Poker",
  "Jeux de société",
  "Quiz",
  "Shuffleboard",
  "Blind test",
];

const EVENEMENTS = [
  "Karaoké",
  "Concert",
  "Tournoi",
  "Soirée comedy club",
  "Open mic",
  "Soirée jeux",
  "Afterwork",
  "Jam session",
  "Soirée thématique",
  "DJ set",
];

// Tissage alterne activite / evenement
const ITEMS: string[] = [];
const max = Math.max(ACTIVITES.length, EVENEMENTS.length);
for (let i = 0; i < max; i++) {
  if (ACTIVITES[i]) ITEMS.push(ACTIVITES[i]);
  if (EVENEMENTS[i]) ITEMS.push(EVENEMENTS[i]);
}
ITEMS.push("Et bien d'autres…");

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
