// src/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideFromLeft, slideFromRight, staggerContainer } from '../animations.js';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className="section">
      <motion.div
        className={`section__inner ${styles.aboutInner}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerContainer(0.12, 0.1)}
      >
        <motion.div className={styles.aboutText} variants={slideFromLeft(0.02)}>
          <p className="section__eyebrow">Meet Moe</p>
          <h2 className="section__title">Founder of MoneyMode</h2>
          <p className="section__subtitle">
            Moe is an experienced and highly successful creator manager who has spent years managing creators and scaling
            creator accounts behind the scenes.
          </p>
          <p className={styles.aboutBody}>
            Through MoneyMode, he&apos;s built systems that help creators grow, monetize, and operate profitably. More
            importantly, he understands what it really takes to run a successful creator agency in the real world—not in
            theory.
          </p>

          <div className={styles.aboutQuoteWrapper}>
            <p className={styles.aboutQuote}>
              MoneyMode isn&apos;t theory — it&apos;s built from real management experience, real wins, and real lessons learned.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.aboutMeta} variants={slideFromRight(0.08)}>
          <div className={styles.avatarCard}>
            <div className={styles.avatar} />
            <div className={styles.avatarBody}>
              <p className={styles.avatarName}>Moe</p>
              <p className={styles.avatarRole}>Creator Manager & Operator</p>
            </div>
          </div>

          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>10</span>
              <span className={styles.metricLabel}>Years in the game</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>50+</span>
              <span className={styles.metricLabel}>Creators managed</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>100+</span>
              <span className={styles.metricLabel}>Clients served</span>
            </div>
          </div>

          <div className={styles.aboutFooter}>
            <div className={styles.tag}>
              <i className="ri-shield-check-line" />
              <span>Real operators, not gurus</span>
            </div>
            <div className={styles.tag}>
              <i className="ri-rocket-2-line" />
              <span>Built on proven systems</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
