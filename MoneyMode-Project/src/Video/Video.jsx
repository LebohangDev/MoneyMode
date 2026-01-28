// src/Video/Video.jsx
import React, { useState } from "react";
import styles from "./Video.module.css";
import { motion } from "framer-motion";
import { fadeIn, scaleIn, slideUp } from "../animations";
import PromotionalPopup from "../PromotionalPopup/PromotionalPopup";

function Video() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const checkEmailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(regex.test(email));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    checkEmailValidation(newEmail);
  };

  // Helper to trigger download programmatically
  const triggerDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFreeClick = () => {
    setShowPopup(true);
  };

  const handlePopupConfirm = async (permission) => {
    setShowPopup(false);

    // Logic to send email
    console.log("Sending starter kit email to:", email);
    console.log("Permission:", permission);

    try {
      if (permission) {
        await fetch("http://localhost:3000/api/send-starter-kit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, permission })
        });
        console.log("Permission granted: Subscribing to Creator Agency Blueprint.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
    }

    // Trigger download
    triggerDownload("Ebooks/STARTER_KIT.pdf");

    // Clear state
    setEmail("");
    setIsValidEmail(false);
  };

  return (
    <section id="video" className={styles.videoSection}>
      <PromotionalPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onConfirm={handlePopupConfirm}
      />
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
              <button
                className={styles.submitButton}
                disabled={!isValidEmail}
                onClick={handleFreeClick}
              >
                Get Free Starter Kit
              </button>
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
