import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import "./StatsSection.css"
import SectionHeader from '../SectionHeader/SectionHeader';
import StatsCard from '../StatsCard/StatsCard';

function StatsSection() {
  return (
    <Container className='stats-section' >
        <SectionHeader header="Community" />
        <Row className='stats-row'>
            <Col lg={3}>
            <StatsCard title="239" text="Members"/>
            </Col>
            <Col lg={3} id='second-card'>
            <StatsCard title="1" text="Events"/>
            </Col>
            <Col lg={3} id="third-card">
            <StatsCard title="&infin;" text="Opportunities" />
            </Col>
        </Row>
        <Row className='call-row'>
            <p>Are you ready to take your passion for cloud computing to the next level? Join our vibrant community today! Here, you'll connect with like-minded individuals, stay updated on the latest trends, and engage in collaborative learning experiences. Don't miss out on the opportunity to be part of something truly transformative.</p>
        </Row>
    </Container>
  );
}

export default StatsSection;
