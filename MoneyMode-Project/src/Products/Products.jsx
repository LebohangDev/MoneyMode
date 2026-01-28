import React, { useState } from "react";
import styles from "./Products.module.css";
import SelectedProduct from "../Selected Product/SelectedProduct";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: "starter",
    name: "Starter Kit",
    step: "Step 1: Start Free",
    image: "Images/free-ebook-cover.png",
    tag: "FREE",
    type: "free",
    cta: "Get Free",
    description:
      "A practical starter kit that gives you the exact 7 steps to sign your first creator.",
    subtext: "7 steps to land your first creator",
  },
  {
    id: "guide",
    name: "Ultimate Guide",
    step: "Step 2: Scale Up",
    image: "Images/paid-ebook-cover.png",
    tag: null,
    type: "paid",
    cta: "Buy Now",
    price: 599,
    description:
      "A complete blueprint for building and scaling a profitable creator agency.",
    subtext: "The A-Z playbook to build and scale.",

  },
  {
    id: "sessions",
    name: "Operator Program",
    step: "Step 3: Apply",
    image: "Images/sessions-cover.png",
    tag: null,
    type: "apply",
    cta: "Apply Now",
    description:
      "Work directly with Moe through personalized sessions to accelerate your agency growth.",
    subtext: "Application only. Limited spots.",
  },
];

function Products() {
  const [selected, setSelected] = useState(PRODUCTS[1]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <section id="product" className={styles.productsSection}>
        <div className={`section__inner ${styles.wrapper}`}>

          {/* NEW MAIN HEADING */}
          <h2 className={styles.mainHeading}>
            Start free. Then go deeper. Then apply.
          </h2>

          {/* NEW SUBTEXT */}
          <p className={styles.subHeading}>
            Follow this 3-step path to building a $50K-$100K/month creator agency.
          </p>

          {/* PRODUCT CARDS */}
          <div className={styles.productsContainer}>
            <div className={styles.bgBar}></div>

            <motion.div
              className={styles.grid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {PRODUCTS.map((product) => (
                <motion.div
                  key={product.id}
                  className={`${styles.card} ${selected.id === product.id ? styles.selected : ""
                    }`}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  onClick={() => {
                    setSelected(product);
                    window.location.href = "#selected-product";
                  }}
                >
                  <p className={styles.step}>{product.step}</p>

                  {product.tag && <span className={styles.tag}>{product.tag}</span>}

                  <img src={product.image} alt={product.name} className={styles.image} />

                  <p className={styles.name}>{product.name}</p>

                  {/* NEW SUBTEXT UNDER PRODUCT */}
                  <p className={styles.subtext}>{product.subtext}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* SELECTED PRODUCT SECTION */}
      <SelectedProduct product={selected} />
    </>
  );
}

export default Products;
