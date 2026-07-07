"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./MandgeEstate.module.css";
import Link from "next/link";

const features = [
  "Trusted & Experienced",
  "Transparent Dealings",
  "Prime Property Opportunities",
  "Professional Guidance",
  "Customer-Focused Service",
  "Strong Market Expertise",
  "Reliable End-to-End Support",
];

const yearsActive = new Date().getFullYear() - 2008;

const stats = [
  { value: `${yearsActive}+`, label: "Years Of Trust" },
  { value: "2008", label: "Established" },
  { value: "100%", label: "Transparent Dealings" },
];

/* Parcel node — a thin gold line with a small diamond at its centre,
   echoing the diamond in the logo mark. Used as a quiet section rule. */
function ParcelDivider() {
  return (
    <div className={styles.parcelDivider} aria-hidden="true">
      <span className={styles.parcelLine}></span>
      <span className={styles.parcelDiamond}></span>
      <span className={styles.parcelLine}></span>
    </div>
  );
}

export default function MandgeEstatePage() {
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
        <div className={styles.parcelGrid} aria-hidden="true"></div>
        <div className={styles.heroGlow} aria-hidden="true"></div>

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
              src="/Mandge_Estate_PNG_LOGO.png"
              alt="Mandge Estate"
              width={230}
              height={259}
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
            Est. 2008 — Land • Plots • Investment
          </motion.span>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.65 }}
          >
            Property Decisions
            <br />
            Built On Trust
          </motion.h1>

          <motion.p
            className={styles.heroText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.7, duration: 0.6 }}
          >
            Premium property solutions in land development, residential
            plots and investment opportunities, delivered with honesty and
            professionalism since 2008.
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
            Discover Our Properties
          </motion.a>
        </motion.div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <div className={styles.statsStrip}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </motion.div>
        ))}
      </div>

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
          <h2>A Legacy Since 2008</h2>
          <div className={styles.tick}></div>

          <p>
            Mandge Estate is a trusted real estate brand established in
            2008, dedicated to delivering premium property solutions with
            honesty, professionalism and customer satisfaction.
          </p>
          <p>
            We specialize in land development, residential plots and
            investment opportunities designed for long-term value and
            growth.
          </p>
        </motion.div>
      </section>

      <ParcelDivider />

      {/* ================= WHY CHOOSE US ================= */}
      <section className={styles.whySection}>
        <motion.div
          className={styles.whyHeading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <span className={styles.sectionTag}>Why Choose Mandge Estate</span>
          <h2>Property Partnerships Built To Last</h2>
        </motion.div>

        <div className={styles.whyGrid}>
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              whileHover={{ y: -8 }}
            >
              <span className={styles.cardMark}></span>
              <h3>{feature}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} aria-hidden="true"></div>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionTag}>Get In Touch</span>
          <h2>Find Your Next Property Investment</h2>
          <p>
            Speak with our team about current plots, land parcels and
            investment opportunities.
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
          src="/Mandge_Estate_PNG_LOGO.png"
          alt="Mandge Estate"
          width={100}
          height={112}
          className={styles.footerLogo}
        />
        <p>© 2026 Mandge Estate. All Rights Reserved.</p>
      </footer>
    </main>
  );
}