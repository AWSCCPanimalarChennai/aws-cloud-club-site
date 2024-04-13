import React, { useEffect, useState } from 'react';
import "./HeroStyles.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import { Parallax } from 'react-scroll-parallax';

import cloud from '../../assets/img/cloud.png';
import cloud1 from '../../assets/img/cloud1.png';

import Chennai from '../../assets/img/chennai.png';

function Hero() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const scrollToAbout = () => {
  //   const aboutSection = document.getElementById('intro');
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // Calculate opacity based on scroll offset
  const cloudOpacity = (scrollOffset * 0.002); // Adjust the multiplier to control the speed of opacity change

  return (
    <Container fluid className='hero'>
      <div className="clouds-container">
        <img src={cloud} alt="" className="cloud-left" style={{ transform: `translateX(-${scrollOffset * 1.5}px)`, opacity: cloudOpacity }} />
        <img src={cloud1} alt="" className="cloud-right" style={{ transform: `translateX(${scrollOffset * 1}px)`, opacity: cloudOpacity }} />
      </div>

      <Row className="hero-row">
        <Col lg={12} className="hero-content">
          <h1>AWS Cloud Club Panimalar - Chennai.</h1>
          <h4>A Technical Community of AWS for Students, By Students.</h4>
          {/* <Button className='hero-btn' onClick={scrollToAbout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
            </svg>
          </Button> */}
        </Col>
      </Row>
      <Row>
        <Col className="hero-img-container d-flex justify-content-end align-items-end">
          <Parallax scale={1.5}>
            <img src={Chennai} alt="" className="hero-img" />
          </Parallax>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
