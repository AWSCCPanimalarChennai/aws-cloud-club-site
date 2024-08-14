import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import Meetup from '../Components/Meetup/Meetup';

function Meetup3() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className = "meetup-page">
        <NavBar />
        <Meetup />
        <Footer />
    </div>
  )
}

export default Meetup3
