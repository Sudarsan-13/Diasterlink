import "./App.css";
import CustomNavbar from "./CustomNavbar";
import Homesection from "./Homesection";
import Home2Section from "./Home2Section";
import {poppins} from "@fontsource/poppins";
import HowItWorks from "./HowItWorks";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Homesection />
      <Home2Section />
      <HowItWorks/>
    </div>
  );
}

export default App;
