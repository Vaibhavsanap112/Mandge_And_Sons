"use client";

import styles from "./Ventures.module.css";
import Link from "next/link";

const ventures = [
  {
    title: "Colorsply Industries",
    description: "Premium plywood and interior solutions delivering quality and durability.",
    image: "/Colorsply_logo_PNG.png",
    link: "/ventures/colorsply",
     zoom: true,
  },
  {
    title: "Mandge Estate",
    description: "Helping customers find valuable real estate opportunities with confidence.",
    image: "Mandge_Estate_PNG_LOGO.png",
    link: "/ventures/MandgeEstate",
     zoom: false,
  },
  {
    title: "Mandge Design Studio",
    description: "Creative architecture and interior design focused on modern living.",
    image: "/MandgeDesingStudio.jpeg",
    link: "/ventures/MandgeDesignStudio",
     zoom: false,
  },
  {
    title: "OM Plywood & Hardware",
    description: "Trusted supplier of hardware, plywood and construction materials.",
    image: "/om_plywood_and_Hardware.png",
    link: "/ventures/OmPlay",
     zoom: true,
  },
];

export default function Ventures() {
  // Double the array to create a flawless seamless looping illusion
  const doubledVentures = [...ventures, ...ventures];

  return (
    <section id="ventures" className={styles.ventures}>
      <div className={styles.heading}>
        <span>OUR VENTURES</span>
        <h2>Building Success Across Industries</h2>
      </div>

      {/* The viewport mask that hides overflow */}
      <div className={styles.sliderContainer}>
        <div className={styles.track}>
          {doubledVentures.map((venture, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
               <img
  src={venture.image}
  alt={venture.title}
  className={`${styles.image} ${venture.zoom ? styles.zoomLogo : ""}`}
/>
              </div>

              <div className={styles.content}>
                <h3>{venture.title}</h3>
                <p>{venture.description}</p>
                <Link href={venture.link} className={styles.btn}>
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}