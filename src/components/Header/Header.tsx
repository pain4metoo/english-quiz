import React from "react";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

const Header = (props: any) => {
  const showHeader = () => {
    if (props.isAuthName && props.isAuthLevel) {
      return <Navbar />;
    }
  };

  const welcomeLogo = () => {
    if (props.isAuthName && props.isAuthLevel) {
      return "";
    }

    return styles.header_logo_fix;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_inner}>
          <NavLink
            to="/profile"
            className={`${styles.header_logo} ${welcomeLogo()}`}
          >
            EN.CL
          </NavLink>
          <nav className={styles.menu}>{showHeader()}</nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
