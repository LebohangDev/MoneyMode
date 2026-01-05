import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className={`section__inner ${styles.wrapper}`}>

        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Ready to Take the Next Step?
          </h2>

          <p className={styles.text}>
            Whether you're just getting started or ready to scale your creator agency, Money
            <span className={styles.mode}>Mode</span>
            {" "}is here to help.
          </p>

          <button className="btn-primary">
            Contact
            <span>
                <span className={styles.money}>Money</span>
                <span className={styles.mode}>Mode</span>
            </span>    
          </button>
        </div>

        {/* RIGHT SIDE LOGO */}
        <div className={styles.right}>
          <img
            src="/Images/MoneyMode-logo.png"
            alt="MoneyMode Logo"
            className={styles.logo}
          />
        </div>

      </div>
    </section>
  );
}

export default Contact;
