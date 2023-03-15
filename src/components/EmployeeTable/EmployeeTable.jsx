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

  const deleteById = (id) => {
    employeeApiService.deleteById(id);
    setEmployeeTable(employeeTable.filter((employee) => employee.id !== id));
  };

  return (
    <div className={styles.employeeTableContainer}>
      <table className={styles.employeeTable}>
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
      </table>
    </div>
  );
}
