import React, { useState } from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "../animations";

function About() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const checkEmailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(regex.test(email));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    checkEmailValidation(newEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      console.log("Email submitted:", email);
      // Logic to send email/PDF would go here
    }
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`section__inner ${styles.wrapper}`}>

        {/* LEFT SIDE (2 BLOCKS) */}
        <motion.div
          className={styles.leftColumn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideFromLeft(0.2)}
        >
          {/* BLOCK 1 — MEET MOE + CTA */}
          <div className={styles.aboutBlock}>
            <h2 className={styles.heading}>
              Meet Moe, Founder of MoneyMode
            </h2>
            <p className={styles.text}>
              I run a creator management company focused on performance and repeatable systems.
            </p>
            <p className={styles.text}>
              In 2025 alone, our creators generated over $1.09M through a structured backend: sales, operations, and content execution handled by a 20+ person team.
            </p>
            <p className={styles.text}>
              We work with top-performing creators, including accounts doing $30K–$70K+ per month.
            </p>

            {/* CTA FORM */}
            <div className={styles.ctaForm}>
              <label className={styles.ctaLabel}>Get the Free Starter Kit →</label>
              <div className={styles.inputRow}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.emailInput}
                  value={email}
                  onChange={handleEmailChange}
                />
                <a href="Ebooks/STARTER_KIT.pdf" download>
                  <button
                    className={styles.submitButton}
                    disabled={!isValidEmail}
                    onClick={() => { setEmail(""); setIsValidEmail(false); }}
                  >
                    Get Instant Access
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* BLOCK 2 — STATS */}
          <div className={styles.statsBlock}>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>Over $1M</p>
              <p className={styles.statLabel}>Generated (2025)</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>20+</p>
              <p className={styles.statLabel}>Person Team</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>$30K–$70K</p>
              <p className={styles.statLabel}>/month Accounts</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          className={styles.imageBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideFromRight(0.4)}
        >
          <img
            src="Images/hero-img.png"
            alt="Moe"
            className={styles.image}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default About;
