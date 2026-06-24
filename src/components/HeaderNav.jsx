import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { TelephoneFill } from "react-bootstrap-icons";

const logo = "/assets/logo-Bu6wR2cV.png";

export default function HeaderNav() {
  const styles = {
  headerWrapper: {
  position: 'fixed',   
  top: 0,
  left: 0,             
  zIndex: 1030,        
  width: '100%',
  boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'
},
    topHeader: { 
      backgroundColor: '#ffffff', 
      padding: '0 0' 
    },
    brandText: { 
      color: '#0056b3', 
      fontWeight: 'bold', 
      fontSize: '1.2rem', 
      letterSpacing: '0.5px' 
    },
    phoneNumber: { 
      color: '#0056b3', 
      fontWeight: '800', 
      fontSize: '1.2rem' 
    },
    phoneNumbertext: { 
      color: '#0056b3', 
      fontWeight: '800', 
      fontSize: '1.0rem' 
    },
    navbarContainer: { 
      backgroundColor: '#0056b3', 
      padding: '0' 
    },
    tagline: { 
      color: '#ffffff', 
      fontWeight: '500', 
      fontSize: '0.85rem', 
      letterSpacing: '0.5px' 
    },
    navLink: { 
      color: '#ffffff', 
      fontWeight: '600', 
      fontSize: '0.85rem', 
      padding: '15px 18px' 
    },
    bookNowBtn: { 
      backgroundColor: '#ff7f50', 
      color: '#ffffff', 
      fontWeight: 'bold', 
      padding: '15px 30px', 
      textDecoration: 'none', 
      display: 'inline-block' 
    }
  };

  return (
    <header style={styles.headerWrapper}> 
      {/* ─── FIXED MEDIA QUERY FOR COMPACT PHONE VIEW ─── */}
      <style>{`
        @media (max-width: 767px) {
          .mobile-header-wrapper {
            padding: 1px 0 !important;
          }
          
          .mobile-row {
            row-gap: 6px !important; 
          }

          .mobile-center {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            text-align: center !important;
          }

          .mobile-brand-text {
            font-size: 1.1rem !important; 
            line-height: 1.3 !important;
            margin: 2px 0 !important;
            padding: 0 10px;
          }

          .mobile-phone-container {
            margin-top: 2px !important;
            font-size: 10px !important;
            margin-bottom: 4px !important;
          }
          
          .mobile-phone-text {
            font-size: 1.1rem !important;
          }
        }
      `}</style>

      {/* Top Brand White Section */}
      <div style={styles.topHeader} className="mobile-header-wrapper">
        <Container>
          <Row className="align-items-center justify-content-between text-center text-md-start g-2 mobile-row">
            
            {/* 1. Logo Section */}
            <Col md={2} className="d-none d-md-flex align-items-center justify-content-start">
              <Nav.Link href="/">
                <img 
                src={logo} 
                alt="Logo" 
                style={{ height: "80px", width: "auto", objectFit: 'contain' }} 
              />
              
              </Nav.Link>
              
            
            </Col>
        
            {/* 2. Brand Text Section */}
            <Col xs={12} md={6} className="mobile-center d-flex align-items-center justify-content-center justify-content-md-start">
              <span style={styles.brandText} className="mobile-brand-text">
                GLOBE RELIANCE PASSENGERS TRANSPORT
              </span>
            </Col>

            {/* 3. Call Us Section */}
            <Col xs={12} md={4} className="mobile-center text-center text-md-end mobile-phone-container">
              <span style={styles.phoneNumbertext}><TelephoneFill size={22} /></span> &nbsp;
              <a href="tel:+971566802426" style={styles.phoneNumber} className="mobile-phone-text text-decoration-none">
                +971 56 680 2426
              </a>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Blue Navigation Bar Section */}
      <Navbar collapseOnSelect expand="lg" variant="dark" style={styles.navbarContainer} className="p-0">
        <Container>
          <Navbar.Text className="d-none d-lg-block text-white" style={styles.tagline}>
            PROVIDE YOU WITH BEST PRICES ON THE RENTALS
          </Navbar.Text>
          <Navbar.Toggle aria-controls="responsive-navbar" className="my-2 ms-auto me-2" />
          <Navbar.Collapse id="responsive-navbar" className="justify-content-end">
            <Nav className="text-center">
              <Nav.Link href="/" style={styles.navLink}>HOME</Nav.Link>
              <Nav.Link className='' href="/our-services" style={styles.navLink}>SERVICES</Nav.Link>
              <Nav.Link href="/our-fleet" style={styles.navLink}>FLEET</Nav.Link>
              <Nav.Link href="/blog/airport-transfers" style={styles.navLink}>BLOG</Nav.Link>
              <Nav.Link href="/" style={styles.navLink}>CONTACT</Nav.Link>
              <a href="#quote-section" style={styles.bookNowBtn}>BOOK NOW</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}