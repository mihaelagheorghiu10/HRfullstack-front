import React from 'react'
import styles from './searchBar.module.css'
import { IoSearch } from 'react-icons/io5'

export default function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <IoSearch />
    </div>
  )
}
