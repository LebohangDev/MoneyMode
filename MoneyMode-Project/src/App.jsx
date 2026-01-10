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

function App() {

  const [paymentActive, setPaymentActive] = useState(false);



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

      <div className="main">
        <Home />
        <About />
        <Video />
        <StarterKit />
        <Products />
        <Results />
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

      <div className="footer">
        <Footer />
      </div>
    </div>


  );
}

export default App;
