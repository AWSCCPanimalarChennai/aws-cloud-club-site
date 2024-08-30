import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Lottie from "lottie-react"

import "./EventsSection.css"
import SectionHeader from "../SectionHeader/SectionHeader";
import EventsCard from './EventsCard/EventsCard';
import DetailsCard from './DetailsCard/DetailsCard';

import inaugurationPoster from '../../assets/img/posters/inauguration.jpg';
import meetup2 from '../../assets/img/posters/meetup2.jpg';
import meetup3 from '../../assets/img/posters/meetup3.jpg';
import meetup4 from '../../assets/img/posters/meetup4.jpeg';
// import noEvents from '../../assets/animation/noEvents.json'

function EventsSection() {
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
    <Container className='events-section'>
      
      <SectionHeader header="Upcoming Events"   scrollPosition={scrollPosition}/>
      {/* <Row className='row-gallery'>
            <Col sm={4}>
            <Lottie animationData={noEvents}></Lottie>
            </Col>
            
            <h2 className='center gradient-text'>Hmm... Nothing for now.</h2>
        </Row> */}

        

          <Row>
            <Col lg={5}>
            <EventsCard image={meetup4} title="Meetup-4 (Aug 2024)"></EventsCard>
            </Col>
            <Col lg={7} className='event-desc'>
              <h1 className='event-title'>Meetup-4 (Aug 2024)</h1>
              <p className='para'>Join us for the Fourth MeetUp of AWS Cloud Club Panimalar - Chennai on August 31, 2024, from 5:30 PM to 7:30 PM IST, conducted online. Our session will be led by Amit Arora, who will provide a comprehensive introduction to AWS Cloud, explore the exciting realm of Generative AI within the AWS ecosystem, and delve into essential security practices on the cloud. This is a great opportunity to enhance your knowledge and connect with like-minded individuals passionate about cloud technologies.</p>
                
              <DetailsCard 
              speaker="Mr. Amit Arora" 
              mode="Virtual" 
              date="31st Aug, 2024" 
              time="5:30 PM [IST]" 
              participants="--" sponsor="--"
              eventLink="https://www.meetup.com/aws-cloud-club-panimalar-chennai/events/303073534/"></DetailsCard>
            </Col>
          </Row>

      <SectionHeader header="Past Events" />

          <Row>
            <Col lg={5}>
            <EventsCard image={meetup3} title="Meetup-3 (Aug 2024)"></EventsCard>
            </Col>
            <Col lg={7} className='event-desc'>
              <h1 className='event-title'>Meetup-3 (Aug 2024)</h1>
              <p className='para'>
              Get ready for the third MeetUp of AWS Cloud Club Panimalar Chennai, where we'll
               explore some of the most crucial aspects of AWS cloud technology. This session 
               will take you deep into Amazon Bedrock, giving you a comprehensive understanding
                of its features and applications. Following that, we'll discuss the vital role 
                of IAM users in organizations, highlighting best practices for managing access 
                and ensuring security within AWS environments.</p>
                
              <DetailsCard 
              speaker="Mr. Stephen Howell" 
              mode="Virtual" 
              date="15th Aug, 2024" 
              time="3:00 PM [IST]" 
              participants="771" sponsor="--"
              eventLink="https://www.meetup.com/aws-cloud-club-panimalar-chennai/events/302733242/"></DetailsCard>
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col lg={5}>
            <EventsCard image={meetup2} title="Meetup-2 (July 2024)"></EventsCard>
            </Col>
            <Col lg={7} className='event-desc'>
              <h1 className='event-title'>Meetup-2 (July 2024)</h1>
              <p className='para'>
                
                The second MeetUp of AWS Cloud Club Panimalar Chennai was a success, focusing 
                on both static and dynamic website hosting on AWS. Participants learned to set 
                up S3 for static sites and deploy EC2 instances for dynamic hosting. The session
                 ended with a hands-on practice using IAM user accounts, giving attendees practical experience with AWS. The event provided valuable insights and skills in cloud technology.</p>
                
              <DetailsCard 
              speaker="--" 
              mode="Virtual" 
              date="21st July, 2024" 
              time="4:00 PM [IST]" 
              participants="76" sponsor="--"
              eventLink="https://www.meetup.com/aws-cloud-club-panimalar-chennai/events/302310216/"></DetailsCard>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col lg={5}>
            <EventsCard image={inaugurationPoster} title="Inauguration Ceremony"></EventsCard>
            </Col>
            <Col lg={7} className='event-desc'>
              <h1 className='event-title'>Inauguration Ceremony</h1>
              <p className='para'>
                Celebrate with us on the grand occasion of the inauguration of 
                <b>AWS Cloud Club Panimalar - Chennai</b>, set to take place on Wednesday, 
                April 3rd 2024.  Save the date and mark your calendars to be part of this momentous 
                occasion. We look forward to welcoming you and sharing the excitement as we delve 
                into the limitless possibilities of the AWS Cloud.</p>
                
              <DetailsCard 
              speaker="Mr. Sarannithish K S" 
              mode="Hybrid" 
              date="3rd April, 2024" 
              time="8:00 AM [IST]" 
              participants="241" sponsor="--"
              eventLink="https://www.meetup.com/aws-cloud-club-panimalar-chennai/events/300159208/"></DetailsCard>
            </Col>
          </Row>
    </Container>
  );
}

export default EventsSection;
