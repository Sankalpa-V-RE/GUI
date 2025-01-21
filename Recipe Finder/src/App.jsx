import { style } from "framer-motion/client";
import './App.css';
import Footer from "./Components/Footer/Footer";
import HeroSection from "./HeroSection/Herosection";
import NavigationBar from "./Components/Navigation/Navigation";
import Grid from "./Grid/Grid";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home'
import AboutUs from "./Pages/AboutUsPg/AboutUs";
import { AnimatePresence } from "framer-motion";
import Recipe from "./Pages/Recipes/Recipe";
import Display from "./Pages/Display/Display";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";


function AnimatedRoutes() {
  return (
      <AnimatePresence mode="wait">
          <div className="all">
            <NavigationBar></NavigationBar>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs/>} />
              <Route path="/Recipe" element={<Recipe/>} />
              <Route path="/Display" element={<Display/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
            </Routes>
            <Footer></Footer>
          </div>
      </AnimatePresence>
  );
}

function App() {
  return(
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
