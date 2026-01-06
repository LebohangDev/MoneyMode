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


          <input
            type="email"
            placeholder="Enter your email address"
            className="email-input"
            value={email}
            onChange={handleEmailChange}
          />

          {/* BUTTON */}
          <button
            className="btn-primary"
            disabled={!isValidEmail}
          >
            Get Free Starter Kit
          </button>

          {/* NOTE */}
          <p className={styles.note}>
            No spam. PDF sent instantly.
          </p>
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
