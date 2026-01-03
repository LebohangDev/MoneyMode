// // src/Home/Home.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { fadeIn, slideFromLeft, slideFromRight, scaleIn, staggerContainer } from '../animations.js';
// import styles from './Home.module.css';

// function Home() {
//   return (
//     <section id="home" className={`section ${styles.heroSection}`}>
//       <motion.div
//         className={`section__inner ${styles.heroInner}`}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.4 }}
//         variants={staggerContainer(0.15, 0.1)}
//       >
//         <motion.div className={styles.heroContent} variants={slideFromLeft(0.02)}>
//           <div className={styles.badgeRow}>
//             <span className={styles.badgeDot} />
//             <span className={styles.badgeText}>Turn knowledge into income</span>
//           </div>

//           <h1 className={styles.title}>
//             Turn Knowledge Into Income.
//             <br />
//             Build a Profitable Creator Agency.
//           </h1>

//           <p className={styles.subtitle}>
//             Learn how to sign, manage, and scale high-earning creators. Guided by Moe, an experienced creator manager and founder of MoneyMode.
//           </p>

//           <motion.div className={styles.formRow} variants={fadeIn(0.1)}>
//             <div className="input-wrapper">
//               <input type="email" placeholder="Enter your email address" />
//               <button type="button" className="btn btn--primary">
//                 Get FREE Starter Kit
//               </button>
//             </div>
//           </motion.div>

//           <motion.div className={styles.heroActions} variants={fadeIn(0.18)}>
//             <button type="button" className="btn btn--ghost">
//               Apply for Operator Program
//               <span className="btn__icon">
//                 <i className="ri-arrow-right-up-line" />
//               </span>
//             </button>
//             <div className={styles.heroNote}>
//               <span className={styles.heroDot} />
//               <span>No spam, just real systems and strategies.</span>
//             </div>
//           </motion.div>

//           <motion.div className={styles.statsRow} variants={fadeIn(0.24)}>
//             <div className={styles.statItem}>
//               <span className={styles.statNumber}>10</span>
//               <span className={styles.statLabel}>Years Experience</span>
//             </div>
//             <div className={styles.statDivider} />
//             <div className={styles.statItem}>
//               <span className={styles.statNumber}>50+</span>
//               <span className={styles.statLabel}>Creators Managed</span>
//             </div>
//             <div className={styles.statDivider} />
//             <div className={styles.statItem}>
//               <span className={styles.statNumber}>100+</span>
//               <span className={styles.statLabel}>Clients</span>
//             </div>
//           </motion.div>
//         </motion.div>

//         <motion.div className={styles.heroVisual} variants={slideFromRight(0.08)}>
//           <motion.div className={`${styles.heroCard} card`} variants={scaleIn(0.1)}>
//             <div className={styles.heroCardHeader}>
//               <span className={styles.heroCardLabel}>The Million Dollar System</span>
//               <i className={`ri-line-chart-fill ${styles.heroCardIcon}`} />
//             </div>
//             <p className={styles.heroCardKpi}>$1,046,134.52</p>
//             <p className={styles.heroCardSub}>Revenue driven for creators using MoneyMode systems.</p>
//             <div className={styles.heroQuote}>
//               <span className={styles.heroQuoteMark}>“</span>
//               <p>
//                 MoneyMode isn&apos;t theory — it&apos;s built from real management experience, real wins, and real lessons learned.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div className={styles.heroMiniCard} variants={slideFromRight(0.16)}>
//             <div className={styles.miniAvatar} />
//             <div className={styles.miniBody}>
//               <p className={styles.miniLabel}>Start your MoneyMode journey</p>
//               <p className={styles.miniSub}>7 steps to sign your first creator.</p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// export default Home;

// src/Home/Home.jsx
import React from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { fadeIn, slideFromLeft, slideUp } from "../animations";

function Home() {
  return (
    <section id="home" className={styles.homeSection}>
      <div className={`section__inner ${styles.inner}`}>

        {/* LEFT IMAGE */}
        <motion.div
          className={styles.imageWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideFromLeft(0.1)}
        >
          <img
            src="/images/home-hero.png"
            alt="Moe Hero"
            className={styles.heroImage}
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.2)}
        >
          <h1 className={styles.heading}>
            Turn Knowledge Into Income.
          </h1>

          {/* LINE UNDER HEADING */}
          <div className={styles.headingLine} />

          <p className={styles.subheading}>
            Build a profitable creator agency with real systems, real strategy,
            and real results.
          </p>

          {/* EMAIL INPUT */}
          <div className={styles.emailRow}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.emailInput}
            />
          </div>

          {/* CTA BUTTONS */}
          <div className={styles.buttons}>
            <button className={`${styles.btn} ${styles.primary}`}>
              Get FREE Starter Kit
            </button>

            <button className={`${styles.btn} ${styles.secondary}`}>
              Apply for Operator Program
            </button>
          </div>

          {/* BOTTOM CENTER TEXT */}
          <div className={styles.bottomCenter}>
            <p className={styles.journeyText}>
              Start your MoneyMode journey
            </p>

            <i className={`ri-arrow-down-line ${styles.downIcon}`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
