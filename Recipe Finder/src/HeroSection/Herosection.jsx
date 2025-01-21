import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <img src='back.jpg' className={styles.heroBackground}/>
        <div className={styles.contentWrapper}>
          <div className={styles.contentBox}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>
                Cooking Made Fun and Easy: Unleash Your Inner Chef
              </h1>
              <p className={styles.description}>
                <span className={styles.highlightedText}>
                  Discover delicious recipes with the {" "}
                </span>
                <span className={styles.accentText}>
                  ingredients you have.
                </span>
                <span className={styles.highlightedText}>
                  {" "} The easiest way to find your next meal.
                </span>
              </p>
            </div>
            <button className={styles.exploreButton} onClick={() => {}}>Explore Recipes</button>
          </div>
        </div>
      </div>
    </section>
  );
}