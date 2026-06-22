"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 50);
};


window.addEventListener("scroll", handleScroll);

return () =>
  window.removeEventListener("scroll", handleScroll);


}, []);

return (
  <nav
    className={`${styles.navbar} ${
      scrolled ? styles.scrolled : ""
    }`}
  >
    <div className={styles.logo}>
     <div className={styles.logoIcon}>
  M
</div>
      <span>MANDGE & SONS</span>
    </div>

    <ul className={styles.menu}>
      <Link
  to="home"
  smooth={true}
  duration={800}
>
  Home
</Link>
      <Link
  to="about"
  smooth={true}
  duration={800}
  offset={-100}
>
  About
</Link>
      <Link to="ventures" smooth duration={800} offset={-100}>Ventures</Link>
     <Link to="projects" smooth duration={800} offset={-100}>Projects</Link>
     <Link to="journey" smooth duration={800} offset={-100}>Journey</Link>

     <Link to="contact" smooth duration={800} offset={-100}>Contact</Link>
    </ul>

    <button className={styles.cta}>
      Get In Touch
    </button>

   <div
  className={styles.hamburger}
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</div>

<div
  className={`${styles.mobileMenu} ${
    menuOpen ? styles.mobileMenuOpen : ""
  }`}
>
  <div className={styles.mobileHeader}>
    <div className={styles.mobileLogo}>
     <div className={styles.logoIcon}>
  M
</div>
      <span>MANDGE & SONS</span>
    </div>

    <button
      className={styles.closeBtn}
      onClick={() => setMenuOpen(false)}
    >
      ✕
    </button>
  </div>

  <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
  <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
  <a href="#ventures" onClick={() => setMenuOpen(false)}>Ventures</a>
  <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
  <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
  <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

  <button className={styles.mobileCta}>
    Get In Touch
  </button>
</div>
  </nav>
);
}
