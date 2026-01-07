import React, { useState } from "react";
import styles from "./Video.module.css";

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
    <section id="video" className="section">
      <div className={`section__inner ${styles.wrapper}`}>

        {/* HEADLINE + SUBHEAD */}
        <div className={styles.headerBlock}>
          <h2 className={styles.headline}>
            How I Built a $1M Creator Management System
          </h2>
          <p className={styles.subhead}>
            Watch the breakdown — then grab the free Starter Kit below.
          </p>
        </div>

        {/* VIDEO EMBED */}
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/TxdDeYXFoBk?si=oMNFyvQPPgOcxJ-P"
            title="MoneyMode Video"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        {/* CTA BLOCK */}
        <div className={styles.ctaBlock}>
          <p className={styles.ctaText}>
            Want the exact steps? Enter your email and I’ll send the 7-step Starter Kit instantly.
          </p>

          <form className={styles.ctaForm} onSubmit={handleSubmit}>
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
                Get Free Starter Kit
              </button>
            </div>
            <p className={styles.trustLine}>
              No spam. Instant access.
            </p>
          </form>

          <a href="#product" className={styles.secondaryLink}>
            Apply for the Operator Program →
          </a>
        </div>

        {/* SUPPORTING BULLETS */}
        <div className={styles.bulletsBlock}>
          <div className={styles.bulletItem}>
            <span className={styles.bulletPoint}>•</span>
            <p className={styles.bulletText}>How I signed my first creators</p>
          </div>
          <div className={styles.bulletItem}>
            <span className={styles.bulletPoint}>•</span>
            <p className={styles.bulletText}>The backend systems we run daily</p>
          </div>
          <div className={styles.bulletItem}>
            <span className={styles.bulletPoint}>•</span>
            <p className={styles.bulletText}>How we scale $30K–$50K/month accounts</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
