import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageGallery from "react-image-gallery";

import "./GallerySection.css";
import SectionHeader from '../SectionHeader/SectionHeader';

import inauguration1 from '../../assets/img/events/inauguration1.jpg';
import inauguration2 from '../../assets/img/events/inauguration2.jpg';
import inauguration3 from '../../assets/img/events/inauguration4.jpg';

function GallerySection() {
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

  const images = [
    {
      original: inauguration1,
      thumbnail: inauguration1,
    },
    {
      original: inauguration2,
      thumbnail: inauguration2,
    },
    {
      original: inauguration3,
      thumbnail: inauguration3,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const thumbnailPosition = isMobile ? "bottom" : "right";

  return (
    <Container className='gallery-section'>
      <SectionHeader header="Moments"  scrollPosition={scrollPosition} />
      <Row className='row-gallery'>
        <Col lg={12}>
        <ImageGallery
          items={images}
          showNav={false}
          thumbnailPosition={thumbnailPosition}
          showIndex={true}
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={false}
        />
        </Col>
      </Row>
    </Container>
  );
}

export default GallerySection;
