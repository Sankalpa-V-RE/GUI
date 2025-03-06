import styles from './Card.module.css';
import { Link } from 'react-router-dom';


function Card({ img, title, idMeal }) {
    return (
        <Link to={`/Display?id=${idMeal}`}>
            <div className={styles.card}>
                <div
                    className={styles.imageContainer}
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className={styles.contentWrapper}>
                    <div className={styles.contentContainer}>
                        <h2 className={styles.title}>{title}</h2>
                        <div className={styles.timeContainer}>
                            <img
                                loading="lazy"
                                src="clock.svg"
                                className={styles.timeIcon}
                                alt="Clock Icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
