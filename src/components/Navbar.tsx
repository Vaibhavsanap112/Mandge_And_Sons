"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Desktop Logo Wrapper */}
      <div className={styles.logoWrapper}>
        <Image
          src="/MainLogo.png"
          alt="MANDGE & SONS Logo"
          width={220}
          height={80}
          priority
          className={styles.logoImage}
        />
      </div>

      {/* Desktop Menu - Increased duration & added smooth easing */}
      <ul className={styles.menu}>
        <Link
          to="home"
          smooth={true}
          duration={1200}
          offset={-120}
          spy={true}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={1200}
          offset={-10}
          spy={true}
        >
          About
        </Link>
        <Link
          to="ventures"
          smooth={true}
          duration={1200}
          offset={-10}
          spy={true}
        >
          Ventures
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1200}
          offset={-5}
          spy={true}
        >
          Projects
        </Link>
        <Link
          to="journey"
          smooth={true}
          duration={1200}
          offset={-10}
          spy={true}
        >
          Journey
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1200}
          offset={-4}
          spy={true}
        >
          Contact
        </Link>
      </ul>

      {/* CTA */}
      <button className={styles.cta}>Get In Touch</button>

      {/* Hamburger */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu - Replaced <a> with smooth <Link> */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileHeader}>
          <div className={styles.mobileLogoWrapper}>
            <Image
              src="/MainLogo.png"
              alt="MANDGE & SONS Logo"
              width={160}
              height={70}
              className={styles.logoImage}
            />
          </div>

          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <Link
          to="home"
          smooth={true}
          duration={1200}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={1200}
          offset={-100}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="ventures"
          smooth={true}
          duration={1200}
          offset={-100}
          onClick={() => setMenuOpen(false)}
        >
          Ventures
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1200}
          offset={-100}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="journey"
          smooth={true}
          duration={1200}
          offset={-100}
          onClick={() => setMenuOpen(false)}
        >
          Journey
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1200}
          offset={-100}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        <button className={styles.mobileCta}>Get In Touch</button>
      </div>
    </nav>
  );
}