import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from "lottie-react"

import "./EventsSection.css"
import SectionHeader from "../SectionHeader/SectionHeader";
import EventsCard from './EventsCard/EventsCard';
import DetailsCard from './DetailsCard/DetailsCard';

// import inaugurationPoster from '../../assets/img/posters/inauguration.jpg';
// import meetup2 from '../../assets/img/posters/meetup2.jpg';
// import meetup3 from '../../assets/img/posters/meetup3.jpg';
// import meetup4 from '../../assets/img/posters/meetup4.jpeg';
// import meetup5 from '../../assets/img/posters/meetup5.jpg';
// import meetup6 from '../../assets/img/posters/meetup6.jpg';
import noEvents from '../../assets/animation/noEvents.json'
import { eventsSectionRowData } from '../../data/eventsSectionRowData';

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
      <Row className='row-gallery'>
            <Col sm={4}>
            <Lottie animationData={noEvents}></Lottie>
            </Col>
            
            <h2 className='center gradient-text'>Hmm... Nothing for now.</h2>
        </Row>

      <SectionHeader header="Past Events" />

      <span style = {{ marginTop: "40px" }}></span>

      {
        eventsSectionRowData.map((ele, index) => {
          return (
            <>
              <Row key = { index }>
                <Col lg = { ele.col1lg }>
                  <EventsCard
                    image = { ele.eventCardImage }
                    title = { ele.eventCardTitle }
                  />
                </Col>

                <Col 
                  lg = { ele.col2lg }
                  className = "event-desc"
                >
                  {
                    ele.h1 && (
                      <h1 className = "event-title">
                        { ele.h1 }
                      </h1>
                    )
                  }

                  {
                    ele.p && (
                      <p
                        className = "para"
                        style = {{
                          marginBottom: "40px"
                        }}
                      >
                        { ele.p }
                      </p>
                    )
                  }

                  <DetailsCard
                    speaker = { ele.speaker }
                    mode = { ele.mode } 
                    date = { ele.date } 
                    time = { ele.time } 
                    participants = { ele.participants }
                    sponsor = { ele.sponsor }
                    eventLink = { ele.eventLink }
                  />
                </Col>
              </Row>

              <br />
              <br />
            </>
          );
        })
      }

        {/* <Row>
            <Col lg={7}>
            <EventsCard style={{marginTop: "40px"}} image={meetup6} title="Meetup-6 (Oct 2024)"></EventsCard>
            </Col>
            <Col lg={5} className='event-desc'>
              <DetailsCard 
              speaker="Ms. Jen Looper" 
              mode="Offline" 
              date="04th Oct, 2024" 
              time="8:00 AM [IST]" 
              participants="1500" sponsor="--"
              eventLink="https://www.meetup.com/aws-cloud-club-panimalar-chennai/events/303714834/"></DetailsCard>
            </Col>
        </Row>
        <br />
        <br />

        <Row>
            <Col lg={7}>
            <EventsCard image={meetup5} title="Meetup-5 (Sept 2024)"></EventsCard>
            </Col>
            <Col lg={5} className='event-desc'> 
              <DetailsCard 
              speaker="Mr. Sheen Brisals & Mr. Eric Johnson" 
              mode="Offline" 
              date="3rd Sept, 2024" 
              time="8:15 AM [IST]" 
              participants="165" sponsor="--"
              eventLink="https://www.meetup.com/aws-cloud-club-panimalar-chennai/events/303184370/"></DetailsCard>
            </Col>
          </Row>
          <br />
          <br />

        <Row>
            <Col lg={5}>
            <EventsCard image={meetup4} title="Meetup-4 (Aug 2024)"></EventsCard>
            </Col>
            <Col lg={7} className='event-desc'>
              <h1 className='event-title'>Meetup-4 (Aug 2024)</h1>
              <p className='para'>The Fourth MeetUp of AWS Cloud Club Panimalar - Chennai on August 31, 2024, from 5:30 PM to 7:30 PM IST, conducted online. Our session was led by Amit Arora, who provided a comprehensive introduction to AWS Cloud, explored the exciting realm of Generative AI within the AWS ecosystem, and delved into essential security practices on the cloud. This was a great opportunity to enhance our knowledge and connect with like-minded individuals passionate about cloud technologies.</p>
                
              <DetailsCard 
              speaker="Mr. Amit Arora" 
              mode="Virtual" 
              date="31st Aug, 2024" 
              time="5:30 PM [IST]" 
              participants="--" sponsor="--"
              eventLink="https://www.meetup.com/aws-cloud-club-panimalar-chennai/events/303073534/"></DetailsCard>
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col lg={5}>
            <EventsCard image={meetup4} title="Meetup-4 (Aug 2024)"></EventsCard>
            </Col>
            <Col lg={7} className='event-desc'>
              <h1 className='event-title'>Meetup-4 (Aug 2024)</h1>
              <p className='para' style={{marginBottom: "40px"}}>Join us for the Fourth MeetUp of AWS Cloud Club Panimalar - Chennai on August 31, 2024, from 5:30 PM to 7:30 PM IST, conducted online. Our session will be led by Amit Arora, who will provide a comprehensive introduction to AWS Cloud, explore the exciting realm of Generative AI within the AWS ecosystem, and delve into essential security practices on the cloud. This is a great opportunity to enhance your knowledge and connect with like-minded individuals passionate about cloud technologies.</p>
                
              <DetailsCard 
              speaker="Mr. Amit Arora" 
              mode="Virtual" 
              date="31st Aug, 2024" 
              time="5:30 PM [IST]" 
              participants="--" sponsor="--"
              eventLink="https://www.meetup.com/aws-cloud-club-panimalar-chennai/events/303073534/"></DetailsCard>
            </Col>
          </Row>
          <br />
          <br />


          <Row>
            <Col lg={5}>
            <EventsCard image={meetup3} title="Meetup-3 (Aug 2024)"></EventsCard>
            </Col>
            <Col lg={7} className='event-desc'>
              <h1 className='event-title'>Meetup-3 (Aug 2024)</h1>
              <p className='para' style={{marginBottom: "40px"}}>
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
              <p className='para' style={{marginBottom: "40px"}}>
                
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
              <p className='para' style={{marginBottom: "40px"}}>
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
          </Row> */}
    </Container>
  );
}

export default EventsSection;
