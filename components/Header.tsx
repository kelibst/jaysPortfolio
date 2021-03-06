import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.profileSection}>
        <div className={styles.logoContainer}>
          <a href="/profile.jpeg" target="_blank" rel="noopener noreferrer">
            <Image
              src="/profile.jpeg"
              alt="Jays profile pic"
              style={{ borderRadius: "100px", maxWidth: "100%" }}
              layout="fill"
            />
          </a>
        </div>

        <h3 className={styles.headerTxt}>Felix Aryeetey</h3>
      </div>

      <nav className={styles.menu}>
        <ul>
          <li>
            <a href="#design">Design</a>
          </li>

          <li>
            <a href="#photography">Photography</a>
          </li>

          <li>
            <a href="#photography">Videography</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
