import React from 'react'
import "./Benefits.css"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import SectionHeader from '../SectionHeader/SectionHeader'
import BlurCard from '../BlurCard/BlurCard'

import Certification from "../../assets/img/Certification.svg"
import Projects from "../../assets/img/cloudProjects.svg"
import Collaboration from "../../assets/img/globalCollaboration.svg"
import Guidance from "../../assets/img/IndustryGuidance.svg"


function Benefits() {
  return (
    <Container id='Activities' fluid className='benefits-section'>
        
      <SectionHeader header = "Opportunities"/>

      <Row className="benefits-row">
        
      <Col lg={6}  className="benefits">
          <BlurCard title="AWS Certifications" image={Certification} />
        </Col>
        
        <Col lg={6} className="benefits right-item">
          <BlurCard title="Cloud Projects" image={Projects} />
        </Col>
        
      </Row>

      <Row className='second-row benefits-row'>
        
      <Col md={6} className="benefits">
          <BlurCard title="Global Collaboration" image={Collaboration}  />
        </Col>

        <Col md={6} className="benefits right-item">
          <BlurCard title="Industry Guidance" image={Guidance} />
        </Col>
      </Row>
    </Container>
  );
}

export default Benefits;
