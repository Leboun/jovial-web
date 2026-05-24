"use client";

import { useEffect, useState } from "react";

const ENDINGS = ["ici.", "avec Jovial."];

export default function HeroTagline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ENDINGS.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
      Les meilleurs moments commencent{" "}
      <span
        className="text-[#F97316] transition-opacity duration-400"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {ENDINGS[index]}
      </span>
    </h1>
  );
}
