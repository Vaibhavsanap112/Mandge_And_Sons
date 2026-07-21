"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Colorsply.module.css";

import { FaPhone, FaWhatsapp } from "react-icons/fa";

const features = [
  {
    title: "Premium Quality Materials",
    text: "We use carefully selected hardwood and high-grade veneers to manufacture strong, durable, and reliable plywood products.",
  },
  {
    title: "Advanced Manufacturing",
    text: "Our production process combines modern machinery with skilled craftsmanship to ensure precision, consistency, and superior finishing.",
  },
  {
    title: "Durability & Strength",
    text: "Engineered to withstand moisture, load, termites, and long-term usage, making it suitable for multiple applications.",
  },
  {
    title: "Wide Product Range",
    text: "From commercial plywood to premium interior solutions, tailored to different project requirements.",
  },
  {
    title: "Commitment to Innovation",
    text: "We continuously improve our manufacturing techniques and product quality to stay ahead in the industry.",
  },
  {
    title: "Customer-Centric Approach",
    text: "Timely delivery, transparent business practices, and long-term relationships built on trust and satisfaction.",
  },
  {
    title: "Sustainable Practices",
    text: "Responsible manufacturing through environmentally conscious processes and efficient resource utilization.",
  },
  {
    title: "Trusted Industry Partner",
    text: "Reliability, quality assurance, and professional excellence in the plywood manufacturing sector.",
  },
];

type SpokeMarkProps = {
  count?: number;
  animate?: boolean;
  delay?: number;
  className?: string;
};

// Round to avoid SSR/client floating-point mismatch on trig output
function r(n: number) {
  return Math.round(n * 1000) / 1000;
}

function SpokeMark({
  count = 24,
  animate = false,
  delay = 0,
  className,
}: SpokeMarkProps) {
  const size = 100;
  const cx = size / 2;
  const cy = size / 2;
  const rInner = 10;
  const rOuter = 46;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x1 = r(cx + Math.cos(angle) * rInner);
        const y1 = r(cy + Math.sin(angle) * rInner);
        const x2 = r(cx + Math.cos(angle) * rOuter);
        const y2 = r(cy + Math.sin(angle) * rOuter);
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={animate ? { pathLength: 0, opacity: 0 } : false}
            animate={animate ? { pathLength: 1, opacity: 1 } : undefined}
            transition={
              animate
                ? { duration: 0.5, delay: delay + i * 0.012, ease: "easeOut" }
                : undefined
            }
          />
        );
      })}
    </svg>
  );
}

export default function ColorsplyPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className={styles.page}>
      <div className={styles.backContainer}>
        <Link href="/" className={styles.backButton}>
          &larr; Back
        </Link>
      </div>

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.veneerLayers} aria-hidden="true"></div>
        <div className={styles.lightSweep} aria-hidden="true"></div>
        <SpokeMark className={styles.heroSpoke} count={36} animate={!reduceMotion} />

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.9 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
          >
            <Image
              src="/Colorsply_logo_PNG.png"
              alt="Colorsply Industries Pvt. Ltd."
              width={400}
              height={161}
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
            Precision-Engineered Plywood
          </motion.span>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.65 }}
          >
            Strength In Every Layer,
            <br />
            Trust In Every Sheet
          </motion.h1>

          <motion.p
            className={styles.heroText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.7, duration: 0.6 }}
          >
            High-performance plywood manufactured for residential,
            commercial, industrial and interior applications &mdash; built on
            advanced technology and strict quality standards.
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
            Explore Our Craft
          </motion.a>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className={styles.about}>
        <motion.div
          className={styles.aboutContent}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <span className={styles.sectionTag}>About Us</span>
          <h2>Quality Is Our Promise</h2>
          <div className={styles.tick}></div>

          <p>
            At <strong>Colorsply Industries Pvt. Ltd.</strong>, we are
            committed to delivering premium-quality plywood solutions
            crafted with strength, precision and durability. Built on a
            foundation of trust, innovation and craftsmanship, we
            specialize in manufacturing high-performance plywood products
            for residential, commercial, industrial and interior
            applications.
          </p>
          <p>
            With advanced manufacturing technology, superior raw materials
            and strict quality standards, every sheet we produce reflects
            excellence and long-lasting performance &mdash; meeting the evolving
            needs of architects, interior designers, contractors and
            customers across India.
          </p>
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className={styles.whySection}>
        <motion.div
          className={styles.whyHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <span className={styles.sectionTag}>Why Choose Us</span>
          <h2>Engineered For Excellence</h2>
        </motion.div>

        <div className={styles.whyGrid}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : i * 0.05 }}
              whileHover={reduceMotion ? {} : { y: -8 }}
            >
              <SpokeMark className={styles.cardSpoke} count={16} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className={styles.mission}>
        <motion.div
          className={styles.missionContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionTag}>Our Mission</span>
          <h2>
            &ldquo;Quality Is Not Just A Product
            <br />
            &mdash; It Is Our Promise.&rdquo;
          </h2>
        </motion.div>
      </section>
{/* ================= CTA ================= */}
      <section className={styles.cta}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionTag}>Get In Touch</span>
          <h2>Partner With Colorsply</h2>
          <p>
            Speak with our team about plywood grades, product range and
            bulk supply for your next project.
          </p>

          <div className={styles.buttonGroup}>
            <a href="tel:+918767223190" className={styles.primaryBtn}>
              <FaPhone size={18} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/8767223190"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={26} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        <Image
          src="/Colorsply_logo_PNG.png"
          alt="Colorsply Industries Pvt. Ltd."
          width={190}
          height={77}
          className={styles.footerLogo}
        />
        <p>&copy; 2026 Colorsply Industries Pvt. Ltd. All Rights Reserved.</p>
      </footer>
    </main>
  );
}