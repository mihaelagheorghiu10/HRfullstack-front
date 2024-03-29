import { React, useContext } from "react";
import { useFormik } from "formik";
import styles from "./employeeForm.module.css";
import defaultPhoto from "./Default.png";
import { GiCancel } from "react-icons/gi";
import employeeApiService from "../../apiServices/EmployeeApiService";
import * as Yup from "yup";

import EmployeeContext from "../../context/EmployeeContext";
import departmentApiService from "../../apiServices/DepartmentApiService";

export default function EmployeeForm({
  hideFormButton,
  isEditMode,
  departmentsList,
  employeeTable,
  setEmployeeTable,
}) {
  const userToEdit = useContext(EmployeeContext);

  let userSchema = Yup.object().shape({
    photo: Yup.string().url("Debe ser una URL válida"),
    name: Yup.string()
      .required("Campo obligatorio")
      .max(30, "El número maximo de caracteres es 30"),
    lastName: Yup.string()
      .required("Campo obligatorio")
      .max(30, "El número maximo de caracteres es 30"),
    dni: Yup.string()
      .length(9, "No es un DNI/NIE válido")
      .required("Campo obligatorio"),
    position: Yup.string()
      .max(90, "El número maximo de caracteres es 90")
      .required("Campo obligatorio"),
    phone: Yup.string()
      .max(15, "El número maximo no debe exceder 15 dígitos")
      .required("Campo obligatorio"),
    email: Yup.string()
      .email("No es un email válido")
      .required("Campo obligatorio"),
    location: Yup.string()
      .min(2, "Nombre de localidad demasiado corto")
      .max(50, "Nombre de localidad demasiado largo")
      .required("Campo obligatorio"),
    salary: Yup.number()
      .test(
        "Es positivo?",
        "El número debe ser mayor a 0",
        (value) => value > 0
      )
      .required("Campo obligatorio"),
    joiningDate: Yup.date()
      .max(new Date(), "La fecha no puede ser posterior a hoy")
      .required("Campo obligatorio"),
    birthDate: Yup.date()
      .max(new Date(), "La fecha no puede ser posterior a hoy")
      .test(
        "Es menor de 16?",
        "La edad mínima es de 16 años",
        function (value) {
          return (
            differenceInYears(
              new Date(formik.values.joiningDate),
              new Date(value)
            ) >= 16
          );
        }
      )
      .required("Campo obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      photo: isEditMode ? userToEdit.photo : defaultPhoto,
      name: isEditMode ? userToEdit.name : "",
      lastName: isEditMode ? userToEdit.lastName : "",
      position: isEditMode ? userToEdit.position : "",
      phone: isEditMode ? userToEdit.phone : "",
      email: isEditMode ? userToEdit.email : "",
      location: isEditMode ? userToEdit.location : "",
      salary: isEditMode ? userToEdit.salary : "",
      joiningDate: isEditMode
        ? new Date(userToEdit.joiningDate).toISOString().split("T")[0]
        : "",
      birthDate: isEditMode
        ? new Date(userToEdit.birthDate).toISOString().split("T")[0]
        : "",
      dni: isEditMode ? userToEdit.dni : "",
      department: isEditMode ? userToEdit.department.id : "1",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      const employeeDataToSend = { ...values };
      let departmentName = "";

      departmentApiService
        .getById(values.department)
        .then((dep) => (departmentName = dep.name));

      employeeDataToSend.department = {
        id: values.department,
        name: departmentName,
      };

      if (isEditMode) {
        employeeApiService
          .editById(userToEdit.id, employeeDataToSend)
          .then((emp) => {
            const newList = employeeTable.map((employee) => {
              if (employee.id === userToEdit.id) {
                return emp;
              }
              return employee;
            });
            setEmployeeTable(newList);
          });
      } else {
        employeeApiService.create(employeeDataToSend).then((emp) => {
          emp.department.name = departmentName;
          setEmployeeTable([...employeeTable, emp]);
        });
      }
      hideFormButton();
    },
  });

  return (
    <div className={styles.formPageContainer}>
      <div className={styles.darkBackground}></div>
      <form className={styles.formPage} onSubmit={formik.handleSubmit}>
        <div className={styles.cancelButton}>
          <GiCancel
            className={styles.hideFormButton}
            onClick={() => hideFormButton()}
          />
        </div>
        <h3>{isEditMode ? "Editar Trabajador" : "Crear Nuevo Trabajador"}</h3>
        <div className={styles.imgColumn}>
          <div className={styles.imgContainer}>
            <img
              className={styles.employeeImg}
              src={formik.values.photo}
              alt=""
            />
          </div>
          <div className={styles.labelInputPhoto}>
            <label className={styles.formLabel} htmlFor="photo">
              Foto
            </label>
            <input
              className={styles.formInput}
              id="photo"
              name="photo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.photo}
            />
            {formik.errors.photo ? (
              <div className={styles.errorToast}>{formik.errors.photo}</div>
            ) : null}
          </div>
        </div>
        <div className={styles.labelInputSelector}>
          <label className={styles.formLabelSelector} htmlFor="department">
            Departamento
          </label>
          <select
            className={styles.departmentSelector}
            id="department"
            value={formik.values.department}
            onChange={formik.handleChange}
          >
            {departmentsList.map((dep, index) => (
              <option key={index} value={dep.id}>
                {dep.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.nonPhotoInputs}>
          <div className={styles.labelInput}>
            <label className={styles.formLabel} htmlFor="name">
              Nombre
            </label>
            <input
              className={styles.formInput}
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <div className={styles.errorToast}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className={styles.labelInput}>
            <label className={styles.formLabel} htmlFor="lastName">
              Apellidos
            </label>
            <input
              className={styles.formInput}
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.errors.lastName ? (
              <div className={styles.errorToast}>{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div className={styles.labelInput}>
            <label className={styles.formLabel} htmlFor="dni">
              DNI/NIE
            </label>
            <input
              className={styles.formInput}
              id="dni"
              name="dni"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.dni}
            />
            {formik.errors.dni ? (
              <div className={styles.errorToast}>{formik.errors.dni}</div>
            ) : null}
          </div>
          <div className={styles.labelInput}>
            <label className={styles.formLabel} htmlFor="position">
              Cargo
            </label>
            <input
              className={styles.formInput}
              id="position"
              name="position"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.position}
            />
            {formik.errors.position ? (
              <div className={styles.errorToast}>{formik.errors.position}</div>
            ) : null}
          </div>

          <div className={styles.labelInput}>
            <label className={styles.formLabel} htmlFor="phone">
              Teléfono
            </label>
            <input
              className={styles.formInput}
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.errors.phone ? (
              <div className={styles.errorToast}>{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className={styles.labelInput}>
            <label className={styles.formLabel} htmlFor="email">
              Email
            </label>
            <input
              className={styles.formInput}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className={styles.errorToast}>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className={styles.labelInput}>
            <label className={styles.formLabel} htmlFor="location">
              Localidad
            </label>
            <input
              className={styles.formInput}
              id="location"
              name="location"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
            {formik.errors.location ? (
              <div className={styles.errorToast}>{formik.errors.location}</div>
            ) : null}
          </div>
          <div className={styles.labelInput}>
            <label className={styles.formLabel} htmlFor="salary">
              Salario
            </label>
            <input
              className={styles.formInput}
              id="salary"
              name="salary"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.salary}
            />
            {formik.errors.salary ? (
              <div className={styles.errorToast}>{formik.errors.salary}</div>
            ) : null}
          </div>

          <div className={styles.labelInput}>
            <label className={styles.formLabel} htmlFor="joiningDate">
              Incorporación
            </label>
            <input
              className={styles.formInput}
              id="joiningDate"
              name="joiningDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.joiningDate}
            />
            {formik.errors.joiningDate ? (
              <div className={styles.errorToast}>
                {formik.errors.joiningDate}
              </div>
            ) : null}
          </div>
          <div className={styles.labelInput}>
            <label className={styles.formLabel} htmlFor="birthDate">
              Nacimiento
            </label>
            <input
              className={styles.formInput}
              id="birthDate"
              name="birthDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.birthDate}
            />
            {formik.errors.birthDate ? (
              <div className={styles.errorToast}>{formik.errors.birthDate}</div>
            ) : null}
          </div>
        </div>

        <button className={styles.submitButton} type="submit">
          {isEditMode ? "Editar" : "Crear"}
        </button>
      </form>
    </div>
  );
}

// BirthDate Validation
const differenceInYears = (now, birthdate) => {
  const ONE_DAY_IN_MILLIS = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(
    Math.abs((now.getTime() - birthdate.getTime()) / ONE_DAY_IN_MILLIS)
  );
  const diffYears = Math.ceil(diffDays / 366);
  return diffYears;
};
