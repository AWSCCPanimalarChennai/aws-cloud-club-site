import React from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
import "./SectionHeader.css";

function SectionHeader(props) {
  const parallax = useParallax({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
        // set progress to CSS variable
        parallax.ref.current.style.setProperty(
          "--progress",
          progress.toString()
        );
      }
    },
  });

  return (
    <div className="section-header">
    <h2
      ref={parallax.ref}
      className="text-stroke"
      // use the progress variable to change the width of the stroke as progress updates
      style={{ letterSpacing: `calc(20px * var(--progress))` }}
    >
      {props.header}
    </h2>
    </div>
  );
}

export default SectionHeader;
