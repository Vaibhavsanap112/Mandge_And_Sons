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
      image:  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    },
    {
      title: "Premium Township",
      category: "Real Estate",
    image:"https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80",
    },
    {
      title: "Colorsply Facility",
      category: "Manufacturing",
      image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    },
    {
      title: "Commercial Complex",
      category: "Development",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
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
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <motion.div
            className={styles.heading}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
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
                    scale: 0.8,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.12,
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