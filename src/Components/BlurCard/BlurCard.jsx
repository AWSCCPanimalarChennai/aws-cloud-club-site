import React from 'react';
import { Card } from 'react-bootstrap';

import "./BlurCard.css"

function BlurCard(props) {
  return (
    <Card className="blur-card">
      <Card.Body className='card-body'>
        <img src={props.image} alt={props.title} id="card-image" />
        <Card.Title className='card-title'>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default BlurCard;
