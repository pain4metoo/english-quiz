import React from "react";
import styles from "./Header.module.scss";
import NavbarContainer from "./Navbar/NavbarContainer";
import { NavLink } from "react-router-dom";

const Header = (props: any) => {
  const showHeader = () => {
    if (props.isAuthName && props.isAuthLevel) {
      return <NavbarContainer />;
    }
  };

  return (
    <header className={styles.header}>
      <div
        className={
          props.isAuthName && props.isAuthLevel ? styles.container : ""
        }
      >
        <div
          className={`${
            props.isAuthName && props.isAuthLevel
              ? styles.header_inner
              : styles.header_logo_position
          }`}
        >
          <NavLink to="/profile" className={styles.header_logo}>
            EN.CL
          </NavLink>
          <nav className={styles.menu}>{showHeader()}</nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
