import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import "./DetailsCard.css"

function DetailsCard(props) {
  return (
    <Card className='details-card'>
        <Card.Header><h3 className='details-head gradient-text'>Event Details</h3></Card.Header>
        <Row style={{marginTop: "20px"}}>
            <Col lg={6}>
                <h5 className='gradient-text'> Guest Speaker </h5>
                <p className='card-info'> {props.speaker} </p>
                <h5 className='gradient-text'> Date </h5>
                <p className='card-info'> {props.date} </p>
                <h5 className='gradient-text'> Sponsor </h5>
                <p className='card-info'> {props.sponsor} </p>
            </Col>
            <Col lg={6}>
                <h5 className='gradient-text'> Event Mode </h5>
                <p className='card-info'> {props.mode} </p>
                <h5 className='gradient-text'> Time</h5>
                <p className='card-info'> {props.time} </p>
                <h5 className='gradient-text'> Participants </h5>
                <p className='card-info'> {props.participants} </p>
            </Col>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <NavLink to={props.eventLink} target="_blank" className='view-event-btn'>
                View Event &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </NavLink>
            </div>
            
        </Row>
    </Card>
  )
}

export default DetailsCard
