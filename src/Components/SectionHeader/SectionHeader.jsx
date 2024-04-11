import React from 'react'

import "./SectionHeader.css"



function SectionHeader(props) {
  return (
    <div class="section-header" style={{fontFamily: "Share Tech"}}>
        <span>{props.header}</span>
        <h2>{props.header}</h2>
    </div>
  )
}

export default SectionHeader
