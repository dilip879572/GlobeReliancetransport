import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function OurServices() {
  const services = [
    { title: "AIRPORT TRANSFERS", img: "/assets/airport-transfer-CM5-XtSZ.png", dec: "Top airport transfer service in UAE, Globe Reliance offers affordable, luxurious rides to and from all major airports." },
    { title: "CORPORATE SHUTTLES", img: "/assets/corporate-service-CiHUwihL.png", dec: "Globe Reliance understands the critical role reliable and professional transportation plays in the corporate world." },
    { title: "HOTEL FLEET TOURS", img: "/assets/hotel-staff-transport-C4h6dwgy.png", dec: "Globe Reliance offers Pickup and Drop-Back facility for hotel staff on all routes throughout city." },
    { title: "SCHOOL TRANSPORT", img: "/assets/city-tour-qJ-MMFLK.png", dec: "Globe Reliance offers Special discounts for city and group tours. Passes are also available." }
  ];

  return (
    <div style={{ backgroundColor: "#f0f6ff" }}>
      <section className="py-5" id="services" style={{ backgroundColor: "#f0f6ff" }}>
        <style>
          {`
            .service-hover-card {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease !important;
              cursor: pointer;
              background: #ffffff;
            }
            .service-hover-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 15px 35px rgba(0, 86, 179, 0.15) !important;
            }
            .img-zoom-container {
              overflow: hidden;
              position: relative;
            }
            .service-card-img {
              transition: transform 0.5s ease !important;
            }
            .service-hover-card:hover .service-card-img {
              transform: scale(1.08); 
            }
            .read-more-link {
              transition: color 0.2s ease, transform 0.2s ease;
              display: inline-block;
            }
            .service-hover-card:hover .read-more-link {
              color: #e06634 !important; 
            }
          `}
        </style>

        <Container style={{ backgroundColor: "#f0f6ff" }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: '#111111', letterSpacing: '0.5px' }}>OUR SERVICES</h2>
                    <div style={{ width: '60px', height: '3px', backgroundColor: '#ff7f50', margin: '10px auto' }}></div>

            <p className="text-muted small">Professional transportation modules configured for customized corporate events</p>
          </div>
          
          <Row className="g-4">
            {services.map((srv, idx) => (
              <Col xs={12} sm={6} lg={3} key={idx}>
                <Card className="h-100 border-0 shadow-sm overflow-hidden service-hover-card">
                  
                  <div className="img-zoom-container">
                    <Card.Img 
                      variant="top" 
                      src={srv.img} 
                      className="service-card-img"
                      style={{ height: '200px', objectFit: 'cover' }} 
                    />
                  </div>

                  <Card.Body className="d-flex flex-column justify-content-between p-3">
                    <div>
                      <Card.Title className="fw-bold text-center mb-3" style={{ fontSize: '1rem', color: '#0056b3', letterSpacing: '0.3px' }}>
                        {srv.title}
                      </Card.Title>
                      
                      <Card.Text className="text-muted text-start small mb-4" style={{ lineHeight: '1.5', fontSize: '0.85rem' }}>
                        {srv.dec}
                      </Card.Text>
                    </div>
                    
                    <div className="text-center mt-auto">
                      <a href="#contact" className="read-more-link small fw-bold text-decoration-none" style={{ color: '#ff7f50' }}>
                        READ MORE →
                      </a>
                    </div>

                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}