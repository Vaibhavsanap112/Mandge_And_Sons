"use client";

import { motion } from "framer-motion";
import styles from "./WhyChoose.module.css";

const features = [
  {
    icon: "🏢",
    title: "Integrated Ecosystem",
    desc: "End-to-end solutions across multiple industries.",
  },
  {
    icon: "⭐",
    title: "Premium Quality",
    desc: "Strict quality control at every stage.",
  },
  {
    icon: "👥",
    title: "Experienced Team",
    desc: "Decades of expertise and market understanding.",
  },
  {
    icon: "🤝",
    title: "Customer First",
    desc: "Transparency, trust & long-term relationships.",
  },
  {
    icon: "⚙️",
    title: "Innovation Driven",
    desc: "Adopting advanced technology and practices.",
  },
  {
    icon: "🛡️",
    title: "End-to-End Solutions",
    desc: "From concept to completion, we deliver it all.",
  },
];

export default function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>WHY CHOOSE MANDGE & SONS?</h2>
        </motion.div>

        <div className={styles.features}>
          {features.map((item, index) => (
            <motion.div
              key={index}
              className={styles.feature}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
            >
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}