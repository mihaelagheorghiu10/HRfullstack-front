import React, { useState } from "react";
import styles from "./searchBar.module.css";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  

  const selectorHandler = (selector) => {
    switch (selector) {
      case "Por Localidad": {
        console.log("se busca por localidad");
        break;
      }
      case "Por Posición": {
        console.log("se busca por posición");
        break;
      }
      case "Por DNI/NIE": {
        console.log("se busca por DNI");
        break;
      }
      default: {
        console.log("se busca por nombre")
        break;
      }
    }
  }
  return (
    <div className={styles.searchBarContainer}>
      <select
        className={styles.searchBarSelector}
        name="searchBy"
        id="searchBy"
        onChange={(e)=>(selectorHandler(e.target.value))}
      >
        <option>Por nombre</option>
        <option>Por Posición</option>
        <option>Por DNI/NIE</option>
        <option>Por Localidad</option>
      </select>
      <input
        className={styles.searchByNameInput}
        type="text"
        placeholder="Buscar"
        onChange={(e)=>console.log("input: " + e.target.value)}
      />
      
    </div>
  );
}
