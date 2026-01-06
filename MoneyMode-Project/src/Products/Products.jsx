import React, { useState } from "react";
import styles from "./Products.module.css";
import SelectedProduct from "../Selected Product/SelectedProduct";

const PRODUCTS = [
  {
    id: "starter",
    name: "Starter Kit",
    image: "Images/free-ebook-cover.png",
    tag: "FREE",
    type: "free",
    cta: "Get Free",
    description:
      "A practical starter kit that gives you the exact 7 steps to sign your first creator.",
  },
  {
    id: "guide",
    name: "Ultimate Guide",
    image: "Images/paid-ebook-cover.png",
    tag: null,
    type: "paid",
    cta: "Buy Now",
    description:
      "A complete blueprint for building and scaling a profitable creator agency.",
  },
  {
    id: "sessions",
    name: "1-on-1 Sessions",
    image: "Images/sessions-cover.png",
    tag: null,
    type: "apply",
    cta: "Apply Now",
    description:
      "Work directly with Moe through personalized sessions to accelerate your agency growth.",
  },
];

function Products() {
  const [selected, setSelected] = useState(PRODUCTS[0]);

  return (
    <>
      <section id="product" className="section">
        <div className={`section__inner ${styles.wrapper}`}>

          {/* TOP LINE */}
          <p className={styles.topLine}>
            Everything you need to start, build, and scale your creator agency.
          </p>

          {/* PRODUCT CARDS */}
          {/* <div className={styles.grid}>
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className={`${styles.card} ${selected.id === product.id ? styles.selected : ""
                  }`}
                onClick={() => { setSelected(product); window.location.href = "#selected-product"; }}
              >
                {product.tag && (
                  <span className={styles.tag}>{product.tag}</span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />

                <p className={styles.name}>{product.name}</p>
              </div>
            ))}
          </div> */}
          
          {/* PRODUCT CARDS */}
          <div className={styles.productsContainer}>
            <div className={styles.bgBar}></div>

            <div className={styles.grid}>
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className={`${styles.card} ${
                    selected.id === product.id ? styles.selected : ""
                  }`}
                  onClick={() => {
                    setSelected(product);
                    window.location.href = "#selected-product";
                  }}
                >
                  {product.tag && <span className={styles.tag}>{product.tag}</span>}

                  <img src={product.image} alt={product.name} className={styles.image} />

                  <p className={styles.name}>{product.name}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* SELECTED PRODUCT SECTION */}
      <SelectedProduct product={selected} />
    </>
  );
}

export default Products;
