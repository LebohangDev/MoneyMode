// src/App.jsx
import { useState, useEffect } from 'react';
import Nav from './Nav/Nav.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Video from "./Video/Video.jsx";
import StarterKit from "./Starter Kit/StarterKit.jsx";
import Products from './Products/Products.jsx';
import Results from './Results/Results.jsx';



import PaymentCancel from './paymentPopups/PaymentCancel.jsx';
import PaymentSuccess from './paymentPopups/PaymentSuccess.jsx';
import Contact from './Contact/Contact.jsx';
import Gallery from './Gallery/Gallery.jsx';
import Footer from './Footer/Footer.jsx';

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SelectedProduct from './Selected Product/SelectedProduct.jsx';
import { PRODUCTS } from './Products/Products.jsx';

// Component for the main landing page content
const LandingPage = ({ paymentActive, setPaymentActive }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/product') {
      const element = document.getElementById('product');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div className="main">
        <Home />
        <About />
        <Results />
        <Video />
        <StarterKit />
        <Products />
        {/* <Testimonials /> */}
        <Contact />
        <Gallery />
        <div className={paymentActive === 'PaymentSuccess' ? 'activeSection' : 'notActiveSection'}>
          <PaymentSuccess setPaymentActive={setPaymentActive} />
        </div>

        <div className={paymentActive === 'PaymentCancel' ? 'activeSection' : 'notActiveSection'}>
          <PaymentCancel setPaymentActive={setPaymentActive} />
        </div>
      </div>
    </>
  );
};

// Component for the standalone Product page
const ProductPage = () => {
  // Default to the paid product (Ultimate Guide) as requested
  const product = PRODUCTS.find(p => p.id === 'guide') || PRODUCTS[1];

  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main" style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <SelectedProduct product={product} />
    </div>
  );
};

function App() {

  const [paymentActive, setPaymentActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    if (payment === "success") setPaymentActive("PaymentSuccess");
    if (payment === "cancel") setPaymentActive("PaymentCancel");


  }, []);
  return (
    <div className="app">
      <div className="header">
        <Nav className="nav" />
      </div>

      <Routes>
        <Route path="/" element={<LandingPage paymentActive={paymentActive} setPaymentActive={setPaymentActive} />} />
        <Route path="/product" element={<LandingPage paymentActive={paymentActive} setPaymentActive={setPaymentActive} />} />
      </Routes>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
