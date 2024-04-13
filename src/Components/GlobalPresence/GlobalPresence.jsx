import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import "./GlobalPresence.css";
import map from "../../assets/img/hero-bg.png";
import SectionHeader from '../SectionHeader/SectionHeader';

function GlobalPresence() {
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


  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
  
    const observerCallback = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    };
  
    const observer = new IntersectionObserver(observerCallback, options);
    const currentCounterRef = counterRef.current;
  
    if (currentCounterRef) {
      observer.observe(currentCounterRef);
    }
  
    return () => {
      if (currentCounterRef) {
        observer.unobserve(currentCounterRef);
      }
    };
  }, []);
  

  const [isMapVisible, setMapIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMapIsVisible(false);
      } else {
        setMapIsVisible(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container className='global-presence-section'>
      <SectionHeader header="Global Presence"  scrollPosition={scrollPosition} />
      <Row>
        <Col lg={12} className="position-relative">
          <Row className="counters-container">
            <Col lg={4}>
              <div ref={counterRef} className="counter-wrapper">
                <span className='counter' ><CountUp end={isVisible ? 21100 : 0}/>+ <br></br> <p className='counter-unit'>Members</p> </span>
              </div>
            </Col>
            <Col lg={4}>
              <div ref={counterRef} className="counter-wrapper" id="groups">
                <span className='counter' ><CountUp end={isVisible ? 115 : 0}/>+ <br></br> <p className='counter-unit'>Groups</p> </span>
              </div>
            </Col>
            <Col lg={4}>
              <div ref={counterRef} className="counter-wrapper" id="countries">
                <span className='counter' ><CountUp end={isVisible ? 37 : 0}/><br></br> <p className='counter-unit'>Countries</p> </span>
              </div>
            </Col>
          </Row>
          {isMapVisible && <img src={map} alt="" width={"100%"} />}
        </Col>
      </Row>
    </Container>
  );
}

export default GlobalPresence;
