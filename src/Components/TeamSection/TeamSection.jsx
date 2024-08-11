import React, { useEffect, useState } from 'react' ;
import { Col, Container, Row } from 'react-bootstrap';
import SectionHeader from '../SectionHeader/SectionHeader';


import "./TeamSection.css"

import Jeswin from "../../assets/img/team/jeswin1.jpg"
import Porselvan from "../../assets/img/team/porselvan.jpg"
import Sakkthivel from "../../assets/img/team/sakkthi.jpg"
import Madhav from "../../assets/img/team/madhav1.jpg"
import Rishab from "../../assets/img/team/rishab2.jpg"
import TeamCard from '../TeamCard/TeamCard';

function TeamSection() {
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
    <Container className='team-section'>
      <SectionHeader header="Our Team"  scrollPosition={scrollPosition} />
      <Row className='members-row-one'>
        <Col lg="5">
            <TeamCard 
            quote="Take the first step today <br /> In the stairs to Reach the Cloud" 
            image={Madhav} title="Madhavakumar D" 
            designation="AWS Cloud Club Captain"
            connect="https://www.linkedin.com/in/madhavakumar-dhandapani/" />
        </Col>
      </Row>
      <Row className='members-row-two'>
        <Col lg="3" className='left-member' >
            <TeamCard 
            quote="The infrastructure of the future is being built by technology, with the architect, AWS cloud." 
            image={Sakkthivel} title="Sakkthivel T"  
            designation="Technology Lead"
            connect="https://www.linkedin.com/in/sakkthivelt/"/>
        </Col>
        <Col lg="3" className='right-member' >
            <TeamCard quote="Scale Your Dreams with AI, <br /> Fuel Your Ambitions with AWS. <br />" 
            image={Porselvan} title="Porselvan P" 
            designation="Aritificial Intelligence Lead"
            connect="https://www.linkedin.com/in/porselvan-p-459596232/"/>
        </Col>

        <Col lg="3" className='right-member' >
            <TeamCard quote="Just keep on increasing your FullStack. At one point, you will Reach the Cloud" 
            image={Rishab} 
            title="Rishab H" 
            designation="Full-Stack Lead"
            connect="https://www.linkedin.com/in/hrishab59/"/>
        </Col>

        <Col lg="3"  className='right-member'>
            <TeamCard quote="Cloud connects servers, while a Community connects people. <br />" 
            image={Jeswin} title="Jeswin Joseph J" 
            designation="Social Outreach Lead"
            connect="https://www.linkedin.com/in/jeswinjosephj/"/>
        </Col>

      </Row>

    </Container>
  );
}


export default TeamSection ;
