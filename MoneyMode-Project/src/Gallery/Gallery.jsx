import React, { useEffect, useRef } from "react";
import styles from "./Gallery.module.css";

const IMAGES = [
  "/Images/gallery 1.png",
  "/Images/gallery 2.png",
  "/Images/gallery 3.png",
  "/Images/gallery 4.png",
];

const LOOP_IMAGES = [...IMAGES, ...IMAGES]; // Duplicate for seamless loop

function Gallery() {
  const scrollRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const scrollStep = 0.5;
  let animationId;

  const autoScroll = () => {
    // Reset when we've scrolled halfway (first image set)
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    } else {
      container.scrollLeft += scrollStep;
    }

    animationId = requestAnimationFrame(autoScroll);
  };

  animationId = requestAnimationFrame(autoScroll);

  const stopScroll = () => cancelAnimationFrame(animationId);
  const resumeScroll = () => {
    animationId = requestAnimationFrame(autoScroll);
  };

  container.addEventListener("mouseenter", stopScroll);
  container.addEventListener("mouseleave", resumeScroll);

  return () => {
    cancelAnimationFrame(animationId);
    container.removeEventListener("mouseenter", stopScroll);
    container.removeEventListener("mouseleave", resumeScroll);
  };
}, []);


  return (
    <section id="gallery" className="section">
      <div className={`section__inner ${styles.wrapper}`}>

        {/* HEADING */}
        <h2 className={styles.heading}>A Glimpse Into My World</h2>

        {/* BACKGROUND BAR */}
        <div className={styles.backgroundBar}></div>

        {/* CAROUSEL */}
        <div className={styles.carousel} ref={scrollRef}>
          {LOOP_IMAGES.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={src} alt={`Gallery ${index}`} className={styles.image} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
