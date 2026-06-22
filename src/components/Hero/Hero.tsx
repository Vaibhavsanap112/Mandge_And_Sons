"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const heroImages = [
"https://picsum.photos/600/900?random=1",
"https://picsum.photos/600/900?random=2",
"https://picsum.photos/600/900?random=3",
"https://picsum.photos/600/900?random=4",
"https://picsum.photos/600/900?random=5",
];

export default function Hero() {
return ( <section  id="home" className={styles.hero}> <div className={styles.imageContainer}>
{heroImages.map((image, index) => (
<motion.div
key={index}
className={styles.panel}
style={{ backgroundImage: `url(${image})` }}
initial={{
opacity: 0,
y: 50,
}}
animate={{
opacity: 1,
y: 0,
}}
transition={{
delay: index * 0.15,
duration: 0.8,
ease: "easeOut",
}}
/>
))} </div>


  {/* Glow Layer */}
  <div className={styles.glow}></div>

  {/* Overlay */}
  <div className={styles.overlay}></div>

  {/* Content */}
  <div className={styles.content}>
   <motion.span
  className={styles.welcome}
  initial={{
    opacity: 0,
    y: -30,
    filter: "blur(10px)"
  }}
  animate={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)"
  }}
  transition={{
    duration: 1
  }}
>
  WELCOME TO
</motion.span>

    <motion.h1
      className={styles.title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      MANDGE & SONS
    </motion.h1>

   <motion.h2
  className={styles.subtitle}
  initial={{
    opacity: 0,
    x: -80
  }}
  animate={{
    opacity: 1,
    x: 0
  }}
  transition={{
    delay: 0.5,
    duration: 1
  }}
>
      Building Excellence Across
      <br />
      Design, Manufacturing & Real Estate
    </motion.h2>

   <motion.p
  className={styles.tagline}
  initial={{
    opacity: 0,
    x: 80
  }}
  animate={{
    opacity: 1,
    x: 0
  }}
  transition={{
    delay: 0.8,
    duration: 1
  }}
>
      INNOVATION • CRAFTSMANSHIP • TRUST
    </motion.p>

    <motion.div
      className={styles.buttons}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <button className={styles.primaryBtn}>
        Explore Our Ventures
      </button>

      <button className={styles.secondaryBtn}>
        Watch Our Story
      </button>
    </motion.div>
  </div>
</section>


);
}
