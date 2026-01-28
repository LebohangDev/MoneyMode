import React, { useState } from "react";
import styles from "./StarterKit.module.css";
import { motion } from "framer-motion";
import { slideFromLeft, fadeIn } from "../animations";
import PromotionalPopup from "../PromotionalPopup/PromotionalPopup";

function StarterKit() {
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
    <section id="starter-kit" className={styles.starterKitSection}>
      <PromotionalPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onConfirm={handlePopupConfirm}
      />
      <div className={`section__inner ${styles.wrapper}`}>

        {/* LEFT SIDE CONTENT */}
        <motion.div
          className={styles.left}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideFromLeft(0.2)}
        >

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
              {/* <span className={styles.bulletPoint}>•</span> */}
              <p>⭐Who to DM (so you don’t waste time)</p>
            </div>
            <div className={styles.bulletItem}>
              {/* <span className={styles.bulletPoint}>•</span> */}
              <p>⭐What to say to get replies</p>
            </div>
            <div className={styles.bulletItem}>
              {/* <span className={styles.bulletPoint}>•</span> */}
              <p>⭐What to do when they say “yes”</p>
            </div>
          </div>


          <div className={styles.optInForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.emailInput}
              value={email}
              onChange={handleEmailChange}
            />

            {/* BUTTON */}
            <button
              className={styles.ctaButton}
              disabled={!isValidEmail}
              onClick={handleFreeClick}
            >
              Send Me The Starter Kit
            </button>
          </div>

          {/* SECONDARY CTA */}
          <a href="#product" className={styles.secondaryLink}>
            Already running an agency? Apply for Operator Program →
          </a>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className={styles.right}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.4)}
        >
          <img
            src="Images/free-ebook-cover.png"
            alt="Starter Kit Ebook"
            className={styles.image}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default StarterKit;
