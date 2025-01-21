// AboutUs.jsx

import React from "react";
import styles from "./AboutUs.module.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
          <div className={styles.container}>
            <h1 className={styles.heading}>About Us</h1>
            <p className={styles.paragraph}>
              Welcome to <strong>[Your Website Name]</strong>, your ultimate companion for discovering delicious recipes tailored to your tastes and needs. Whether you’re a seasoned chef, a busy parent, or a culinary novice, we’re here to make cooking simple, fun, and accessible for everyone.
            </p>

            <section className={styles.section}>
              <h2 className={styles.subheading}>Our Mission</h2>
              <p className={styles.paragraph}>
                Our mission is to inspire creativity in the kitchen and bring people together through the joy of food. We believe that cooking should be easy and enjoyable, and we’re committed to helping you find recipes that suit your preferences, dietary needs, and the ingredients you already have on hand.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.subheading}>Our Story</h2>
              <p className={styles.paragraph}>
                <strong>[Your Website Name]</strong> was born out of a love for food and a passion for making meal preparation easier. As food enthusiasts, we often faced the challenge of finding recipes that matched our busy schedules and available pantry items. This sparked the idea for a platform that simplifies the process, empowering home cooks to create amazing meals without the hassle.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.subheading}>What We Offer</h2>
              <ul className={styles.list}>
                <li>Smart Recipe Search: Find recipes based on ingredients, dietary restrictions, and cooking times.</li>
                <li>Personalized Recommendations: Enjoy suggestions tailored to your taste preferences.</li>
                <li>Community-Driven Content: Explore recipes shared by fellow food lovers and share your own creations.</li>
                <li>Meal Planning Made Easy: Save and organize your favorite recipes into meal plans.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.subheading}>Our Values</h2>
              <p className={styles.paragraph}>
                At <strong>[Your Website Name]</strong>, we’re guided by these principles:
              </p>
              <ul className={styles.list}>
                <li>Inclusivity: We celebrate all cuisines and cater to diverse dietary needs.</li>
                <li>Sustainability: Encouraging the use of local, seasonal, and sustainable ingredients.</li>
                <li>Creativity: Inspiring innovation and fun in the kitchen.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.subheading}>Join Our Community</h2>
              <p className={styles.paragraph}>
                Be part of a vibrant community of food lovers who share tips, recipes, and inspiration. Whether you’re looking for a quick weekday dinner or an elaborate weekend feast, you’ll find everything you need right here.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.subheading}>Get Started</h2>
              <p className={styles.paragraph}>
                Ready to begin your culinary adventure? Start exploring now and discover recipes that will delight your taste buds and make every meal memorable.
              </p>
            </section>
          </div>
        </motion.div>
    
  );
};

export default AboutUs;
