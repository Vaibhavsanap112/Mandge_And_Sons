"use client";

import { motion } from "framer-motion";
import styles from "./WhyChoose.module.css";

const features = [
  {
    
    title: "Integrated Ecosystem",
    desc: "End-to-end solutions across multiple industries.",
  },
  {
    
    title: "Premium Quality",
    desc: "Strict quality control at every stage.",
  },
  {
    
    title: "Experienced Team",
    desc: "Decades of expertise and market understanding.",
  },
  {
    
    title: "Customer First",
    desc: "Transparency, trust & long-term relationships.",
  },
  {
    
    title: "Innovation Driven",
    desc: "Adopting advanced technology and practices.",
  },
  {
   
    title: "End-to-End Solutions",
    desc: "From concept to completion, we deliver it all.",
  },
];

export default function WhyChoose() {
  return (
    <section id="" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <h2>WHY CHOOSE MANDGE & SONS?</h2>
        </motion.div>

        <div className={styles.features}>
          {features.map((item, index) => (
            <motion.div
              key={index}
              className={styles.feature}
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
             

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}