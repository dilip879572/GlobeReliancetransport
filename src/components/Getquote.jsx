import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, InputGroup } from 'react-bootstrap';
import { 
  FaUser, FaBriefcase, FaCheck, FaPhoneAlt, FaWhatsapp, 
  FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCheckCircle, 
  FaArrowRight, FaArrowLeft, FaShieldAlt, FaListAlt, FaInfoCircle,
  FaRegEdit, FaPaperPlane, FaLock, FaRoute, FaAward, FaFilter, FaUndo, FaHeadset
} from 'react-icons/fa';
import {
  GeoAltFill,
  GeoAlt,
  CalendarEvent,
  ClockFill,
  PeopleFill,
  SuitcaseFill,
  ArrowRepeat,
  TruckFlatbed,
} from "react-bootstrap-icons";

import {

  FaEdit,
  FaCarSide,
  FaEnvelope,
  FaPhone,  FaSuitcase,
  FaMoneyBillWave,
} from "react-icons/fa";

const fleetData = [
  {
    id: 'executive-sedan',
    name: 'Executive Sedan',
   img: "/assets/WhatsApp Image 2026-06-07 at 11.57.03 PM.jpeg",
       passengers: '1 - 4 Passengers',
    luggage: '2 - 3 Luggage',
    features: ['Leather Seats', 'Air Conditioning', 'WiFi (Optional)', 'Chauffeur Driven'],
    minPrice: 150,
    maxPrice: 180,
    popular: true
  },
  {
    id: 'suv-premium-van',
    name: 'SUV / Premium Van',
      img: "/assets/WhatsApp sssImage 2026-06-08 at 12.01.17 AM.jpeg",
      passengers: '5 - 7 Passengers',
    luggage: '4 - 6 Luggage',
    features: ['Spacious Seating', 'Privacy Glass', 'Air Conditioning', 'Chauffeur Driven'],
    minPrice: 250,
    maxPrice: 320,
    popular: false
  },
  {
    id: 'minibus',
    name: 'Minibus',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    passengers: '10 - 15 Passengers',
    luggage: 'Medium Luggage',
    features: ['Comfortable Seats', 'Air Conditioning', 'Luggage Space', 'Chauffeur Driven'],
    minPrice: 450,
    maxPrice: 600,
    popular: false
  },
  {
    id: 'coaster-bus',
    name: 'Coaster Bus',
    img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80',
    passengers: '20 - 30 Passengers',
    luggage: 'Medium Luggage',
    features: ['Reclining Seats', 'Wide Aisle', 'Air Conditioning', 'Storage System'],
    minPrice: 700,
    maxPrice: 950,
    popular: false
  },
  {
    id: 'luxury-coach',
    name: 'Luxury Coach Bus',
   img: "/assets/WhatsApp Image sss2026-06-08 at 12.01.17 AM.jpeg",
    passengers: '35 - 55 Passengers',
    luggage: 'Large Luggage',
    features: ['AC Climate Control', 'Microphone System', 'Reclining Seats', 'Large Luggage Bays'],
    minPrice: 1200,
    maxPrice: 1600,
    popular: false
  }
,
   {
    id: 'executive-sedan',
    name: 'Executive Sedan',
   img: "/assets/WhatsApp Image222222 2026-06-07 at 11.57.03 PM.jpeg",
       passengers: '1 - 4 Passengers',
    luggage: '2 - 3 Luggage',
    features: ['Leather Seats', 'Air Conditioning', 'WiFi (Optional)', 'Chauffeur Driven'],
    minPrice: 150,
    maxPrice: 180,
    popular: true
  },
];

export default function GlobeRelianceWizard() {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    pickupLocation: 'Deira, Dubai',
    dropoffLocation: 'Dubai International Airport (DXB)',
    pickupDate: '2026-06-09',
    pickupTime: '10:00',
    returnDateTime: '',
    passengerCount: '2 - 5',
    luggageCount: '2 - 3 Bags',
    tripType: 'Airport Transfer',
    additionalRequirements: '',
    selectedVehicle: fleetData[1],
    fullName: 'John Smith',
    emailAddress: 'john.smith@example.com',
    countryCode: '+971',
    mobileNumber: '55 123 4567',
    altCountryCode: '+971',
    alternativeNumber: '',
    companyName: '',
    howDidYouHear: 'Select an option',
    purposeOfTravel: 'Business',
    specialRequests: 'Flight number EK201. Meet & Greet at arrivals.'
  });


  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const jumpToStep = (stepNumber) => setCurrentStep(stepNumber);

  const clearForm = () => {
    setFormData({
      pickupLocation: '', dropoffLocation: '', pickupDate: '', pickupTime: '', returnDateTime: '',
      passengerCount: 'Select passengers', luggageCount: 'Select luggage', tripType: 'Select trip purpose',
      additionalRequirements: '', selectedVehicle: fleetData[1], fullName: '', emailAddress: '',
      countryCode: '+971', mobileNumber: '', altCountryCode: '+971', alternativeNumber: '',
      companyName: '', howDidYouHear: 'Select an option', purposeOfTravel: 'Select an option', specialRequests: ''
    });
  };

  const handleFinalSubmit = async () => {
    console.log("Final API Request Body Payload JSON Structure:", formData);
    alert("Booking request submitted successfully!");
  };

  return (
    <div className='mt-5' style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: '"Inter", "Segoe UI", sans-serif', paddingBottom: '40px' }}>
      
    
       {/* <div 
        style={{ 
          backgroundImage: `  linear-gradient(
      to bottom right,
      rgba(23, 37, 84, 0.9) 0%,
      rgba(30, 58, 138, 0.4) 50%,
      rgba(23, 37, 84, 0.85) 100%
    ), url('https://www.sustainable-bus.com/wp-content/uploads/2023/05/IVECO-BUS-STREETWAY-ELEC-scaled.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0 140px 0',
          textAlign: 'center'
        }}
      > */}
            <div className="mt-5" style={{ backgroundColor: '#002d62', padding: '90px 0', textAlign: 'center' }} className="text-white">


        <br />
        <br />
        <Container mt-5 fluid style={{ maxWidth: '1140px' }}>
          <h2 className="fw-bold m-0 text-uppercase tracking-wide" style={{ fontSize: '26px' }}>
            {currentStep === 2 ? "Select Vehicle" : "Get Instant Quote"}
          </h2>
          <p className="small text-white-50 mt-1 mb-0 fs-6">
            {currentStep === 4 ? "Review your details and submit your request" : "Fill in your trip details and get the best price for your journey"}
          </p>
        </Container>
      </div>

     
      <Container className="py-4 mt-5" style={{ maxWidth: '1140px' }}>
        <Card className="border-0 shadow-sm p-3 mb-4 mx-auto" style={{ borderRadius: '50px' }}>
          <Row className="text-center g-2 justify-content-between align-items-center px-md-4">
            {[
              { id: 1, title: 'Trip Details', desc: 'Enter journey details' },
              { id: 2, title: 'Select Vehicle', desc: 'Choose your vehicle' },
              { id: 3, title: 'Your Details', desc: 'Enter contact details' },
              { id: 4, title: 'Confirm & Submit', desc: 'Review and submit' }
            ].map((step) => {
              const isCompleted = currentStep > step.id;
              const isActive = currentStep === step.id;
              return (
                <Col key={step.id} xs={3} className="d-flex align-items-center justify-content-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold me-2"
                    style={{
                      width: '32px', height: '32px', fontSize: '13px',
                      backgroundColor: isActive || isCompleted ? '#0f4c81' : '#f1f5f9',
                      color: isActive || isCompleted ? 'white' : '#94a3b8',
                      border: isActive ? 'none' : '1px solid #e2e8f0',
                      cursor: isCompleted ? 'pointer' : 'default'
                    }}
                    onClick={() => isCompleted && jumpToStep(step.id)}
                  >
                    {isCompleted ? '✓' : step.id}
                  </div>
                  <div className="text-start d-none d-lg-block">
                    <p className={`m-0 small fw-bold ${isActive ? 'text-primary' : 'text-muted'}`} style={{ fontSize: '16px' }}>{step.title}</p>
                    <p className="m-0 text-muted" style={{ fontSize: '12px' }}>{isCompleted ? 'Completed' : step.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Card>

       
        <Row className="g-4 w-100 mx-0 px-0 justify-content-center">
            <Col xs={12} lg={currentStep === 2 ? 12 : 8} className="px-0">
            {currentStep === 1 && (
              <Card className="border-0 shadow-sm p-4 text-start h-100" style={{ borderRadius: '12px' }}>
                <div className="d-flex align-items-center mb-1">
                  <FaMapMarkerAlt className="me-2 icon-blue" />
                  <h5 className="fw-bold m-0 " style={{ fontSize: '20px' ,color:"#0f4c81"}}>Trip Details</h5>
                </div>
                <p className="text-muted small mb-4">Please provide your trip information</p>
                
                <Form>
                  <Row className="g-3 mb-3">
                    <Col xs={12} md={6}>
                      <Form.Label className="small fw-semibold text-secondary">Pick-up Location <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" value={formData.pickupLocation} onChange={e => handleInputChange('pickupLocation', e.target.value)} />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label className="small fw-semibold text-secondary">Drop-off Location <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" value={formData.dropoffLocation} onChange={e => handleInputChange('dropoffLocation', e.target.value)} />
                    </Col>
                  </Row>

                  <Row className="g-3 mb-3">
                    <Col xs={12} md={6}>
                      <Form.Label className="small fw-semibold text-secondary">Pick-up Date <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="date" value={formData.pickupDate} onChange={e => handleInputChange('pickupDate', e.target.value)} />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label className="small fw-semibold text-secondary">Pick-up Time <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="time" value={formData.pickupTime} onChange={e => handleInputChange('pickupTime', e.target.value)} />
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="small text-muted fw-semibold">Return Date & Time (Optional)</Form.Label>
                    <Form.Control type="datetime-local" value={formData.returnDateTime} onChange={e => handleInputChange('returnDateTime', e.target.value)} />
                  </Form.Group>

                  <Row className="g-3 mb-3">
                    <Col xs={6}>
                      <Form.Label className="small fw-semibold text-secondary">Passenger Count <span className="text-danger">*</span></Form.Label>
                      <Form.Select value={formData.passengerCount} onChange={e => handleInputChange('passengerCount', e.target.value)}>
                        <option>2 - 5</option><option>1 - 4</option><option>6 - 10</option>
                      </Form.Select>
                    </Col>
                    <Col xs={6}>
                      <Form.Label className="small fw-semibold text-secondary">Luggage Count <span className="text-danger">*</span></Form.Label>
                      <Form.Select value={formData.luggageCount} onChange={e => handleInputChange('luggageCount', e.target.value)}>
                        <option>2 - 3 Bags</option><option>4 - 6 Bags</option>
                      </Form.Select>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold text-secondary">Trip Type / Purpose <span className="text-danger">*</span></Form.Label>
                    <Form.Select value={formData.tripType} onChange={e => handleInputChange('tripType', e.target.value)}>
                      <option>Airport Transfer</option><option>Point to Point</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="small text-muted fw-semibold">Additional Requirements (Optional)</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Any specific requirements, child seat, meeting & greeting, etc." value={formData.additionalRequirements} onChange={e => handleInputChange('additionalRequirements', e.target.value)} />
                  </Form.Group>

                  <Button onClick={nextStep} style={{ backgroundColor: '#0f4c81',  border: 'none', padding: '12px' }} className="w-100 text-uppercase fw-bold text-white small">
                    Continue to Select Vehicle
                  </Button>
                </Form>
              </Card>
            )}

            {currentStep === 2 && (
              <Row className="g-3 gx-md-2 text-start px-0 mx-0 w-100">
                <Col xs={12} md={4} lg={3} className="px-1">
                  <Card className="border-0 shadow-sm p-3 mb-3" style={{ borderRadius: '12px', backgroundColor: '#fff' }}>
                    <div className="d-flex align-items-center mb-3 border-bottom pb-2">
                      <FaFilter className="text-primary me-2" size={14} />
                      <h6 className="fw-bold m-0 text-dark" style={{ fontSize: '14px' }}>Filter Options</h6>
                    </div>
                    
                    <Form.Group className="mb-3">
                      <Form.Label className="small text-secondary fw-semibold">Passenger Count</Form.Label>
                      <Form.Select size="sm" style={{ fontSize: '13px', padding: '8px' }}><option>Any</option></Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="small text-secondary fw-semibold">Vehicle Type</Form.Label>
                      <Form.Select size="sm" style={{ fontSize: '13px', padding: '8px' }}><option>All Types</option></Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="small text-secondary fw-semibold">Trip Purpose</Form.Label>
                      <Form.Select size="sm" style={{ fontSize: '13px', padding: '8px' }}><option>All Purposes</option></Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="small text-secondary fw-semibold">Luggage</Form.Label>
                      <Form.Select size="sm" style={{ fontSize: '13px', padding: '8px' }}><option>Any</option></Form.Select>
                    </Form.Group>

                    <Button variant="outline-primary" size="sm" className="w-100 mt-2 text-uppercase fw-semibold bg-white text-primary border-primary d-flex align-items-center justify-content-center" style={{ padding: '8px', fontSize: '12px' }}>
                      <FaUndo size={10} className="me-1" /> Reset Filters
                    </Button>
                  </Card>

                  <Card className="border-0 shadow-sm p-3 text-center" style={{ borderRadius: '12px', backgroundColor: '#fff' }}>
                    <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '14px' }}>Need Help Choosing?</h6>
                    <p className="text-muted mb-3" style={{ fontSize: '11px', lineHeight: '1.5' }}>
                      Our transport experts are here to help you find the right vehicle.
                    </p>
                    <Button variant="outline-primary" size="sm" className="w-100 d-flex align-items-center justify-content-center fw-semibold text-primary border-primary bg-white" style={{ padding: '8px', fontSize: '12px' }}>
                      <FaPhoneAlt size={10} className="me-2" /> CALL US NOW
                    </Button>
                  </Card>
                </Col>

                <Col xs={12} md={8} lg={9} className="px-1">
                  <div className="mb-2 ps-1">
                    <h5 className="fw-bold text-dark m-0" style={{ fontSize: '16px' }}>Recommended Vehicles</h5>
                    <p className="text-muted small m-0">Based on your trip details</p>
                  </div>

                  <Row className="g-2 mt-1 mx-0">
                    {fleetData.map((vehicle) => (
                      <Col key={vehicle.id} xs={12} sm={6} md={6} lg={4} className="px-1">
                        <Card className={`h-100 border-2 shadow-sm ${selectedVehicle === vehicle.id ? 'border-primary' : 'border-white'}`} style={{ borderRadius: '12px', overflow: 'hidden' }}>
                          <div className="position-relative">
                            <Card.Img variant="top" src={vehicle.img} style={{ height: '145px', objectFit: 'cover' }} />
                            {vehicle.popular && (
                              <Badge bg="primary" className="position-absolute top-0 start-0 m-2 text-uppercase fw-bold" style={{ fontSize: '9px', padding: '5px 8px', borderRadius: '4px' }}>
                                Popular
                              </Badge>
                            )}
                          </div>
                          
                          <Card.Body className="p-3 d-flex flex-column justify-content-between">
                            <div>
                              <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '14px', color: '#0a1d37' }}>{vehicle.name}</h6>
                              <div className="text-secondary mb-2" style={{ fontSize: '11px' }}>
                                <p className="m-0 mb-1 d-flex align-items-center"><FaUser className="me-2 text-primary" size={11} /> {vehicle.passengers}</p>
                                <p className="m-0 d-flex align-items-center"><FaBriefcase className="me-2 text-primary" size={11} /> {vehicle.luggage}</p>
                              </div>
                              <hr className="my-2" style={{ color: '#e2e8f0' }} />
                              <ul className="list-unstyled ps-0 mb-3" style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.6' }}>
                                {vehicle.features.map((feature, idx) => (
                                  <li key={idx} className="d-flex align-items-center mb-1">
                                    <FaCheck className="me-2 text-primary" size={9} /> {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <div className="bg-light p-2 rounded mb-2 text-center" style={{ border: '1px solid #f1f5f9' }}>
                                <span className="text-muted d-block" style={{ fontSize: '10px' }}>Estimated Price</span>
                                <span className="fw-bold text-primary" style={{ fontSize: '14px' }}>AED {vehicle.minPrice} - AED {vehicle.maxPrice}</span>
                              </div>
                              <Button 
                                onClick={() => { setSelectedVehicle(vehicle.id); handleInputChange('selectedVehicle', vehicle); }}
                                style={{ backgroundColor: '#0f4c81', border: 'none', fontSize: '11px' }} 
                                className="w-100 py-2 text-uppercase fw-bold text-white text-center rounded shadow-sm"
                              >
                                {formData.selectedVehicle?.id === vehicle.id ? "Selected ✓" : "Select This Vehicle"}
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}

                     <div className="d-flex justify-content-between gap-3 border-top pt-3">
                    <Button variant="outline-secondary" className="px-4" onClick={prevStep}><FaArrowLeft /> Back</Button>
                    <Button style={{ backgroundColor: '#0f4c81', border: 'none' }} className="px-4 text-uppercase fw-bold text-white" onClick={nextStep}>Continue to Review <FaArrowRight className="ms-1" /></Button>
                  </div>
                  </Row>

                  
                </Col>
              </Row>
            )}

            {/* STEP 3: YOUR DETAILS */}
            {currentStep === 3 && (
              <Card className="border-0 shadow-sm p-4 text-start h-100" style={{ borderRadius: '12px' }}>
                <h5 className="fw-bold text-dark mb-1"><FaUser className="me-2 text-primary" /> Your Details</h5>
                <p className="text-muted small mb-4">Please enter your contact information</p>
                <Form>
                  <p className="fw-bold text-dark small mb-3 text-uppercase tracking-wider" style={{ fontSize: '12px' }}>Contact Information</p>
                  <Row className="g-3 mb-3">
                    <Col xs={12} md={6}>
                      <Form.Label className="small fw-semibold">Full Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" value={formData.fullName} onChange={e => handleInputChange('fullName', e.target.value)} />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label className="small fw-semibold">Email Address <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="email" value={formData.emailAddress} onChange={e => handleInputChange('emailAddress', e.target.value)} />
                    </Col>
                  </Row>

                  <Row className="g-3 mb-3">
                    <Col xs={12} md={6}>
                      <Form.Label className="small fw-semibold">Mobile Number <span className="text-danger">*</span></Form.Label>
                      <InputGroup>
                        <InputGroup.Text style={{ backgroundColor: '#fff', fontSize: '13px' }}>🇦🇪 {formData.countryCode}</InputGroup.Text>
                        <Form.Control type="tel" value={formData.mobileNumber} onChange={e => handleInputChange('mobileNumber', e.target.value)} />
                      </InputGroup>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label className="small text-muted fw-semibold">Alternative Number (Optional)</Form.Label>
                      <InputGroup>
                        <InputGroup.Text style={{ backgroundColor: '#fff', fontSize: '13px' }}>🇦🇪 {formData.altCountryCode}</InputGroup.Text>
                        <Form.Control type="tel" value={formData.alternativeNumber} onChange={e => handleInputChange('alternativeNumber', e.target.value)} />
                      </InputGroup>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label className="small text-muted fw-semibold">Company Name (Optional)</Form.Label>
                    <Form.Control type="text" value={formData.companyName} onChange={e => handleInputChange('companyName', e.target.value)} />
                  </Form.Group>

                  <p className="fw-bold text-dark small mb-3 text-uppercase tracking-wider" style={{ fontSize: '12px' }}>Additional Information</p>
                  <Row className="g-3 mb-3">
                    <Col xs={12} md={6}>
                      <Form.Label className="small text-muted fw-semibold">How did you hear about us?</Form.Label>
                      <Form.Select value={formData.howDidYouHear} onChange={e => handleInputChange('howDidYouHear', e.target.value)}>
                        <option>Select an option</option><option>Google</option>
                      </Form.Select>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label className="small text-muted fw-semibold">Purpose of Travel</Form.Label>
                      <Form.Select value={formData.purposeOfTravel} onChange={e => handleInputChange('purposeOfTravel', e.target.value)}>
                        <option>Business</option><option>Leisure</option>
                      </Form.Select>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="small text-muted fw-semibold">Special Requests (Optional)</Form.Label>
                    <Form.Control as="textarea" rows={2} value={formData.specialRequests} onChange={e => handleInputChange('specialRequests', e.target.value)} />
                  </Form.Group>

                  <div className="p-3 rounded d-flex align-items-start mb-4" style={{ backgroundColor: '#eff6ff' }}>
                    <FaInfoCircle className="text-primary me-2 mt-1 flex-shrink-0" size={14} />
                    <p className="m-0 text-primary" style={{ fontSize: '11px', lineHeight: '1.5' }}>
                      Your information is safe with us. We will only use your details to contact you regarding your quote and booking.
                    </p>
                  </div>

                  <div className="d-flex justify-content-between gap-3 border-top pt-3">
                    <Button variant="outline-secondary" className="px-4" onClick={prevStep}><FaArrowLeft /> Back</Button>
                    <Button style={{ backgroundColor: '#0f4c81', border: 'none' }} className="px-4 text-uppercase fw-bold text-white" onClick={nextStep}>Continue to Review <FaArrowRight className="ms-1" /></Button>
                  </div>
                </Form>
              </Card>
            )}

            {/* STEP 4: CONFIRM & SUBMIT */}
            {currentStep === 4 && (
            <Card
  className="border-0 shadow-sm p-4 text-start h-100"
  style={{ borderRadius: "12px", fontFamily: "Poppins, sans-serif" }}
>
  <h5 className="fw-bold text-dark mb-1">
    <FaCheckCircle className="me-2 text-success" />
    Confirm Your Details
  </h5>

  <p className="text-muted small mb-4" style={{ fontSize: "14px" }}>
    Please review all information below before submitting your request.
  </p>

  {/* TRIP DETAILS */}
  <div className="border rounded p-3 mb-3 bg-white position-relative shadow-sm">
    <span
      className="position-absolute top-0 end-0 m-3 text-primary small fw-bold"
      style={{ cursor: "pointer" }}
      onClick={() => jumpToStep(1)}
    >
      <FaEdit className="me-1" /> Edit
    </span>

    <h6 className="fw-bold text-secondary small text-uppercase mb-2">
      <FaRoute className="me-2 text-primary" />
      Trip Details
    </h6>

    <Row className="g-2 small text-muted" style={{ fontSize: "14px" }}>
      <Col xs={12} sm={6}>
        <FaMapMarkerAlt className="me-2 text-primary" />
        <strong>From:</strong> {formData.pickupLocation}
      </Col>

      <Col xs={12} sm={6}>
        <FaMapMarkerAlt className="me-2 text-danger" />
        <strong>To:</strong> {formData.dropoffLocation}
      </Col>

      <Col xs={12} sm={6}>
        <FaCalendarAlt className="me-2 text-success" />
        <strong>Date:</strong> {formData.pickupDate} at {formData.pickupTime}
      </Col>

      <Col xs={12} sm={6}>
        <FaSuitcase className="me-2 text-warning" />
        <strong>Trip Type:</strong> {formData.tripType}
      </Col>
    </Row>
  </div>

  {/* VEHICLE DETAILS */}
  <div className="border rounded p-3 mb-3 bg-white position-relative shadow-sm">
    <span
      className="position-absolute top-0 end-0 m-3 text-primary small fw-bold"
      style={{ cursor: "pointer" }}
      onClick={() => jumpToStep(2)}
    >
      <FaEdit className="me-1" /> Edit
    </span>

    <h6 className="fw-bold text-secondary small text-uppercase mb-2">
      <FaCarSide className="me-2 text-primary" />
      Vehicle Details
    </h6>

    <div className="d-flex align-items-center">
      <img
        src={formData.selectedVehicle?.img}
        alt="car"
        className="rounded me-3"
        style={{ width: "70px", height: "45px", objectFit: "cover" }}
      />

      <div>
        <p className="m-0 fw-bold text-dark small" style={{ fontSize: "14px" }}>
          {formData.selectedVehicle?.name}
        </p>

        <p className="m-0 text-muted small" style={{ fontSize: "13px" }}>
          <FaMoneyBillWave className="me-1 text-success" />
          Price: <strong>
            AED {formData.selectedVehicle?.minPrice} - AED {formData.selectedVehicle?.maxPrice}
          </strong>
        </p>
      </div>
    </div>
  </div>

  {/* USER DETAILS */}
  <div className="border rounded p-3 mb-4 bg-white position-relative shadow-sm">
    <span
      className="position-absolute top-0 end-0 m-3 text-primary small fw-bold"
      style={{ cursor: "pointer" }}
      onClick={() => jumpToStep(3)}
    >
      <FaEdit className="me-1" /> Edit
    </span>

    <h6 className="fw-bold text-secondary small text-uppercase mb-2">
      <FaUser className="me-2 text-primary" />
      Your Details
    </h6>

    <Row className="g-2 small text-muted" style={{ fontSize: "14px" }}>
      <Col xs={12} sm={6}>
        <FaUser className="me-2 text-primary" />
        <strong>Name:</strong> {formData.fullName}
      </Col>

      <Col xs={12} sm={6}>
        <FaEnvelope className="me-2 text-danger" />
        <strong>Email:</strong> {formData.emailAddress}
      </Col>

      <Col xs={12} sm={6}>
        <FaPhone className="me-2 text-success" />
        <strong>Phone:</strong> {formData.countryCode} {formData.mobileNumber}
      </Col>

      <Col xs={12}>
        <strong>Requests:</strong> {formData.specialRequests || "None"}
      </Col>
    </Row>
  </div>

  {/* SECURITY NOTE */}
  <div
    className="p-3 rounded d-flex align-items-center mb-4"
    style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
  >
    <FaCheckCircle className="me-2 text-success flex-shrink-0" size={16} />
    <p className="m-0 small text-muted" style={{ fontSize: "13px" }}>
      <strong>Your information is secure!</strong> We use your details only to process this transfer reservation.
    </p>
  </div>

  {/* BUTTONS */}
  <div className="d-flex justify-content-between align-items-center border-top pt-3">
    <Button variant="outline-secondary" className="px-4" onClick={prevStep}>
      <FaArrowLeft className="me-2" />
      Back
    </Button>

    <Button
      style={{ backgroundColor: "#0f4c81", border: "none", padding: "12px 30px" }}
      className="text-uppercase fw-bold text-white small rounded shadow-sm d-flex align-items-center"
      onClick={handleFinalSubmit}
    >
      Submit Request
      <FaPaperPlane className="ms-2" size={12} />
    </Button>
  </div>
</Card>
            )}
          </Col>


          {currentStep !== 2 && (
            <Col xs={12} lg={4} className="px-0 ps-lg-3">
              <Card className="border-0 shadow-sm p-4 bg-white text-start h-100 d-flex flex-column justify-content-between" style={{ borderRadius: '12px' }}>
                <div>
                  <div className="d-flex align-items-center mb-3 border-bottom pb-2">
                    <FaListAlt className="me-2 icon-blue" />
                    <h6 className="fw-bold m-0" style={{ fontSize: '20px',color:"#0f4c81" }}>Quotation Summary</h6>
                  </div>
                  
                  <p className="fw-bold text-dark mb-2" style={{fontSize:"19px",color:"#0f4c81"}}>Your Trip</p>
<div
  className="text-secondary mb-3"
  style={{ fontSize: "15px", lineHeight: "2" }}
>
  <p className="mb-2">
    <GeoAltFill className="me-2 icon-blue" />
    <strong>From:</strong> {formData.pickupLocation}
  </p>

  <p className="mb-2">
    <GeoAlt className="me-2 icon-blue" />
    <strong>To:</strong> {formData.dropoffLocation}
  </p>

  <p className="mb-2">
    <CalendarEvent className="me-2 icon-blue" />
    <strong>Date:</strong> {formData.pickupDate}
  </p>

  <p className="mb-2">
    <ClockFill className="me-2 icon-blue" />
    <strong>Time:</strong> {formData.pickupTime}
  </p>

  <p className="mb-2">
    <PeopleFill className="me-2 icon-blue" />
    <strong>Passengers:</strong> {formData.passengerCount}
  </p>

  <p className="mb-2">
    <SuitcaseFill className="me-2 icon-blue" />
    <strong>Luggage:</strong> {formData.luggageCount}
  </p>

  <p className="mb-2">
    <ArrowRepeat className="me-2 icon-blue" />
    <strong>Trip Type:</strong> {formData.tripType}
  </p>

  <p className="mb-2">
    <TruckFlatbed className="me-2 icon-blue" />
    <strong>Vehicle:</strong> {formData.selectedVehicle?.name}
  </p>
</div>

  <div className="border rounded p-3 mb-3 bg-white position-relative shadow-sm">
                  {/* <span className="position-absolute top-0 end-0 m-3 text-primary small fw-bold" style={{ cursor: 'pointer' }} onClick={() => jumpToStep(2)}>📝 Edit</span> */}
                  {/* <h6 className="fw-bold text-secondary small text-uppercase tracking-wider mb-2">🚗 Vehicle Details</h6> */}
                  <div className="d-flex align-items-center">
                    <img src={formData.selectedVehicle?.img} alt="car" className="rounded me-3" style={{ width: '70px', height: '45px', objectFit: 'cover' }} />
                    <div>
                      <p className="m-0 fw-bold text-dark small">{formData.selectedVehicle?.name}</p>
                      <p className="m-0 text-muted small">Price: <strong>AED {formData.selectedVehicle?.minPrice} - AED {formData.selectedVehicle?.maxPrice}</strong></p>
                    </div>
                  </div>
                </div>
                </div>

                <div>
                  <div className="text-start mb-3 border-top pt-3">
                    <span className="text-muted d-block small" style={{ fontSize: '11px' }}>Estimated Price</span>
                    <h3 className="fw-bold m-0 mt-1 text-primary" style={{ fontSize: '24px' }}>
                      AED {formData.selectedVehicle?.minPrice} - AED {formData.selectedVehicle?.maxPrice}
                    </h3>
                    <span className="text-muted d-block" style={{ fontSize: '11px' }}>(Price may vary based on availability and extras)</span>
                  </div>

{/* <div className="text-start mb-3 border-top pt-3">
                  <span className="text-muted d-block small" style={{ fontSize: '12px' }}>Estimated Price</span>
                  <h3 className="fw-bold m-0 mt-1" style={{ color: '#0f4c81', fontSize: '24px' }}>AED 250 - AED 320</h3>
                  <span className="text-muted d-block" style={{ fontSize: '11px' }}>(Price may vary based on availability and extras)</span>
                </div> */}

                  <div className="p-3 rounded d-flex align-items-center text-success" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px' }}>
                    <FaCheckCircle className="me-2 flex-shrink-0" size={14} />
                    <div style={{ textAlign: 'left' }}>
                      <p className="m-0 fw-bold" style={{ fontSize: '12px' }}>No hidden charges</p>
                      <p className="m-0 text-muted" style={{ fontSize: '10px' }}>Transparent pricing & 24/7 support</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          )}

        </Row>

     
        <div className="mx-auto mt-4 px-0" style={{ maxWidth: '1140px' }}>
          <Card className="border-0 shadow-sm p-4 text-start" style={{ borderRadius: '12px' }}>
            <div className="d-flex align-items-center mb-3">
              <FaRoute className="me-2 icon-blue" />
              <h6 className="fw-bold m-0" style={{ fontSize: '19px',color:"rgb(15, 76, 129)" }}>Popular Routes</h6>
            </div>
            <Row className="g-2 text-center">
              {[
                { name: 'Dubai Airport', sub: 'From / To DXB' },
                { name: 'Al Maktoum Airport', sub: 'From / To DWC' },
                { name: 'Abu Dhabi', sub: 'Dubai to Abu Dhabi' },
                { name: 'Sharjah', sub: 'Dubai to Sharjah' },
                { name: 'Ras Al Khaimah', sub: 'Dubai to RAK' }
              ].map((route, idx) => (
                <Col key={idx} xs={12} sm={6} md={2} className="flex-grow-1">
                  <div className="p-3 border rounded bg-light h-100 d-flex flex-column justify-content-center">
                    <span className="fw-bold  d-block small" style={{ fontSize: '17px',color:"rgb(15, 76, 129)" }}>{route.name}</span>
                    <span className="text-muted" style={{ fontSize: '12px' }}>{route.sub}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </div>

      
        <div className="mx-auto mt-4 p-4 bg-white rounded shadow-sm border border-light text-start" style={{ borderRadius: '12px', maxWidth: '1140px' }}>
          <h5 className="fw-bold mb-5 text-center" style={{ fontSize: '19px',color:"rgb(15, 76, 129)" }}>Why Choose Globe Reliance Transport?</h5>
          <Row className="g-3">
            {[
              { title: 'Safe & Reliable', desc: 'Your safety is our top priority.' },
              { title: 'Professional Drivers', desc: 'Experienced, certified and courteous.' },
              { title: 'On-Time Service', desc: 'Punctuality you can always count on.' },
              { title: 'Best Price Guarantee', desc: 'Competitive prices with no hidden charges.' }
            ].map((item, i) => (
              <Col key={i} xs={12} sm={6} md={3}>
                <div className="d-flex align-items-start p-1">
                  <FaShieldAlt className="text-primary mt-1 me-2 flex-shrink-0" size={16} />
                  <div>
                    <h6 className="fw-bold  small mb-1" style={{ fontSize: '17px',color:"rgb(15, 76, 129)" }}>{item.title}</h6>
                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>{item.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

      </Container>
    </div>
  );
}