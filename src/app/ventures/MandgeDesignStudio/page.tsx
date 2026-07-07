"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./DesignStudio.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const process = [
  {
    n: "01",
    title: "Vision Driven Design",
    text: "Every project begins with understanding your lifestyle before creating a design that reflects your vision.",
  },
  {
    n: "02",
    title: "Architectural Precision",
    text: "Our process combines creativity with technical planning to ensure every space is beautiful and functional.",
  },
  {
    n: "03",
    title: "Premium Materials",
    text: "Our manufacturing background allows us to maintain exceptional quality in every finish and detail.",
  },
  {
    n: "04",
    title: "Factory-to-Finish",
    text: "Every stage is carefully monitored, ensuring premium workmanship from concept to completion.",
  },
];

/* Skyline mark — echoes the tapered spires in the logo. Used as a
   one-time "drawn line" reveal behind the hero, and as a small
   recurring rule between sections. */

   type SkylineMarkProps = {
  className?: string;
  animate?: boolean;
};
function SkylineMark({
  className,
  animate = false,
}: SkylineMarkProps) {
  const bars = [
    18, 34, 26, 48, 66, 92, 120, 150, 168, 140, 96, 60,
    30, 20, 44, 70, 100, 128, 110, 78, 46, 24,
  ];
  const gap = 14;
  const width = bars.length * gap + 20;
  const height = 176;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {bars.map((h, i) => {
        const x = 10 + i * gap;
        const d = `M ${x - 3} ${height} L ${x} ${height - h} L ${x + 3} ${height} Z`;
        return (
          <motion.path
            key={i}
            d={d}
            fill="currentColor"
            initial={animate ? { opacity: 0, scaleY: 0.3 } : false}
            whileInView={animate ? { opacity: 1, scaleY: 1 } : undefined}
            viewport={animate ? { once: true } : undefined}
            transition={
              animate
                ? { duration: 0.5, delay: i * 0.02, ease: "easeOut" }
                : undefined
            }
            style={{ transformOrigin: `${x}px ${height}px` }}
          />
        );
      })}
    </svg>
  );
}

export default function MandgeDesignStudioPage() {
  const reduceMotion = useReducedMotion();

  return (
   
    <main className={styles.page}>
       {/* <Navbar></Navbar> */}
             <div className={styles.backContainer}>
        <Link href="/" className={styles.backButton}>
          &larr; Back
        </Link>
      </div>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.gridLines} aria-hidden="true"></div>
        <SkylineMark className={styles.heroSkyline} animate />

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.9 }}
        >
          <motion.div
            className={styles.logoWrap}
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
          >
            <Image
              src="/MandgeDesingStudio.jpeg"
              alt="Mandge Design Studio"
              width={340}
              height={455}
              priority
              className={styles.logo}
            />
          </motion.div>

          <motion.span
            className={styles.heroTag}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.35, duration: 0.6 }}
          >
            Architecture • Interiors • Space Planning
          </motion.span>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.65 }}
          >
            Where Visionary Design
            <br />
            Meets Flawless Execution
          </motion.h1>

          <motion.p
            className={styles.heroText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.7, duration: 0.6 }}
          >
            Thoughtful architectural and interior spaces where luxury meets
            functionality, and every design is built to last.
          </motion.p>

          <motion.a
            href="#about"
            className={styles.heroBtn}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.85, duration: 0.55 }}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            Explore Studio
          </motion.a>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className={styles.about}>
        <motion.div
          className={styles.aboutContent}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <span className={styles.sectionTag}>About Us</span>
          <h2>A Studio Built On Precision</h2>
          <div className={styles.tick}></div>

          <p>
            At <strong>Mandge Design Studio</strong>, we believe a
            well-designed space is a catalyst for a better life. Based in the
            heart of Nashik, our firm was founded on the principle that
            luxury should be functional and design should be durable.
          </p>
          <p>
            Led by <strong>Ar. Abhishek Mandge</strong>, our team brings
            together architectural precision and artistic flair. We don&apos;t
            just focus on the aesthetics — we dive deep into the science of
            space planning.
          </p>
          <p>
            What sets us apart is our <strong>&quot;Factory-to-Finish&quot;</strong>{" "}
            philosophy. With a legacy rooted in the manufacturing of premium
            materials, we have an insider&apos;s command over quality —
            ensuring that every piece of plywood, every finish, and every
            fabric used in your project meets the highest industry
            standards.
          </p>
        </motion.div>
      </section>

      <SkylineMark className={styles.ruleSkyline} />

      {/* ================= WHY CHOOSE US ================= */}
      <section className={styles.whySection}>
        <motion.div
          className={styles.whyHeading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <span className={styles.sectionTag}>How We Work</span>
          <h2>
            Every Detail.
            <br />
            Every Material. Every Space.
          </h2>
          <p>
            We combine thoughtful architecture, intelligent planning and
            premium materials to deliver spaces that are elegant, practical
            and timeless.
          </p>
        </motion.div>

        <div className={styles.whyGrid}>
          {process.map((step, i) => (
            <motion.div
              key={step.n}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -10 }}
            >
              <span className={styles.cornerTL}></span>
              <span className={styles.cornerBR}></span>
              <span className={styles.cardNum}>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= DESIGN PHILOSOPHY ================= */}
      <section className={styles.philosophy}>
        <motion.div
          className={styles.philosophyContent}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionTag}>Our Philosophy</span>
          <h2>Design Should Be Timeless.</h2>
          <div className={styles.tick}></div>
          <p>
            We don&apos;t just focus on aesthetics. We dive deep into the
            science of space planning, ensuring every project balances
            beauty, functionality and durability.
          </p>
        </motion.div>
      </section>

      <SkylineMark className={styles.ruleSkyline} />

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionTag}>Start Your Project</span>
          <h2>Let&apos;s Create Something Beautiful</h2>
          <p>
            Whether you&apos;re designing a home, office or commercial space,
            we&apos;re here to transform your vision into reality.
          </p>

          <div className={styles.buttonGroup}>
            <a href="tel:+919999999999" className={styles.primaryBtn}>
              Call Now
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        <Image
           src="/MandgeDesingStudio.jpeg"
          alt="Mandge Design Studio"
          width={110}
          height={147}
          className={styles.footerLogo}
        />
        <p>© 2026 Mandge Design Studio. All Rights Reserved.</p>
      </footer>
    </main>
  );
}