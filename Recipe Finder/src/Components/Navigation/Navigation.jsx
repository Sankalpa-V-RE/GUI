import styles from './NavigationBar.module.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function NavigationBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkAuthStatus = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const { username } = JSON.parse(userData);
        setIsLoggedIn(true);
        setUsername(username);
      } else {
        setIsLoggedIn(false);
        setUsername('');
      }
    };

    
    checkAuthStatus();

    
    window.addEventListener('storage', checkAuthStatus);

    
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
    window.dispatchEvent(new Event('storage'));
  };
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
          {isLoggedIn ? (
              <div className={styles.profileSection}>
                <img className={styles.image} src='user.png'></img>
                <span className={styles.username}>{username}</span>
                <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
              </div>
            ) : (
              <>
                <Link to="/SignUp" className={styles.btn}>Sign Up</Link>
                <Link to="/Login" className={styles.btn}>Login</Link>
              </>
            )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
