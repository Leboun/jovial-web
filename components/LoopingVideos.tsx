"use client";

import { useRef, useEffect } from "react";

const FADE = 800;

export default function LoopingVideos({ style }: { style?: React.CSSProperties }) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    const crossfade = (from: HTMLVideoElement, to: HTMLVideoElement) => {
      to.currentTime = 0;
      to.play().catch(() => {});
      from.style.transition = `opacity ${FADE}ms ease`;
      to.style.transition   = `opacity ${FADE}ms ease`;
      from.style.opacity = "0";
      to.style.opacity   = "1";
    };

    const onAEnded = () => crossfade(a, b);
    const onBEnded = () => crossfade(b, a);

    a.addEventListener("ended", onAEnded);
    b.addEventListener("ended", onBEnded);

    return () => {
      a.removeEventListener("ended", onAEnded);
      b.removeEventListener("ended", onBEnded);
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
      <video ref={aRef} autoPlay muted playsInline preload="auto" aria-hidden="true"
        style={{ ...base, objectPosition: "center 60%", opacity: 1 }}
        src="/hero-video.mp4"
      />
      <video ref={bRef} muted playsInline preload="auto" aria-hidden="true"
        style={{ ...base, objectPosition: "center 80%", opacity: 0 }}
        src="/FinaleLDC.mp4"
      />
    </>
  );
}
