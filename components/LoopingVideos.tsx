"use client";

import { useRef, useEffect } from "react";

const VIDEOS = [
  { src: "/hero-video.mp4", objectPosition: "center 60%" },
  { src: "/IMG_3685.mp4",   objectPosition: "center 80%" },
];

const FADE_DURATION = 800; // ms

export default function LoopingVideos({ style }: { style?: React.CSSProperties }) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<0 | 1>(0); // 0 = A est actif, 1 = B est actif
  const nextIndexRef = useRef(1);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    // Précharge la vidéo suivante dans l'élément inactif
    const preloadNext = (nextIdx: number, inactiveEl: HTMLVideoElement) => {
      const next = VIDEOS[nextIdx];
      inactiveEl.src = next.src;
      inactiveEl.style.objectPosition = next.objectPosition;
      inactiveEl.load();
    };

    // Précharge B dès le départ
    preloadNext(1, b);

    const handleEnded = () => {
      const currentActive = activeRef.current;
      const activeEl  = currentActive === 0 ? a : b;
      const inactiveEl = currentActive === 0 ? b : a;
      const nextIdx = nextIndexRef.current;

      // Lance la vidéo suivante (déjà préchargée)
      inactiveEl.style.objectPosition = VIDEOS[nextIdx].objectPosition;
      inactiveEl.play().catch(() => {});

      // Fondu : inactive monte à 1, active descend à 0
      inactiveEl.style.transition = `opacity ${FADE_DURATION}ms ease`;
      activeEl.style.transition   = `opacity ${FADE_DURATION}ms ease`;
      inactiveEl.style.opacity = "1";
      activeEl.style.opacity   = "0";

      // Bascule les refs
      activeRef.current = currentActive === 0 ? 1 : 0;
      const newNextIdx = (nextIdx + 1) % VIDEOS.length;
      nextIndexRef.current = newNextIdx;

      // Précharge la vidéo d'après dans l'ancien actif (maintenant inactif)
      setTimeout(() => {
        preloadNext(newNextIdx, activeEl);
      }, FADE_DURATION + 200);
    };

    a.addEventListener("ended", handleEnded);
    b.addEventListener("ended", handleEnded);
    return () => {
      a.removeEventListener("ended", handleEnded);
      b.removeEventListener("ended", handleEnded);
    };
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
      <video
        ref={aRef}
        autoPlay
        muted
        playsInline
        aria-hidden="true"
        style={{ ...base, objectPosition: VIDEOS[0].objectPosition, opacity: 1 }}
      >
        <source src={VIDEOS[0].src} type="video/mp4" />
      </video>
      <video
        ref={bRef}
        muted
        playsInline
        aria-hidden="true"
        style={{ ...base, objectPosition: VIDEOS[1].objectPosition, opacity: 0 }}
      />
    </>
  );
}
