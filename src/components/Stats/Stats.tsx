"use client";

import { motion } from "framer-motion";
import styles from "./Stats.module.css";

const stats = [
  {
    number: "30+",
    label: "YEARS OF LEGACY",
    icon: "🏆",
  },
  {
    number: "5",
    label: "BUSINESS VERTICALS",
    icon: "🏢",
  },
  {
    number: "1000+",
    label: "HAPPY CLIENTS",
    icon: "👥",
  },
  {
    number: "500+",
    label: "PROJECTS DELIVERED",
    icon: "📋",
  },
  {
    number: "50+",
    label: "CHANNEL PARTNERS",
    icon: "🤝",
  },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <div className={styles.icon}>
              {item.icon}
            </div>

            <h2>{item.number}</h2>

            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}