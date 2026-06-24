import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  GeoAltFill,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Whatsapp,

  ArrowUpShort,
} from "react-bootstrap-icons";

const Footer = () => {
  // Smooth scroll to top function for the orange button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={styles.footerContainer}>
      {/* Top Orange Border Accent */}
      <div style={styles.topAccentBar}></div>

      <Container fluid="lg" style={styles.contentContainer}>

        {/* ROW 1: Location, Socials, Website */}
        <Row className="align-items-center justify-content-between gy-3">
          <Col xs={12} md={4} className="text-center text-md-start">
            <div style={styles.locationWrapper}>
              <GeoAltFill style={styles.locationIcon} />
              <span style={styles.locationText}>DUBAI, UAE</span>
            </div>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <div style={styles.socialIconsGroup}>
              <a href="https://theglobaltalentresource.com/" style={styles.socialIconCircle}><Globe size={16} /></a>
              <a href="https://www.instagram.com/globe.reliance?igsh=MXFlZmI2Ym53Y2JpdA==" target='black' style={styles.socialIconCircle}><Instagram size={16} /></a>
              <a href="https://www.facebook.com/share/18dHc6j6ec/" target='black' style={styles.socialIconCircle}><Facebook size={16} /></a>
              <a href="https://www.linkedin.com/company/globe-reliance-transport/" target='black' style={styles.socialIconCircle}><Linkedin size={16} /></a>


              <a
                href="https://web.whatsapp.com/send?phone=971567564664&text="
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIconCircle}>
                <Whatsapp size={16} />
              </a>
              <a href="#" style={styles.socialIconCircle}><Twitter size={16} /></a>

            </div>
          </Col>

          <Col xs={12} md={4} className="text-center text-md-end">
            <a href="https://www.websitehere.com" target="_blank" rel="noreferrer" style={styles.mainWebsiteLink}>
              WWW.WEBSITEHERE.COM
            </a>
          </Col>
        </Row>

        <hr style={styles.divider} />


        <Row className="justify-content-center gy-4 py-2">
          {/* Brand 1 */}
          <Col xs={12} md={5} className="d-flex justify-content-center justify-content-md-start align-items-center">
            <div style={styles.logoSquare}>G</div>
            <div style={styles.brandTextContainer}>
              <div style={styles.brandTitle}>THE GLOBAL TALENT RESOURCE</div>
              <a href="https://theglobaltalentresource.com" style={styles.brandLink}>theglobaltalentresource.com</a>
            </div>
          </Col>

          <Col md={2} className="d-none d-md-block"></Col>

          {/* Brand 2 */}
          <Col xs={12} md={5} className="d-flex justify-content-center justify-content-md-start align-items-center">
            <div style={styles.logoSquare}>G</div>
            <div style={styles.brandTextContainer}>
              <div style={styles.brandTitle}>GLOBAL TECH REACH</div>
              <a href="https://globaltechreach.com" style={styles.brandLink}>globaltechreach.com</a>
            </div>
          </Col>
        </Row>

       
        <hr style={styles.divider} />

      
        <Row>
          <Col className="text-center">
            <p style={styles.copyrightText}>
              &copy; 2026 GLOBE RELIANCE. ALL RIGHTS RESERVED.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Floating Scroll-to-Top Button */}
      <button onClick={scrollToTop} style={styles.scrollTopButton} aria-label="Scroll to top">
        <ArrowUpShort size={32} />
      </button>
    </footer>
  );
};


const styles = {
  footerContainer: {
    backgroundColor: '#0052B4', 
    position: 'relative',
    color: '#ffffff',
    fontFamily: '"Montserrat", "Segoe UI", Arial, sans-serif',
    paddingBottom: '25px',
    width: '100%',
  },
  topAccentBar: {
    backgroundColor: '#FF6F3C', 
    height: '6px',
    width: '100%',
    marginBottom: '35px',
  },
  contentContainer: {
    position: 'relative',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
  locationWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  },
  locationIcon: {
    color: '#FF6F3C', 
    fontSize: '1.3rem',
  },
  locationText: {
    fontWeight: '800',
    fontSize: '1rem',
    letterSpacing: '0.5px',
  },
  socialIconsGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
  },
  socialIconCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textDecoration: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    transition: 'background-color 0.2s',
  },
  mainWebsiteLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '0.95rem',
    letterSpacing: '0.5px',
  },
  divider: {
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: '1px',
    marginTop: '25px',
    marginBottom: '25px',
    opacity: 1,
  },
  logoSquare: {
    backgroundColor: '#ffffff',
    color: '#0052B4',
    width: '45px',
    height: '45px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '900',
    fontSize: '1.5rem',
    marginRight: '15px',
    flexShrink: 0,
  },
  brandTextContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  brandTitle: {
    fontWeight: '800',
    fontSize: '1rem',
    letterSpacing: '0.3px',
    lineHeight: '1.2',
  },
  brandLink: {
    color: 'rgba(255, 255, 255, 0.75)',
    textDecoration: 'none',
    fontSize: '0.85rem',
    marginTop: '2px',
  },
  copyrightText: {
    fontSize: '0.72rem',
    color: 'rgba(255, 255, 255, 0.65)',
    letterSpacing: '1px',
    margin: '15px 0 0 0',
    fontWeight: '500',
  },
  scrollTopButton: {
    position: 'absolute',
    bottom: '20px',
    right: '30px',
    backgroundColor: '#FF6F3C', // Matching the vibrant orange up-arrow action button
    color: '#ffffff',
    border: 'none',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
  },
};

export default Footer;