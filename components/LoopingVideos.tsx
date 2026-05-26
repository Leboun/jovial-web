"use client";

import { useRef, useEffect } from "react";

const VIDEOS = [
  { src: "/hero-video.mp4", objectPosition: "center 60%" },
  { src: "/IMG_3685.mp4",   objectPosition: "center 80%" },
];

const FADE = 800;

export default function LoopingVideos({ style }: { style?: React.CSSProperties }) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const stateRef = useRef({ active: 0 as 0 | 1 }); // 0 = A actif, 1 = B actif

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    const els = [a, b] as const;

    const preload = (el: HTMLVideoElement, idx: number) => {
      el.src = VIDEOS[idx].src;
      el.style.objectPosition = VIDEOS[idx].objectPosition;
      el.load();
    };

    // Précharge la vidéo 1 dans B
    preload(b, 1);

    const onEnded = (activeIdx: 0 | 1) => {
      const nextVideoIdx = (activeIdx + 1) % VIDEOS.length;
      const activeEl   = els[activeIdx];
      const inactiveEl = els[activeIdx === 0 ? 1 : 0];
      const nextActive = activeIdx === 0 ? 1 : 0;

      // Lance la prochaine
      inactiveEl.play().catch(() => {});

      // Fondu croisé
      activeEl.style.transition   = `opacity ${FADE}ms ease`;
      inactiveEl.style.transition = `opacity ${FADE}ms ease`;
      activeEl.style.opacity   = "0";
      inactiveEl.style.opacity = "1";

      // Écoute la fin de la nouvelle vidéo active
      stateRef.current.active = nextActive;
      inactiveEl.addEventListener("ended", () => onEnded(nextActive), { once: true });

      // Précharge la suivante dans l'ancien actif
      setTimeout(() => {
        const afterNext = (nextVideoIdx + 1) % VIDEOS.length;
        preload(activeEl, afterNext);
      }, FADE + 300);
    };

    // Premier ended : A se termine
    a.addEventListener("ended", () => onEnded(0), { once: true });

    return () => {};
  }, []);

  const base: React.CSSProperties = {
    ...style,
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <video ref={aRef} autoPlay muted playsInline aria-hidden="true"
        style={{ ...base, objectPosition: VIDEOS[0].objectPosition, opacity: 1 }}
      >
        <source src={VIDEOS[0].src} type="video/mp4" />
      </video>
      <video ref={bRef} muted playsInline aria-hidden="true"
        style={{ ...base, objectPosition: VIDEOS[1].objectPosition, opacity: 0 }}
      />
    </>
  );
}
