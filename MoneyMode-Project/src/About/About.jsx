import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className="section">
      <div className={`section__inner ${styles.wrapper}`}>

        {/* LEFT SIDE (2 BLOCKS) */}
        <div className={styles.leftColumn}>

          {/* BLOCK 1 — MEET MOE */}
          <div className={styles.aboutBlock}>
            <h2 className={styles.heading}>
              Meet Moe, Founder of{" "}
              <span className={styles.money}>Money</span>
              <span className={styles.mode}>Mode</span>
            </h2>

            <p className={styles.text}>
              An experienced and highly successful creator manager who has spent
              years managing creators and scaling creator accounts behind the scenes.
            </p>

            <p className={styles.text}>
              Moe has developed systems that help creators grow, monetize, and
              operate profitably and more importantly, he understands what it
              really takes to run a successful creator agency.
            </p>
          </div>

          {/* BLOCK 2 — STATS */}
          <div className={styles.statsBlock}>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>10</p>
              <p className={styles.statLabel}>Years Experience</p>
            </div>

            <div className={styles.statItem}>
              <p className={styles.statNumber}>50+</p>
              <p className={styles.statLabel}>Creators Managed</p>
            </div>

            <div className={styles.statItem}>
              <p className={styles.statNumber}>100+</p>
              <p className={styles.statLabel}>Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className={styles.imageBlock}>
          <img
            src="/Images/about-img.png"
            alt="Moe"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}

export default About;
