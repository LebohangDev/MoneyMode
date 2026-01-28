// src/About/About.jsx
import React, { useState } from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "../animations";
import PromotionalPopup from "../PromotionalPopup/PromotionalPopup";

function About() {
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
    <section id="about" className={styles.aboutSection}>
      <PromotionalPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onConfirm={handlePopupConfirm}
      />
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
                <button
                  className={styles.submitButton}
                  disabled={!isValidEmail}
                  onClick={handleFreeClick}
                >
                  Get Instant Access
                </button>
              </div>
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

        <div className={styles.statsRow}>
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
        </div>

      </div>
    </section>
  );
}

export default About;
