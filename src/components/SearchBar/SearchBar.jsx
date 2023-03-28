import React from 'react'
import styles from './searchBar.module.css'
import { IoSearch } from 'react-icons/io5'

export default function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <select className={styles.searchBarSelector} name="searchBy" id="searchBy">
        <option>Por nombre</option>
        <option>Por Posición</option>
        <option>Por DNI/NIE</option>
        <option>Por Localidad</option>

      </select>
      <input className={styles.searchByNameInput}type="text" placeholder="Buscar" />
      {/* <IoSearch className={styles.searchIcon}/> */}
    </div>
  )
}
