import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import "./StatsSection.css"
import SectionHeader from '../SectionHeader/SectionHeader';
import StatsCard from '../StatsCard/StatsCard';
import { Link } from 'react-router-dom';

function StatsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className='stats-section' >
        <SectionHeader header="Community"  scrollPosition={scrollPosition} />
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
            <div style={{marginTop: "30px", display: 'flex', justifyContent: "center"}}>
            <Link to="/join" className='join-btn'>
                Join Community &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </Link></div>
        
        </Row>
                  
    </Container>
  );
}

export default StatsSection;
