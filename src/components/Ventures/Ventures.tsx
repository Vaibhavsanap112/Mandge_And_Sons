"use client";

import { motion } from "framer-motion";
import styles from "./Ventures.module.css";

const ventures = [
  {
    title: "Colorsply",
    description:
      "Premium plywood and interior solutions delivering quality and durability.",
    image: "https://picsum.photos/500/350?random=11",
  },
  {
    title: "Mandge Estate",
    description:
      "Helping customers find valuable real estate opportunities with confidence.",
    image: "https://picsum.photos/500/350?random=12",
  },
  {
    title: "Mandge Design Studio",
    description:
      "Creative architecture and interior design focused on modern living.",
    image: "https://picsum.photos/500/350?random=13",
  },
  {
    title: "OM Plywood & Hardware",
    description:
      "Trusted supplier of hardware, plywood and construction materials.",
    image: "https://picsum.photos/500/350?random=14",
  },
  {
    title: "Mandge Builders & Developers",
    description:
      "Creating residential and commercial spaces with excellence and trust.",
    image: "https://picsum.photos/500/350?random=15",
  },
];

export default function Ventures() {
  return (

  




    <section className={styles.ventures}>
      <div className={styles.heading}>
        <span>OUR VENTURES</span>
        <h2>Building Success Across Industries</h2>
      </div>

      <div className={styles.grid}>
        {ventures.map((venture, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
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