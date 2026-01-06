import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../animations.js';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 'frank',
    name: 'Frank Flores',
    text: 'This program really helped me take the next step in creator management.',
    rating: 5,
    image: '/Images/profile 1.png'
  },
  {
    id: 'jurica',
    name: 'Jurica Kol',
    text: 'The systems Moe shares made it clear how to actually operate like a real agency.',
    rating: 5,
    image: '/Images/profile 2.png'
  },
  {
    id: 'jimmy',
    name: 'Jimmy Fermin',
    text: "This program helped me double the income I was making from creator management in my first few months.",
    rating: 5,
    image: '/Images/profile 3.png'
  },
  {
    id: 'aiony',
    name: 'Aiony Haust',
    text: 'The frameworks and templates alone were worth it. The real value was learning how Moe thinks.',
    rating: 5,
    image: '/Images/profile 4.png'
  },
  {
    id: 'albert',
    name: 'Albert Dera',
    text: 'If you want to become an operator instead of a fan, this is the room to be in.',
    rating: 5,
    image: '/Images/profile 5.png'
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

        {/* NEW HEADER */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <img
              src="/Icons/testimonials-icon.png"
              alt="icon"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Proven Results</h2>
          </div>

          <div className={styles.line}></div>
        </div>

        {/* TESTIMONIAL GRID */}
        <motion.div className={styles.grid} variants={fadeIn(0.1)}>
          {testimonials.map((t, index) => (
            <motion.article
              key={t.id}
              className={`${styles.card}`}
              variants={slideUp(0.08 + index * 0.04)}
            >
              <div className={styles.cardHeader}>
                <img src={t.image} alt={t.name} className={styles.avatar} />

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
