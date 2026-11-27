"use client";

import { useRef, useState } from "react";

interface FlipCardProps {
  icon: string;
  title: string;
  desc: string;
  accent?: string;
  footer?: string;
}

export default function FlipCard({ icon, title, desc, accent = "#2B4E93", footer = "Inclus dans toutes les offres" }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  // Souris : le survol suffit. Tactile (pas de vrai hover) : le tap bascule.
  const hoverable = useRef<boolean | null>(null);
  const canHover = () => {
    if (hoverable.current === null && typeof window !== "undefined") {
      hoverable.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    }
    return hoverable.current ?? false;
  };

  return (
    <div
      style={{ perspective: "1000px", cursor: "pointer", userSelect: "none" }}
      className="h-[200px] sm:h-[220px]"
      onMouseEnter={() => canHover() && setFlipped(true)}
      onMouseLeave={() => canHover() && setFlipped(false)}
      onClick={() => !canHover() && toggle()}
      role="button"
      tabIndex={0}
      aria-label={`${title} — survole ou appuie pour ${flipped ? "revenir" : "en savoir plus"}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Face avant */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="cartoon-card p-6 sm:p-7 flex flex-col justify-between"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-[#D8F0EE]">
            {icon}
          </div>
          <div>
            <h3 className="text-[#242D41] font-extrabold text-xl leading-snug">{title}</h3>
            <div className="w-8 h-1 mt-3 rounded-full" style={{ backgroundColor: accent === "#2B4E93" ? "#EF6731" : accent }} />
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
            // Dos en BLEU UNI de la charte (plus de dégradé, 27/11/2026), contour + ombre orange façon appli.
            background: "#2B4E93",
            border: "2.5px solid #242D41",
            boxShadow: "5px 5px 0 #EF6731",
          }}
          className="rounded-[24px] p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
        >
          <p className="text-[#FFE8BF] text-base leading-relaxed font-semibold">{desc}</p>
          {footer ? (
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs shrink-0">✓</div>
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
