"use client";

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./DesignStudio.module.css";

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

/* ---------------------------------------------------------
   HERO ILLUSTRATION — the signature visual.
   A single-line architectural elevation: a boutique villa
   with a pitched roof, a grid of windows (one lit in the
   studio's red), a door and a tree. It draws itself in like
   a hand-inked sketch, then sits quietly beside the copy.
---------------------------------------------------------- */

function HeroIllustration({ animate = true }: { animate?: boolean }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1 },
  };

  return (
    <motion.svg
      className={styles.heroIllustration}
      viewBox="0 0 400 420"
      fill="none"
      aria-hidden="true"
      initial={animate ? "hidden" : false}
      animate={animate ? "show" : undefined}
    >
      {/* ground line */}
      <motion.line
        x1="24" y1="368" x2="376" y2="368"
        stroke="#18151A" strokeWidth="2" strokeLinecap="round"
        variants={draw} transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* roof */}
      <motion.path
        d="M70 150 L200 60 L330 150"
        stroke="#18151A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        variants={draw} transition={{ duration: 1, ease: "easeInOut", delay: 0.15 }}
      />

      {/* chimney */}
      <motion.path
        d="M255 100 L255 70 L280 70 L280 118"
        stroke="#18151A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        variants={draw} transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
      />

      {/* walls */}
      <motion.path
        d="M90 150 L90 368 M310 150 L310 368"
        stroke="#18151A" strokeWidth="3" strokeLinecap="round"
        variants={draw} transition={{ duration: 0.9, ease: "easeInOut", delay: 0.35 }}
      />

      {/* windows — top row */}
      <motion.rect x="118" y="180" width="46" height="52" rx="2" stroke="#18151A" strokeWidth="2" variants={draw} transition={{ duration: 0.5, delay: 0.6 }} />
      <motion.rect x="236" y="180" width="46" height="52" rx="2" stroke="#DA1C1A" strokeWidth="2" fill="#DA1C1A" fillOpacity="0.12" variants={draw} transition={{ duration: 0.5, delay: 0.68 }} />
      {/* window mullions */}
      <motion.path d="M141 180 L141 232 M118 206 L164 206" stroke="#18151A" strokeWidth="1.4" variants={draw} transition={{ duration: 0.4, delay: 0.75 }} />
      <motion.path d="M259 180 L259 232 M236 206 L282 206" stroke="#DA1C1A" strokeWidth="1.4" variants={draw} transition={{ duration: 0.4, delay: 0.78 }} />

      {/* windows — bottom row */}
      <motion.rect x="118" y="264" width="46" height="52" rx="2" stroke="#18151A" strokeWidth="2" variants={draw} transition={{ duration: 0.5, delay: 0.85 }} />
      <motion.path d="M141 264 L141 316 M118 290 L164 290" stroke="#18151A" strokeWidth="1.4" variants={draw} transition={{ duration: 0.4, delay: 0.95 }} />

      {/* door */}
      <motion.path
        d="M225 368 L225 286 Q225 272 239 272 L251 272 Q265 272 265 286 L265 368"
        stroke="#18151A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        variants={draw} transition={{ duration: 0.7, ease: "easeInOut", delay: 0.9 }}
      />
      <motion.circle cx="253" cy="330" r="2.6" fill="#18151A" variants={draw} transition={{ duration: 0.3, delay: 1.3 }} />

      {/* tree */}
      <motion.circle cx="60" cy="290" r="34" stroke="#5C584A" strokeWidth="2" variants={draw} transition={{ duration: 0.6, delay: 1.05 }} />
      <motion.line x1="60" y1="324" x2="60" y2="368" stroke="#5C584A" strokeWidth="2.5" strokeLinecap="round" variants={draw} transition={{ duration: 0.4, delay: 1.2 }} />

      {/* sun accent */}
      <motion.circle cx="345" cy="60" r="16" stroke="#DA1C1A" strokeWidth="2" variants={draw} transition={{ duration: 0.5, delay: 1.15 }} />
    </motion.svg>
  );
}

/* Skyline mark — echoes the tapered spires in the logo. Used as a
   recurring rule between sections. */
function SkylineMark({ className, animate = false }: { className?: string; animate?: boolean }) {
  const bars = [18, 34, 26, 48, 66, 92, 120, 150, 168, 140, 96, 60, 30, 20, 44, 70, 100, 128, 110, 78, 46, 24];
  const gap = 14;
  const width = bars.length * gap + 20;
  const height = 176;

  return (
    <svg className={className} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMax meet" aria-hidden="true">
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
            transition={animate ? { duration: 0.5, delay: i * 0.02, ease: "easeOut" } : undefined}
            style={{ transformOrigin: `${x}px ${height}px` }}
          />
        );
      })}
    </svg>
  );
}

/* Tilt card — subtle 3D lean toward the cursor for the process cards. */
function TiltCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotY = useSpring(useTransform(mvX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const rotX = useSpring(useTransform(mvY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mvX.set((e.clientX - r.left) / r.width - 0.5);
    mvY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Call + WhatsApp icons — inline SVG, no icon-library dependency. */

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.9c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2 2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        d="M23.4 8.6a10 10 0 0 0-15.9 12L6 27l6.6-1.4a10 10 0 0 0 4.8 1.2h.1a10 10 0 0 0 10-9.9 9.9 9.9 0 0 0-4.1-8.3z"
        fill="#fff"
      />
      <path
        d="M16.5 24a8.3 8.3 0 0 1-4.2-1.1l-.3-.2-3.5.9.9-3.4-.2-.3a8.3 8.3 0 1 1 15.5-4.1 8.3 8.3 0 0 1-8.2 8.2z"
        fill="#25D366"
      />
      <path
        d="M20.9 18.2c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.1-.3.2-.5.1-.6-.3-1.3-.6-1.9-1.2-.5-.5-.9-1.1-1-1.3-.1-.2 0-.4.1-.5l.4-.4c.1-.1.1-.2.2-.4v-.4c-.1-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.5c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.7 2.6 4.1 3.6.6.2 1 .4 1.4.5.6.2 1.1.1 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.1-.4-.2z"
        fill="#fff"
      />
    </svg>
  );
}


export default function MandgeDesignStudioPage() {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;

  return (
    <main className={styles.page}>
      <div className={styles.backContainer}>
        <Link href="/" className={styles.backButton}>
          &larr; Back
        </Link>
      </div>

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.gridLines} aria-hidden="true" />
        <SkylineMark className={styles.heroSkyline} animate={animate} />

        <div className={styles.heroInner}>
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
            Thoughtful architectural and interior spaces where luxury meets functionality, and every design is built to last.
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

        <div className={styles.heroVisual}>
          <HeroIllustration animate={animate} />
        </div>
        </div>
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
          <div className={styles.tick} />

          <p>
            At <strong>Mandge Design Studio</strong>, we believe a well-designed space is a catalyst for a better life.
            Based in the heart of Nashik, our firm was founded on the principle that luxury should be functional and
            design should be durable.
          </p>
          <p>
            Led by <strong>Ar. Abhishek Mandge</strong>, our team brings together architectural precision and artistic
            flair. We don&apos;t just focus on the aesthetics — we dive deep into the science of space planning.
          </p>
          <p>
            What sets us apart is our <strong>&quot;Factory-to-Finish&quot;</strong> philosophy. With a legacy rooted in the
            manufacturing of premium materials, we have an insider&apos;s command over quality — ensuring that every
            piece of plywood, every finish, and every fabric used in your project meets the highest industry
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
            We combine thoughtful architecture, intelligent planning and premium materials to deliver spaces that are
            elegant, practical and timeless.
          </p>
        </motion.div>

        <div className={styles.whyGrid}>
          {process.map((step, i) => (
            <TiltCard key={step.n} delay={i * 0.08}>
              <span className={styles.cornerTL} />
              <span className={styles.cornerBR} />
              <span className={styles.cardNum}>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </TiltCard>
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
          <div className={styles.tick} />
          <p>
            We don&apos;t just focus on aesthetics. We dive deep into the science of space planning, ensuring every
            project balances beauty, functionality and durability.
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
            Whether you&apos;re designing a home, office or commercial space, we&apos;re here to transform your vision
            into reality.
          </p>

          <div className={styles.buttonGroup}>
            <a href="tel:+919999999999" className={styles.primaryBtn}>
              <PhoneIcon />
              Call Now
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              <WhatsAppIcon />
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