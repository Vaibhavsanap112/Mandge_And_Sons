"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.muted = true;

      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented or video error:", err);
      });
    }
  }, [isMobile]);

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
        <source
          src={
            isMobile
              ? "/MandgeWebsite_mobile.mp4"
              : "/MandgeWebsite.mp4"
          }
          type="video/mp4"
        />

        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div>
    </section>
  );
}