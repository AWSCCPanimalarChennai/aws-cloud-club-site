import React from 'react';
import Card from 'react-bootstrap/Card';


import { Parallax } from 'react-scroll-parallax';
import "./BlurCard.css"

function BlurCard(props) {
  return (
    // <Parallax translateX={[-200, 200]} tagOuter="figure" className="blur-card">
    <div className="blur-card">
      <Card.Body className='card-body'>
        <Parallax scale={[1.2, 0.8]} >
          <img src={props.image} alt={props.title} id="card-image"/>
        </Parallax> 
        <Card.Title className='card-title'>{props.title}</Card.Title>
      </Card.Body>
    </div>
    // </Parallax> 
  );
}

export default BlurCard;
