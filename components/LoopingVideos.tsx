"use client";

import { useRef, useEffect } from "react";

const VIDEOS = [
  { src: "/hero-video.mp4", objectPosition: "center 60%" },
  { src: "/IMG_3685.mp4",   objectPosition: "center 80%" },
];

export default function LoopingVideos({ style }: { style?: React.CSSProperties }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      indexRef.current = (indexRef.current + 1) % VIDEOS.length;
      const next = VIDEOS[indexRef.current];
      video.src = next.src;
      video.style.objectPosition = next.objectPosition;
      video.play().catch(() => {});
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      aria-hidden="true"
      style={{ ...style, objectPosition: VIDEOS[0].objectPosition }}
    >
      <source src={VIDEOS[0].src} type="video/mp4" />
    </video>
  );
}
