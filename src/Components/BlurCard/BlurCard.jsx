import React from 'react';
import Card from 'react-bootstrap/Card';

// import { Parallax } from 'react-scroll-parallax';
import "./BlurCard.css"

function BlurCard(props) {
  return (
    // <Parallax translateX={[-200, 200]} tagOuter="figure" className="blur-card">
    <div className="blur-card">
      <Card.Body className='card-body'>
          <img src={props.image} alt={props.title} id="card-image"/>
        <Card.Title className='card-title'>{props.title}</Card.Title>
      </Card.Body>
    </div>
    // </Parallax> 
  );
}

export default BlurCard;
