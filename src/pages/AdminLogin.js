import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const ADMIN_EMAIL = "admin@globereliance.com";
  const ADMIN_PASSWORD = "SecretAdminPassword2026"; 

  // Agar admin pehle se logged in hai, toh use login page se seedhe dashboard par bhej do
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setError('');
      //  Local storage me login state save karein
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin/dashboard'); 
    } else {
      setError('incorrect Email $ Password!');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f4f7fc' }}>
      <Card style={{ width: '400px' }} className="p-4 shadow-sm border-0 rounded-3">
        <h3 className="text-center mb-4 fw-bold" style={{ color: '#002d62' }}>Admin Login</h3>
        
        {error && <Alert variant="danger" className="py-2 small text-center">{error}</Alert>}
        
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold text-secondary">Email Address</Form.Label>
            <Form.Control 
              type="email" 
              required 
              placeholder="admin@example.com"
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold text-secondary">Password</Form.Label>
            <Form.Control 
              type="password" 
              required 
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>

          <Button type="submit" className="w-100 fw-bold mt-2 py-2" style={{ backgroundColor: '#002d62', border: 'none' }}>
            Login to Dashboard
          </Button>
        </Form>
      </Card>
    </Container>
  );
}