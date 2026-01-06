import React, { useRef, useEffect } from "react";
import { useInView, useSpring, useTransform, motion } from "framer-motion";
import styles from "./About.module.css";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const springConfig = { duration: 2000, bounce: 0 };

  const count1 = useSpring(0, springConfig);
  const count2 = useSpring(0, springConfig);
  const count3 = useSpring(0, springConfig);

  const display1 = useTransform(count1, (value) => Math.round(value));
  const display2 = useTransform(count2, (value) => Math.round(value));
  const display3 = useTransform(count3, (value) => Math.round(value));

  useEffect(() => {
    if (isInView) {
      count1.set(10);
      count2.set(50);
      count3.set(100);
    }
  }, [isInView, count1, count2, count3]);

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
          <div ref={ref} className={styles.statsBlock}>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>
                <motion.span>{display1}</motion.span>
              </p>
              <p className={styles.statLabel}>Years Experience</p>
            </div>

            <div className={styles.statItem}>
              <p className={styles.statNumber}>
                <motion.span>{display2}</motion.span>+
              </p>
              <p className={styles.statLabel}>Creators Managed</p>
            </div>

            <div className={styles.statItem}>
              <p className={styles.statNumber}>
                <motion.span>{display3}</motion.span>+
              </p>
              <p className={styles.statLabel}>Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className={styles.imageBlock}>
          <img
            src="Images/about-img.png"
            alt="Moe"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}

export default About;
