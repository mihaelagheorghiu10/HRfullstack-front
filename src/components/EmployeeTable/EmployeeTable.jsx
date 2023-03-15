import React, { useState, useEffect } from 'react'
import styles from './employeeTable.module.css'
import employeeApiService from '../../apiServices/EmployeeApiService'
import EmployeeRow from '../EmployeeRow/EmployeeRow'
//import { Employee } from "../Employee/Employee";

export default function EmployeeTable() {
  const [employeeTable, setEmployeeTable] = useState([])

  useEffect(() => {
    employeeApiService.getAll().then((data) => {
      setEmployeeTable(data)
    })
  }, [])

  return (
    <div>
      <table className={styles.employeeTableContainer}>
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
            <EmployeeRow employee={employee} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
