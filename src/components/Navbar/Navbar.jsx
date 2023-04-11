import React from "react";
//import { NavbarDiv } from './Navbar.styled'
import styles from "./navbar.module.css";
import logo from "../../assets/Logo.png";
// import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { authed, logout } = useAuth();
  return (
    //<NavbarDiv>
    <div className={styles.divContenedor}>
      <div className={styles.divLogo}>
        <img className={styles.imgLogo} src={logo} alt="logoHR"></img>
      </div>
      <div className={styles.divTitle}>
        <h1 className={styles.h1Title}>HR App</h1>
      </div>
      <div className={styles.divHamburguesa}>
        {/* <GiHamburgerMenu className={styles.hamburgerIcon} /> */}
        {!authed ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/" onClick={async () => logout()}>
            Logout
          </Link>
        )}
      </div>
    </div>

    //</NavbarDiv>
  );
}
