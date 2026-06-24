import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Spinner } from 'react-bootstrap';
import { db } from '../firebaseConfig'; 
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export default function BlogPage() {
  const { serviceId } = useParams();
  const currentServiceKey = serviceId || "airport-transfers";

  const localServicesData = {
    "airport-transfers": {
      title: "AIRPORT TRANSFERS",
      img: "/assets/service1.jpeg",
      readTime: "5 min read",
      date: "June 3, 2026",
      desc: "Navigating major airport terminals can be challenging, but your ground transportation shouldn’t be. Globe Reliance Transport delivers premium, reliable, and highly efficient airport transfer solutions designed specifically for corporate groups, event delegates, and private business travelers.",
      extraContent: (
        <>
          <p>We provide seamless connectivity to and from all major aviation hubs in the Emirates, including Dubai International Airport (DXB), Al Maktoum International (DWC), and Abu Dhabi International Airport (AUH).</p>
          <h4 className="fw-bold mt-4 mb-3" style={{ color: '#002d62' }}>The Globe Reliance Advantage</h4>
          <ul>
            <li><strong>Real-Time Flight Tracking:</strong> Flight timelines are monitored continuously.</li>
            <li><strong>Meet & Greet Excellence:</strong> Drivers wait at arrivals area with personalized signage.</li>
            <li><strong>Tailored Fleet Modules:</strong> Modern, premium executive vehicles configuration.</li>
          </ul>
        </>
      )
    },
    "corporate-shuttles": {
      title: "CORPORATE SHUTTLES",
      img: "/assets/servise.jpeg",
      readTime: "7 min read",
      date: "May 28, 2026",
      desc: "Globe Reliance understands the critical role reliable and professional transportation plays in the corporate world. In today’s fast-paced business environment, punctuality, efficiency, and employee well-being are vital to operational success.",
      extraContent: <p>Whether you need to connect remote business parks or manage daily commutes, our customized shuttle programs keep your workforce moving seamlessly.</p>
    },
    "hotel-fleet-tours": {
      title: "HOTEL FLEET TOURS",
      img: "/assets/hotel-staff-transport-C4h6dwgy.png",
      readTime: "6 min read",
      date: "May 22, 2026",
      desc: "Globe Reliance offers a dedicated Pickup and Drop-Back facility for hotel staff on all routes throughout the city. The hospitality industry never sleeps, and maintaining world-class guest services requires a punctual workforce.",
      extraContent: <p>We partner with the UAE's leading hotels and luxury resorts to provide structured, round-the-clock transport modules tailored specifically to shift-based operations.</p>
    },
    "school-transport": {
      title: "SCHOOL TRANSPORT",
      img: "/assets/service.jpeg",
      readTime: "5 min read",
      date: "May 15, 2026",
      desc: "Globe Reliance offers special discounts for city and group tours, and transport passes are also available. We understand that transporting students requires the highest level of care.",
      extraContent: <p>Our educational transport modules give schools and parents complete peace of mind.</p>
    },
    "intercity-rentals": {
      title: "INTERCITY RENTALS",
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600",
      readTime: "4 min read",
      date: "May 10, 2026",
      desc: "Seamless intercity transport solutions connecting Abu Dhabi, Dubai, Sharjah, and other emirates with luxury coaches and trained professional drivers.",
      extraContent: <p>Our intercity modules cater to long-distance corporate relocation and cross-emirate business meets.</p>
    },
    "event-transportation": {
      title: "EVENT TRANSPORTATION",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600",
      readTime: "8 min read",
      date: "May 05, 2026",
      desc: "Comprehensive logistics management for large exhibitions, weddings, corporate events, and VIP passenger routing across prime UAE venues.",
      extraContent: <p>From ground coordination to routing timetables, we align our high-capacity luxury fleet with event organizers.</p>
    }
  };

  const [currentService, setCurrentService] = useState(null);
  const [sidebarServices, setSidebarServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPageData = async () => {
      setLoading(true);
      try {
        let selectedService = null;

        if (localServicesData[currentServiceKey]) {
          selectedService = localServicesData[currentServiceKey];
        } else {
          const docRef = doc(db, "services", currentServiceKey);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            selectedService = {
              title: data.title || currentServiceKey.toUpperCase().replace(/-/g, " "),
              img: data.img || "https://placehold.co/600x400",
              readTime: data.readTime || "5 min read",
              date: data.date || "Live Update",
              desc: data.desc || data.dec || "",
              extraContent: typeof data.extraContent === 'string' ? <p>{data.extraContent}</p> : data.extraContent
            };
          }
        }

        setCurrentService(selectedService || localServicesData["airport-transfers"]);

        // Generate Sidebar items safely
        const querySnapshot = await getDocs(collection(db, "services"));
        const tempMap = { ...localServicesData };

        querySnapshot.forEach((doc) => {
          const dData = doc.data();
          if (!tempMap[doc.id]) {
            tempMap[doc.id] = {
              title: dData.title,
              img: dData.img,
              date: dData.date || "Live",
              readTime: dData.readTime || "5 min"
            };
          }
        });

        const alternativeList = Object.keys(tempMap)
          .filter(key => key !== currentServiceKey)
          .map(key => ({ slug: key, ...tempMap[key] }));

        setSidebarServices(alternativeList);

      } catch (err) {
        console.error("Error fetching dynamic doc parameter keys:", err);
        setCurrentService(localServicesData["airport-transfers"]);
      } finally {
        setLoading(false);
      }
    };

    loadPageData();
  }, [serviceId]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh' }} className="d-flex align-items-center justify-content-center bg-light">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className='mt-4' style={{ backgroundColor: '#f8fafd', minHeight: '100vh' }}>
      <div className="pt-5">
        <div className="mt-5 text-white" style={{ backgroundColor: '#002d62', padding: '50px 0', textAlign: 'center' }}>
          <Container>
            <p className="small mb-2">Home &gt; Services &gt; {currentService?.title}</p>
            <h1 className="fw-bold" style={{ letterSpacing: '1px' }}>{currentService?.title}</h1>
            <p className="opacity-75">Professional passenger transport modules configured for customized alignments.</p>
          </Container>
        </div>
      </div>

      <Container className="py-5">
        <Row className="g-4">
          <Col lg={8}>
            <Card className="border-0 shadow-sm mb-4 overflow-hidden rounded-3">
              <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                <Card.Img 
                  variant="top" 
                  src={currentService?.img} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = "https://placehold.co/600x400"; }}
                />
              </div>
              <Card.Body className="p-4">
                <span className="badge bg-primary mb-3">FEATURED SERVICE</span>
                <h2 style={{ color: '#0056b3' }} className="fw-bold mb-2">
                  {currentService?.title} Solutions in UAE
                </h2>
                <p className="text-muted small mb-4">{currentService?.date} • {currentService?.readTime}</p>
                <hr />
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444444', fontWeight: '500' }}>
                  {currentService?.desc}
                </p>
                
                <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444444' }}>
                  {currentService?.extraContent}
                </div>

                <p className="mt-4" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444444' }}>
                  Globe Reliance Passenger Transport provides premium and structurally verified route options across the UAE. Our vehicles are fully equipped with advanced navigation and premium tracking modules to monitor timelines, assuring ultimate punctuality and excellence in execution.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="border-0 shadow-sm p-4 text-white mb-4 rounded-3" style={{ backgroundColor: '#0056b3' }}>
              <h5 className="fw-bold">Stay Updated</h5>
              <p className="small opacity-90">Subscribe to our newsletter and never miss our latest updates and fleet additions.</p>
              <Form>
                <Form.Control type="email" placeholder="Enter your email address" className="mb-2 py-2 border-0" />
                <Button variant="warning" className="w-100 fw-bold text-white py-2" style={{ backgroundColor: '#ff7f50', border: 'none' }}>
                  Subscribe Now ↗
                </Button>
              </Form>
            </Card>

            <h5 className="fw-bold mb-3 mt-4" style={{ color: '#002d62' }}>Popular Posts</h5>
            
            <div className="d-flex flex-column gap-3">
              {sidebarServices.slice(0, 5).map((srv, idx) => (
                <Link to={`/blog/${srv.slug}`} key={idx} className="text-decoration-none">
                  <Card className="border-0 shadow-sm overflow-hidden h-100 rounded-3 bg-white service-sidebar-card" style={{ transition: 'transform 0.2s' }}>
                    <Row className="g-0 align-items-center">
                      <Col xs={4} style={{ height: '85px', overflow: 'hidden' }}>
                        <img 
                          src={srv.img} 
                          alt={srv.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                          onError={(e) => { e.target.src = "https://placehold.co/150"; }}
                        />
                      </Col>
                      <Col xs={8}>
                        <Card.Body className="p-2 ps-3">
                          <h6 className="fw-bold mb-1 text-truncate-2" style={{ fontSize: '0.85rem', color: '#111111', lineHeight: '1.3' }}>
                            {srv.title}: Complete Guide 2026
                          </h6>
                          <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                            {srv.date} • {srv.readTime}
                          </span>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}