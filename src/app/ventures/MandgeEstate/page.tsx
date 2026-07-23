"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  ShieldCheck,
  FileCheck2,
  MapPin,
  Compass,
  Users,
  TrendingUp,
  Handshake,
} from "lucide-react";
import styles from "./MandgeEstate.module.css";

const features = [
  { icon: ShieldCheck, title: "Trusted & Experienced" },
  { icon: FileCheck2, title: "Transparent Dealings" },
  { icon: MapPin, title: "Prime Property Opportunities" },
  { icon: Compass, title: "Professional Guidance" },
  { icon: Users, title: "Customer-Focused Service" },
  { icon: TrendingUp, title: "Strong Market Expertise" },
  { icon: Handshake, title: "Reliable End-to-End Support" },
];

const yearsActive = new Date().getFullYear() - 2008;

const stats = [
  { value: `${yearsActive}+`, label: "Years Of Trust" },
  { value: "2008", label: "Established" },
  { value: "100%", label: "Transparent Dealings" },
];

function ParcelDivider() {
  return (
    <div className={styles.parcelDivider} aria-hidden="true">
      <span className={styles.parcelLine}></span>
      <span className={styles.parcelDiamond}></span>
      <span className={styles.parcelLine}></span>
    </div>
  );
}

function SurveyPlotGraphic() {
  return (
    <div className={styles.surveyWrap} aria-hidden="true">
      <svg
        className={styles.surveySvg}
        viewBox="0 0 920 360"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className={styles.surveyGrid}>
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={40 + i * 92} y1="20" x2={40 + i * 92} y2="340" />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={`h${i}`} x1="40" y1={40 + i * 70} x2="880" y2={40 + i * 70} />
          ))}
        </g>

        <polygon
          className={styles.surveyBoundary}
          points="180,90 700,70 760,270 220,290"
        />

        <circle className={styles.surveyPin} cx="180" cy="90" r="6" />
        <circle className={styles.surveyPin} cx="700" cy="70" r="6" />
        <circle className={styles.surveyPin} cx="760" cy="270" r="6" />
        <circle className={styles.surveyPin} cx="220" cy="290" r="6" />

        <text x="180" y="76" className={styles.surveyLabel}>A</text>
        <text x="708" y="60" className={styles.surveyLabel}>B</text>
        <text x="768" y="262" className={styles.surveyLabel}>C</text>
        <text x="186" y="308" className={styles.surveyLabel}>D</text>

        <text x="400" y="185" textAnchor="middle" className={styles.surveyPlotLabel}>
          SURVEY NO. <tspan>108</tspan> &nbsp; · &nbsp; 4200 SQ.FT
        </text>

        <g className={styles.surveyCompass} transform="translate(820,55)">
          <circle r="26" fill="none" stroke="var(--line)" strokeWidth="1.5" />
          <line x1="0" y1="-20" x2="0" y2="20" stroke="var(--ink)" strokeWidth="1.5" />
          <line x1="-20" y1="0" x2="20" y2="0" stroke="var(--ink)" strokeWidth="1.5" />
          <polygon points="0,-20 -4,-8 4,-8" fill="var(--red)" />
          <text x="0" y="-30" textAnchor="middle" className={styles.surveyLabel}>N</text>
        </g>
      </svg>
    </div>
  );
}

export default function MandgeEstatePage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className={styles.page}>
      {/* ================= HEADER ================= */}
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          <ArrowLeft size={16} className={styles.backArrow} />
          <Image
            src="/Mandge_Estate_PNG_LOGO.png"
            alt="Mandge Estate"
            width={38}
            height={43}
            className={styles.headerLogo}
          />
          <span className={styles.brandWord}>
            MANDGE <span>ESTATE</span>
          </span>
        </Link>

        <nav className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="tel:+919999999999" className={styles.headerCta}>
          <Phone size={15} />
          Call Now
        </a>
      </header>

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="/MangdgenEstate.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
            }}
          />
        </div>

        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroLogoWrap}
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
          >
            <Image
              src="/Mandge_Estate_PNG_LOGO.png"
              alt="Mandge Estate"
              width={140}
              height={158}
              priority
              className={styles.heroLogo}
            />
          </motion.div>

          <motion.span
            className={styles.heroEyebrow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            Est. 2008 — Land · Plots · Investment
          </motion.span>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.15, duration: 0.7 }}
          >
            Property decisions,
            <br />
            built on <em>trust</em>.
          </motion.h1>

          <motion.p
            className={styles.heroText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.35, duration: 0.6 }}
          >
            Premium property solutions in land development, residential plots
            and investment opportunities, delivered with honesty and
            professionalism since 2008.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.55 }}
          >
            <a href="#why-us" className={styles.btnPrimary}>
              Explore Properties
            </a>
            <a href="#contact" className={styles.btnGhost}>
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.6, duration: 0.7 }}
          >
            <SurveyPlotGraphic />
          </motion.div>
        </div>
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
          className={styles.aboutText}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionTag}>About Us</span>
          <h2>A legacy since 2008.</h2>
          <div className={styles.tick}></div>

          <p>
            Mandge Estate is a trusted real estate brand established in 2008,
            dedicated to delivering premium property solutions with honesty,
            professionalism and customer satisfaction.
          </p>
          <p>
            We specialize in land development, residential plots and
            investment opportunities designed for long-term value and growth.
          </p>
        </motion.div>

        <motion.div
          className={styles.isoWrap}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/land-estate.png"
            alt="Land Development & Residential Plots"
            width={760}
            height={580}
            style={{
              width: "100%",
              maxWidth: "640px",
              height: "auto",
              objectFit: "contain",
              mixBlendMode: "multiply",
            }}
          />
        </motion.div>
      </section>

      <ParcelDivider />

      {/* ================= WHY CHOOSE US ================= */}
      <section id="why-us" className={styles.whySection}>
        <motion.div
          className={styles.whyHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionTag}>Why Choose Mandge Estate</span>
          <h2>Property partnerships built to last.</h2>
        </motion.div>

        <div className={styles.whyGrid}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <span className={styles.cardIcon}>
                <feature.icon size={20} strokeWidth={2} />
              </span>
              <h3>{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className={styles.cta}>
        <div className={styles.ctaGlow} aria-hidden="true"></div>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionTag}>Get In Touch</span>
          <h2>Find your next property investment.</h2>
          <p>
            Speak with our team about current plots, land parcels and
            investment opportunities.
          </p>

          <div className={styles.buttonGroup}>
            <a href="tel:+919999999999" className={styles.primaryBtn}>
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image
            src="/Mandge_Estate_PNG_LOGO.png"
            alt="Mandge Estate"
            width={44}
            height={50}
          />
          <span className={styles.brandWord}>
            MANDGE <span>ESTATE</span>
          </span>
        </div>

        <nav className={styles.footerLinks}>
          <a href="#about">About</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <p>© {new Date().getFullYear()} Mandge Estate. All Rights Reserved.</p>
      </footer>
    </main>
  );
}