
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
