"use client";

import { motion } from "framer-motion";
import styles from "./Journey.module.css";

const milestones = [
  { year: "1993", title: "Mandge & Sons Founded" },
  { year: "2008", title: "Mandge Estate Launched" },
  { year: "Expansion", title: "Diversified Into Multiple Business Verticals" },
  { year: "Colorsply", title: "Manufacturing Unit Expansion" },
  { year: "Design Studio", title: "Interior & Architecture Studio Launched" },
  { year: "Future", title: "Continuing To Create Value & Excellence" },
];

export default function Journey() {
  return (
    <section className={styles.section} id="journey">
      <div className={styles.container}>
        
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>OUR JOURNEY</span>
          <h2>Building Excellence Through The Years</h2>
        </motion.div>

        <div className={styles.timeline}>
          
          {/* Re-engineered Symmetrical Wave */}
          <svg
            className={styles.snake}
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 160 
                 C 50 60, 150 60, 200 160 
                 S 350 260, 400 160 
                 S 550 60, 600 160 
                 S 750 260, 800 160 
                 S 950 60, 1000 160 
                 S 1150 260, 1200 160"
              fill="none"
              stroke="#d4af37"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {milestones.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.item} ${
                index % 2 === 0 ? styles.top : styles.bottom
              }`}
              initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
            >
              <div className={styles.circle}></div>
              <div className={styles.textGroup}>
                <h3>{item.year}</h3>
                <p>{item.title}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}