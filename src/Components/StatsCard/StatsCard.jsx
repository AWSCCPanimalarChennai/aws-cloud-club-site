import React from 'react';
import { Card } from 'react-bootstrap';

import "./StatsCard.css"

function StatsCard(props) {
  return (
    <Card className="stats-card">
      <Card.Body>
        <Card.Title className='stats-title'>{props.title}</Card.Title>
        <Card.Text id='stats-text'>
        {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StatsCard;
