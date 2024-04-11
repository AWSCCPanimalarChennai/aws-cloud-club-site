import React, { useEffect }  from "react" ;

import NavBar from "../Components/NavBar/NavBar" ;
import GallerySection from "../Components/GallerySection/GallerySection";
import Footer from "../Components/Footer/Footer";


function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className = "gallery-page">
            <NavBar />
            <GallerySection />
            <Footer />
        </div>
    ) ;
}


export default Gallery ;
