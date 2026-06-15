"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          LET'S BUILD SOMETHING EXTRAORDINARY TOGETHER
        </motion.h2>

        <motion.form
          className={styles.form}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Your Name" />

          <input type="text" placeholder="Phone Number" />

          <input type="email" placeholder="Email Address" />

          <select>
            <option>Select Business Interest</option>
            <option>Real Estate</option>
            <option>Interior Design</option>
            <option>Manufacturing</option>
            <option>Construction</option>
          </select>

          <button type="submit">
            SEND ENQUIRY →
          </button>
        </motion.form>

        <motion.div
          className={styles.info}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            📞 <span>+91 12345 67890</span>
          </div>

          <div>
            ✉️ <span>info@mandgeandsons.com</span>
          </div>

          <div>
            📍 <span>Nashik, Maharashtra, India</span>
          </div>

          <div>
            💬 <span>Chat on WhatsApp</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}