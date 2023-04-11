import React, { useEffect, useState } from "react";
import styles from "./searchBar.module.css";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({
  selectorChangeHandler,
  inputChangeHandler,
}) {
  //const [searchBy, setSearchBy] = useState("Por nombre");

  return (
    <div className={styles.searchBarContainer}>
      <select
        className={styles.searchBarSelector}
        name="searchBy"
        id="searchBy"
        onChange={(e) => selectorChangeHandler(e.target.value)}
      >
        <option>Por Nombre</option>
        <option>Por Posición</option>
        <option>Por DNI/NIE</option>
        <option>Por Localidad</option>
      </select>
      <input
        className={styles.searchByNameInput}
        type="text"
        placeholder="Buscar"
        onChange={(e) => inputChangeHandler(e.target.value)}
      />
    </div>
  );
}
