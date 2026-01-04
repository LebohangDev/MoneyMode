import React from "react";
import styles from "./StarterKit.module.css";

function StarterKit() {
  return (
    <section id="starter-kit" className="section">
      <div className={`section__inner ${styles.wrapper}`}>

        {/* LEFT SIDE CONTENT */}
        <div className={styles.left}>

          <h2 className={styles.heading}>
            Get the FREE Starter Kit
          </h2>

          <p className={styles.subheading}>
            7 steps to sign your first creator
          </p>

          {/* EMAIL FIELD */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="email-input"
          />

          {/* BUTTON */}
          <button className="btn-primary">
            Get FREE Starter Kit
          </button>

          {/* NOTE */}
          <p className={styles.note}>
            No spam. PDF sent instantly.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className={styles.right}>
          <img
            src="/Images/free-ebook-cover.png"
            alt="Starter Kit Ebook"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}

export default StarterKit;
