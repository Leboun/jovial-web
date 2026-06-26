"use client";

import { useEffect, useState } from "react";

const ENDINGS = ["ici.", "avec Jovial."];

export default function HeroTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % ENDINGS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white text-center">
      Les meilleurs moments commencent{" "}
      {/* Les deux fins restent dans le DOM (SEO stable) — on n'anime que l'opacité, empilées dans une même cellule grid. */}
      <span className="grid">
        {ENDINGS.map((ending, i) => (
          <span
            key={ending}
            aria-hidden={index === i ? undefined : true}
            className="text-[#5CB6AC] transition-opacity duration-500"
            style={{ gridArea: "1 / 1", opacity: index === i ? 1 : 0 }}
          >
            {ending}
          </span>
        ))}
      </span>
    </h1>
  );
}
