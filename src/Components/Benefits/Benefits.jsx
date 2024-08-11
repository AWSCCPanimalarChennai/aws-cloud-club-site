//------------------------------------------------------------------------------

/**
 * Benefits.jsx
 * Description: Component for rendering about section in About Route.
 * Author: Jeswin Joseph J
 * Created: March 2024
 * License: MIT
 */

//------------------------------------------------------------------------------


import React, { useEffect, useState } from 'react'
import "./Benefits.css"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import SectionHeader from '../SectionHeader/SectionHeader'
import BlurCard from './BlurCard/BlurCard'

import Certification from "../../assets/img/benefits/Certification.svg"
import Projects from "../../assets/img/benefits/cloudProjects.svg"
import Collaboration from "../../assets/img/benefits/globalCollaboration.svg"
import Guidance from "../../assets/img/benefits/IndustryGuidance.svg"

function Benefits() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(()=> {
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
    <Container id='Activities' fluid className='benefits-section'>
        
      <SectionHeader header = "Prospects"  scrollPosition={scrollPosition}/>

      <Row className="benefits-row">
        
      <Col lg={3} className="benefits">
          <BlurCard title="AWS Certifications" image={Certification} />
      </Col>

        
        <Col lg={3} className="benefits right-item">
          <BlurCard title="Cloud Projects" image={Projects} />
        </Col>

      <Col md={3} className="benefits right-item">
          <BlurCard title="Global Collaboration" image={Collaboration}  />
        </Col>

        <Col md={3} className="benefits right-item">
          <BlurCard title="Industry Guidance" image={Guidance} />
        </Col>

        <h2 className='gradient-text' style={{textAlign: "center", marginTop: "40px"}}>And many more...</h2>
      </Row>
    </Container>
  );
}

export default Benefits;
