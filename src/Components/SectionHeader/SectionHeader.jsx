import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import "./SectionHeader.css";

function SectionHeader(props) {
  return (
    <div className="section-header">
    <Parallax translateY={["-90", "90"]} style={{ fontFamily: "Share Tech" }}>
      <span>{props.header}</span>
    </Parallax>
    <Parallax translateY={["-60", "60"]} style={{ fontFamily: "Share Tech" }}>
      <h2>{props.header}</h2>
    </Parallax>
  </div>
  
  );
}

export default SectionHeader;
