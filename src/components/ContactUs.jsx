import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add your submission logic here
  };

  return (
    <section style={styles.sectionContainer}>
      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-5">
          <h2 style={styles.mainTitle}>CONTACT US</h2>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            GET IN TOUCH WITH US FOR ANY INQUIRIES OR ASSISTANCE.
          </p>
        </div>

        {/* MAIN CONTENT BLOCK */}
        <Row className="g-4 justify-content-center">
          
          {/* LEFT SIDE: INFO CARDS & MAP */}
          <Col xs={12} lg={5} className="d-flex flex-column gap-4">
            
            {/* Get In Touch Info Card */}
            <div style={styles.infoCard}>
              <h4 style={styles.cardTitle}>GET IN TOUCH</h4>
              
              {/* Address Row */}
              <div style={styles.infoRow}>
                <div style={styles.iconWrapper}>
                  <svg width="20" height="20" fill="#0052B4" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <div style={styles.infoLabel}>ADDRESS</div>
                  <div style={styles.infoDetail}>
                    123 Business Bay, Downtown Dubai,<br />
                    Dubai, United Arab Emirates
                  </div>
                </div>
              </div>

              {/* Phone Row */}
              <div style={styles.infoRow}>
                <div style={styles.iconWrapper}>
                  <svg width="18" height="18" fill="#0052B4" viewBox="0 0 16 16">
                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <div>
                  <div style={styles.infoLabel}>PHONE / MOBILE</div>
                  <div style={styles.infoDetail}>+971 4 123 4567</div>
                  <div style={styles.infoDetail}>+971 50 987 6543</div>
                </div>
              </div>

              {/* Email Row */}
              <div style={styles.infoRow}>
                <div style={styles.iconWrapper}>
                  <svg width="18" height="18" fill="#0052B4" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
                  </svg>
                </div>
                <div>
                  <div style={styles.infoLabel}>EMAIL</div>
                  <div style={styles.infoDetail}>
                    <a href="mailto:info@globereliancetransport.com" style={styles.emailLink}>info@globereliancetransport.com</a>
                  </div>
                </div>
              </div>

            </div>

            {/* Map Placeholder Block */}
            <div style={styles.mapContainer}>
              <div style={styles.mapBadge}>Google Map Placeholder</div>
            </div>

          </Col>

          {/* RIGHT SIDE: CONTACT FORM */}
          <Col xs={12} lg={6}>
            <div style={styles.formCard}>
              <h4 style={styles.formTitle}>Send us a Message</h4>
              
              <Form onSubmit={handleSubmit}>
                {/* Name Input */}
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label style={styles.inputLabel}>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.formInput}
                    required
                  />
                </Form.Group>

                {/* Email Input */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label style={styles.inputLabel}>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="you@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.formInput}
                    required
                  />
                </Form.Group>

                {/* Comments Textarea */}
                <Form.Group className="mb-4" controlId="formComments">
                  <Form.Label style={styles.inputLabel}>Comments</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="comments"
                    rows={4} 
                    placeholder="How can we help you?" 
                    value={formData.comments}
                    onChange={handleChange}
                    style={styles.formTextArea}
                    required
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" style={styles.submitBtn} className="w-100">
                  Send Message &nbsp;
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ transform: 'rotate(-25deg)', marginBottom: '3px' }}>
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                  </svg>
                </Button>
              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

// Styling Object precisely matching layout configurations, fonts, dropshadows, and accents
const styles = {
  sectionContainer: {
    backgroundColor: '#ffffff',
    padding: '60px 0',
    fontFamily: '"Montserrat", "Segoe UI", Arial, sans-serif'
  },
  mainTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#1A2E40',
    letterSpacing: '0.5px',
    margin: 0
  },
  titleUnderline: {
    width: '55px',
    height: '4px',
    backgroundColor: '#FF6F3C', // Deep orange line accent
    margin: '8px auto 18px auto',
    borderRadius: '2px'
  },
  subtitle: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: '#556877',
    letterSpacing: '0.5px'
  },
  infoCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #EAEFF4',
    borderRadius: '16px',
    padding: '35px 30px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.03)'
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '800',
    color: '#1A2E40',
    marginBottom: '30px',
    letterSpacing: '0.3px'
  },
  infoRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    marginBottom: '28px'
  },
  iconWrapper: {
    width: '44px',
    height: '44px',
    backgroundColor: '#EBF3FC', // Light blue soft circle background
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  infoLabel: {
    fontSize: '0.75rem',
    fontWeight: '800',
    color: '#1A2E40',
    letterSpacing: '0.5px',
    marginBottom: '4px'
  },
  infoDetail: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#556877',
    lineHeight: '1.5'
  },
  emailLink: {
    color: '#1A2E40',
    textDecoration: 'none',
    fontWeight: '700'
  },
  mapContainer: {
    height: '220px',
    borderRadius: '16px',
    backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')`, // Realistic faded map layout texture
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #EAEFF4',
    position: 'relative',
    opacity: 0.85
  },
  mapBadge: {
    backgroundColor: '#ffffff',
    color: '#1A2E40',
    padding: '10px 20px',
    borderRadius: '6px',
    fontSize: '0.88rem',
    fontWeight: '700',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
  },
  formCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #F3F6F9',
    borderRadius: '16px',
    padding: '40px 35px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
  },
  formTitle: {
    fontSize: '1.35rem',
    fontWeight: '800',
    color: '#1A2E40',
    marginBottom: '25px'
  },
  inputLabel: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#556877',
    marginBottom: '6px'
  },
  formInput: {
    height: '46px',
    borderRadius: '6px',
    border: '1px solid #CED4DA',
    fontSize: '0.9rem',
    color: '#495057'
  },
  formTextArea: {
    borderRadius: '6px',
    border: '1px solid #CED4DA',
    fontSize: '0.9rem',
    color: '#495057',
    resize: 'none'
  },
  submitBtn: {
    backgroundColor: '#0052B4', // Accurate corporate royal blue button matching your exact identity rules
    border: 'none',
    height: '48px',
    fontSize: '1rem',
    fontWeight: '700',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease'
  }
};

export default ContactUs;