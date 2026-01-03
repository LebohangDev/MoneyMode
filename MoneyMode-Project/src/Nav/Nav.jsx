// // src/Nav/Nav.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { fadeIn, slideFromRight } from '../animations.js';
// import styles from './Nav.module.css';

// function Nav() {
//   return (
//     <header className={styles.header}>
//       <motion.nav
//         className={`${styles.nav} section__inner`}
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn(0.1)}
//       >
//         <div className={styles.brand}>
//           <div className={styles.logoMark}>MM</div>
//           <div className={styles.logoText}>
//             <span className={styles.logoTitle}>MoneyMode</span>
//             <span className={styles.logoSubtitle}>Creator Management</span>
//           </div>
//         </div>

//         <input type="checkbox" id="nav-toggle" className={styles.toggle} />
//         <label htmlFor="nav-toggle" className={styles.burger}>
//           <span />
//           <span />
//         </label>

//         <div className={styles.spacer} />

//         <div className={styles.linksWrapper}>
//           <ul className={styles.links}>
//             <li>
//               <a href="#home" className={styles.link}>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className={styles.link}>
//                 About Moe
//               </a>
//             </li>
//             <li>
//               <a href="#product" className={styles.link}>
//                 Product
//               </a>
//             </li>
//             <li>
//               <a href="#testimonials" className={styles.link}>
//                 Results
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className={styles.link}>
//                 Contact
//               </a>
//             </li>
//           </ul>

//           <motion.div
//             className={styles.ctaGroup}
//             variants={slideFromRight(0.16)}
//           >
//             <button type="button" className="btn btn--ghost">
//               Get Starter Kit
//             </button>
//             <button type="button" className="btn btn--primary">
//               Apply for Operator
//               <span className="btn__icon">
//                 <i className="ri-arrow-right-up-line" />
//               </span>
//             </button>
//           </motion.div>
//         </div>
//       </motion.nav>
//     </header>
//   );
// }

// export default Nav;

// src/Nav/Nav.jsx
import React from 'react';
import styles from './Nav.module.css';

function Nav() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} section__inner`}>
        
        {/* LEFT — BRAND */}
        <div className={styles.brand}>
          <span className={styles.money}>Money</span>
          <span className={styles.mode}>Mode</span>
        </div>

        {/* MOBILE BURGER */}
        <input type="checkbox" id="nav-toggle" className={styles.toggle} />
        <label htmlFor="nav-toggle" className={styles.burger}>
          <span />
          <span />
        </label>

        {/* CENTER — NAV LINKS */}
        <ul className={styles.links}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Moe</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>
    </header>
  );
}

export default Nav;
