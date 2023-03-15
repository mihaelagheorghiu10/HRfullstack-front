import React from "react";
import styles from "./employeeRow.module.css";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function EmployeeRow({ employee, deleteById }) {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>
        <img
          src={employee.photo}
          alt={`Foto ${employee.name} ${employee.lastName}`}
        />
      </td>
      <td>{`${employee.name} ${employee.lastName}`}</td>
      <td>{employee.position}</td>
      <td>{employee.phone}</td>
      <td>{employee.email}</td>
      <td>{employee.location}</td>
      <td>{employee.salary}</td>
      <td>{employee.dni}</td>
      <td>{employee.joiningDate}</td>
      <td>{employee.birthDate}</td>
      <td>
        <MdEdit className={`${styles.actionButton} ${styles.editButton}`} />
        <MdDeleteForever
          className={`${styles.actionButton} ${styles.deleteButton}`}
          onClick={() => deleteById(employee.id)}
        />
      </td>
    </tr>
  );
}
