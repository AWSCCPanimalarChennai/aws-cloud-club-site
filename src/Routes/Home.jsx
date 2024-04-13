import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Hero from "../Components/Hero/Hero";
import Benefits from "../Components/Benefits/Benefits";
import Footer from "../Components/Footer/Footer";
import CtaSection from "../Components/CtaSection/CtaSection";
import StatsSection from "../Components/StatsSection/StatsSection";
import ContributeSection from "../Components/ContributeSection/ContributeSection";
import IntroSection from "../Components/IntroSection/IntroSection";
import Loader from "../Components/Loader/Loader";

function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="home-page">
          <NavBar />
          <Hero />
          <IntroSection />
          <StatsSection />
          <ContributeSection />
          <Benefits />
          <CtaSection />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
