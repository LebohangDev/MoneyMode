import React, { useState } from "react";
import styles from "./About.module.css";

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
    <section id="about" className="section">
      <div className={`section__inner ${styles.wrapper}`}>

        {/* LEFT SIDE (2 BLOCKS) */}
        <div className={styles.leftColumn}>
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
            <form className={styles.ctaForm} onSubmit={handleSubmit}>
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
                  type="submit"
                  className={styles.submitButton}
                  disabled={!isValidEmail}
                >
                  Get Instant Access
                </button>
              </div>
            </form>
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
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className={styles.imageBlock}>
          <img
            src="Images/hero-img.png"
            alt="Moe"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}

export default About;
