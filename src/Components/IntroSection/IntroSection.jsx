import React from 'react' ;

import { Container, Col, Row } from "react-bootstrap" ;
import Logo from "../../assets/img/logo.png"

import { Parallax } from 'react-scroll-parallax';

import "./IntroSection.css" ;

function IntroSection() {
  return (
    <Container id="intro" className="intro-section">
        
        <Row>
            <Col lg={6}>
            
            <h1>AWS Cloud Club</h1>
            <p className='para'>
            The goal of <b>AWS Cloud Club Panimalar - Chennai</b> is to teach students about the AWS Cloud
             and its various use cases, including those related to security, AI, business analytics, business
              transformation, etc. We will teach students about the benefits of the cloud and how it 
              accelerates business. <br /><br />Furthermore, the AWS Cloud Club will give students hands-on experience 
              through projects in the AWS cloud, allowing students to develop both technical and 
              business expertise in the cloud. This club will provide students with industry skills 
              currently in high demand.
            </p>
            </Col>
            {/* <Col lg={6} style={{ display: "flex", alignItems: "Center", justifyContent: "center" }}>
            <img src={Logo} className='logo-image' alt=""/>
            </Col> */}
            
            
            <Col lg={6} style={{ display: "flex", alignItems: "Center", justifyContent: "center" }}>
            {/* <Parallax translateX={['100px', '0px']}> */}
            <Parallax scale={[1.3, 1]} >
              <img src={Logo} className='logo-image' alt=""/>
              </Parallax> 
            </Col>
        </Row>
    </Container>
  ) ;
}

export default IntroSection ;
