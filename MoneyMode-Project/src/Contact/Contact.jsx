import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className={`section__inner ${styles.wrapper}`}>

        {/* HEADING */}
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Ready to Take the Next Step?
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          MoneyMode is here to help.
        </motion.p>

        {/* TWO BLOCKS */}
        <div className={styles.blocks}>
          {/* LEFT BLOCK */}
          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className={styles.blockHeading}>Get the FREE Starter Kit</h3>
            <p className={styles.blockSubtext}>
              Learn how to sign creators step-by-step
            </p>

            <a href="#product" className={styles.blockButtonPrimary}>
              Get the Free Starter Kit &gt;
            </a>
          </motion.div>

          {/* RIGHT BLOCK */}
          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h3 className={styles.blockHeading}>Apply to Work With Me</h3>
            <p className={styles.blockSubtext}>
              Serious about moving fast? Let's see if we're a fit.
            </p>

            <a href="#product" className={styles.blockButtonWhite}>
              Apply Now
            </a>
          </motion.div>
        </div>

        {/* FINAL CONTACT BUTTON */}
        <motion.a
          href="#contact"
          className={styles.contactButton}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Contact MoneyMode
        </motion.a>

      </div>
    </section>
  );
}

export default Contact;
