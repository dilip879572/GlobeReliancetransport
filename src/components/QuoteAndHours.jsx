import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup,Modal } from "react-bootstrap";
import {
  FaUser,
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaFileAlt,
  FaCommentAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./main.css"
export default function QuoteAndHours() {
  const styles = {
    sectionWrapper: {
      backgroundColor: "#f0f6ff",
      padding: "60px 0",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    quoteCard: {
      backgroundColor: "#ffffff",
      borderRadius: "24px",
      padding: "40px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)",
      height: "100%",
    },
    hoursCard: {
      backgroundColor: "#ffffff",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)",
      height: "100%",
    },
    hoursHeader: {
      backgroundColor: "#004094",
      color: "#ffffff",
      padding: "20px 30px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "1.4rem",
      fontWeight: "700",
    },
    hoursBody: {
      padding: "30px",
    },
    mainHeading: {
      color: "#0056b3",
      fontWeight: "700",
      fontSize: "2rem",
      marginBottom: "8px",
    },
    subHeading: {
      color: "#8d99ae",
      fontSize: "0.95rem",
      marginBottom: "30px",
    },
    inputGroup: {
      borderBottom: "1px solid #e0e0e0",
      marginBottom: "25px",
    },
    inputIcon: {
      backgroundColor: "transparent",
      border: "none",
      color: "#a0aab2",
      paddingLeft: "0",
      fontSize: "1rem",
    },


    
    inputField: {
      border: "none",
      backgroundColor: "transparent",
      color: "#333333",
      fontSize: "0.95rem",
      fontWeight: "500",
      paddingLeft: "10px",
    },
    btnSubmit: {
      backgroundColor: "#ff8a43",
      border: "none",
      borderRadius: "30px",
      padding: "12px 35px",
      fontWeight: "700",
      fontSize: "1.05rem",
      color: "#ffffff",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      boxShadow: "0 4px 15px rgba(255, 138, 67, 0.3)",
      marginTop: "10px",
    },
    privacyText: {
      color: "#a0aab2",
      fontSize: "0.75rem",
      marginTop: "15px",
    },
    timeRow: {
      display: "flex",
      justifyContent: "between",
      alignItems: "center",
      padding: "14px 0",
      borderBottom: "1px solid #f5f6f8",
      fontSize: "0.95rem",
      color: "#4a5568",
      fontWeight: "600",
    },
    dayText: {
      color: "#333333",
      fontWeight: "600",
    },
    timeText: {
      color: "#718096",
      fontWeight: "500",
    },
    closedRow: {
      backgroundColor: "#fff5f5",
      borderRadius: "12px",
      padding: "14px 15px",
      margin: "5px -15px",
    },
    closedBadge: {
      color: "#e53e3e",
      fontWeight: "700",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
    },
    closedDot: {
      width: "6px",
      height: "6px",
      backgroundColor: "#e53e3e",
      borderRadius: "50%",
      display: "inline-block",
    },
  };

  const hoursData = [
    { day: "Sunday", time: "9:00 AM - 6:00 PM", isClosed: false },
    { day: "Monday", time: "9:00 AM - 6:00 PM", isClosed: false },
    { day: "Tuesday", time: "9:00 AM - 6:00 PM", isClosed: false },
    { day: "Wednesday", time: "9:00 AM - 6:00 PM", isClosed: false },
    { day: "Thursday", time: "9:00 AM - 6:00 PM", isClosed: false },
    { day: "Friday", time: "Closed", isClosed: true },
    { day: "Saturday", time: "9:00 AM - 6:00 PM", isClosed: false },
  ];

const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Modals State Management
  const [modalState, setModalState] = useState({
    show: false,
    type: 'success', // 'success' ya 'error'
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, show: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      firstName: formData.name,
      lastName: formData.lastname,
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      requirements: formData.subject,
      notes: formData.message,
    };

    try {
      setLoading(true);

      const response = await fetch(
        "https://thegtrgroup.com/api/public/leads/intake",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "ak_e9228499a9c34a91a03d9d1f4dae98ba",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (response.ok) {
        // Success Modal Open Karo
        setModalState({
          show: true,
          type: 'success',
          title: 'Thank You!',
          message: 'Your inquiry has been submitted successfully. Our team will contact you shortly.'
        });

        // Form Reset (Fixed Keys to match Initial State)
        setFormData({
          name: "",
          lastname: "", 
          company: "",
          phone: "",
          email: "",
          subject: "",
          message: "", 
        });
      } else {
        // API Error Modal
        setModalState({
          show: true,
          type: 'error',
          title: 'Submission Failed',
          message: data.message || "Something went wrong while processing your request. Please try again."
        });
      }
    } catch (error) {
      // Network/Server Error Modal
      setModalState({
        show: true,
        type: 'error',
        title: 'Server Error',
        message: 'Unable to connect to the server. Please check your internet connection and try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.sectionWrapper} id="quote-section">
      <style>
        {`
          .custom-form-control:focus {
            box-shadow: none !important;
            background-color: transparent !important;
            border-color: transparent !important;
          }
          .custom-form-control::placeholder {
            color: #b0bbc4 !important;
            opacity: 1;
          }
        `}
      </style>

      <Container>
        <Row className="g-4 align-items-stretch">
          {/* LEFT SIDE: GET A QUICK QUOTE FORM */}
          <Col lg={7}>
            <div style={styles.quoteCard}>
              <h2 style={styles.mainHeading}>Get a Quick Quote</h2>
              <p style={styles.subHeading}>
                Tell us your requirements and we'll get back within minutes.
              </p>

              <Form onSubmit={handleSubmit}>
                <Row>
                  {/* Your Name */}
                  <Col md={6}>
                    <InputGroup style={styles.inputGroup}>
                      <InputGroup.Text style={styles.inputIcon}>
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.inputField}
                        className="custom-form-control"
                        placeholder="first Name"
                        required
                      />
                    </InputGroup>
                  </Col>

                  <Col md={6}>
                    <InputGroup style={styles.inputGroup}>
                      <InputGroup.Text style={styles.inputIcon}>
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={styles.inputField}
                        className="custom-form-control"
                        placeholder="Last Name"
                        required
                      />
                    </InputGroup>
                  </Col>
                  {/* Company Name */}
                </Row>

                <Row>
                  {/* Phone Number */}
                  <Col md={6}>
  <InputGroup style={styles.inputGroup}>
    <InputGroup.Text style={styles.inputIcon}>
      <FaPhoneAlt />
    </InputGroup.Text>

    <PhoneInput
      country="ae"
      value={formData.phone}
      onChange={(phone) =>
        setFormData({
          ...formData,
          phone,
        })
      }
      enableSearch
      containerStyle={{
        flex: 1,
      }}
      inputStyle={{
        width: "100%",
        height: "48px",
        border: "none",
        background: "transparent",
        color: "#333333",
        fontSize: "0.95rem",
        fontWeight: "500",
        paddingLeft: "48px",
        boxShadow: "none",
      }}
      buttonStyle={{
        border: "none",
        background: "transparent",
      }}
      dropdownStyle={{
        width: "300px",
      }}
    />
  </InputGroup>
</Col>
                  {/* Email Address */}
                  <Col md={6}>
                    <InputGroup style={styles.inputGroup}>
                      <InputGroup.Text style={styles.inputIcon}>
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.inputField}
                        className="custom-form-control"
                        placeholder="Email Address"
                        required
                      />
                    </InputGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <InputGroup style={styles.inputGroup}>
                      <InputGroup.Text style={styles.inputIcon}>
                        <FaBuilding />
                      </InputGroup.Text>
                      <Form.Control
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        style={styles.inputField}
                        className="custom-form-control"
                        placeholder="Company Name"
                      />
                    </InputGroup>
                  </Col>

                  <Col md={6}>
                    {/* Subject */}
                    <Form.Group>
                      <InputGroup style={styles.inputGroup}>
                        <InputGroup.Text style={styles.inputIcon}>
                          <FaFileAlt />
                        </InputGroup.Text>
                        <Form.Control
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          style={styles.inputField}
                          className="custom-form-control"
                          placeholder="Subject"
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Your Message / Requirements */}
                <Form.Group>
                  <InputGroup
                    style={{
                      ...styles.inputGroup,
                      borderBottom: "1px solid #e0e0e0",
                      alignItems: "flex-start",
                    }}
                  >
                    <InputGroup.Text
                      style={{ ...styles.inputIcon, paddingTop: "10px" }}
                    >
                      <FaCommentAlt />
                    </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      style={{ ...styles.inputField, resize: "none" }}
                      className="custom-form-control"
                      placeholder="Your Message / Requirements"
                    />
                  </InputGroup>
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" style={styles.btnSubmit}>
                  Get a Quick Quote{" "}
                  <FaPaperPlane style={{ fontSize: "0.9rem" }} />
                </Button>

                <div style={styles.privacyText}>
                  We respect your privacy. No spam.
                </div>
              </Form>
            </div>
          </Col>

          {/* RIGHT SIDE: OPERATING HOURS */}
          <Col lg={5}>
            <div style={styles.hoursCard}>
              <div style={styles.hoursHeader}>
                <FaClock /> Operating Hours
              </div>

              <div style={styles.hoursBody}>
                {hoursData.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      ...styles.timeRow,
                      ...(item.isClosed ? styles.closedRow : {}),
                      borderBottom:
                        idx === hoursData.length - 1
                          ? "none"
                          : styles.timeRow.borderBottom,
                    }}
                  >
                    <span style={styles.dayText}>{item.day}</span>

                    {item.isClosed ? (
                      <span style={styles.closedBadge}>
                        <span style={styles.closedDot}></span> Closed
                      </span>
                    ) : (
                      <span style={styles.timeText}>{item.time}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
<Modal 
  show={modalState.show} 
  onHide={handleCloseModal} 
  centered
  backdrop="static"
  dialogClassName="modal-sm d-flex justify-content-center"
  contentClassName="border-0 shadow"
  style={{ backdropFilter: 'blur(4px)' }}
>
  <Modal.Body 
    className="text-center p-4 d-flex flex-column align-items-center" 
    style={{ 
      borderRadius: '24px', 
      backgroundColor: '#ffffff',
      maxWidth: '320px'
    }}
  >
    {/* 1. Big Rounded Outlined Checkmark / Cross Badge */}
    <div className="mb-3 mt-2">
      {modalState.type === 'success' ? (
        <div 
          className="d-flex align-items-center justify-content-center rounded-circle" 
          style={{ 
            width: '85px', 
            height: '85px', 
            border: '4px solid #198754', 
            color: '#198754',
            fontSize: '42px',
            fontWeight: '300'
          }}
        >
          ✓
        </div>
      ) : (
        <div 
          className="d-flex align-items-center justify-content-center rounded-circle" 
          style={{ 
            width: '85px', 
            height: '85px', 
            border: '4px solid #dc3545', 
            color: '#dc3545',
            fontSize: '42px',
            fontWeight: '300'
          }}
        >
          ✕
        </div>
      )}
    </div>

    {/* 2. Catchy Main Title */}
    <h3 
      className="fw-bold mb-3 mt-1" 
      style={{ 
        color: modalState.type === 'success' ? '#198754' : '#dc3545',
        fontSize: '1.6rem'
      }}
    >
      {modalState.type === 'success' ? 'Oh Yeah!' : 'Oops!'}
    </h3>
    
    {/* 3. Sub-text Description */}
    <p 
      className="text-muted mb-4 px-2" 
      style={{ 
        fontSize: '0.95rem', 
        lineHeight: '1.4',
        fontWeight: '500'
      }}
    >
      {modalState.message}
    </p>

    {/* 4. Small Square/Slightly Rounded Action Button */}
    <Button 
      variant={modalState.type === 'success' ? 'success' : 'danger'} 
      onClick={handleCloseModal}
      className="fw-semibold shadow-none border-0 mb-2"
      style={{ 
        padding: '6px 20px',
        borderRadius: '6px', 
        fontSize: '0.9rem',
        backgroundColor: modalState.type === 'success' ? '#198754' : '#dc3545'
      }}
    >
      Ok
    </Button>
  </Modal.Body>
</Modal>
    </div>
  );
}
