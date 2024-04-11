import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './AccordionItem.css';

function AccordionItem(props) {
  return (
    <Accordion className="custom-accordion"> 
      <Accordion.Item eventKey={props.eventKey} className="accordion-item">
        <Accordion.Header className="accordion-header">{props.question}</Accordion.Header>
        <Accordion.Body className="accordion-body">{props.answer}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionItem;
