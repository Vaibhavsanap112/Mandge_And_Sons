"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Force muted property on DOM node to bypass mobile autoplay policies
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented or video error:", err);
      });
    }
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/MandgeWebsite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
    </section>
  );
}