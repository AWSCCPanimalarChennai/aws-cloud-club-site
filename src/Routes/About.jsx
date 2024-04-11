import React, { useEffect }  from 'react'

import AboutSection from '../Components/AboutSection/AboutSection';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import TeamSection from '../Components/TeamSection/TeamSection';
import GlobalPresence from '../Components/GlobalPresence/GlobalPresence';


function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='about-page'>
            <NavBar />
            <AboutSection />
            <GlobalPresence />
            <TeamSection />
            <Footer />
        </div>
    ) ;
}

export default About ;
