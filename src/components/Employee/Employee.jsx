import React from "react";
import styles from "./employee.module.css";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export const Employee = ({ employee }) => {
  return (
    <div className={styles.employeeCardContainer}>
      <div className={styles.employeeImgContainer}>
        <img
          className={styles.employeeImg}
          src={employee.photo}
          alt={`Foto ${employee.name} ${employee.lastName}`}
        />
      </div>
      <div className={styles.employeeInfoAndBtnContainer}>
        <div className={styles.employeeInfoContainer}>
          <div className={styles.nameContainer}>
            <h4 className={styles.infoTitle}>Nombre: </h4>
            <p
              className={styles.enployeeName}
            >{`${employee.name} ${employee.lastName}`}</p>
          </div>
          <div className={styles.positionContainer}>
            <h4 className={styles.infoTitle}>Cargo: </h4>
            <p className={styles.enployeePosition}>{`${employee.position}`}</p>
          </div>
        </div>
        <div className={styles.employeeBtnContainer}>
          <MdEdit className={styles.editButton} />
          <MdDeleteForever className={styles.deleteButton} />
        </div>
      </div>
    </div>
  );
};
