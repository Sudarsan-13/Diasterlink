import "./App.css";
import CustomNavbar from "./CustomNavbar";
import Homesection from "./Homesection";
import Home2Section from "./Home2Section";
import {poppins} from "@fontsource/poppins";
import HowItWorks from "./HowItWorks";
import HowItWorks03 from "./HowItWorks03";
import HowItWorks04 from "./HowItWorks04";
import RealTimeSection from "./RealTimeSection";
import AboutUs from "./AboutUs";
import Benefits from "./Benefits";  
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      
      <CustomNavbar />
      <Homesection/>
      <Home2Section/>
      <HowItWorks />
      <HowItWorks03 />
      <HowItWorks04 />
      <RealTimeSection />
      <AboutUs />
      <Benefits />  
      <Footer />
    </div>
  );
}

export default App;
