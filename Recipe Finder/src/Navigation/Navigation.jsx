import styles from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationWrapper}>
        <div className={styles.brandNavWrapper}>
          <div className={styles.brandName}>Feast & Find</div>
          <div className={styles.navLinksContainer}>
            <a href="/" className={styles.navLink} >Home</a>
            <a href="/recipe" className={styles.navLink} >Recipe</a>
            <a href="/about" className={styles.navLink} >About Us</a>
          </div>
        </div>
        <div className={styles.socialLinksWrapper}>
          <img
            loading="lazy"
            src="search.svg"
            alt="Social media icon 1"
            className={styles.socialIcon}
          />
          <img
            loading="lazy"
            src="profile.svg"
            alt="Social media icon 2"
            className={styles.socialIcon2}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
