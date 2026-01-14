import React, { useState } from "react";
import styles from "./SelectedProduct.module.css";
import { motion, AnimatePresence } from "framer-motion";

function SelectedProduct({ product }) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const checkEmailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(regex.test(email));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    checkEmailValidation(newEmail);
  };



  // asyncronous function to handle stripe checkout when called 
  async function handleCheckout(product) {

    const productPayLoad =
    {
      name: product.name,
      description: product.description,
      // striclty ensuring it is sent as an integer
      price: Number(product.price),
      image: "https://vk-varun.github.io/MoneyMode/Images/paid-ebook-cover.png",
      successUrl: "https://vk-varun.github.io/MoneyMode/?payment=success",
      cancelUrl: "https://vk-varun.github.io/MoneyMode/?payment=cancel",
    }

    console.log("Product payload:", productPayLoad);


    const res = await fetch("https://moebackend.onrender.com/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // sending product payload to backend
      body: JSON.stringify(productPayLoad),
    });

    // storing response from backend in json format

    const data = await res.json();
    console.log("Session response:", data);

    // redirect to stripe checkout
    window.location.href = data.url;
  }





  return (
    <section id="selected-product" className={styles.selectedProductSection}>
      <div className={`section__inner ${styles.wrapper}`}>

        {/* PRODUCT NAME CENTERED */}
        <h2 className={styles.title}>{product.name}</h2>

        <div className={styles.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              className={styles.contentInner}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ display: "flex", width: "100%", justifyContent: "center", gap: "60px", alignItems: "center", flexWrap: "wrap" }}
            >
              {/* LEFT SIDE */}
              <div className={styles.left}>
                <img
                  src="Icons/trophy-icon.png"
                  alt="info"
                  className={styles.icon}
                />

                <p className={styles.description}>{product.description}</p>

                {/* EMAIL FIELD */}
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                  value={email}
                  onChange={handleEmailChange}
                />

                {/* CTA BUTTON */}
                {/* CTA BUTTON / DOWNLOAD LINK */}
                {product.type === "free" ? (
                  <a href="Ebooks/STARTER_KIT.pdf" download>
                    <button
                      className={styles.ctaButton}
                      disabled={!isValidEmail}
                      onClick={() => { setEmail(""); setIsValidEmail(false); }}
                    >
                      {product.cta}
                    </button>
                  </a>
                ) : product.type === "apply" ? (
                  <a href="Ebooks/Operator_Program.pdf" download>
                    <button
                      className={styles.ctaButton}
                      disabled={!isValidEmail}
                      onClick={() => { setEmail(""); setIsValidEmail(false); }}
                    >
                      {product.cta}
                    </button>
                  </a>
                ) : (
                  <button
                    className={styles.ctaButton}
                    disabled={!isValidEmail}
                    onClick={() => { product.type === "paid" ? handleCheckout(product) : ""; setEmail(""); setIsValidEmail(false); }}
                  >
                    {product.cta}
                  </button>
                )}

                <p className={styles.note}>
                  {product.type === "free"
                    ? "No spam. PDF sent instantly."
                    : product.type === "paid"
                      ? "Instantly sent to your email."
                      : "Download and apply, we will review your application and contact you."}
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
            </motion.div>
          </AnimatePresence>

          {/* DOTTED SIDE LINES */}
          <div className={styles.dotsLeft}></div>
          <div className={styles.dotsRight}></div>

        </div>
      </div>
    </section>
  );
}

export default SelectedProduct;
