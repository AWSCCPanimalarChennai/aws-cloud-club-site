import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';

function RoadMap() {
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
    <Container className='contribute-section'>
            <SectionHeader header="Action Plan"  scrollPosition={scrollPosition} />
            
            <h1>Week-1</h1>

            <Row className='contribute-card'>
                <Col lg={8}>
                    <h1>Module - 1</h1>
                    <p className='para'>
                        Learn the basics of cloud computing concepts such as IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service), as well as virtualization technology, from YouTube tutorials.
                    </p>
                </Col>
                
                <Col lg={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <NavLink to="mailto:awscc_panimalar_chennai@outlook.com?subject=Intrest%20to%20Host%20an%20Event%20-%20Reg" className='contribute-btn'>
                        Grab Opportunity &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </NavLink>
                </Col>
            </Row>

            <Row className='contribute-card'>
                <Col lg={8}>
                    <h1>Module - 2</h1>
                    <p className='para'>
                        Complete the second course in "Cloud Essentials."  This course will provide essential knowledge for anyone looking to enhance their skills in cloud computing.
                    </p>
                </Col>
                
                <Col lg={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <NavLink to="https://explore.skillbuilder.aws/learn/lp/82/cloud-essentials-knowledge-badge-readiness-path" className='contribute-btn'>
                        Start Learning &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </NavLink>
                </Col>
            </Row>

            <Row className='contribute-card'>
                <Col lg={8}>
                    <h1>Module - 2</h1>
                    <p className='para'>
                        Complete the second course in "Cloud Essentials."  This course will provide essential knowledge for anyone looking to enhance their skills in cloud computing.
                    </p>
                </Col>
                
                <Col lg={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <NavLink to="https://explore.skillbuilder.aws/learn/lp/82/cloud-essentials-knowledge-badge-readiness-path" className='contribute-btn'>
                        Start Learning &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </NavLink>
                </Col>
            </Row>
            
        </Container>
  )
}

export default RoadMap;
