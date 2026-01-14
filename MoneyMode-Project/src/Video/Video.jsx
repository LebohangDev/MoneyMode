import React, { useState } from "react";
import styles from "./Video.module.css";
import { motion } from "framer-motion";
import { fadeIn, scaleIn, slideUp } from "../animations";

function Video() {
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
    <section id="video" className={styles.videoSection}>
      <div className={`section__inner ${styles.wrapper}`}>

        {/* HEADLINE + SUBHEAD */}
        <motion.div
          className={styles.headerBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.2)}
        >
          <h2 className={styles.headline}>
            How I Built a $1M Creator Management System
          </h2>
          <p className={styles.subhead}>
            Watch the breakdown — then grab the free Starter Kit below.
          </p>
        </motion.div>

        {/* VIDEO EMBED */}
        <motion.div
          className={styles.videoContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn(0.3)}
        >
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/TxdDeYXFoBk?si=oMNFyvQPPgOcxJ-P"
            title="MoneyMode Video"
            frameBorder="0"
            allowFullScreen
          />
        </motion.div>

        {/* CTA BLOCK */}
        <motion.div
          className={styles.ctaBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp(0.4)}
        >
          <p className={styles.ctaText}>
            Want the exact steps? Enter your email and I’ll send the 7-step Starter Kit instantly.
          </p>

          <div className={styles.ctaForm}>
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
                  Get Free Starter Kit
                </button>
              </a>
            </div>
            <p className={styles.trustLine}>
              No spam. Instant access.
            </p>
          </div>

          <a href="#product" className={styles.secondaryLink}>
            Apply for the Operator Program →
          </a>
        </motion.div>

        {/* SUPPORTING BULLETS */}
        <motion.div
          className={styles.bulletsBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp(0.5)}
        >
          <div className={styles.bulletItem}>
            <span className={styles.bulletPoint}>✦</span>
            <p className={styles.bulletText}>How I signed my first creators</p>
          </div>
          <div className={styles.bulletItem}>
            <span className={styles.bulletPoint}>✦</span>
            <p className={styles.bulletText}>The backend systems we run daily</p>
          </div>
          <div className={styles.bulletItem}>
            <span className={styles.bulletPoint}>✦</span>
            <p className={styles.bulletText}>How we scale $30K–$50K/month accounts</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Video;
