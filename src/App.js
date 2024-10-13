import React, { useRef } from "react";
import "./App.css";
import CustomNavbar from "./CustomNavbar";
import Homesection from "./Homesection";
import Home2Section from "./Home2Section";
import { poppins } from "@fontsource/poppins";
import HowItWorks from "./HowItWorks";
import HowItWorks03 from "./HowItWorks03";
import HowItWorks04 from "./HowItWorks04";
import RealTimeSection from "./RealTimeSection";
import AboutUs from "./AboutUs";
import Benefits from "./Benefits";
import Footer from "./Footer";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const howItWorksRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);

  return (
    <div className="App">
      <CustomNavbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        howItWorksRef={howItWorksRef}
        featuresRef={featuresRef}
        benefitsRef={benefitsRef}
      />
      <div ref={homeRef}>
        <Homesection />
      </div>
      <div ref={featuresRef}>
        <Home2Section />
      </div>
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>
      <HowItWorks03 />
      <HowItWorks04 />
      <RealTimeSection/>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={benefitsRef}>
        <Benefits />
      </div>
      <Footer 
        homeRef={homeRef}
        aboutRef={aboutRef}
        howItWorksRef={howItWorksRef}
        featuresRef={featuresRef}
        benefitsRef={benefitsRef}
      />
    </div>
  );
}

export default App;
