import React from 'react'
import { NavbarDiv } from './Navbar.styled'

export default function Navbar() {
  return (
    <NavbarDiv>
      <div className="divLogo">
        <img src="" alt="logoHR"></img>
      </div>
      <div className="divSearch">
        <input className="searcher"></input>
        <button className="buttonSearch"></button>
      </div>
      <div className="divHamburguesa">
        <button className="buttonHamburguesa"></button>
      </div>
    </NavbarDiv>
  )
}
