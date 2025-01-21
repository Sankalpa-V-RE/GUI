import AboutUs from "../../Components/About Us/about";
import Grid from "../../Grid/Grid";
import HeroSection from "../../HeroSection/Herosection";
import { motion } from "framer-motion";

function Home(){
    return(
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection/>
            <Grid index={6}/>
            <AboutUs/>
        </motion.div>

    )
}
export default Home;