import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAward, FaHistory, FaBus } from 'react-icons/fa';

export default function StatsRow() {
  const styles = {
    section: { backgroundColor: '#f0f6ff', padding: '35px 0', borderBottom: '1px solid #ffffff' },
    icon: { fontSize: '2rem', color: '#0056b3', marginBottom: '10px' },
    num: { fontSize: '1.6rem', fontWeight: '800', color: '#111111', margin: '0' },
    label: { fontSize: '0.85rem', color: '#ff7f50', fontWeight: 'bold', textTransform: 'uppercase' }
  };

  return (
    <section style={styles.section}>
      <Container>
        <Row className="text-center g-4">
          <Col md={4}>
            <FaAward style={styles.icon} />
            <p style={styles.num}>TESTIMONIALS</p>
            <span style={styles.label}>Verified Reviews</span>
          </Col>
          <Col md={4}>
            <FaHistory style={styles.icon} />
            <p style={styles.num}>10+ YRS</p>
            <span style={styles.label}>Industry Experience</span>
          </Col>
          <Col md={4}>
            <FaBus style={styles.icon} />
            <p style={styles.num}>100+ FLEET</p>
            <span style={styles.label}>Buses & Vans Available</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}