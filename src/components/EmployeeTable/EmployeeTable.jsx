import React, { useState, useEffect } from "react";
import styles from "./employeeTable.module.css";
import employeeApiService from "../../apiServices/EmployeeApiService";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import { BsPersonFillAdd } from "react-icons/bs";
import EmployeeForm from "../../Pages/Form/EmployeeForm";
import EmployeeContext from "../../context/EmployeeContext";
import departmentApiService from "../../apiServices/DepartmentApiService";
import SearchBar from "../SearchBar/SearchBar";

export default function EmployeeTable() {
  const [employeeTable, setEmployeeTable] = useState([]);
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [indexToEdit, setIndexToEdit] = useState(null);
  const [departmentsList, setDepartmentsList] = useState([]);
  const [filterBy, setFilterBy] = useState("Por Nombre");

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    employeeApiService.getAll().then((data) => {
      setEmployeeTable(data);
    });
    departmentApiService.getAll().then((data) => {
      setDepartmentsList(data);
    });
  };

  const deleteById = (id) => {
    employeeApiService.deleteById(id);
    setEmployeeTable(employeeTable.filter((employee) => employee.id !== id));
  };

  const showFormButton = () => {
    setFormIsVisible(true);
  };

  const hideFormButton = () => {
    setFormIsVisible(false);
    setIsEditMode(false);
  };

  const editByIndex = (index) => {
    setIsEditMode(true);
    setIndexToEdit(index);
    showFormButton();
  };

  const selectorChangeHandler = (selector) => {
    switch (selector) {
      case "Por Localidad": {
        setFilterBy(selector);
        break;
      }
      case "Por Posición": {
        setFilterBy(selector);
        break;
      }
      case "Por DNI/NIE": {
        setFilterBy(selector);
        break;
      }
      case "Por Nombre": {
        setFilterBy(selector);
        break;
      }
      default: {
        setFilterBy("Por Nombre");
      }
    }
  };

  const inputChangeHandler = (input) => {
    switch (filterBy) {
      case "Por Localidad": {
        employeeApiService.searchBy("", "", "", input).then((data) => {
          setEmployeeTable(data);
        });
        break;
      }
      case "Por Posición": {
        employeeApiService.searchBy("", "", input, "").then((data) => {
          setEmployeeTable(data);
        });

        break;
      }
      case "Por DNI/NIE": {
        employeeApiService.searchBy("", input, "", "").then((data) => {
          setEmployeeTable(data);
        });
        break;
      }
      case "Por Nombre": {
        employeeApiService.searchBy(input, "", "", "").then((data) => {
          setEmployeeTable(data);
        });
        break;
      }
      default: {
        console.error(`${filterBy} is not a valid field to filter by`);
      }
    }
  };

  return (
    <EmployeeContext.Provider
      value={isEditMode ? employeeTable[indexToEdit] : []}
    >
      <div className={styles.employeeListContainer}>
        <SearchBar
          selectorChangeHandler={selectorChangeHandler}
          inputChangeHandler={inputChangeHandler}
        />
        {formIsVisible ? (
          <EmployeeForm
            departmentsList={departmentsList}
            isEditMode={isEditMode}
            indexToEdit={indexToEdit}
            hideFormButton={hideFormButton}
            setEmployeeTable={setEmployeeTable}
            employeeTable={employeeTable}
          />
        ) : null}
        <div className={styles.employeeTableContainer}>
          <div className={styles.employeeHeadContainer}>
            <h3 className={styles.employeeIdHead}>
              <BsPersonFillAdd
                className={styles.showFormButton}
                onClick={() => showFormButton()}
              />
            </h3>
            <h3 className={styles.employeeAddBtn}> </h3>
            <h3 className={styles.employeeNameHead}>Nombre</h3>
            <h3 className={styles.employeePositionHead}>Posición</h3>
            <h3 className={styles.employeeDepartmentHead}>Departamento</h3>
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
              index={index}
              indexToEdit={indexToEdit}
              editByIndex={editByIndex}
            />
          ))}
        </div>
      </div>
    </EmployeeContext.Provider>
  );
}
