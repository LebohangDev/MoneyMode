import React from "react";
import { motion } from "framer-motion";
import styles from "./Results.module.css";

const results = [
  {
    id: 1,
    label: "$196,176.65 in 180 days",
    image: "Images/result-1.jpg",
  },
  {
    id: 2,
    label: "$27,205.07 in 30 days",
    image: "Images/result-2.jpg",
  },
  {
    id: 3,
    label: "$13,265.14 in 30 days",
    image: "Images/result-3.jpg",
  },
];

function Results() {
  return (
    <section id="results" className={styles.resultsSection}>
      <div className={`section__inner ${styles.wrapper}`}>

        {/* HEADING */}
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Real Results (Not Testimonials)
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Screenshots from real creator dashboards. Names blurred for privacy.
        </motion.p>

        {/* RESULTS GRID */}
        <div className={styles.grid}>
          {results.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <p className={styles.label}>{item.label}</p>

              <img
                src={item.image}
                alt={item.label}
                className={styles.image}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA LINK */}
        <motion.a
          href="#starter-kit"
          className={styles.ctaLink}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.whiteText}>Want the exact steps?</span>{" "}
          Get the Free Starter Kit &gt;
        </motion.a>

      </div>
    </section>
  );
}

export default Results;
