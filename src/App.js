import React from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import StatsRow from './components/StatsRow';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import QuoteAndHours from './components/QuoteAndHours';
import ExcellenceAndAccreditation from './components/ExcellenceAndAccreditation';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const globalStyles = {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    backgroundColor: '#ffffff',
    color: '#333333',
    overflowX: 'hidden',
    scrollBehavior: 'smooth' // Adds clean cinematic smooth animation on modern browsers
  };

  return (
    <div style={globalStyles}>
      <HeaderNav />
      
      {/* Added targeted IDs around sections */}
      <div id="home">
        <HeroSection />
      </div>
      
      <StatsRow />
      
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>
      
      <div id="services">
        <OurServices />
      </div>
      
      <div id="quote-section">
        <QuoteAndHours />
      </div>
      
      <div id="about">
        <ExcellenceAndAccreditation />
      </div>
      
      <div id="contact">
        <ContactUs />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />

      <Footer />
    </div>
  );
}

export default App;