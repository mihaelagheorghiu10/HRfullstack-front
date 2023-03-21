import React, { useState, useEffect } from "react";
import styles from "./employeeTable.module.css";
import employeeApiService from "../../apiServices/EmployeeApiService";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import { BsPersonFillAdd } from "react-icons/bs";
import { Link } from "react-router-dom";
import EmployeeForm from "../../Pages/Form/EmployeeForm";
//import { Employee } from "../Employee/Employee";

export default function EmployeeTable() {
  const [employeeTable, setEmployeeTable] = useState([]);
  const [formIsVisible, setFormIsVisible] = useState(false);

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
    setFormIsVisible(true);
  }

  const hideFormButton = () => {
    setFormIsVisible(false);
  }

  return (
    <div className={styles.employeeListContainer}>
      { formIsVisible ? <EmployeeForm hideFormButton = {hideFormButton}/> : null}
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
        
        {employeeTable.map((employee, index,) => (
            <EmployeeRow
              employee={employee}
              deleteById={deleteById}
              key={index}
            />
          ))}
        </div>
     
    </div>
  );
}
