import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem/AccordionItem';
import { Col, Container, Row } from 'react-bootstrap';
import SectionHeader from '../SectionHeader/SectionHeader';

import './Faq.css'

function Faq() {
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
    <Container className='faq-section'>
        <SectionHeader header="Faq"  scrollPosition={scrollPosition} />
        <Row>
            <Col lg={12}>
                <AccordionItem
                    eventKey="0"
                    question="1. How can I join AWS Cloud Club Panimalar - Chennai?"
                    answer= "To join our club, simply follow these three steps: Join our Announcement Group on WhatsApp to stay informed. Join our Meetup.com group to become an official member. Follow us on social media to stay connected."
                />

                <AccordionItem
                    eventKey="1"
                    question="2. I encountered a social registration error on Meetup.com. What steps should I take to resolve it?"
                    answer= "While it's showing a social registration error, just re-select the location to CHENNAI-IN from CHENNAI-IN again. This should resolve the issue"
                />

                <AccordionItem
                    eventKey="2"
                    question="3. Are there any membership fees to join the club?"
                    answer= "No, membership to AWS Cloud Club Panimalar - Chennai is completely free of charge. We believe in fostering a community of learning and collaboration without any financial barriers."
                />
                
                <AccordionItem
                    eventKey="3"
                    question="4. Can I join if I'm new to AWS or cloud computing?"
                    answer= "Absolutely! Our club welcomes individuals of all skill levels, from beginners to seasoned professionals. Whether you're just starting out or looking to expand your knowledge, you'll find resources, support, and networking opportunities tailored to your needs."
                />
                
                <AccordionItem
                    eventKey="4"
                    question="5. What kind of events and activities does the club organize?"
                    answer= "We organize a variety of events, including workshops, seminars, guest lectures, hands-on labs, and networking meetups. Topics range from introductory AWS concepts to advanced technical discussions, certification preparation sessions, and project showcases."
                />
                
                <AccordionItem
                    eventKey="5"
                    question="6. Can I collaborate with other members on projects or study groups?"
                    answer= "Absolutely! Our Project Support and Certification Support WhatsApp groups are the perfect platforms to connect with fellow members for collaboration, study groups, project partnerships, and knowledge sharing. Don't hesitate to reach out and leverage the collective expertise of our community."
                />
                
                <AccordionItem
                    eventKey="6"
                    question="7.  How can I contribute to the club's activities?"
                    answer= "There are many ways to contribute to the club, including volunteering to organize events, sharing your expertise through presentations or workshops, participating in discussions, providing feedback, and promoting the club within your network. Your active involvement is what makes our community thrive!"
                />

            </Col>
        </Row>
    </Container>
)
}

export default Faq
