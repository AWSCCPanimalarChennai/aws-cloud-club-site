import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import ExamPrepHero from '../Components/ExamPrepHero/ExamPrepHero';
import RoadMap from '../Components/Roadmap/RoadMap';

function ExamPrep() {
  return (
    <div>
      <NavBar />
        <ExamPrepHero />
        <RoadMap />

      <Footer />
    </div>
  )
}

export default ExamPrep;
