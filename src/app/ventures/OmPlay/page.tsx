"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./OmPlywood.module.css";
import Link from "next/link";

const features = [
  { code: "OM-01", title: "Premium Quality Materials" },
  { code: "OM-02", title: "Wide Range Of Interior Products" },
  { code: "OM-03", title: "Modern Designs & Finishes" },
  { code: "OM-04", title: "Genuine & Trusted Brands" },
  { code: "OM-05", title: "Expert Customer Support" },
  { code: "OM-06", title: "Competitive Pricing" },
  { code: "OM-07", title: "Complete Interior Solutions" },
];

const materials = [
  "Plywood",
  "Laminates",
  "MDF",
  "Veneers",
  "Hardware",
  "Decor Products",
];


function MaterialStrip() {
  return (
    <div className={styles.materialStrip} aria-hidden="true">
      {materials.map((m, i) => (
        <span key={m} className={styles.materialItem}>
          {m}
          {i < materials.length - 1 && (
            <span className={styles.materialDot}>•</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default function OmPlywoodPage() {
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
        <div className={styles.heroBandOne}></div>
        <div className={styles.heroBandTwo}></div>
        <div className={styles.noise}></div>

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1 }}
        >
          <motion.div
            className={styles.logoPlate}
            initial={{ scale: 0.75, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeOut" }}
          >
            <Image
              src="/om_plywood_and_Hardware.png"
              alt="OM Plywood & Hardware"
              width={720}
              height={155}
              priority
              className={styles.logo}
            />
          </motion.div>

          <motion.span
            className={styles.heroTag}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.4, duration: 0.6 }}
          >
            Timber • Laminate • Hardware Supply
          </motion.span>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.55, duration: 0.7 }}
          >
            Interiors Built
            <br />
            Layer By Layer
          </motion.h1>

          <motion.p
            className={styles.heroText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.85, duration: 0.7 }}
          >
            Every board we supply is chosen the way a good sheet of plywood is
            made — with care in every layer, from core to finish.
          </motion.p>

          <motion.div
            className={styles.chipRow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 1.05, duration: 0.6 }}
          >
            {materials.map((m) => (
              <span key={m} className={styles.chip}>
                {m}
              </span>
            ))}
          </motion.div>

          <motion.a
            href="#about"
            className={styles.heroButton}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.96 }}
          >
            Explore Our Materials
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
          transition={{ duration: 0.8 }}
        >
          <span className={styles.smallTitle}>About Us</span>
          <h2>Building Trust Through Quality</h2>
          <div className={styles.miniGrain}></div>

          <p>
            Om Plywood &amp; Hardware is a trusted destination for premium
            plywood, laminates, veneers, MDF, hardware and decorative
            interior products.
          </p>
          <p>
            With a commitment to quality, innovation and customer
            satisfaction, we provide complete interior solutions that bring
            elegance, durability and functionality to every space.
          </p>
        </motion.div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className={styles.whySection}>
        <motion.div
          className={styles.whyHeading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.smallTitle}>Why Choose Us</span>
          <h2>Excellence In Every Interior Solution</h2>
          <p>
            We combine premium products, trusted brands and outstanding
            customer service to create beautiful interior spaces.
          </p>
        </motion.div>

        <div className={styles.whyGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.code}
              className={styles.whyCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.cardGrain}></div>
              <div className={styles.cardPeel}></div>
              <span className={styles.swatchCode}>{feature.code}</span>
              <h3>{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <MaterialStrip />

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow}></div>

        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.smallTitle}>Get In Touch</span>
          <h2>Let&apos;s Build Your Dream Interior</h2>
          <p>
            Visit our showroom to explore premium plywood, laminates,
            veneers, MDF, hardware and decorative interior products.
          </p>

          <div className={styles.buttonGroup}>
            <a href="tel:+919999999999" className={styles.callBtn}>
              Call Now
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        <motion.div
          className={styles.footerInner}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/om_plywood_and_Hardware.png"
            alt="OM Plywood"
            width={140}
            height={140}
            className={styles.footerLogo}
          />
          <p>Premium Interior Solutions</p>
          <span>© 2026 OM Plywood &amp; Hardware. All Rights Reserved.</span>
        </motion.div>
      </footer>
    </main>
  );
}