import React, { useEffect } from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import ResourcesSection from "../Components/ResoursesSection/ResourcesSection";
import Footer from "../Components/Footer/Footer";


function Resources() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className = "resources-page">
            <NavBar />
            <ResourcesSection />
            <Footer />
        </div>
    ) ;
}


export default Resources ;
