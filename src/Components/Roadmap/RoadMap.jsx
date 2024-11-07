import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';
import { examPrep } from '../../data/examPrep';

import "./RoadMap.css";

function RoadMap() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container className='contribute-section'>
            <SectionHeader header="Action Plan" scrollPosition={scrollPosition} />
            
            {examPrep.map((ele, index) => (
                <Fragment key={index}>
                    <h1 className='week-title'>{ele.week}</h1>
                    <Row className='contribute-card'>
                        <Col lg={8}>
                            <h1 className='roadmap-title'>{ele.title}</h1>
                            <p className='para'>{ele.para}</p>
                        </Col>
                        
                        <Col lg={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {ele.btnText !== "" && (
                                <NavLink to={ele.url} className='contribute-btn' target='_blank'>
                                    <span>
                                        {ele.btnText}&nbsp;
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                    </svg>
                                </NavLink>
                            )}
                        </Col>
                    </Row>
                    <br />
                </Fragment>
            ))}
        </Container>
    );
}

export default RoadMap;
