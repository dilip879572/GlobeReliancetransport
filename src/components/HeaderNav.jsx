import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const logo = "/assets/logo-Bu6wR2cV.png";

export default function HeaderNav() {
  const styles = {
    topHeader: { backgroundColor: '#ffffff', },
    brandText: { color: '#0056b3', fontWeight: 'bold', fontSize: '1.4rem', letterSpacing: '0.5px' },
    phoneNumber: { color: '#0056b3', fontWeight: '800', fontSize: '1.4rem' },
        phoneNumbertext: { color: '#0056b3', fontWeight: '800', fontSize: '1.0rem' },

    navbarContainer: { backgroundColor: '#0056b3', padding: '0' },
    tagline: { color: '#ffffff', fontWeight: '500', fontSize: '0.85rem', letterSpacing: '0.5px' },
    navLink: { color: '#ffffff', fontWeight: '600', fontSize: '0.85rem', padding: '15px 18px' },
    bookNowBtn: { backgroundColor: '#ff7f50', color: '#ffffff', fontWeight: 'bold', padding: '15px 30px', textDecoration: 'none', display: 'inline-block' }
  };

  return (
    <header className="w-100 sticky-top shadow-sm"> 
      {/* Added 'sticky-top' so the header stays visible at the top while scrolling */}
      
      <div style={styles.topHeader}>
        <Container>
          <Row className="align-items-center justify-content-between text-center text-md-start g-2">
            
            {/* 1. Logo Section */}
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center justify-content-md-start">
              <img 
                src={logo} 
                alt="Logo" 
                style={{ height: "80px", width: "auto", objectFit: 'contain' }} 
              />
            </Col>
        
            {/* 2. Brand Text Section */}
            <Col xs={12} md={6} className="d-flex align-items-center justify-content-center justify-content-md-start">
              <span style={styles.brandText}>GLOBE RELIANCE PASSENGERS TRANSPORT</span>
            </Col>

            {/* 3. Call Us Section */}
            <Col xs={12} md={4} className="text-md-end">
              <span className=""  style={styles.phoneNumbertext}>CALL US:</span> &nbsp;
              <a href="tel:+971566802426" style={styles.phoneNumber} className="text-decoration-none">+971 56 680 2426</a>
            </Col>

          </Row>
        </Container>
      </div>

      <Navbar collapseOnSelect expand="lg" variant="dark" style={styles.navbarContainer} className="p-0">
        <Container>
          <Navbar.Text className="d-none d-lg-block text-white" style={styles.tagline}>
            PROVIDE YOU WITH BEST PRICES ON THE RENTALS
          </Navbar.Text>
          <Navbar.Toggle aria-controls="responsive-navbar" className="my-2 ms-auto me-2" />
          <Navbar.Collapse id="responsive-navbar" className="justify-content-end">
            <Nav className="text-center">
              {/* Added Section Hash IDs here */}
              <Nav.Link href="#home" style={styles.navLink}>HOME</Nav.Link>
              <Nav.Link href="#services" style={styles.navLink}>SERVICES</Nav.Link>
              <Nav.Link href="#why-choose-us" style={styles.navLink}>FLEET</Nav.Link>
              <Nav.Link href="#about" style={styles.navLink}>ABOUT</Nav.Link>
              <Nav.Link href="#contact" style={styles.navLink}>CONTACT</Nav.Link>
              <a href="#quote-section" style={styles.bookNowBtn}>BOOK NOW</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}