import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./Credits.css"
import { NavLink } from 'react-router-dom';


function Credits() {
    return (
        <Container className='credits-container'>
            <Row>
                <Col className='credits'>
                    <h6 className='center'> 
                        Designed and Developed by&nbsp;
                        <NavLink to = "https://www.linkedin.com/in/hrishab59/" style={{ textDecoration: 'none' }} >
                            <span className='gradient-text'>
                                Rishab H
                            </span> 
                        </NavLink>
                        &nbsp;and&nbsp;
                        <NavLink to= "https://www.linkedin.com/in/jeswinjosephj/" style={{ textDecoration: 'none' }}>
                            <span className='gradient-text'>
                                Jeswin Joseph J
                            </span>
                        </NavLink>
                    </h6>
                </Col>
            </Row>
        </Container>
    );
}

export default Credits;
