// Loader.js

import React from 'react';
import Lottie from 'lottie-react';
import "./Loader.css";
import preloader from '../../assets/animation/preloader.json';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <Lottie animationData={preloader} />
      </div>
    </div>
  );
};

export default Loader;
