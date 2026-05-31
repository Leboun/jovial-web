"use client";

import { useRef, useEffect, useState } from "react";

const FADE = 800;
const VIDEOS = ["/hero-video.mp4", "/FinaleLDC.mp4", "/IMG_3685.mov"];

export default function LoopingVideos({ style }: { style?: React.CSSProperties }) {
  const refs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];
  const current = useRef(0);

  useEffect(() => {
    const els = refs.map((r) => r.current).filter(Boolean) as HTMLVideoElement[];
    if (els.length === 0) return;

    const crossfadeTo = (nextIndex: number) => {
      const prev = els[current.current];
      const next = els[nextIndex];
      next.currentTime = 0;
      next.play().catch(() => {});
      prev.style.transition = `opacity ${FADE}ms ease`;
      next.style.transition = `opacity ${FADE}ms ease`;
      prev.style.opacity = "0";
      next.style.opacity = "1";
      current.current = nextIndex;
    };

    const handlers = els.map((el, i) => {
      const handler = () => {
        const next = (i + 1) % els.length;
        crossfadeTo(next);
      };
      el.addEventListener("ended", handler);
      return handler;
    });

    return () => {
      els.forEach((el, i) => el.removeEventListener("ended", handlers[i]));
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
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          ref={refs[i]}
          autoPlay={i === 0}
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          aria-hidden="true"
          style={{ ...base, objectPosition: "center 60%", opacity: i === 0 ? 1 : 0 }}
          src={src}
        />
      ))}
    </>
  );
}
