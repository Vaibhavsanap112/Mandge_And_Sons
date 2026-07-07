"use client";

import { motion } from "framer-motion";
import styles from "./Ventures.module.css";
import { image, img } from "framer-motion/client";
import Link from "next/link";

const ventures = [
  {
    title: "Colorsply Industries",
    description:
      "Premium plywood and interior solutions delivering quality and durability.",
    image: "/Colorsply_logo_PNG.png",
     link: "/ventures/colorsply",
  },
  {
    title: "Mandge Estate",
    description:
      "Helping customers find valuable real estate opportunities with confidence.",
   image: "Mandge_Estate_PNG_LOGO.png",
    link: "/ventures/MandgeEstate",
  },
  {
    title: "Mandge Design Studio",
    description:
      "Creative architecture and interior design focused on modern living.",
   image: "/MandgeDesingStudio.jpeg",
   link: "/ventures/MandgeDesignStudio",
  },
  {
    title: "OM Plywood & Hardware",
    description:
      "Trusted supplier of hardware, plywood and construction materials.",
    image:"/om_plywood_and_Hardware.png",
        link: "/ventures/OmPlay",

    
  },
  
];

export default function Ventures() {
  return (

  




    <section id="ventures" className={styles.ventures}>
      <div className={styles.heading}>
        <span>OUR VENTURES</span>
        <h2>Building Success Across Industries</h2>
      </div>

      <div className={styles.grid}>
        {ventures.map((venture, index) => (
          <motion.div
            key={index}
            className={styles.card}
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
            <div className={styles.imageWrapper}>
              <img
                src={venture.image}
                alt={venture.title}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <h3>{venture.title}</h3>
              <p>{venture.description}</p>

 <Link
  href={venture.link}
  className={styles.btn}
>
  Explore
</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    
  );
}