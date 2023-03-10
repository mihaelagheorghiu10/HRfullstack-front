import React, { useState, useEffect } from "react";
import styles from "./employeeList.module.css";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import defaultphoto from "../../assets/pngfind.com-privacy-icon-png-4703547.png";
import employeeApiService from "../../apiServices/EmployeeApiService";
import { Employee } from "../Employee/Employee";

export default function EmployeeList() {
    
    

    const [employeeList, setEmployeeList] = useState([]);
    
    useEffect(() => {
        employeeApiService.getAll().then((data) => {
          setEmployeeList(data);
        });
      }, []);
    
  return (
    <div className = {styles.employeeListContainer}>
      {employeeList.map((employee, index)=> (
        <Employee employee={employee} key={index} />
      ))}
    </div>
  );
}
