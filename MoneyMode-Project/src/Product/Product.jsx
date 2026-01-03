// src/Product/Product.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, slideFromLeft, slideFromRight, staggerContainer } from '../animations.js';
import styles from './Product.module.css';

const products = [
  {
    id: 'starter-kit',
    label: 'FREE',
    title: 'Hard Work Starter Kit',
    subtitle: 'Creator Agency Blueprint',
    description:
      'A practical, no-fluff starter guide designed to help you land your first serious creator client.',
    bullets: [
      '7 steps to sign your first creator',
      'Proven outreach scripts and angles',
      'How to identify & approach high-earning creators'
    ],
    cta: 'Get FREE Starter Kit',
    featured: true
  },
  {
    id: 'blueprint',
    label: 'Ultimate Guide',
    title: 'Creator Agency Blueprint',
    subtitle: 'Build from 0 to revenue',
    description:
      'Everything you need to start, build, and scale a profitable creator agency at every stage.',
    bullets: [
      'Offer, positioning, and pricing frameworks',
      'Systems for managing multiple creators',
      'Templates, SOPs, and checklists'
    ],
    cta: 'View Blueprint Details',
    featured: false
  },
  {
    id: 'operator',
    label: '1-on-1 sessions',
    title: 'MoneyMode Operator Program',
    subtitle: 'Apply to work with Moe',
    description:
      'A high-touch operator program for driven individuals ready to step into full-time creator management.',
    bullets: [
      'Direct access to Moe and his team',
      'Personalized roadmap for your agency',
      'Accountability, feedback, and real execution support'
    ],
    cta: 'Apply for Operator Program',
    featured: false
  }
];

function Product() {
  return (
    <section id="product" className="section">
      <motion.div
        className={`section__inner ${styles.productInner}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer(0.18, 0.1)}
      >
        <motion.div className={styles.header} variants={slideFromLeft(0.02)}>
          <p className="section__eyebrow">What MoneyMode offers</p>
          <h2 className="section__title">Build real careers in creator management</h2>
          <p className="section__subtitle">
            MoneyMode Academy was built to help driven individuals step into creator management and master proven systems
            using real-world strategies — not theory.
          </p>
          <div className={styles.headerRow}>
            <div className={styles.headerPill}>
              <span className={styles.pillDot} />
              <span>Insider knowledge</span>
            </div>
            <div className={styles.headerPill}>
              <span className={styles.pillDot} />
              <span>Proven frameworks</span>
            </div>
            <div className={styles.headerPill}>
              <span className={styles.pillDot} />
              <span>Execution strategies</span>
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.cardsGrid} variants={fadeIn(0.12)}>
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              className={`${styles.card} card ${product.featured ? styles.cardFeatured : ''}`}
              variants={slideUp(0.08 + index * 0.06)}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>{product.label}</span>
                {product.featured && (
                  <span className={styles.cardTag}>
                    <i className="ri-sparkling-2-fill" />
                    Starter Friendly
                  </span>
                )}
              </div>
              <h3 className={styles.cardTitle}>{product.title}</h3>
              {product.subtitle && <p className={styles.cardSubtitle}>{product.subtitle}</p>}
              <p className={styles.cardDescription}>{product.description}</p>
              <ul className={styles.cardList}>
                {product.bullets.map((item) => (
                  <li key={item}>
                    <i className="ri-check-line" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`btn ${product.featured ? 'btn--primary' : 'btn--ghost'} btn--full`}
              >
                {product.cta}
                <span className="btn__icon">
                  <i className="ri-arrow-right-up-line" />
                </span>
              </button>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className={styles.banner} variants={slideFromRight(0.16)}>
          <div className={styles.bannerText}>
            <h3>7 Steps to sign your first creator</h3>
            <p>
              Get the exact roadmap Moe uses to identify, approach, and sign high-earning creators — even if you&apos;re
              starting from zero.
            </p>
          </div>
          <form className={styles.bannerForm}>
            <div className="input-wrapper">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit" className="btn btn--primary">
                Get Instant Access
              </button>
            </div>
            <p className={styles.bannerNote}>No spam. PDF sent instantly.</p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Product;
