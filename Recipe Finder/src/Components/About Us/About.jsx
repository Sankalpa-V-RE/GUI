import Styles from './About.module.css'
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className={Styles.about_us}>
        <div className={Styles.background_image}></div>
      <div>
        <div className={Styles.label}>
          50+ Quick Food Recipes<br />That Easy To Do!
        </div>
        <div className={Styles.about_us_card}>
          <div className={Styles.card_header}>
            <h2>About Us</h2>
            
          </div>
          <p>
            Our recipes are the heart and soul of our culinary community, and
            they reflect our commitment to providing you with memorable and
            delightful dining experiences.
          </p>
          <Link to={'/AboutUs'} ><button className={Styles.btn}>Learn More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
