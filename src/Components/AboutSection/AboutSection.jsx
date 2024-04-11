import React from 'react'

import "../../App.css"

import "./AboutSection.css"

import SectionHeader from '../SectionHeader/SectionHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import team from '../../assets/img/team1.jpg'; 

function About() {
  return (
    <Container id='About' fluid className='about-section'>
        
      <SectionHeader header = "About Us"/>
      <Row className="section-row">
        <Col lg={6} className="section-content">
            <h2 className='side-head'>Who we are?</h2>
            <p className='para'>The <b>AWS Cloud Club Panimalar - Chennai</b> is a dynamic Student 
            Community dedicated to fostering innovation and expertise in cloud computing 
            technologies, particularly focusing on Amazon Web Services (AWS). Established 
            by a group of passionate students, driven by AWS and supported by faculty mentors,
             the club serves as a platform for students to explore, learn, and collaborate on 
             cloud-related projects and initiatives.</p>
            
            <h2 className='side-head'>What we do?</h2>
            <p className='para'>The mission of the AWS Cloud Club is to empower students with 
            practical skills and knowledge in cloud computing through <b>hands-on workshops, training 
            sessions, and real-world projects</b>. By leveraging the resources provided by AWS, the 
            club aims to prepare its members for the demands of the rapidly evolving technology 
            industry and equip them with the tools to succeed in their careers.
            </p>
        </Col>
        <Col lg={6} className="section-content">
          <img src={ team } alt="About Us" className='about-img' />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
