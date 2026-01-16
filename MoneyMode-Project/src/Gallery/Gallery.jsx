import React, { useEffect, useRef, useState } from "react";
import styles from "./Gallery.module.css";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "../animations";

const IMAGES = [
  "Images/gallery_1.png",
  "Images/gallery_2.png",
  "Images/gallery_3.png",
  "Images/gallery_4.png",
];

const LOOP_IMAGES = [...IMAGES, ...IMAGES];

function Gallery() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = 0.5;

    const autoScroll = () => {
      if (!isPaused) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollStep;
        }
      }

    };

  }, [isPaused]);

  // Manual scroll function
  const scrollByAmount = (amount) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsPaused(true);
    container.scrollBy({ left: amount, behavior: "smooth" });

    // Resume auto-scroll after 2 seconds
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={`section__inner ${styles.wrapper}`}>

        {/* HEADING */}
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp(0.2)}
        >
          A Glimpse Into My World
        </motion.h2>

        {/* BACKGROUND BAR */}
        <div className={styles.backgroundBar}></div>

        {/* ARROWS */}
        <button
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={() => scrollByAmount(-300)}
        >
          {/* ‹ */}
          <i class="ri-arrow-left-s-line"></i>
        </button>

        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={() => scrollByAmount(300)}
        >
          {/* › */}
          <i class="ri-arrow-right-s-line"></i>
        </button>

        {/* CAROUSEL */}
        <motion.div
          className={styles.carousel}
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.4)}
        >
          {LOOP_IMAGES.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={src} alt={`Gallery ${index}`} className={styles.image} />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Gallery;
