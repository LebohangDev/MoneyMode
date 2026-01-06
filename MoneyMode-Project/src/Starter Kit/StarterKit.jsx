import React, { useState } from "react";
import styles from "./StarterKit.module.css";

function StarterKit() {
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

  return (
    <section id="starter-kit" className="section">
      <div className={`section__inner ${styles.wrapper}`}>

        {/* LEFT SIDE CONTENT */}
        <div className={styles.left}>

          <h2 className={styles.heading}>
            Get the FREE Starter Kit
          </h2>

          <p className={styles.subheading}>
            <span>7</span>
            <div className={styles.text}>
              <p>Steps</p>
              <p>To Sign Your First Creator</p>
            </div>
          </p>


          <div className={styles.microBullets}>
            <div className={styles.bulletItem}>
              <span className={styles.bulletPoint}>•</span>
              <p>Who to DM (so you don’t waste time)</p>
            </div>
            <div className={styles.bulletItem}>
              <span className={styles.bulletPoint}>•</span>
              <p>What to say to get replies</p>
            </div>
            <div className={styles.bulletItem}>
              <span className={styles.bulletPoint}>•</span>
              <p>What to do when they say “yes”</p>
            </div>
          </div>


          <form className={styles.optInForm} onSubmit={(e) => { e.preventDefault(); if (isValidEmail) console.log(email); }}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.emailInput}
              value={email}
              onChange={handleEmailChange}
              autoFocus={window.innerWidth < 768} // simple check for mobile intent, or just let native behavior handle it
            />

            {/* BUTTON */}
            <button
              type="submit"
              className={styles.ctaButton}
              disabled={!isValidEmail}
            >
              Send Me The Starter Kit
            </button>
          </form>

          {/* SECONDARY CTA */}
          <a href="#operator" className={styles.secondaryLink}>
            Already running an agency? Apply for Operator Program →
          </a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className={styles.right}>
          <img
            src="Images/free-ebook-cover.png"
            alt="Starter Kit Ebook"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}

export default StarterKit;
