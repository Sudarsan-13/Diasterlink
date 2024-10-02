import "./App.css";
import CustomNavbar from "./CustomNavbar";
import Homesection from "./Homesection";
import Home2Section from "./Home2Section";
import {poppins} from "@fontsource/poppins";
import HowItWorks from "./HowItWorks";
import HowItWorks02 from "./HowItWorks02";
import HowItWorks03 from "./HowItWorks03";
import HowItWorks04 from "./HowItWorks04";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="App">
      <SpeedInsights/>
      <CustomNavbar />
      <Homesection />
      <Home2Section />
      <HowItWorks />
      <HowItWorks02 />
      <HowItWorks03 />
      <HowItWorks04 />
    </div>
  );
}

export default App;
