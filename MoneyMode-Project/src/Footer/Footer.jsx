import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`section__inner ${styles.wrapper}`}>

        {/* MONEYMODE TITLE */}
        <h2 className={styles.brand}>
          <span className={styles.money}>Money</span>
          <span className={styles.mode}>Mode</span>
        </h2>

        {/* CENTER LINE */}
        <div className={styles.line}></div>

        {/* BOTTOM ROW */}
        <div className={styles.bottomRow}>
          <p className={styles.left}>Copyright © 2025</p>

          <p className={styles.center}>Developed by Creators Blueprint</p>

          <div className={styles.icons}>
            <img src="/Icons/instagram.png" alt="Instagram" />
            <img src="/Icons/youtube.png" alt="YouTube" />
            <img src="/Icons/mail.png" alt="Mail" />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
