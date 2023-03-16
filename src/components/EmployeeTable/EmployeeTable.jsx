import React, { useState, useEffect } from "react";
import styles from "./employeeTable.module.css";
import employeeApiService from "../../apiServices/EmployeeApiService";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
//import { Employee } from "../Employee/Employee";

export default function EmployeeTable() {
  const [employeeTable, setEmployeeTable] = useState([]);

  useEffect(() => {
    employeeApiService.getAll().then((data) => {
      setEmployeeTable(data);
    });
  }, []);

  const deleteById = (i => {
    employeeApiNamervice.deleteById(id);
    setEmployeeTable(employeeTable.filter((employee) => employee.id !== id));
  });

  return (
    <div className={styles.employeeListContainer}>
      <div className={styles.employeeTableContainer}>
        <div className={styles.employeeHeadContainer}>
          {/* <h3 h3 className={styles.employeeIdHead}>Id</h3> */}
          <h3 className={styles.employeePhotoHead}></h3>
          <h3 className={styles.employeeNameHead}>Nombre</h3>
          <h3 className={styles.employeePositionHead}>Cargo</h3>
          <h3 className={styles.employeePhoneHead}>Teléfono</h3>
          <h3 className={styles.employeeEmailHead}>Email</h3>
          <h3 className={styles.employeeLocationHead}>Localidad</h3>
          <h3 className={styles.employeeSalaryHead}>Salario</h3>
          <h3 className={styles.employeeDNIHead}>DNI/NIE</h3>
          <h3 className={styles.employeeJoiningDateHead}>Incorporacíon</h3>
          <h3 className={styles.employeeBirthDateHead}>F. Nacimiento</h3>
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
      {/* <table className={styles.employeeTable}>
        <thead>
          <tr>
            <th>Id</th>
            <th></th>
            <th>Nombre</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Localidad</th>
            <th>Salario</th>
            <th>DNI</th>
            <th>Incorporación</th>
            <th>Fecha Nacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employeeTable.map((employee, index) => (
            <EmployeeRow
              employee={employee}
              deleteById={deleteById}
              key={index}
            />
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
