import styles from './Navbar.module.css'
import logo from './logo.png'

function Navbar(){
    return(
        <nav className={styles.nav}>
            
            <p className={styles.title}>Feast & Find</p>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar