// src/Testimonials/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../animations.js';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 'frank',
    name: 'Frank Flores',
    text: 'This program really helped me take the next step in creator management.',
    rating: 5
  },
  {
    id: 'jurica',
    name: 'Jurica Kol',
    text: 'The systems Moe shares made it clear how to actually operate like a real agency.',
    rating: 5
  },
  {
    id: 'jimmy',
    name: 'Jimmy Fermin',
    text: "This program helped me double the income I was making from creator management in my first few months.",
    rating: 5
  },
  {
    id: 'aiony',
    name: 'Aiony Haust',
    text: 'The frameworks and templates alone were worth it. The real value was learning how Moe thinks.',
    rating: 5
  },
  {
    id: 'albert',
    name: 'Albert Dera',
    text: 'If you want to become an operator instead of a fan, this is the room to be in.',
    rating: 5
  }
];

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <motion.div
        className={`section__inner ${styles.inner}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer(0.12, 0.1)}
      >
        <motion.div className={styles.header} variants={fadeIn(0.02)}>
          <p className="section__eyebrow">Proven results</p>
          <h2 className="section__title">What operators are saying</h2>
          <p className="section__subtitle">
            MoneyMode operators around the world are using these systems to sign creators, run accounts, and earn like
            real managers not spectators.
          </p>
        </motion.div>

        <motion.div className={styles.grid} variants={fadeIn(0.1)}>
          {testimonials.map((t, index) => (
            <motion.article
              key={t.id}
              className={`${styles.card} card`}
              variants={slideUp(0.08 + index * 0.04)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.avatar} />
                <div className={styles.meta}>
                  <p className={styles.name}>{t.name}</p>
                  <div className={styles.stars}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <i key={i} className="ri-star-fill" />
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.body}>&ldquo;{t.text}&rdquo;</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
