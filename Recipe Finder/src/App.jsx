import { style } from "framer-motion/client";
import './App.css';
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/Herosection";
import NavigationBar from "./Navigation/Navigation";
import Grid from "./Grid/Grid";



function App() {
  return(
    <div className="all">
      <NavigationBar></NavigationBar>
      <HeroSection></HeroSection>
      <Grid index={6}></Grid>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
