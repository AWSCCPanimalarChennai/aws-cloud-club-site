import React, { useEffect } from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import Footer from "../Components/Footer/Footer";
import JoinGuide from "../Components/JoinGuide/JoinGuide";
import Faq from "../Components/Faq/Faq";


function Join() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className = "Join-page">
            <NavBar />
            <JoinGuide />
            <Faq />
            <Footer />
        </div>
    ) ;
}


export default Join;
