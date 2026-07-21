"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./Stats.module.css";

const stats = [
  {
    number: 30,
    suffix: "+",
    label: "YEARS OF LEGACY",
  },
  {
    number: 5,
    suffix: "",
    label: "BUSINESS VERTICALS",
  },
  {
    number: 1000,
    suffix: "+",
    label: "HAPPY CLIENTS",
  },
  {
    number: 500,
    suffix: "+",
    label: "PROJECTS DELIVERED",
  },
  {
    number: 50,
    suffix: "+",
    label: "CHANNEL PARTNERS",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={styles.stats} ref={ref}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <h2>
              {inView ? (
                <CountUp
                  start={0}
                  end={item.number}
                  duration={2.0}
                  delay={0.4} /* 👈 DELAY added so the count starts AFTER the card fades into view */
                  useEasing={true}
                />
              ) : (
                0
              )}
              {item.suffix}
            </h2>

            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}