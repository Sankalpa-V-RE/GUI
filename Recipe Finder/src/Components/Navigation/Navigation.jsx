import styles from './NavigationBar.module.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationWrapper}>
        <div className={styles.brandNavWrapper}>
          <div className={styles.brandName}>Feast & Find</div>
          <div className={styles.navLinksContainer}>
            
            <Link to="/" className={styles.navLink}>Home</Link>
            <Link to="/Recipe" className={styles.navLink}>Recipes</Link>
            <Link to="/AboutUs" className={styles.navLink}>About</Link>
            
          </div>
        </div>
        <div className={styles.socialLinksWrapper}>
        <Link  to="/SignUp" className={styles.btn}>Sign Up</Link>
        <Link to="/Login" className={styles.btn}>Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
