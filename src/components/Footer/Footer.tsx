import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <p className={styles.year}>2022</p>
        <div className={styles.authors}>
          <a
            className={`${styles.design} ${styles.names}`}
            href="https://www.behance.net/yanasolovyfac9/moodboards"
            target="blank"
          >
            design by Yana Solovyova
          </a>
          <a
            className={`${styles.developer} ${styles.names}`}
            href="https://github.com/pain4metoo"
            target="blank"
          >
            made by pain4metoo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
