import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import badge from '../../assets/img/ccp-badge.png';

function ExamPrepHero() {
  return (
    <Container fluid className='hero'>
    <Row className="hero-row">
      <Col lg={12} className="hero-content">
        <img src={badge} alt="" className="hero-img" />
        <h1 className='mt-5'>Get Certified Challenge</h1>
        <h4>AWS Certified Cloud Practitioner in <span className='gradient-text'>30 days</span>!</h4>
      </Col>
    </Row>
    
  </Container>
  )
}

export default ExamPrepHero;
