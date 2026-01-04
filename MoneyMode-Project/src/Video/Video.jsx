import React from "react";
import styles from "./Video.module.css";

function Video() {
  return (
    <section id="video" className="section">
      <div className={`section__inner ${styles.wrapper}`}>

        {/* QUOTE */}
        <div className={styles.quoteBlock}>
          <p className={styles.quote}>
            “MoneyMode isn’t theory — it’s built from real management experience,
            real wins, and real lessons learned.”
          </p>
        </div>

        {/* VIDEO EMBED */}
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/placeholder"
            title="MoneyMode Video"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        {/* WHAT MONEYMODE OFFERS */}
        <div className={styles.offersBlock}>
          <h2 className={styles.title}>What MoneyMode offers?</h2>
          <p className={styles.subtitle}>
            Build real careers in creator management using proven systems and
            real‑world strategies.
          </p>

          <div className={styles.featuresGrid}>

            {/* FEATURE 1 */}
            <div className={styles.featureItem}>
              <img
                src="/icons/insider.png"
                alt="Insider Knowledge"
                className={styles.icon}
              />
              <p className={styles.featureText}>Insider Knowledge</p>
            </div>

            {/* FEATURE 2 */}
            <div className={styles.featureItem}>
              <img
                src="/icons/frameworks.png"
                alt="Proven Frameworks"
                className={styles.icon}
              />
              <p className={styles.featureText}>Proven Frameworks</p>
            </div>

            {/* FEATURE 3 */}
            <div className={styles.featureItem}>
              <img
                src="/icons/strategy.png"
                alt="Execution Strategies"
                className={styles.icon}
              />
              <p className={styles.featureText}>Execution Strategies</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Video;
