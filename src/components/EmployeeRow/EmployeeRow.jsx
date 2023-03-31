import React from "react";
import styles from "./employeeRow.module.css";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function EmployeeRow({
  employee,
  deleteById,
  index,
  editByIndex,
}) {
  return (
    <div className={styles.employeeRowContainer}>
      <p className={styles.employeeId}>{employee.id}</p>
      <div className={styles.tableImgContainer}>
        <img
          className={styles.tableImg}
          src={employee.photo}
          alt={`Foto ${employee.name} ${employee.lastName}`}
        />
      </div>
      <p
        className={styles.employeeName}
      >{`${employee.name} ${employee.lastName}`}</p>
      <p className={styles.employeePosition}>{employee.position}</p>
      <p className={styles.employeeDepartment}>{employee.department?.name}</p>
      <p className={styles.employeePhone}>{employee.phone}</p>
      <p className={styles.employeeEmail}>{employee.email}</p>
      <p className={styles.employeeLocation}>{employee.location}</p>
      <p className={styles.employeeSalary}>{employee.salary}</p>
      <p className={styles.employeeDNI}>{employee.dni}</p>
      <p className={styles.employeeJoiningDate}>
        {new Date(employee.joiningDate).toLocaleDateString("es-ES")}
      </p>
      <p className={styles.employeeBirthDate}>
        {new Date(employee.birthDate).toLocaleDateString("es-ES")}
      </p>
      <div className={styles.employeeButtons}>
        <MdEdit
          onClick={() => editByIndex(index)}
          className={`${styles.actionButton} ${styles.editButton}`}
        />
        <MdDeleteForever
          className={`${styles.actionButton} ${styles.deleteButton}`}
          onClick={() => deleteById(employee.id)}
        />
      </div>
    </div>
  );
}
