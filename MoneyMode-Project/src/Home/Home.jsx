
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

        {/* LEFT IMAGE */}
        <motion.div
          className={styles.imageWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideFromLeft(0.1)}
        >
          <img
            src="Images/hero-img.png"
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
          <h2 className={styles.heading}>Build a profitable <span>creator agency.</span></h2>

          {/* LINE UNDER HEADING */}
          <div className={styles.headingLine} />

          <p className={styles.subheading}>
            Learn how to sign, manage, and scale high-earning creators
            Guided by Moe, an experienced creator manager and founder of MoneyMode. Get started below:
          </p>

          {/* EMAIL INPUT */}
          <div className={styles.emailRow}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="email-input"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className="btn-primary"
              disabled={!isValidEmail}
            >
              <span>GET FULL COURSE</span>
            </button>
          </div>

          {/* CTA BUTTONS */}
          <div className={styles.buttons}>
            <button className="btn-secondary">
              Apply for Operator Program
            </button>
          </div>

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
