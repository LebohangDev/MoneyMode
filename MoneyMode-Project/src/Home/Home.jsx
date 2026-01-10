
// src/Home/Home.jsx
import React, { useState } from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { fadeIn, slideFromLeft, slideUp } from "../animations";

function Home() {
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
    <section id="home" className={styles.homeSection}>
      <div className={`section__inner ${styles.inner} `}>



        {/* RIGHT CONTENT */}
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.2)}
        >
          <p className={styles.proofLine}>
            Used to sign creators producing $5k–$50k+ months.
          </p>

          <h1 className={styles.heading}>
            Sign your first creator in 7 days.
          </h1>

          <p className={styles.subheading}>
            Free 7-step starter kit + scripts to land your first client.
          </p>

          <p className={styles.clarityLine}>
            Enter your email and I’ll send the PDF instantly.
          </p>


          <div className={styles.emailRow}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.emailInput}
              value={email}
              onChange={handleEmailChange}
            />
            <a href="Ebooks/STARTER_KIT.pdf" download>
              <button
                type="button"
                className={styles.ctaButton}
                disabled={!isValidEmail}
                onClick={() => { setEmail(""); setIsValidEmail(false); }}
              >
                Get the Free Starter Kit
              </button>
            </a>
          </div>
          <p className={styles.trustLine}>
            No spam. Sent instantly.
          </p>


          {/* SECONDARY CTA - TEXT LINK */}
          <a href="#product" className={styles.secondaryLink}>
            Or apply for the Operator Program →
          </a>

          {/* BOTTOM CENTER TEXT */}
          <div className={styles.bottomCenter}>
            <p className={styles.journeyText}>
              Start your MoneyMode journey
            </p>

            <i className={`ri-arrow-down-double-line ${styles.downIcon} `} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
