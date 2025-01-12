import styles from './Card.module.css'

function Card(){
    return (
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/017eca55e3920753fcfda153a3beccc7e838d20b165c9c1aa0cba4a0df75d52d?placeholderIfAbsent=true&apiKey=a1d617f711a944dd8adac60765cf8c49"
              className={styles.foodImage}
              alt="Creamy salad dish presentation"
            />
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.contentContainer}>
              <h2 className={styles.title}>Creamy Salad</h2>
              <div className={styles.timeContainer}>
                <img
                  loading="lazy"
                  src="clock.svg"
                  className={styles.timeIcon}
                  alt=""
                />
                <span className={styles.timeText}>10 Mins</span>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Card