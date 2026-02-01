
// src/Home/Home.jsx
import React, { useState } from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { fadeIn, slideFromLeft, slideUp } from "../animations";
import PromotionalPopup from "../Popups/PromotionalPopup/PromotionalPopup";
import EmailPopup from "../Popups/EmailPopup/EmailPopup";

function Home() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [emailPopup, setEmailPopup] = useState(false);

  const checkEmailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(regex.test(email));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    checkEmailValidation(newEmail);
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
      await fetch("https://moebackend.onrender.com/api/send-starter-kit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, permission })
      });
      console.log(`Permission ${permission ? "granted" : "denied"}: Sending Starter Kit.`);

      // Show success popup
      setEmailPopup(true);
      setTimeout(() => setEmailPopup(false), 5000);
    } catch (err) {
      console.error("Error sending email:", err);
    }



    // Clear state
    setEmail("");
    setIsValidEmail(false);
  };


  return (
    <section id="home" className={styles.homeSection}>
      <PromotionalPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onConfirm={handlePopupConfirm}
      />

      {/* SUCCESS EMAIL POPUP */}
      <EmailPopup
        isOpen={emailPopup}
        onClose={() => setEmailPopup(false)}
      />
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
            Grab the exact scripts & system I used to sign creators making upto $50K/month - even if you're starting from scratch.
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
            <button
              type="button"
              className={styles.ctaButton}
              disabled={!isValidEmail}
              onClick={handleFreeClick}
            >
              Get the Free Starter Kit
            </button>
          </div>
          <p className={styles.trustLine}>
            No spam. Sent instantly.
          </p>


          {/* SECONDARY CTA - TEXT LINK */}
          <a href="#product" className={styles.secondaryLink}>
            Or apply for the Operator Program →
          </a>

          {/* BOTTOM CENTER TEXT */}
          {/* <div className={styles.bottomCenter}>
            <p className={styles.journeyText}>
              Start your MoneyMode journey
            </p>

            <i className={`ri-arrow-down-double-line ${styles.downIcon} `} />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
