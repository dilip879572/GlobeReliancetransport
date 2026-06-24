import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; 

import { collection, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card, Row, Col, Table, Badge, Modal, Navbar, Nav, Spinner } from 'react-bootstrap';
import { toast } from "react-toastify";
import { FaEdit, FaPlusCircle, FaCar, FaConciergeBell } from 'react-icons/fa';

export default function AdminDashboard() {
  const [currentModule, setCurrentModule] = useState('services'); 
  const [itemsList, setItemsList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // --- REQUIRED SCHEMAS STATE ---
  const [slug, setSlug] = useState('');
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState(''); 
  const [passengers, setPassengers] = useState('');
  const [luggage, setLuggage] = useState('');
  const [features, setFeatures] = useState(''); 
  const [capacityRaw, setCapacityRaw] = useState('');
  const [luggageRaw, setLuggageRaw] = useState('');
  const [bestUse, setBestUse] = useState('');

  // Services Schema Fields
  const [readTime, setReadTime] = useState('');
  const [desc, setDesc] = useState('');
  const [extraContent, setExtraContent] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/admin'); 
    } else {
      fetchModuleData();
    }
  }, [navigate, currentModule]);

  const fetchModuleData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, currentModule));
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push({ slug: doc.id, ...doc.data() });
      });
      setItemsList(list);
    } catch (error) {
      console.error("Firestore Loading Error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn'); 
    navigate('/admin'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      let payload = {};
      let targetSlug = slug;

      if (currentModule === 'fleet') {
        if (!isEditing) {
          targetSlug = name
            .toLowerCase()
            .trim()
            .replace(/[^a-zA-Z0-9\s]/g, "")
            .replace(/\s+/g, "-");
        }

        const featuresArray = features
          .split('\n')
          .map(item => item.trim())
          .filter(item => item !== '');

        payload = {
          name: name.toUpperCase(),
          img: imgUrl.trim(), 
          passengers,
          luggage,
          features: featuresArray,
          capacityRaw,
          luggageRaw,
          bestUse
        };
      } else {
        // Services template schema
        payload = {
          title: name.toUpperCase(),
          img: imgUrl.trim(), 
          readTime,
          desc,
          extraContent,
          date: isEditing ? itemsList.find(b => b.slug === targetSlug).date : new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        };
      }

      if (!targetSlug) {
        throw new Error("Slug could not be generated. Please provide a proper name.");
      }

      await setDoc(doc(db, currentModule, targetSlug), payload);

      toast.success(isEditing ? "Successfully updated!" : `Added to ${currentModule.toUpperCase()} node!`);
      handleCloseModal(); 
      fetchModuleData();
    } catch (error) {
      toast.error("Error writing document: " + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (targetSlug) => {
    if (window.confirm(`Are you sure you want to delete this from ${currentModule}?`)) {
      try {
        await deleteDoc(doc(db, currentModule, targetSlug));
        toast.success("Removed successfully!");
        fetchModuleData();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const handleEditClick = (item) => {
    setIsEditing(true);
    setSlug(item.slug);
    setImgUrl(item.img || ''); 

    if (currentModule === 'fleet') {
      setName(item.name || '');
      setPassengers(item.passengers || '');
      setLuggage(item.luggage || '');
      setCapacityRaw(item.capacityRaw || '');
      setLuggageRaw(item.luggageRaw || '');
      setBestUse(item.bestUse || '');
      if (item.features && Array.isArray(item.features)) {
        setFeatures(item.features.join('\n'));
      } else {
        setFeatures('');
      }
    } else {
      setName(item.title || '');
      setReadTime(item.readTime || '');
      setDesc(item.desc || '');
      setExtraContent(item.extraContent || '');
    }
    
    setShowModal(true);
  };

  const resetForm = () => {
    setSlug(''); setName(''); setImgUrl('');
    setPassengers(''); setLuggage(''); setFeatures(''); setCapacityRaw(''); setLuggageRaw(''); setBestUse('');
    setReadTime(''); setDesc(''); setExtraContent('');
    setIsEditing(false);
  };

  const handleCloseModal = () => {
    resetForm();
    setShowModal(false);
  };

  return (
    <div className="dashboard-wrapper">
      {/* --- MOBILE NAVBAR --- */}
      <Navbar bg="dark" variant="dark" expand={false} className="d-lg-none px-3 sticky-top" style={{ backgroundColor: '#002d62 !important' }}>
        <Button variant="link" className="text-white p-0 me-3" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Brand className="fw-bold fs-6">Globe Reliance Control Panel</Navbar.Brand>
        <Button variant="danger" size="sm" onClick={handleLogout}>Exit</Button>
      </Navbar>

      <div className="d-flex">
        {/* --- SIDEBAR MANIFOLD CONTROL SYSTEM --- */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ backgroundColor: '#002d62' }}>
          <div className="sidebar-brand d-none d-lg-block">
            <h5 className="text-white fw-bold mb-0">Globe Reliance</h5>
            <small className="text-white-50">Admin Board v5.0</small>
          </div>
          <Nav className="flex-column px-3 mt-4 gap-2">
            <span className="text-white-50 small fw-bold px-2 text-uppercase mb-1" style={{ fontSize: '0.7rem' }}>Production Modules</span>
            
            <Nav.Link 
              className={`nav-item-custom d-flex align-items-center gap-2 ${currentModule === 'services' ? 'active' : ''}`}
              onClick={() => { setCurrentModule('services'); setIsSidebarOpen(false); }}
            >
              <FaConciergeBell /> 💼 Services Blog 
            </Nav.Link>
            
            <Nav.Link 
              className={`nav-item-custom d-flex align-items-center gap-2 ${currentModule === 'fleet' ? 'active' : ''}`}
              onClick={() => { setCurrentModule('fleet'); setIsSidebarOpen(false); }}
            >
              <FaCar /> 🏎 Manage Our Fleet
            </Nav.Link>

            <div className="sidebar-divider"></div>
            
            <Nav.Link className="nav-item-custom text-danger mt-auto" onClick={handleLogout}>
              🚪 Logout Session
            </Nav.Link>
          </Nav>
        </div>

        {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)}></div>}

        {/* --- CORE DISPLAY PANEL INTERFACES --- */}
        <div className="main-content flex-grow-1">
          <Container fluid className="px-4 py-4">
            {/* --- PREMIUM TRANSPORT BRANDING HEADER --- */}
            <div 
              className="d-none d-lg-flex justify-content-between align-items-center mb-4 p-4 shadow-sm bg-white" 
              style={{ 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0',
                background: 'linear-gradient(to right, #ffffff, #f8fafc)',
                boxShadow: '0 4px 20px rgba(0, 45, 98, 0.05)'
              }}
            >
              <div>
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div 
                    style={{ 
                      backgroundColor: '#002d62', 
                      color: '#ffffff', 
                      padding: '8px 12px', 
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      letterSpacing: '1px'
                    }}
                  >
                    GRPT
                  </div>
                  <div>
                    <h2 className="fw-bold h4 mb-0" style={{ color: '#002d62', letterSpacing: '-0.5px', fontFamily: 'Arial, sans-serif' }}>
                      GLOBE RELIANCE PASSENGERS TRANSPORT
                    </h2>
                    <small className="text-secondary fw-semibold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                      Live Operations & Fleet Management Dashboard
                    </small>
                  </div>
                </div>
                
                <p className="text-muted small mb-0 d-flex align-items-center gap-2 mt-1">
                  <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                  Active Network Track: 
                  <Badge 
                    bg={currentModule === 'fleet' ? 'primary' : 'dark'} 
                    className="text-uppercase px-2 py-1 font-monospace ms-1" 
                    style={{ fontSize: '0.75rem', borderRadius: '4px' }}
                  >
                    {currentModule === 'fleet' ? '🏎 Live Fleet Grid' : '💼 Service Modules'}
                  </Badge>
                </p>
              </div>

              <Button 
                style={{ 
                  backgroundColor: '#002d62', 
                  border: 'none',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease-in-out',
                  boxShadow: '0 4px 12px rgba(0, 45, 98, 0.2)'
                }} 
                className="fw-bold text-uppercase d-flex align-items-center gap-2" 
                onClick={() => { resetForm(); setShowModal(true); }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e67e22'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#002d62'}
              >
                <FaPlusCircle size={16} /> Add {currentModule === 'fleet' ? 'New Vehicle' : 'New Service'}
              </Button>
            </div>

            <Card className="border-0 shadow-sm rounded-3 overflow-hidden">
              <Card.Header className="bg-white py-3 border-0 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold text-secondary text-uppercase">{currentModule} Active Directory</h5>
                <Badge bg="dark" className="px-3 py-2 text-uppercase">{currentModule} node</Badge>
              </Card.Header>
              <div className="table-responsive">
                <Table hover className="mb-0 align-middle">
                  <thead style={{ backgroundColor: '#f8fafc', color: '#64748b' }}>
                    <tr>
                      <th className="ps-4">Preview</th>
                      <th>Resource Heading Name</th>
                      <th>Slug Key / ID</th>
                      <th>{currentModule === 'fleet' ? 'Passengers' : 'Read Time'}</th>
                      <th className="text-end pe-4">Actions Matrix</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemsList.map((item) => (
                      <tr key={item.slug}>
                        <td className="ps-4">
                          <img src={item.img} alt="" style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '8px' }} onError={(e)=>{e.target.src="https://placehold.co/45"}} />
                        </td>
                        <td>
                          <div className="fw-bold text-dark text-truncate" style={{ maxWidth: '220px' }}>{currentModule === 'fleet' ? item.name : item.title}</div>
                        </td>
                        <td><Badge bg="light" className="text-dark border">{item.slug}</Badge></td>
                        <td>{currentModule === 'fleet' ? item.passengers : item.readTime}</td>
                        <td className="text-end pe-4">
                          <div className="d-flex gap-2 justify-content-end">
                            <Button variant="outline-primary" size="sm" onClick={() => handleEditClick(item)}>Edit</Button>
                            <Button variant="outline-danger" size="sm" onClick={() => handleDelete(item.slug)}>Delete</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </Container>
        </div>
      </div>

      {/* --- FORM MODAL INJECTION PIPELINE --- */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered backdrop="static">
        <Modal.Header closeButton className="border-0 px-4 pt-4" disabled={isSaving}>
          <Modal.Title className="fw-bold" style={{ color: '#002d62' }}>
            {isEditing ? <><FaEdit className="me-2" style={{ marginTop: '-4px' }} /> Edit Parameters</> : <><FaPlusCircle className="me-2" style={{ marginTop: '-4px' }} /> Add New {currentModule.toUpperCase()}</>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form onSubmit={handleSubmit}>
            
            {/* CONDITIONAL HEADER INPUT FIELDS ROWS */}
            <Row>
              {currentModule === 'services' ? (
                <>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-secondary">Unique URL Slug Identifier (Cannot Edit)</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={slug} 
                        required 
                        disabled={isEditing} 
                        placeholder="e.g., event-transportation" 
                        onChange={(e) => setSlug(e.target.value.toLowerCase().trim().replace(/ /g, "-"))} 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-secondary">Service Title</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={name} 
                        required 
                        placeholder="e.g., CORPORATE SERVICE" 
                        onChange={(e) => setName(e.target.value)} 
                      />
                    </Form.Group>
                  </Col>
                </>
              ) : (
                /* Fleet mode handles 100% full width and removes slug box element completely */
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold text-secondary">Vehicle Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={name} 
                      required 
                      placeholder="e.g., EXECUTIVE SEDAN" 
                      onChange={(e) => setName(e.target.value)} 
                    />
                  </Form.Group>
                </Col>
              )}
            </Row>

            {/* DIRECT STATIC ASSET IMAGE URL CAPTURE ENGINE */}
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold text-secondary">Image Static Web Link URL (Pasted Address)</Form.Label>
              <Form.Control 
                type="text" 
                value={imgUrl} 
                required
                placeholder="https://images.pexels.com/photos/...jpg" 
                onChange={(e) => setImgUrl(e.target.value)} 
              />
              {imgUrl && (
                <div className="mt-2">
                  <span className="text-muted small d-block mb-1">Live Feed Preview Check:</span>
                  <img src={imgUrl} alt="Preview Error" style={{ height: '70px', borderRadius: '6px', border: '1px solid #ccc' }} onError={(e)=>{e.target.style.display='none'}} />
                </div>
              )}
            </Form.Group>

            {/* --- CONDITIONALLY RENDERED MAPPED SCHEMA NODES --- */}
            {currentModule === 'fleet' ? (
              <>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-secondary">passengers (e.g., 1 - 4 Passengers)</Form.Label>
                      <Form.Control type="text" value={passengers} required placeholder="1 - 4 Passengers" onChange={(e) => setPassengers(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-secondary">luggage (e.g., 2 - 3 Luggage)</Form.Label>
                      <Form.Control type="text" value={luggage} required placeholder="2 - 3 Luggage" onChange={(e) => setLuggage(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-secondary">capacityRaw (e.g., 1 - 4 Passengers)</Form.Label>
                      <Form.Control type="text" value={capacityRaw} required placeholder="1 - 4 Passengers" onChange={(e) => setCapacityRaw(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-secondary">luggageRaw (e.g., 2 - 3 Bags)</Form.Label>
                      <Form.Control type="text" value={luggageRaw} required placeholder="2 - 3 Bags" onChange={(e) => setLuggageRaw(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold text-secondary">bestUse (e.g., Business Travel, Airport Transfer)</Form.Label>
                  <Form.Control type="text" value={bestUse} required placeholder="Business Travel, Airport Transfer" onChange={(e) => setBestUse(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold text-secondary">features Matrix (Har line mein ek likh kar Enter दबाएं)</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    value={features} 
                    required 
                    placeholder={"Leather Seats\nAir Conditioning\nWiFi (Optional)\nChauffeur Driven"} 
                    onChange={(e) => setFeatures(e.target.value)} 
                  />
                </Form.Group>
              </>
            ) : (
              /* SERVICES SYSTEM LOGIC BLOCKS */
              <>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold text-secondary">Estimated Timing / Read Time</Form.Label>
                  <Form.Control type="text" value={readTime} required placeholder="e.g., 5 min read" onChange={(e) => setReadTime(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold text-secondary">Introductory Snippet Summary Description</Form.Label>
                  <Form.Control as="textarea" rows={2} value={desc} required placeholder="Short brief description card grid..." onChange={(e) => setDesc(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold text-secondary">Main Extended Paragraph Content Block</Form.Label>
                  <Form.Control as="textarea" rows={4} value={extraContent} required placeholder="Deep details rows text paragraphs..." onChange={(e) => setExtraContent(e.target.value)} />
                </Form.Group>
              </>
            )}

            <div className="d-flex gap-2 justify-content-end mt-4">
              <Button variant="light" onClick={handleCloseModal} disabled={isSaving}>Cancel</Button>
              <Button type="submit" style={{ backgroundColor: '#002d62', border: 'none' }} className="text-white px-4" disabled={isSaving}>
                {isSaving ? <><Spinner as="span" animation="border" size="sm" className="me-2" />Saving...</> : (isEditing ? "Save Changes" : "Publish Live")}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <style>{`
        .dashboard-wrapper { min-height: 100vh; background-color: #f4f7fc; }
        .sidebar { width: 260px; min-height: 100vh; position: fixed; top: 0; left: 0; z-index: 100; padding-top: 24px; transition: all 0.3s ease; }
        .sidebar-brand { padding: 0 24px 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .nav-item-custom { color: rgba(255,255,255,0.7) !important; padding: 12px 16px !important; border-radius: 8px; font-weight: 500; cursor: pointer; }
        .nav-item-custom:hover, .nav-item-custom.active { background-color: rgba(255,255,255,0.1); color: #ffffff !important; }
        .sidebar-divider { height: 1px; background-color: rgba(255,255,255,0.1); margin: 15px 0; }
        .main-content { margin-left: 260px; min-height: 100vh; }
        @media (max-width: 991.98px) {
          .sidebar { left: -260px; position: fixed; height: 100vh; }
          .sidebar.open { left: 0; }
          .main-content { margin-left: 0; }
          .sidebar-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.4); z-index: 99; }
        }
      `}</style>
    </div>
  );
}