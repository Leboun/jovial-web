const ITEMS = [
  "🎯 Fléchettes",
  "🎱 Billard",
  "🪃 Pétanque",
  "⚽ Baby-foot",
  "🪨 Palet breton",
  "🃏 Poker",
  "🎲 Jeux de société",
  "📝 Quiz",
  "🛝 Shuffleboard",
  "🎤 Karaoké",
  "🎵 Concert",
  "🏆 Tournoi",
  "😂 Soirée comedy club",
  "🎙️ Open mic",
  "🎧 Blind test",
  "🎮 Soirée jeux",
  "🍻 Afterwork",
  "🎸 Jam session",
  "🎭 Soirée thématique",
  "🎛️ DJ set",
  "✨ Et bien d'autres…",
];

// On duplique pour boucle infinie fluide
const TRACK = [...ITEMS, ...ITEMS];

export default function ScrollingBanner() {
  return (
    <div
      className="overflow-hidden bg-[#2B4E93] py-4 select-none"
      aria-hidden="true"
    >
      <div
        className="flex gap-10 w-max animate-scroll"
      >
        {TRACK.map((item, i) => (
          <span
            key={i}
            className="text-white font-bold text-sm uppercase tracking-widest whitespace-nowrap flex items-center gap-3"
          >
            {item}
            <span className="text-[#5CB6AC] text-lg">·</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
