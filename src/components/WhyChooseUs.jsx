import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function WhyChooseUs() {
  const cardsData = [
    { 
      imgSrc: "https://globe-reliance-transport.vercel.app/assets/feat-deals-C5NIVoYs.png", 
      title: "GREAT DEALS", 
      text: "In the UAE, we provide some of the most cost-effective transport options, with scheduled daily services to and from key locations. We also offer a wide range of fare packages and discounts, including special rates for city tours and group bookings." 
    },
    { 
      imgSrc: "https://globe-reliance-transport.vercel.app/assets/feat-promise-DV-0LOl3.png", 
      title: "DELIVER ON PROMISE", 
      text: "We know your time is important, so our priority is to ensure every journey is smooth, comfortable, and on schedule. Our transport services are supported by a dedicated team of experienced professionals who work hard to deliver consistently reliable service." 
    },
    { 
      imgSrc: "https://globe-reliance-transport.vercel.app/assets/feat-quality-c9Cad_TK.png", 
      title: "QUALITY FOCUS", 
      text: "At the heart of our operations, we deliver safe, reliable, and efficient transport solutions across the UAE. Our commitment to excellence is backed by a skilled, professional team always ready to exceed customer expectations." 
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f0f6ff)' }} id="why-choose-us">
      
      <style>
        {`
          .custom-hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
            cursor: pointer;
            background: #ffffff;
          }
          .custom-hover-card:hover {
            transform: translateY(-8px); 
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
          }
          .card-icon-img {
            height: 120px;
            width: auto;
            object-fit: contain;
          }
        `}
      </style>

      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#111111', letterSpacing: '0.5px' }}>WHY CHOOSE US</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#ff7f50', margin: '10px auto' }}></div>
        </div>

        <Row className="g-4">
          {cardsData.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm custom-hover-card">
                <Card.Body className="d-flex flex-column align-items-center">
                  
                  <div className="mb-4 d-flex align-items-center justify-content-center" style={{ minHeight: '100px' }}>
                    <img src={item.imgSrc} alt={item.title} className="card-icon-img" />
                  </div>
                  
                  <Card.Title className="fw-bold mb-3" style={{ fontSize: '1.15rem', color: '#0056b3', letterSpacing: '0.3px' }}>
                    {item.title}
                  </Card.Title>
                  
                  <Card.Text className="text-muted small" style={{ lineHeight: '1.6', textAlign: 'center' }}>
                    {item.text}
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}