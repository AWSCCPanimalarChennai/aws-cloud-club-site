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
    </Container>
  );
}

export default EventsSection;
