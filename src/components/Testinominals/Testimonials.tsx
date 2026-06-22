"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Exceptional quality and professional service.",
    name: "Rahul Sharma",
    role: "Architect",
  },
  {
    text: "Their attention to detail in interior design is remarkable.",
    name: "Priya Patil",
    role: "Home Owner",
  },
  {
    text: "Reliable, transparent and always deliver on time.",
    name: "Sameer Khan",
    role: "Builder",
  },
  {
    text: "A trustworthy group with outstanding expertise.",
    name: "Ankit Jain",
    role: "Real Estate Investor",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          WHAT OUR CLIENTS SAY
        </motion.h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 100,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className={styles.stars}>
                  ★★★★★
                </div>

                <p>{item.text}</p>

                <div className={styles.client}>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}