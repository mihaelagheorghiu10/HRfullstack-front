import React from 'react'
//import { NavbarDiv } from './Navbar.styled'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    //<NavbarDiv>
    <div className={styles.divContenedor}>
      <div className={styles.divLogo}>
        <img src="" alt="logoHR"></img>
      </div>
      <div className={styles.divTitle}>
        <h1 className={styles.h1Title}>HR App</h1>
      </div>
      <div className={styles.divHamburguesa}>
        <button className={styles.buttonHamburguesa}></button>
      </div>
    </div>
    //</NavbarDiv>
  )
}
