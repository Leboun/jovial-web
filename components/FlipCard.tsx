"use client";

interface FlipCardProps {
  icon: string;
  title: string;
  desc: string;
  accent?: string;
}

export default function FlipCard({ icon, title, desc, accent = "#2B4E93" }: FlipCardProps) {
  return (
    <div
      className="group"
      style={{ perspective: "1000px", height: "180px" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        className="group-hover:[transform:rotateY(180deg)]"
      >
        {/* Face avant */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="bg-[#0f1c38] rounded-3xl p-8 flex flex-col justify-between"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{ backgroundColor: accent + "25" }}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-white font-bold text-xl leading-snug">{title}</h3>
            <div
              className="w-8 h-0.5 mt-3 rounded-full"
              style={{ backgroundColor: accent }}
            />
          </div>
        </div>

        {/* Face arrière */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: accent,
          }}
          className="rounded-3xl p-8 flex flex-col justify-between"
        >
          <p className="text-white/90 text-sm leading-relaxed">{desc}</p>
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
            Inclus dans toutes les offres
          </div>
        </div>
      </div>
    </div>
  );
}
