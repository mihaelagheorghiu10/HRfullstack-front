import React, { useState, useEffect } from "react";
import styles from "./employeeTable.module.css";
import employeeApiService from "../../apiServices/EmployeeApiService";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import { BsPersonFillAdd } from "react-icons/bs";
import { Link } from "react-router-dom";
//import { Employee } from "../Employee/Employee";
import EmployeeContext from "../../context/EmployeeContext";

export default function EmployeeTable() {
  const [employeeTable, setEmployeeTable] = useState([]);

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

  return (
    <EmployeeContext.Provider value={userData}>
    <div className={styles.employeeListContainer}>
      <div className={styles.employeeTableContainer}>
        <div className={styles.employeeHeadContainer}>
          {/* <h3 h3 className={styles.employeeIdHead}>Id</h3> */}
          <h3 className={styles.employeeAddBtn}><Link to={'/employees/form/'}><BsPersonFillAdd/></Link></h3>
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
    </EmployeeContext.Provider>
  );
}
