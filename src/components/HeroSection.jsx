import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  const styles = {
    heroSection: {
      position: 'relative',
      backgroundImage: `
    linear-gradient(
      to bottom right,
      rgba(23, 37, 84, 0.9) 0%,
      rgba(30, 58, 138, 0.4) 50%,
      rgba(23, 37, 84, 0.85) 100%
    ),
    url("/assets/image_64f4dee4.png")
  `,
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      minHeight: '540px',
      display: 'flex',
      alignItems: 'center',
      color: '#ffffff',
      padding: '70px 0',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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
  const [pickup, setPickup] = useState("");
  const [date, setDate] = useState("");
  const [pax, setPax] = useState("");

  const handleGetQuote = () => {
    if (!pickup || !date || !pax) return;

    navigate("/transport-quote-service");
  };
  const dubaiLocations = [
    "Dubai International Airport (DXB)",
    "Downtown Dubai",
    "Dubai Marina",
    "Jumeirah Beach Residence (JBR)",
    "Palm Jumeirah",
    "Bur Dubai",
    "Deira",
    "Business Bay",
    "Al Barsha",
    "Jumeirah Lake Towers (JLT)",
    "Al Karama",
    "Dubai Silicon Oasis",
    "Dubai Sports City",
    "Dubai Investment Park",
    "Discovery Gardens",
    "Mirdif",
    "Arabian Ranches",
    "Dubai Hills Estate",
    "International City",
    "Expo City Dubai",
  ];
  return (
    <section className='mt-5' style={styles.heroSection}>
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
            <h1 style={styles.title} className='mt-5'>
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
                {/* Pickup Location */}
                <Form.Group className="mb-3">
                  <Form.Select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    style={styles.inputStyle}
                  >
                    <option value="">Select Pickup Location</option>
                    {dubaiLocations.map((loc, i) => (
                      <option key={i} value={loc} style={{ color: "black" }}>
                        {loc}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {/* Date & Pax */}
                <Row className="g-2 mb-4">
                  <Col xs={6}>
                    <Form.Control
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      style={styles.inputStyle}
                    />
                  </Col>

                  <Col xs={6}>
                    <Form.Select
                      value={pax}
                      onChange={(e) => setPax(e.target.value)}
                      style={styles.inputStyle}
                    >
                      <option value="" style={{ color: "black" }}>Pax</option>
                      <option value="1" style={{ color: "black" }}>1 Pax</option>
                      <option value="2-5" style={{ color: "black" }}>2-5 Pax</option>
                      <option value="5+" style={{ color: "black" }}>5+ Pax</option>
                    </Form.Select>
                  </Col>
                </Row>

                {/* Buttons */}
                <Row className="g-2">
                  <Col xs={6}>
                    <Button
                      type="button"
                      disabled={!pickup || !date || !pax}
                      onClick={handleGetQuote}
                      style={{
                        ...styles.btnGetQuote,
                        opacity: !pickup || !date || !pax ? 0.5 : 1,
                        cursor: !pickup || !date || !pax ? "not-allowed" : "pointer",
                      }}
                      className="w-100 fw-bold"
                    >
                      Get Quote
                    </Button>
                  </Col>

                  <Col xs={6}>
                    <Link
                      to={pickup && date && pax ? "/our-fleet" : "#"}
                      onClick={(e) => {
                        if (!pickup || !date || !pax) {
                          e.preventDefault();
                          alert("Please fill Pickup, Date & Pax first!");
                        }
                      }}
                    >
                      <Button
                        type="button"
                        style={styles.btnViewFleet}
                        className="w-100 fw-bold"
                      >
                        View Fleet
                      </Button>
                    </Link>
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