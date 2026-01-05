import React from "react";
import styles from "./SelectedProduct.module.css";

function SelectedProduct({ product }) {
  return (
    <section id="selected-product" className="section">
      <div className={`section__inner ${styles.wrapper}`}>

        {/* PRODUCT NAME CENTERED */}
        <h2 className={styles.title}>{product.name}</h2>

        <div className={styles.content}>

          {/* LEFT SIDE */}
          <div className={styles.left}>
            <img
              src="/Icons/trophy-icon.png"
              alt="info"
              className={styles.icon}
            />

            <p className={styles.description}>{product.description}</p>

            {/* EMAIL FIELD */}
            <input
              type="email"
              placeholder="Enter your email address"
              className="email-input"
            />

            {/* CTA BUTTON */}
            <button
              className={
                product.type === "free"
                  ? "btn-primary"
                  : product.type === "paid"
                  ? "btn-primary"
                  : "btn-secondary"
              }
            >
              {product.cta}
            </button>

            <p className={styles.note}>
              {product.type === "free"
                ? "No spam. PDF sent instantly."
                : product.type === "paid"
                ? "Instant digital download."
                : "We will review your application and contact you."}
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className={styles.right}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
          </div>

          {/* DOTTED SIDE LINES */}
          <div className={styles.dotsLeft}></div>
          <div className={styles.dotsRight}></div>

        </div>
      </div>
    </section>
  );
}

export default SelectedProduct;
