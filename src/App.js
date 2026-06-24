import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import BlogPage from './components/BlogPage';
import ScrollToTop from './components/ScrollToTop'; 
import OurServices from "./components/OurServices"
import OurServices1 from "./components/OurServices1"

import { ToastContainer } from "react-toastify";
import OurFleet from "./components/OurFleet";
import Getquote from "./components/Getquote";
import AdminLogin from "./pages/AdminLogin";       
import AdminDashboard from "./pages/AdminDashboard";
import "react-toastify/dist/ReactToastify.css";


function NavigationWrapper({ children }) {
  const location = useLocation();

  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <HeaderNav />}
      {children}
      {!isAdminPath && <Footer />}
    </>
  );
}

function App() {
  const globalStyles = {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    backgroundColor: '#ffffff',
    color: '#333333',
    overflowX: 'hidden',
    scrollBehavior: 'smooth'
  };

  return (
    <Router>
      <ScrollToTop /> 

      <div style={globalStyles}>
     
        <NavigationWrapper>
          <Routes>
           
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog/:serviceId" element={<BlogPage />} />
            <Route path="/our-fleet" element={<OurFleet />} />
            <Route path="/transport-quote-service" element={<Getquote />} />
  <Route clssName="mt-4" path="/our-services" element={<OurServices1 />} />
           
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </NavigationWrapper>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;