"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const values = [
  {
    title: "Visionary Leadership",
    desc: "Driven by experience & future focused thinking",
  },
  {
    title: "Quality & Integrity",
    desc: "Delivering the highest standards, always",
  },
  {
    title: "Customer Centric",
    desc: "Building long-term relationships",
  },
  {
    title: "Sustainable Growth",
    desc: "Responsible business for a better tomorrow",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Left Image */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <img
            src='/Mukund_Nimba_Mandge.jpeg'
            alt="Director"
            className={styles.directorImage}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <span className={styles.smallTitle}>
            ABOUT MANDGE & SONS
          </span>

          <h2>
            A Legacy Built on Trust.
            <br />
            A Future Driven by Innovation.
          </h2>

          <p>
            Established in 1993, Mandge & Sons has grown into a diversified
            business group with a strong presence in manufacturing, design,
            interiors, real estate and development.
          </p>

          <p>
            With a commitment to quality, transparency and customer
            satisfaction, we continue to create value that lasts for
            generations.
          </p>

          <div className={styles.signature}>
            Mukund Nimba Mandge
          </div>

          <span className={styles.designation}>
            Director
          </span>
        </motion.div>

        {/* Values */}
        <motion.div
          className={styles.values}
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          {values.map((item, index) => (
            <div key={index} className={styles.valueCard}>
              {/* Changed from circle symbol to a black star */}
              <div className={styles.icon}>★</div>

              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}