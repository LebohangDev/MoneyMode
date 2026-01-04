// src/Home/Home.jsx
import React from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { fadeIn, slideFromLeft, slideUp } from "../animations";

function Home() {
  return (
    <section id="home" className={styles.homeSection}>
      <div className={`section__inner ${styles.inner}`}>

        {/* LEFT IMAGE */}
        <motion.div
          className={styles.imageWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideFromLeft(0.1)}
        >
          <img
            src="/Images/hero-img.png"
            alt="Moe Hero"
            className={styles.heroImage}
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.2)}
        >
          <h1 className={styles.heading}>
            Turn Knowledge Into Income.
          </h1>

          {/* LINE UNDER HEADING */}
          <div className={styles.headingLine} />

          <p className={styles.subheading}>
            Build a profitable creator agency with real systems, real strategy,
            and real results.
          </p>

          {/* EMAIL INPUT */}
          <div className={styles.emailRow}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="email-input"
            />
          </div>

          {/* CTA BUTTONS */}
          <div className={styles.buttons}>
            <button className="btn-primary">
              Get FREE Starter Kit
            </button>

            <button className="btn-secondary">
              Apply for Operator Program
            </button>
          </div>

          {/* BOTTOM CENTER TEXT */}
          <div className={styles.bottomCenter}>
            <p className={styles.journeyText}>
              Start your MoneyMode journey
            </p>

            <i className={`ri-arrow-down-double-line ${styles.downIcon}`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
