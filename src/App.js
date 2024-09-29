import "./App.css";
import CustomNavbar from "./CustomNavbar";
import Homesection from "./Homesection";
import Home2Section from "./Home2Section";
import {poppins} from "@fontsource/poppins";
import HowItWorks from "./HowItWorks";
import HowItWorksReversed from "./HowItWorksReversed";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Homesection />
      <Home2Section />
      <HowItWorks />
      <HowItWorksReversed />
    </div>
  );
}

export default App;
