// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { db } from '../firebaseConfig'; 
// import { collection, getDocs } from 'firebase/firestore';

// export default function OurServices() {
//   // Hardcoded core services
//   const defaultServices = [
//     { slug: "airport-transfers", title: "AIRPORT TRANSFERS", img: "/assets/service1.jpeg", desc: "Top airport transfer service in UAE, Globe Reliance offers affordable, luxurious rides to and from all major airports." },
//     { slug: "corporate-shuttles", title: "CORPORATE SHUTTLES", img: "/assets/servise.jpeg", desc: "Globe Reliance understands the critical role reliable and professional transportation plays in the corporate world." },
//     { slug: "hotel-fleet-tours", title: "HOTEL FLEET TOURS", img: "/assets/hotel-staff-transport-C4h6dwgy.png", desc: "Globe Reliance offers Pickup and Drop-Back facility for hotel staff on all routes throughout city." },
//     { slug: "school-transport", title: "SCHOOL TRANSPORT", img: "/assets/service.jpeg", desc: "Globe Reliance offers Special discounts for city and group tours. Passes are also available." },
//     // { slug: "intercity-rentals", title: "INTERCITY RENTALS", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600", desc: "Seamless intercity transport solutions connecting Abu Dhabi, Dubai, Sharjah, and other emirates with luxury coaches." },
//     // { slug: "event-transportation", title: "EVENT TRANSPORTATION", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600", desc: "Comprehensive logistics management for large exhibitions, weddings, corporate events, and VIP passenger routing." }
//   ];

//   const [allServices, setAllServices] = useState(defaultServices);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDynamicServices = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "services"));
//         const dynamicList = [];

//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           const currentSlug = doc.id; // Yeh exact key hai jo doc ki h

//           const isDefault = defaultServices.some(
//             (srv) => srv.slug === currentSlug || srv.title.toLowerCase().replace(/ /g, "-") === currentSlug
//           );

//           if (!isDefault) {
//             dynamicList.push({
//               slug: currentSlug, // Original Doc ID store kar rhe hain
//               title: data.title || currentSlug.toUpperCase().replace(/-/g, " "),
//               img: data.img || "https://placehold.co/600x400",
//               desc: data.desc || data.dec || "", 
//               isDynamic: true 
//             });
//           }
//         });

//         setAllServices([...defaultServices, ...dynamicList]);
//       } catch (error) {
//         console.error("Firestore loading error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDynamicServices();
//   }, []);

//   if (loading) {
//     return (
//       <div style={{ backgroundColor: "#f0f6ff", minHeight: "30vh" }} className="d-flex align-items-center justify-content-center">
//         <Spinner animation="border" variant="primary" />
//         <span className="ms-2 text-muted small">Live updates check ho rahe hain...</span>
//       </div>
//     );
//   }

//   return (
//     <div style={{ backgroundColor: "#f0f6ff" }}>
//       <section className="py-5" id="services" style={{ backgroundColor: "#f0f6ff" }}>
//         <style>
//           {`
//             .service-hover-card { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease !important; cursor: pointer; background: #ffffff; }
//             .service-hover-card:hover { transform: translateY(-6px); box-shadow: 0 15px 35px rgba(0, 86, 179, 0.15) !important; }
//             .img-zoom-container { overflow: hidden; position: relative; }
//             .service-card-img { transition: transform 0.5s ease !important; }
//             .service-hover-card:hover .service-card-img { transform: scale(1.08); }
//             .read-more-link, .title-link { transition: color 0.2s ease; display: inline-block; }
//             .service-hover-card:hover .read-more-link { color: #e06634 !important; }
//             .title-link { color: #0056b3; text-decoration: none; }
//             .title-link:hover { color: #ff7f50; }
//             .desc-text-clamp { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; min-height: 4.5em; }
//           `}
//         </style>

//         <Container>
//           <div className="text-center mb-5">
//             <h2 className="fw-bold" style={{ color: '#111111' }}>OUR SERVICES</h2>
//             <div style={{ width: '60px', height: '3px', backgroundColor: '#ff7f50', margin: '10px auto' }}></div>
//           </div>
          
//           <Row className="g-4">
//             {allServices.map((srv, idx) => {
//               // AGAR loop me apni slug key h toh use karein, nahi toh fallback title mapping lagayein
//               const linkSlug = srv.slug || srv.title.toLowerCase().replace(/ /g, "-");

//               return (
//                 <Col xs={12} sm={6} lg={4} xl={3} key={idx}>
//                   <Card className="h-100 border-0 shadow-sm overflow-hidden service-hover-card">
//                     <div className="img-zoom-container">
//                       <Link to={`/blog/${linkSlug}`}>
//                         <Card.Img variant="top" src={srv.img} className="service-card-img" style={{ height: '200px', objectFit: 'cover' }} onError={(e) => { e.target.src = "https://placehold.co/600x400"; }} />
//                       </Link>
//                     </div>

//                     <Card.Body className="d-flex flex-column justify-content-between p-3">
//                       <div>
//                         <Card.Title className="fw-bold text-center mb-3" style={{ fontSize: '1rem' }}>
//                           <Link to={`/blog/${linkSlug}`} className="title-link text-uppercase">
//                             {srv.title}
//                           </Link>
//                         </Card.Title>
//                         <Card.Text className="text-muted text-start small mb-4 desc-text-clamp">
//                           {srv.desc}
//                         </Card.Text>
//                       </div>
//                       <div className="text-center mt-auto">
//                         <Link to={`/blog/${linkSlug}`} className="read-more-link small fw-bold text-decoration-none" style={{ color: '#ff7f50' }}>
//                           READ MORE →
//                         </Link>
//                       </div>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               );
//             })}
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// }


import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function OurServices() {
  // Sirf aapki static hardcoded core services ka data
  const servicesList = [
    { 
      slug: "airport-transfers", 
      title: "AIRPORT TRANSFERS", 
      img: "/assets/service1.jpeg", 
      desc: "Top airport transfer service in UAE, Globe Reliance offers affordable, luxurious rides to and from all major airports." 
    },
    { 
      slug: "corporate-shuttles", 
      title: "CORPORATE SHUTTLES", 
      img: "/assets/servise.jpeg", 
      desc: "Globe Reliance understands the critical role reliable and professional transportation plays in the corporate world." 
    },
    { 
      slug: "hotel-fleet-tours", 
      title: "HOTEL FLEET TOURS", 
      img: "/assets/hotel-staff-transport-C4h6dwgy.png", 
      desc: "Globe Reliance offers Pickup and Drop-Back facility for hotel staff on all routes throughout city." 
    },
    { 
      slug: "school-transport", 
      title: "SCHOOL TRANSPORT", 
      img: "/assets/service.jpeg", 
      desc: "Globe Reliance offers Special discounts for city and group tours. Passes are also available." 
    }
  ];

  return (
    <div style={{ backgroundColor: "#f0f6ff" }}>
      <section className="py-5" id="services" style={{ backgroundColor: "#f0f6ff" }}>
        <style>
          {`
            .service-hover-card { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease !important; cursor: pointer; background: #ffffff; }
            .service-hover-card:hover { transform: translateY(-6px); box-shadow: 0 15px 35px rgba(0, 86, 179, 0.15) !important; }
            .img-zoom-container { overflow: hidden; position: relative; }
            .service-card-img { transition: transform 0.5s ease !important; }
            .service-hover-card:hover .service-card-img { transform: scale(1.08); }
            .read-more-link, .title-link { transition: color 0.2s ease; display: inline-block; }
            .service-hover-card:hover .read-more-link { color: #e06634 !important; }
            .title-link { color: #0056b3; text-decoration: none; }
            .title-link:hover { color: #ff7f50; }
            .desc-text-clamp { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; min-height: 4.5em; }
          `}
        </style>

        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: '#111111' }}>OUR SERVICES</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: '#ff7f50', margin: '10px auto' }}></div>
          </div>
          
          <Row className="g-4">
            {servicesList.map((srv, idx) => {
              const linkSlug = srv.slug;

              return (
                <Col xs={12} sm={6} lg={4} xl={3} key={idx}>
                  <Card className="h-100 border-0 shadow-sm overflow-hidden service-hover-card">
                    <div className="img-zoom-container">
                      <Link to={`/blog/${linkSlug}`}>
                        <Card.Img 
                          variant="top" 
                          src={srv.img} 
                          className="service-card-img" 
                          style={{ height: '200px', objectFit: 'cover' }} 
                          onError={(e) => { e.target.src = "https://placehold.co/600x400"; }} 
                        />
                      </Link>
                    </div>

                    <Card.Body className="d-flex flex-column justify-content-between p-3">
                      <div>
                        <Card.Title className="fw-bold text-center mb-3" style={{ fontSize: '1rem' }}>
                          <Link to={`/blog/${linkSlug}`} className="title-link text-uppercase">
                            {srv.title}
                          </Link>
                        </Card.Title>
                        <Card.Text className="text-muted text-start small mb-4 desc-text-clamp">
                          {srv.desc}
                        </Card.Text>
                      </div>
                      <div className="text-center mt-auto">
                        <Link to={`/blog/${linkSlug}`} className="read-more-link small fw-bold text-decoration-none" style={{ color: '#ff7f50' }}>
                          READ MORE →
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}