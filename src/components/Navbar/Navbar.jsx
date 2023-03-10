import React from 'react'
//import { NavbarDiv } from './Navbar.styled'
import styles from './navbar.module.css'
import logo from '../../assets/Logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
export default function Navbar() {
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
        <GiHamburgerMenu className={styles.hamburgerIcon} />
      </div>
    </div>
    //</NavbarDiv>
  )
}
