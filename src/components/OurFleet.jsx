// import React from 'react';
// import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
// import {
//   FaUser, FaBriefcase, FaCheck, FaPhoneAlt,
//   FaLightningHorizontal, FaWhatsapp
// } from 'react-icons/fa';
// import { useParams, Link } from 'react-router-dom';

// const fleetData = [
//   {
//     id: 1,
//     name: 'EXECUTIVE SEDAN',
//     img: "/assets/pexels-mike-b-810357.jpg",
//     passengers: '1 - 4 Passengers',
//     luggage: '2 - 3 Luggage',
//     features: ['Leather Seats', 'Air Conditioning', 'WiFi (Optional)', 'Chauffeur Driven'],
//     capacityRaw: '1 - 4 Passengers',
//     luggageRaw: '2 - 3 Bags',
//     bestUse: 'Business Travel, Airport Transfer'
//   },
//   {
//     id: 2,
//     name: 'SUV / PREMIUM VAN',
//     img: "/assets/coach-3206326_1280.png",
//     passengers: '5 - 7 Passengers',
//     luggage: '4 - 6 Luggage',
//     features: ['Spacious Seating', 'Privacy Glass', 'Air Conditioning', 'Chauffeur Driven'],
//     capacityRaw: '5 - 7 Passengers',
//     luggageRaw: '4 - 6 Bags',
//     bestUse: 'VIP Travel, Family, Business'
//   },
//   {
//     id: 3,
//     name: 'MINIBUS',
//     img: "/assets/winger_2020_EXT_HERO_LHS_v01 copy_0.jpg",
//     passengers: '10 - 15 Passengers',
//     luggage: 'Medium Luggage',
//     features: ['Comfortable Seats', 'Air Conditioning', 'Luggage Space', 'Chauffeur Driven'],
//     capacityRaw: '10 - 15 Passengers',
//     luggageRaw: 'Medium',
//     bestUse: 'Small Groups, Airport Transfers'
//   },
//   {
//     id: 4,
//     name: 'COASTER BUS',
//     img: "/assets/8-scaled.jpg",
//     passengers: '20 - 30 Passengers',
//     luggage: 'Medium Luggage',
//     features: ['Reclining Seats', 'Wide Aisle', 'Air Conditioning', 'Storage Space'],
//     capacityRaw: '20 - 30 Passengers',
//     luggageRaw: 'Medium',
//     bestUse: 'Staff Transport, Events, City Tours'
//   },
//   {
//     id: 5,
//     name: 'LUXURY COACH BUS',
//     img: "/assets/Dubai-to-Abu-Dhabi-Shuttle-Service-Fast-Direct.jpg",
//     passengers: '35 - 55 Passengers',
//     luggage: 'Large Luggage',
//     features: ['AC Climate Control', 'Microphone System', 'Reclining Seats', 'Large Luggage Bays'],
//     capacityRaw: '35 - 55 Passengers',
//     luggageRaw: 'Large',
//     bestUse: 'Corporate Events, Tours, Conferences'
//   },
//   {
//     id: 6,
//     name: 'SUV / PREMIUM VAN',
//     img: "/assets/coach-3206326_1280.png",
//     passengers: '5 - 7 Passengers',
//     luggage: '4 - 6 Luggage',
//     features: ['Spacious Seating', 'Privacy Glass', 'Air Conditioning', 'Chauffeur Driven'],
//     capacityRaw: '5 - 7 Passengers',
//     luggageRaw: '4 - 6 Bags',
//     bestUse: 'VIP Travel, Family, Business'
//   },
// ];

// const OurFleet = () => {
//   return (
//     <div style={{ backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' }}>
//       <div
//         style={{
//           backgroundImage: `  linear-gradient(
//       to bottom right,
//       rgba(23, 37, 84, 0.9) 0%,
//       rgba(30, 58, 138, 0.4) 50%,
//       rgba(23, 37, 84, 0.85) 100%
//     ), url('https://esdubai.com/wp-content/uploads/2023/12/1.jpg')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           padding: '100px 0 140px 0',
//           textAlign: 'center'
//         }}
//       >
//         <Container className='mt-5'>
//           <h1 className="fw-bold display-4 mb-2" style={{ letterSpacing: '2px' }}>OUR FLEET</h1>
//           <p className="fs-5">Premium Vehicles for Every Journey</p>
//           <div style={{ width: '60px', height: '3px', backgroundColor: '#e67e22', margin: '0 auto' }}></div>
//         </Container>
//       </div>

//       <Container style={{ marginTop: '-60px', relative: 'relative', zIndex: 10 }}>

//         {/* --- FILTER BAR --- */}
//         <Card className="shadow-sm border-0 p-4 mb-5" style={{ borderRadius: '8px' }}>
//           <Row className="g-3 align-items-end">
//             <Col xs={12} md={3}>
//               <Form.Label className="text-muted small fw-bold">Passenger Count</Form.Label>
//               <Form.Select defaultValue="All">
//                 <option>All</option>
//               </Form.Select>
//             </Col>
//             <Col xs={12} md={3}>
//               <Form.Label className="text-muted small fw-bold">Vehicle Type</Form.Label>
//               <Form.Select defaultValue="All">
//                 <option>All</option>
//               </Form.Select>
//             </Col>
//             <Col xs={12} md={3}>
//               <Form.Label className="text-muted small fw-bold">Purpose</Form.Label>
//               <Form.Select defaultValue="All">
//                 <option>All</option>
//               </Form.Select>
//             </Col>
//             <Col xs={12} md={3} className="d-grid">
//               <Button style={{ backgroundColor: '#0f4c81', border: 'none' }} className="py-2 fw-bold text-uppercase">
//                 🔄 Reset Filter
//               </Button>
//             </Col>
//           </Row>
//         </Card>

//         {/* --- VEHICLE CARDS GRID --- */}
//         <Row className="g-4 justify-content-center mb-5">
//           {fleetData.map((vehicle) => (
//             <Col key={vehicle.id} xs={12} sm={6} lg={4} className="d-flex">
//               <Card className="w-100 shadow-sm border-1 border-light d-flex flex-column justify-content-between" style={{ borderRadius: '6px' }}>
//                 <div>
//                   <Card.Img variant="top" src={vehicle.img} style={{ objectFit: 'cover', height: '180px' }} />
//                   <Card.Body className="px-3 pt-3 pb-0">
//                     <Card.Title className="fw-bold fs-6 mb-3 text-center" style={{ color: '#0f4c81' }}>
//                       {vehicle.name}
//                     </Card.Title>

//                     <div className="d-flex text-muted small mb-2">
//                       <FaUser className="me-2 mt-1" style={{ color: '#4a90e2' }} />
//                       <span>{vehicle.passengers}</span>
//                     </div>
//                     <div className="d-flex text-muted small mb-3">
//                       <FaBriefcase className="me-2 mt-1" style={{ color: '#4a90e2' }} />
//                       <span>{vehicle.luggage}</span>
//                     </div>

//                     <hr className="my-2 text-muted" />

//                     <p className="fw-bold small mb-2 text-muted">Features</p>
//                     <ul className="list-unstyled ps-0 small">
//                       {vehicle.features.map((feature, idx) => (
//                         <li key={idx} className="mb-1 text-muted d-flex align-items-center">
//                           <FaCheck className="me-2 text-success" size={12} />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </Card.Body>
//                 </div>
//                 <Card.Footer className="bg-transparent border-0 p-3">
//                   <Link to="/transport-quote-service">

//                     <Button
//                       variant="outline-dark"
//                       className="w-100 fw-bold text-uppercase py-2 custom-btn"
//                     >
//                       Get Quote
//                     </Button>  </Link>
//                 </Card.Footer>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* --- FLEET COMPARISON TABLE --- */}
//         <div className="text-center mb-4">
//           <h3 className="fw-bold" style={{ color: '#0f4c81', letterSpacing: '1px' }}>FLEET COMPARISON</h3>
//           <div style={{ width: '40px', height: '3px', backgroundColor: '#e67e22', margin: '8px auto 20px auto' }}></div>
//         </div>

//         <div className="table-responsive shadow-sm rounded mb-5">
//           <Table bordered hover align="middle" className="bg-white mb-0 text-center small">
//             <thead style={{ backgroundColor: '#0f4c81', color: 'white' }}>
//               <tr>
//                 <th className="py-3 text-uppercase fw-semibold" style={{ width: '25%' }}>Vehicle Type</th>
//                 <th className="py-3 text-uppercase fw-semibold">Capacity</th>
//                 <th className="py-3 text-uppercase fw-semibold">Luggage</th>
//                 <th className="py-3 text-uppercase fw-semibold" style={{ width: '35%' }}>Best Use</th>
//               </tr>
//             </thead>
//             <tbody>
//               {fleetData.map((vehicle) => (
//                 <tr key={vehicle.id}>
//                   <td className="text-start ps-3 fw-bold" style={{ color: '#0f4c81' }}>
//                     <img
//                       src={vehicle.img}
//                       alt={vehicle.name}
//                       className="me-2 rounded d-none d-sm-inline-block"
//                       style={{ width: '40px', height: '25px', objectFit: 'cover' }}
//                     />
//                     {vehicle.name.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
//                   </td>
//                   <td className="text-muted">{vehicle.capacityRaw}</td>
//                   <td className="text-muted">{vehicle.luggageRaw}</td>
//                   <td className="text-muted text-start ps-3">{vehicle.bestUse}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>

//         {/* --- BOTTOM CALL TO ACTION BANNER --- */}
//         <Card
//           className="border-0 shadow-lg text-white mb-5 position-relative overflow-hidden"
//           style={{
//             backgroundColor: '#071d33',
//             borderRadius: '12px',
//             backgroundImage: `linear-gradient(to right, rgba(7,29,51,0.95), rgba(7,29,51,0.6)), url('https://via.placeholder.com/1200x400?text=Chauffeur')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'right center'
//           }}
//         >
//           <Card.Body className="p-4 p-md-5">
//             <Row className="align-items-center">
//               <Col xs={12} lg={7} className="mb-4 mb-lg-0">
//                 <h2 className="fw-bold mb-3">Not sure which vehicle suits your needs?</h2>
//                 <p className="mb-0 text-light opacity-75 fs-6">
//                   Our team will help you choose the perfect vehicle for your journey.
//                 </p>
//               </Col>
//               <Col xs={12} lg={5} className="d-flex flex-wrap gap-3 justify-content-lg-end">
//                 <Button
//                   style={{ backgroundColor: '#e67e22', border: 'none' }}
//                   className="px-4 py-2 fw-bold d-flex align-items-center text-uppercase"
//                 >
//                   <FaPhoneAlt className="me-2" /> Call Now
//                 </Button>
//                 <Button
//                   variant="outline-light"
//                   className="px-4 py-2 fw-bold d-flex align-items-center text-uppercase"
//                 >
//                   💬 Get Instant Quote
//                 </Button>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>

//       </Container>
//       <a
//         href="https://wa.me/#"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           position: 'fixed',
//           bottom: '25px',
//           right: '25px',
//           backgroundColor: '#25D366',
//           color: 'white',
//           borderRadius: '50%',
//           width: '60px',
//           height: '60px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: '30px',
//           boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
//           zIndex: 9999
//         }}
//       >

//         <FaWhatsapp />
//       </a>
//     </div>
//   );
// };

// export default OurFleet;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Table, Spinner } from 'react-bootstrap';
import { FaUser, FaBriefcase, FaCheck, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { db } from '../firebaseConfig'; // Path check kar lein apne project ke mutabik
import { collection, getDocs } from 'firebase/firestore';

const OurFleet = () => {
  const [fleetList, setFleetList] = useState([]);
  const [filteredFleet, setFilteredFleet] = useState([]);
  const [loading, setLoading] = useState(true);

  const [passengerFilter, setPassengerFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  useEffect(() => {
    const fetchFleetData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "fleet"));
        const vehicles = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          vehicles.push({
            id: doc.id,
            name: data.name || '',
            img: data.img || 'https://placehold.co/600x400',
            passengers: data.passengers || '', 
            luggage: data.luggage || '',
            // Dashboard se direct Array mil raha hai, split ki zaroorat nahi hai
            features: Array.isArray(data.features) ? data.features : [], 
            capacityRaw: data.capacityRaw || '',
            luggageRaw: data.luggageRaw || '',
            bestUse: data.bestUse || ''
          });
        });
        setFleetList(vehicles);
        setFilteredFleet(vehicles);
      } catch (error) {
        console.error("Error fetching fleet from firestore: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFleetData();
  }, []);

  useEffect(() => {
    let result = fleetList;

    if (passengerFilter !== 'All') {
      result = result.filter(v => v.passengers.toLowerCase().includes(passengerFilter.toLowerCase()));
    }
    if (typeFilter !== 'All') {
      result = result.filter(v => v.name.toLowerCase().includes(typeFilter.toLowerCase()));
    }

    setFilteredFleet(result);
  }, [passengerFilter, typeFilter, fleetList]);

  const handleResetFilters = () => {
    setPassengerFilter('All');
    setTypeFilter('All');
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <div className="text-center">
          <Spinner animation="border" variant="primary" className="mb-2" />
          <p className="text-muted fw-bold">Loading Live Fleet Database...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' }}>
      <div
        style={{
          backgroundImage: `linear-gradient(
            to bottom right,
            rgba(23, 37, 84, 0.9) 0%,
            rgba(30, 58, 138, 0.4) 50%,
            rgba(23, 37, 84, 0.85) 100%
          ), url('https://esdubai.com/wp-content/uploads/2023/12/1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0 140px 0',
          textAlign: 'center'
        }}
      >
        <Container className='mt-5'>
          <h1 className="fw-bold display-4 mb-2" style={{ letterSpacing: '2px' }}>OUR FLEET</h1>
          <p className="fs-5">Premium Live Managed Vehicles for Every Journey</p>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#e67e22', margin: '0 auto' }}></div>
        </Container>
      </div>

      <Container style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>

        <Card className="shadow-sm border-0 p-4 mb-5" style={{ borderRadius: '8px' }}>
          <Row className="g-3 align-items-end">
            <Col xs={12} md={4}>
              <Form.Label className="text-muted small fw-bold">Passenger Count Range</Form.Label>
              <Form.Select value={passengerFilter} onChange={(e) => setPassengerFilter(e.target.value)}>
                <option value="All">All Capacities</option>
                <option value="1 - 4">1 - 4 Passengers</option>
                <option value="5 - 7">5 - 7 Passengers</option>
                <option value="10 - 15">10 - 15 Passengers</option>
                <option value="20 - 30">20 - 30 Passengers</option>
                <option value="35 - 55">35 - 55 Passengers</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={4}>
              <Form.Label className="text-muted small fw-bold">Vehicle Type Segment</Form.Label>
              <Form.Select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                <option value="All">All Categories</option>
                <option value="SEDAN">Sedan Fleet</option>
                <option value="SUV">SUV / Van Premium</option>
                <option value="BUS">Bus / Large Coaches</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={4} className="d-grid">
              <Button 
                style={{ backgroundColor: '#0f4c81', border: 'none' }} 
                className="py-2 fw-bold text-uppercase"
                onClick={handleResetFilters}
              >
                🔄 Reset Filters
              </Button>
            </Col>
          </Row>
        </Card>

        <Row className="g-4 justify-content-center mb-5">
          {filteredFleet.map((vehicle) => (
            <Col key={vehicle.id} xs={12} sm={6} lg={4} className="d-flex">
              <Card className="w-100 shadow-sm border-1 border-light d-flex flex-column justify-content-between" style={{ borderRadius: '6px' }}>
                <div>
                  <Card.Img variant="top" src={vehicle.img} style={{ objectFit: 'cover', height: '180px' }} />
                  <Card.Body className="px-3 pt-3 pb-0">
                    <Card.Title className="fw-bold fs-6 mb-3 text-center" style={{ color: '#0f4c81' }}>
                      {vehicle.name}
                    </Card.Title>

                    <div className="d-flex text-muted small mb-2">
                      <FaUser className="me-2 mt-1" style={{ color: '#4a90e2' }} />
                      <span>{vehicle.passengers}</span>
                    </div>
                    <div className="d-flex text-muted small mb-3">
                      <FaBriefcase className="me-2 mt-1" style={{ color: '#4a90e2' }} />
                      <span className="text-truncate" style={{ maxWidth: '240px' }}>{vehicle.luggageRaw}</span>
                    </div>

                    <hr className="my-2 text-muted" />

                    <p className="fw-bold small mb-2 text-muted">Specifications & Features</p>
                    <ul className="list-unstyled ps-0 small" style={{ minHeight: '95px' }}>
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="mb-1 text-muted d-flex align-items-center text-truncate">
                          <FaCheck className="me-2 text-success" size={12} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </div>
                <Card.Footer className="bg-transparent border-0 p-3">
                  <Link to="/transport-quote-service">
                    <Button variant="outline-dark" className="w-100 fw-bold text-uppercase py-2 custom-btn">
                      Get Quote
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
          {filteredFleet.length === 0 && (
            <Col xs={12} className="text-center py-5">
              <p className="text-muted fs-5">No fleet vehicles match the selected filter parameters.</p>
            </Col>
          )}
        </Row>

        <div className="text-center mb-4">
          <h3 className="fw-bold" style={{ color: '#0f4c81', letterSpacing: '1px' }}>FLEET COMPARISON</h3>
          <div style={{ width: '40px', height: '3px', backgroundColor: '#e67e22', margin: '8px auto 20px auto' }}></div>
        </div>

        <div className="table-responsive shadow-sm rounded mb-5">
          <Table bordered hover align="middle" className="bg-white mb-0 text-center small">
            <thead style={{ backgroundColor: '#0f4c81', color: 'white' }}>
              <tr>
                <th className="py-3 text-uppercase fw-semibold" style={{ width: '25%' }}>Vehicle Type</th>
                <th className="py-3 text-uppercase fw-semibold">Capacity</th>
                <th className="py-3 text-uppercase fw-semibold">Luggage</th>
                <th className="py-3 text-uppercase fw-semibold" style={{ width: '40%' }}>Config / Best Use Case</th>
              </tr>
            </thead>
            <tbody>
              {fleetList.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td className="text-start ps-3 fw-bold" style={{ color: '#0f4c81' }}>
                    <img
                      src={vehicle.img}
                      alt=""
                      className="me-2 rounded d-none d-sm-inline-block"
                      style={{ width: '40px', height: '25px', objectFit: 'cover' }}
                    />
                    {vehicle.name}
                  </td>
                  <td className="text-muted">{vehicle.capacityRaw}</td>
                  <td className="text-muted">{vehicle.luggageRaw}</td>
                  <td className="text-muted text-start ps-3">{vehicle.bestUse}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <Card
          className="border-0 shadow-lg text-white mb-5 position-relative overflow-hidden"
          style={{
            backgroundColor: '#071d33',
            borderRadius: '12px',
            backgroundImage: `linear-gradient(to right, rgba(7,29,51,0.95), rgba(7,29,51,0.6)), url('https://via.placeholder.com/1200x400?text=Chauffeur')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center'
          }}
        >
          <Card.Body className="p-4 p-md-5">
            <Row className="align-items-center">
              <Col xs={12} lg={7} className="mb-4 mb-lg-0">
                <h2 className="fw-bold mb-3">Not sure which vehicle suits your needs?</h2>
                <p className="mb-0 text-light opacity-75 fs-6">
                  Our team will help you choose the perfect vehicle for your journey.
                </p>
              </Col>
              <Col xs={12} lg={5} className="d-flex flex-wrap gap-3 justify-content-lg-end">
                <Button style={{ backgroundColor: '#e67e22', border: 'none' }} className="px-4 py-2 fw-bold d-flex align-items-center text-uppercase">
                  <FaPhoneAlt className="me-2" /> Call Now
                </Button>
                <Button variant="outline-light" className="px-4 py-2 fw-bold d-flex align-items-center text-uppercase">
                  💬 Get Instant Quote
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

      </Container>

      <a
        href="https://wa.me/#"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
          zIndex: 9999
        }}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default OurFleet;