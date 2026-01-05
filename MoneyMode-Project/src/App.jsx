// src/App.jsx
import React from 'react';
import Nav from './Nav/Nav.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Video from "./Video/Video.jsx";
import StarterKit from "./Starter Kit/StarterKit.jsx";
import Product from './Product/Product.jsx';
import Products from './Products/Products.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import Contact from './Contact/Contact.jsx';
import Gallery from './Gallery/Gallery.jsx';
import Footer from './Footer/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Home />
        <About />
        <Video />
        <StarterKit />
        {/* <Product /> */}
        <Products />
        <Testimonials />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
