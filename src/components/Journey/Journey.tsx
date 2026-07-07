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
    title: "Continuing To Create Value & Excellence",
  },
];

export default function Journey() {
  return (
    <section className={styles.section} id="journey">

      <div className={styles.container}>

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span>OUR JOURNEY</span>

          <h2>
            Building Excellence
            Through The Years
          </h2>

        </motion.div>

        <div className={styles.timeline}>

          <svg
            className={styles.snake}
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
          >

            <path
              d="
                M60 160

                C150 40 250 40 340 160

                S530 280 620 160

                S810 40 900 160

                S1090 280 1140 160
              "

              fill="none"
              stroke="#d4af37"
              strokeWidth="4"
              strokeLinecap="round"
            />

          </svg>

          {milestones.map((item,index)=>(

            <motion.div

              key={index}

              className={`${styles.item} ${
                index % 2 === 0
                ? styles.top
                : styles.bottom
              }`}

              initial={{
                opacity:0,
                y:index%2===0?-60:60,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              viewport={{
                once:true,
              }}

              transition={{
                duration:.8,
                delay:index*.15,
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