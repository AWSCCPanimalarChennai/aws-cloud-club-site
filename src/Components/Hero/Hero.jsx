import React from 'react';
import "./HeroStyles.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Chennai from '../../assets/img/chennai.png'

function Hero() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('intro');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    
    <Container fluid className='hero'>
      <Row className="hero-row">
        <Col lg={12} className="hero-content">
            <h1>AWS Cloud Club Panimalar - Chennai.</h1>
            <h4>A Technical Community of AWS for Students, By Students.</h4>

            <Button className='hero-btn' onClick={scrollToAbout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
              </svg>
            </Button>
        </Col>
      </Row>
      
      <Col className="hero-img-container d-flex justify-content-end align-items-end">
          <img src={Chennai} alt="" className="hero-img" />
        </Col>
    </Container>
  );
}

export default Hero;
