"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";

const categories = [
  "All",
  "Interiors",
  "Real Estate",
  "Manufacturing",
  "Development",
];

const projects = [
  {
    title: "Luxury Villa Interior",
    category: "Interiors",
    image: "https://picsum.photos/600/500?random=21",
  },
  {
    title: "Premium Township",
    category: "Real Estate",
    image: "https://picsum.photos/600/500?random=22",
  },
  {
    title: "Colorsply Facility",
    category: "Manufacturing",
    image: "https://picsum.photos/600/500?random=23",
  },
  {
    title: "Commercial Complex",
    category: "Development",
    image: "https://picsum.photos/600/500?random=24",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (project) => project.category === active
        );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>FEATURED PROJECTS</span>
          <h2>Our Landmark Creations</h2>
        </motion.div>

        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${
                active === cat ? styles.active : ""
              }`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className={styles.grid}
        >
          <AnimatePresence mode="wait">
            {filtered.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />

                <div className={styles.overlay}>
                  <h3>{project.title}</h3>

                  <button>
                    View Project →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}