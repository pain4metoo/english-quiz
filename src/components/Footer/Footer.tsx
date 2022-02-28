import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <p className={styles.year}>2022</p>
        <div className={styles.authors}>
          <p className={`${styles.design} ${styles.names}`}>
            design by Yana Solovoyava
          </p>
          <p className={`${styles.developer} ${styles.names}`}>
            made by pain4metoo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
