import React, { useState, useEffect } from "react";
import styles from "./employeeTable.module.css";
import employeeApiService from "../../apiServices/EmployeeApiService";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import { BsPersonFillAdd } from "react-icons/bs";
import { Link } from "react-router-dom";
import EmployeeForm from "../../Pages/Form/EmployeeForm";
//import { Employee } from "../Employee/Employee";
import EmployeeContext from "../../context/EmployeeContext";

export default function EmployeeTable() {
  const [employeeTable, setEmployeeTable] = useState([]);
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [indexToEdit, setIndexToEdit] = useState(null);

  const userData = {
    id: 1,
    name: "hola",
    lastName: "bola",
    photo: "esta",
    position: "hola",
    phone: "141234",
    email: "nu132412ll",
    location: "3ggdfa",
    salary: 1232131,
    joiningDate: "asdf123",
    birthDate: "nul123l",
    dni: "null",
  };

  useEffect(() => {
    employeeApiService.getAll().then((data) => {
      setEmployeeTable(data);
    });
  }, []);

  const deleteById = (id) => {
    employeeApiService.deleteById(id);
    setEmployeeTable(employeeTable.filter((employee) => employee.id !== id));
  };

  const showFormButton = () => {
    // setIsEditMode(false);
    setFormIsVisible(true);
  }

  const hideFormButton = () => {
    setFormIsVisible(false);
    setIsEditMode(false);
  }

  const editByIndex = (index) => {
    setIsEditMode(true);
    setIndexToEdit(index);
    showFormButton();
    console.log(employeeTable);
    console.log(index);
    console.log(new Date("1987-07-04T22:00:00.000+00:00").toISOString())
  }

  return (
    <EmployeeContext.Provider value = {isEditMode? employeeTable[indexToEdit] : []}>
    <div className={styles.employeeListContainer}>
      { formIsVisible ? <EmployeeForm isEditMode = {isEditMode} indexToEdit = {indexToEdit} hideFormButton = {hideFormButton}/> : null}
      <div className={styles.employeeTableContainer}>
        <div className={styles.employeeHeadContainer}>
          <h3 h3 className={styles.employeeIdHead}><BsPersonFillAdd className= {styles.showFormButton} onClick={()=>showFormButton()}/></h3>
          <h3 className={styles.employeeAddBtn}></h3>
          <h3 className={styles.employeeNameHead}>Nombre</h3>
          <h3 className={styles.employeePositionHead}>Cargo</h3>
          <h3 className={styles.employeePhoneHead}>Teléfono</h3>
          <h3 className={styles.employeeEmailHead}>Email</h3>
          <h3 className={styles.employeeLocationHead}>Localidad</h3>
          <h3 className={styles.employeeSalaryHead}>Salario</h3>
          <h3 className={styles.employeeDNIHead}>DNI/NIE</h3>
          <h3 className={styles.employeeJoiningDateHead}>Incorporacíon</h3>
          <h3 className={styles.employeeBirthDateHead}>Nacimiento</h3>
          <h3 className={styles.employeeActionsHead}>Acciones</h3>
        </div>
        
        {employeeTable.map((employee, index) => (
            <EmployeeRow
              employee={employee}
              deleteById={deleteById}
              key={index}
              index = {index}
              indexToEdit = {indexToEdit}
              editByIndex = {editByIndex}
            />
          ))}
        </div>
     
    </div>
    </EmployeeContext.Provider>
  );
}
