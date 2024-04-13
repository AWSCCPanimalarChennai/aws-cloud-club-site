import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import "./SectionHeader.css";

function SectionHeader(props) {
  const parallax = useParallax({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
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
      style={{ letterSpacing: `calc(20px * var(--progress))` }}
    >
      {props.header}
    </h2>
    </div>
  );
}

export default SectionHeader;
