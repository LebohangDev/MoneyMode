// src/Footer/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideFromLeft, slideFromRight, staggerContainer } from '../animations.js';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer id="contact" className={`section ${styles.footerSection}`}>
      <motion.div
        className={`section__inner ${styles.inner}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.12, 0.1)}
      >
        <motion.div className={styles.primary} variants={slideFromLeft(0.02)}>
          <div className={styles.brandBlock}>
            <div className={styles.logoRow}>
              <div className={styles.logoMark}>MM</div>
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>MoneyMode</span>
                <span className={styles.logoSubtitle}>Creator Management</span>
              </div>
            </div>
            <p className={styles.tagline}>
              Whether you&apos;re just getting started or ready to scale your creator agency, MoneyMode is here to help.
            </p>
          </div>

          <div className={styles.contactBlock}>
            <p className={styles.contactTitle}>Ready to take the next step?</p>
            <p className={styles.contactText}>
              Reach out to learn more about the resources or to see which path is right for you.
            </p>
            <button type="button" className="btn btn--primary">
              Contact MoneyMode
              <span className="btn__icon">
                <i className="ri-arrow-right-up-line" />
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div className={styles.secondary} variants={slideFromRight(0.1)}>
          <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#about">About Moe</a>
            <a href="#product">Product</a>
            <a href="#testimonials">Results</a>
          </div>
          <div className={styles.meta}>
            <span>MoneyMode</span>
            <span className={styles.dot} />
            <span>Copyright © 2025</span>
            <span className={styles.dot} />
            <span>Developed by Creators Blueprint</span>
          </div>
          <div className={styles.social}>
            <button type="button" aria-label="X / Twitter">
              <i className="ri-twitter-x-fill" />
            </button>
            <button type="button" aria-label="Instagram">
              <i className="ri-instagram-line" />
            </button>
            <button type="button" aria-label="Email">
              <i className="ri-mail-line" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
