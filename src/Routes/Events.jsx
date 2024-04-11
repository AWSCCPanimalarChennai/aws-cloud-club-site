import React, { useEffect }  from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import EventsSection from "../Components/EventsSection/EventsSection";
import Footer from "../Components/Footer/Footer";


function Events() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className = "events-page">
            <NavBar />
            <EventsSection />
            <Footer />
        </div>
    ) ;
}


export default Events ;