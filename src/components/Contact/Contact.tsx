"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          LET'S BUILD SOMETHING EXTRAORDINARY TOGETHER
        </motion.h2>

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
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

          {/* Form */}
          <motion.form
            className={styles.form}
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
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

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              SEND ENQUIRY →
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}