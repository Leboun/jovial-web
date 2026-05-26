"use client";

import { useRef, useEffect } from "react";

const VIDEOS = ["/hero-video.mp4", "/IMG_3685.mp4"];

export default function LoopingVideos({ style }: { style?: React.CSSProperties }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      indexRef.current = (indexRef.current + 1) % VIDEOS.length;
      video.src = VIDEOS[indexRef.current];
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
      style={style}
    >
      <source src={VIDEOS[0]} type="video/mp4" />
    </video>
  );
}
