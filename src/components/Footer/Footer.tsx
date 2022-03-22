import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props: any) => {
  const theme = (tag: string) => {
    if (tag === "footer") {
      if (props.theme) {
        return styles.footer_light;
      } else {
        return styles.footer_dark;
      }
    } else if (tag === "names") {
      if (props.theme) {
        return styles.names_light;
      } else {
        return styles.names_dark;
      }
    } else if (tag === "year") {
      if (props.theme) {
        return styles.year_light;
      } else {
        return styles.year_dark;
      }
    }
  };

  return (
    <footer className={`${styles.footer} ${theme("footer")}`}>
      <div className={styles.footer_inner}>
        <p className={`${styles.year} ${theme("year")}`}>2022</p>
        <div className={styles.authors}>
          <a
            className={`${styles.design} ${styles.names} ${theme("names")}`}
            href="https://www.behance.net/yanasolovyfac9/moodboards"
            target="blank"
          >
            design by Yana Solovyova
          </a>
          <a
            className={`${styles.developer} ${styles.names} ${theme("names")}`}
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
