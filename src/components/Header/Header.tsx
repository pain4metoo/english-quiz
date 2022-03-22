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

  const welcomeLogo = () => {
    if (props.isAuthName && props.isAuthLevel) {
      return styles.container;
    }

    return "";
  };

  const changeLogo = () => {
    if (props.isAuthName && props.isAuthLevel) {
      return "";
    }

    return styles.header_logo_fix;
  };

  const theme = (tag: string) => {
    if (tag === "header") {
      if (props.theme) {
        return styles.header_light;
      } else {
        return styles.header_dark;
      }
    } else if (tag === "logo") {
      if (props.theme) {
        return styles.header_logo_light;
      } else {
        return styles.header_logo_dark;
      }
    }
  };

  return (
    <header className={`${styles.header} ${theme("header")}`}>
      <div className={welcomeLogo()}>
        <div className={`${styles.header_inner} ${changeLogo()}`}>
          <NavLink
            to="/profile"
            className={`${styles.header_logo} ${theme("logo")}`}
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
