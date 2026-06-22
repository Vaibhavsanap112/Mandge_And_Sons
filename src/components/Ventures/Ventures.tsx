"use client";

import { motion } from "framer-motion";
import styles from "./Ventures.module.css";

const ventures = [
  {
    title: "Colorsply",
    description:
      "Premium plywood and interior solutions delivering quality and durability.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80",
  },
  {
    title: "Mandge Estate",
    description:
      "Helping customers find valuable real estate opportunities with confidence.",
   image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1000&q=80",
  },
  {
    title: "Mandge Design Studio",
    description:
      "Creative architecture and interior design focused on modern living.",
   image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1000&q=80",
  },
  {
    title: "OM Plywood & Hardware",
    description:
      "Trusted supplier of hardware, plywood and construction materials.",
   image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=80",
  },
  {
    title: "Mandge Builders & Developers",
    description:
      "Creating residential and commercial spaces with excellence and trust.",
   image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80",
  },
];

export default function Ventures() {
  return (

  




    <section id="ventures" className={styles.ventures}>
      <div className={styles.heading}>
        <span>OUR VENTURES</span>
        <h2>Building Success Across Industries</h2>
      </div>

      <div className={styles.grid}>
        {ventures.map((venture, index) => (
          <motion.div
            key={index}
            className={styles.card}
           initial={{
  opacity: 0,
  x: index % 2 === 0 ? -150 : 150,
}}
whileInView={{
  opacity: 1,
  x: 0,
}}
viewport={{ once: true }}
transition={{
  duration: 1,
  ease: "easeOut",
  delay: index * 0.1,
}}
          >
            <div className={styles.imageWrapper}>
              <img
                src={venture.image}
                alt={venture.title}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <h3>{venture.title}</h3>
              <p>{venture.description}</p>

              <button className={styles.btn}>
                Explore →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    
  );
}