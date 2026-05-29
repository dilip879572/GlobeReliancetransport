import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShieldAlt } from 'react-icons/fa';

export default function ExcellenceAndAccreditation() {
  const styles = {
    sectionWrapper: {
      backgroundColor: '#f0f6ff',
      padding: '80px 0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    topSubHeading: {
      color: '#0056b3',
      fontWeight: '700',
      fontSize: '0.85rem',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      marginBottom: '15px'
    },
    mainHeading: {
      color: '#0d1b2a',
      fontWeight: '800',
      fontSize: '1.8rem',
      lineHeight: '1.2',
      letterSpacing: '-0.5px',
      marginBottom: '35px'
    },
    testimonialCard: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '35px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
      border: 'none',
      marginBottom: '25px'
    },
    avatarImg: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      objectFit: 'cover'
    },
    quoteText: {
      color: '#4a5568',
      fontSize: '1.05rem',
      lineHeight: '1.6',
      fontWeight: '500',
      fontStyle: 'normal'
    },
    authorName: {
      color: '#0d1b2a',
      fontWeight: '800',
      fontSize: '0.95rem',
      letterSpacing: '0.5px'
    },
    authorRole: {
      color: '#a0aab2',
      fontWeight: '600',
      fontSize: '0.8rem',
      letterSpacing: '0.5px'
    },
    successBanner: {
      backgroundColor: '#004094', 
      borderRadius: '16px',
      padding: '25px 30px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      boxShadow: '0 10px 25px rgba(0, 64, 148, 0.15)'
    },
    successIconBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      width: '55px',
      height: '55px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '1.6rem',
      flexShrink: '0'
    },
    successTitle: {
      color: '#ffffff',
      fontWeight: '700',
      fontSize: '1.25rem',
      marginBottom: '4px',
      letterSpacing: '0.3px'
    },
    successText: {
      color: 'rgba(255, 255, 255, 0.75)',
      fontSize: '0.9rem',
      lineHeight: '1.4',
      margin: '0'
    },
    accreditationHeading: {
      color: '#0d1b2a',
      fontWeight: '800',
      fontSize: '1.2rem',
      marginBottom: '10px',
      letterSpacing: '-0.5px'
    },
    orangeLine: {
      width: '50px',
      height: '4px',
      backgroundColor: '#ff8a43', 
      borderRadius: '2px',
      marginBottom: '35px'
    },
    badgeCard: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: 'none',
      padding: '30px 20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s ease'
    },
    badgeImg: {
      height: '70px',
      width: 'auto',
      objectFit: 'contain',
      marginBottom: '20px'
    },
    badgeText: {
      color: '#111111',
      fontWeight: '700',
      fontSize: '0.8rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      textAlign: 'center',
      margin: '0'
    }
  };

  const accreditationBadges = [
    { text: "RTA APPROVED", img: "/assets/Rta-Approved-DQe_xQ2P.png" }, // Blue Checked Shimg: "/assets/Rta-Approved-DQe_xQ2P.png" },eld
    { text: "L.L.C S.O.C", img: "/assets/L.L.C.S.O.C-Btvf3Mk_.png" },   // Corporate Building
    { text: "FULLY INSURED", img: "/assets/Fully-insured-NQju4eCq.png" },   // Gold Shield
    { text: "SAFETY CERTIFIED", img: "/assets/Saftey-certified--N9rkTfm.png" }, // Gold Medal Badge
  ];

  return (
    <div style={styles.sectionWrapper} id="about">
      
      <style>
        {`
          .accreditation-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
          }
          .accreditation-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.06) !important;
          }
        `}
      </style>

      <Container>
        <Row className="g-5">
          
        
          <Col lg={6}>
            <div style={styles.topSubHeading}>Our Trust</div>
            <h3 style={styles.mainHeading}>
              DRIVEN BY EXCELLENCE<br />
              PUNCTUALITY & SAFETY
            </h3>
            
            {/* White Testimonial Box */}
            <Card style={styles.testimonialCard}>
              <Card.Body className="p-0">
                <Row className="align-items-start g-3">
                  <Col xs={3} sm={2}>
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" 
                      alt="Ahmed R." 
                      style={styles.avatarImg} 
                    />
                  </Col>
                  <Col xs={9} sm={10} className="ps-sm-3">
                    <p style={styles.quoteText}>
                      "Globe Reliance provides exceptional corporate transport. Their punctuality and well-maintained fleet have made them our preferred partner in Dubai."
                    </p>
                    <div className="mt-3">
                      <span style={styles.authorName}>AHMED R.</span>
                      <span style={{ color: '#a0aab2', margin: '0 8px', fontWeight: 'bold' }}>|</span>
                      <span style={styles.authorRole}>CORPORATE CLIENT</span>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Blue Success Banner */}
            <div style={styles.successBanner}>
              <div style={styles.successIconBox}>
                <FaShieldAlt />
              </div>
              <div>
                <h4 style={styles.successTitle}>10+ YEARS OF SUCCESS</h4>
                <p style={styles.successText}>
                  Trusted partner since 2014, delivering safe and reliable transportation across the UAE.
                </p>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE COLUMN: ACCREDITATIONS GRID */}
          <Col lg={6} className="mt-5 mt-lg-0">
            <h2 style={styles.accreditationHeading}>ACCREDITATIONS</h2>
            <div style={styles.orangeLine}></div>
            
            {/* 2x2 Grid Layout */}
            <Row className="g-4">
              {accreditationBadges.map((badge, idx) => (
                <Col xs={12} sm={6} key={idx}>
                  <div style={styles.badgeCard} className="accreditation-card">
                    <img src={badge.img} alt={badge.text} style={styles.badgeImg} />
                    <p style={styles.badgeText}>{badge.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

        </Row>
      </Container>
    </div>
  );
}