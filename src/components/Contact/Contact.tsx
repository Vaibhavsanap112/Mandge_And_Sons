"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* ========================== HEADER ========================== */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>GET IN TOUCH</span>
          <h2>
            Let's Build Something
            <br />
            Extraordinary Together
          </h2>
          <p>
            Whether you're looking for premium interior solutions, real estate
            opportunities, architecture, manufacturing or construction services,
            We're here to help.
          </p>
        </motion.div>

        {/* ========================== CONTACT CARDS ========================== */}
        <div className={styles.contactCards}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className={styles.icon}>📞</div>
            <h3>Call Us</h3>
            <p>+91 12345 67890</p>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className={styles.icon}>✉️</div>
            <h3>Email</h3>
            <p>info@mandgeandsons.com</p>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className={styles.icon}>📍</div>
            <h3>Visit Us</h3>
            <p>Nashik, Maharashtra, India</p>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className={styles.icon}>💬</div>
            <h3>WhatsApp</h3>
            <p>Chat With Our Team</p>
          </motion.div>
        </div>

        {/* ========================== CONTENT & FORM ========================== */}
        <div className={styles.content}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>
              Ready To Start
              <br />
              Your Next Project?
            </h3>
            <p>
              We are committed to delivering excellence across architecture,
              interior design, manufacturing, real estate and construction. Let
              us understand your requirements and guide you towards the perfect
              solution.
            </p>

            <div className={styles.features}>
              <div>✓ Premium Quality</div>
              <div>✓ Trusted Since 1993</div>
              <div>✓ Expert Team</div>
              <div>✓ End-To-End Solutions</div>
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />

            <select defaultValue="" required>
              <option value="" disabled>
                Select Business Interest
              </option>
              <option value="mandge-estate">Mandge Estate</option>
              <option value="mandge-design-studio">Mandge Design Studio</option>
              <option value="colorsply-industries">Colorsply Industries</option>
              <option value="om-plywood-hardware">OM Plywood & Hardware</option>
            </select>

            <textarea rows={5} placeholder="Tell us about your project..." required></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SEND ENQUIRY →
            </motion.button>
          </motion.form>
        </div>

        {/* ========================== ENHANCED FOOTER ========================== */}
        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.footerMain}>
            <div className={styles.footerLogo}>
              <h2>Mandge & Sons</h2>
              <span>Building Excellence Since 1993</span>
            </div>

            <div className={styles.footerNavGroup}>
              <h4>Quick Links</h4>
              <div className={styles.footerLinks}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#ventures">Ventures</a>
                <a href="#journey">Journey</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div className={styles.footerNavGroup}>
              <h4>Connect With Us</h4>
              <div className={styles.socials}>
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.copy}>
              © 2026 Mandge & Sons. All Rights Reserved.
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}