import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function HeroSection() {
  const styles = {
   heroSection: {
      position: 'relative',
      backgroundImage: `linear-gradient(
        to bottom right, 
        rgba(23, 37, 84, 0.9) 0%, 
        rgba(30, 58, 138, 0.4) 50%, 
        rgba(23, 37, 84, 0.85) 100%
      ), url('https://globe-reliance-transport.vercel.app/assets/hero-bg-DvJaDUqj.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      minHeight: '540px',
      display: 'flex',
      alignItems: 'center',
      color: '#ffffff',
      padding: '70px 0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    title: { 
      fontSize: '3.4rem', 
      fontWeight: '700', 
      lineHeight: '1.15',
      color: '#ffffff',
      letterSpacing: '-0.5px',
      marginBottom: '15px'
    },
    highlight: { 
      color: '#f58233' /* Same to same vibrant orange */
    },
    subTextRow: {
      fontSize: '1rem',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: '500'
    },
    boldSpan: {
      fontWeight: '700'
    },
    rtaBadge: {
      backgroundColor: '#e31e24', /* Same to same RTA red */
      color: '#ffffff',
      fontSize: '0.65rem',
      fontWeight: '800',
      padding: '2px 6px',
      borderRadius: '3px',
      display: 'inline-block',
      marginLeft: '5px',
      lineHeight: '1.2'
    },
    searchCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.12)', /* Exact semi-transparent white tint */
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '10px',
      padding: '30px 24px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
    },
    headingWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px'
    },
    cardIndicator: {
      width: '3px',
      height: '16px',
      backgroundColor: '#f58233',
      marginRight: '8px',
      borderRadius: '1px'
    },
    cardTitle: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#ffffff',
      letterSpacing: '0.3px'
    },
    inputStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.25)', /* Matching input opacity background */
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '6px',
      height: '42px',
      color: '#ffffff',
      fontSize: '0.9rem',
      fontWeight: '500',
      paddingLeft: '15px'
    },
    btnGetQuote: {
      backgroundColor: '#f58233', /* Same to same orange action color */
      border: 'none',
      color: '#ffffff',
      fontWeight: '700',
      fontSize: '0.95rem',
      height: '44px',
      borderRadius: '6px',
      transition: 'opacity 0.2s'
    },
    btnViewFleet: {
      backgroundColor: '#005bb7', /* Same to same clean blue color */
      border: 'none',
      color: '#ffffff',
      fontWeight: '700',
      fontSize: '0.95rem',
      height: '44px',
      borderRadius: '6px',
      transition: 'opacity 0.2s'
    }
  };

  return (
    <section style={styles.heroSection}>
      {/* Dynamic native CSS overrides to match pure placeholder values exactly */}
      <style>
        {`
          .same-input::placeholder { color: rgba(255, 255, 255, 0.75) !important; }
          .same-input { color: #ffffff !important; }
          .same-input:focus {
            background-color: rgba(255, 255, 255, 0.3) !important;
            box-shadow: none !important;
            border-color: rgba(255, 255, 255, 0.4) !important;
          }
          .same-select {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;
            background-position: right 12px center !important;
            background-size: 12px 12px !important;
          }
        `}
      </style>

      <Container>
        <Row className="align-items-center g-4">
          
          {/* LEFT SIDE: Heading and Client Badges */}
          <Col lg={7} className="mb-5 mb-lg-0">
            <h1 style={styles.title}>
              Globe Reliance:<br />
              <span style={styles.highlight}>Reliable Bus Rental</span><br />
              in Dubai
            </h1>
            
            <div style={styles.subTextRow}>
              <span>Trusted by <span style={styles.boldSpan}>500+ Clients</span></span>
              <span>▶</span>
              <span>24/7 Service</span>
              <span style={styles.rtaBadge}>RTA</span>
            </div>
          </Col>

          {/* RIGHT SIDE: Semi-Transparent Booking Form Card */}
          <Col lg={5}>
            <div style={styles.searchCard}>
              <div style={styles.headingWrapper}>
                <div style={styles.cardIndicator}></div>
                <div style={styles.cardTitle}>Get Instant Quote</div>
              </div>
              
              <Form>
                {/* Pickup Field */}
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    placeholder="Select Pickup Location" 
                    className="same-input"
                    style={styles.inputStyle}
                  />
                </Form.Group>

                {/* Bottom Row Fields (Date & Pax) */}
                <Row className="g-2 mb-4">
                  <Col xs={6}>
                    <Form.Control 
                      type="text" 
                      placeholder="Date" 
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      className="same-input"
                      style={styles.inputStyle}
                    />
                  </Col>
                  <Col xs={6}>
                    <Form.Select 
                      className="same-input same-select"
                      style={styles.inputStyle}
                    >
                      <option value="1" style={{color: '#000000'}}>1 Pax</option>
                      <option value="2" style={{color: '#000000'}}>2-5 Pax</option>
                      <option value="5" style={{color: '#000000'}}>5+ Pax</option>
                    </Form.Select>
                  </Col>
                </Row>

                {/* Submitting Buttons Row */}
                <Row className="g-2">
                  <Col xs={6}>
                    <Button type="button" style={styles.btnGetQuote} className="w-100 fw-bold">
                      Get Quote
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button type="button" style={styles.btnViewFleet} className="w-100 fw-bold">
                      View Fleet
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}