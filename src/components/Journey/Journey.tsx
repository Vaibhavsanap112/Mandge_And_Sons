"use client";

import { motion } from "framer-motion";
import styles from "./Journey.module.css";

const milestones = [
  {
    year: "1993",
    title: "Mandge & Sons Founded",
  },
  {
    year: "2008",
    title: "Mandge Estate Launched",
  },
  {
    year: "Expansion",
    title: "Diversified Into Multiple Business Verticals",
  },
  {
    year: "Colorsply",
    title: "Manufacturing Unit Expansion",
  },
  {
    year: "Design Studio",
    title: "Interior & Architecture Studio Launched",
  },
  {
    year: "Future",
    title: "Continuing to Create Value & Excellence",
  },
];

export default function Journey() {
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <span>OUR JOURNEY</span>
          <h2>Building Excellence Through The Years</h2>
        </motion.div>

        <div className={styles.timeline}>
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <div className={styles.circle}></div>

              <h3>{item.year}</h3>

              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}