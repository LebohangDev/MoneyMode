// src/Gallery/Gallery.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../animations.js';
import styles from './Gallery.module.css';

const galleryItems = [
  {
    id: 'desk',
    title: 'Operator at work',
    subtitle: 'A glimpse into my world',
    image: '/images/gallery-1.jpg'
  },
  {
    id: 'calls',
    title: 'Client calls & breakdowns',
    subtitle: 'Strategy over screenshots',
    image: '/images/gallery-2.jpg'
  },
  {
    id: 'systems',
    title: 'Systems & dashboards',
    subtitle: 'What actually runs a creator agency',
    image: '/images/gallery-3.jpg'
  }
];

function Gallery() {
  return (
    <section className={`section ${styles.section}`}>
      <motion.div
        className={`section__inner ${styles.inner}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer(0.12, 0.1)}
      >
        <motion.div className={styles.header} variants={fadeIn(0.02)}>
          <p className="section__eyebrow">A glimpse into my world</p>
          <h2 className="section__title">Behind the MoneyMode systems</h2>
          <p className="section__subtitle">
            This isn&apos;t about screenshots. It&apos;s about the real work that happens behind the scenes to run
            profitable creator accounts.
          </p>
        </motion.div>

        <motion.div className={styles.grid} variants={fadeIn(0.08)}>
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.id}
              className={styles.card}
              variants={slideUp(0.08 + index * 0.04)}
            >
              <div className={styles.imageWrapper}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={styles.imageOverlay} />
              </div>
              <figcaption className={styles.caption}>
                <p className={styles.captionTitle}>{item.title}</p>
                <p className={styles.captionSub}>{item.subtitle}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Gallery;
