import { React, useContext } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./employeeForm.module.css";
import defaultPhoto from "./Default.png";
import { GiCancel } from "react-icons/gi";
import employeeApiService from "../../apiServices/EmployeeApiService";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import { useContext } from "react";
import EmployeeContext from "../../context/EmployeeContext"



export default function EmployeeForm({hideFormButton, isEditMode}) {

  const { id, name, lastName, photo, position, phone, email, location, salary, joiningDate, birthDate, dni  } = useContext(EmployeeContext);
  const userToEdit = useContext(EmployeeContext);
  console.log(userToEdit)
  // console.log(example.findIndex(person=> person.id == 18));
  

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      photo: isEditMode? userToEdit.photo : defaultPhoto ,
      name: isEditMode? userToEdit.name : "" ,
      lastName: isEditMode? userToEdit.lastName : "" ,
      position: isEditMode? userToEdit.position : "",
      phone: isEditMode? userToEdit.phone : "" ,
      email: isEditMode? userToEdit.email : "" ,
      location: isEditMode? userToEdit.location : "" ,
      salary: isEditMode? userToEdit.salary : "" ,
      joiningDate: isEditMode? new Date(userToEdit.joiningDate).toLocaleTimeString("es-ES") : "" ,
      birthDate: isEditMode? new Date(userToEdit.birthDate).toLocaleTimeString("es-ES") : "",
      dni: isEditMode? userToEdit.dni : ""  


    },
    validate,
    onSubmit: (values) => {
      // Aqui se cambia la funcion para crear o editar
      //alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values));
      employeeApiService.create(values);
      navigate("/");
      
    },
  });
  return (
    <div className={styles.formPageContainer}>
      
      <div className={styles.darkBackground}></div>
      <form className={styles.formPage} onSubmit={formik.handleSubmit}>
        <div className={styles.cancelButton}><GiCancel className={styles.hideFormButton} onClick={()=>hideFormButton()}/></div>
        <h3>{isEditMode? "Editar Trabajador" : "Crear Nuevo Trabajador"}</h3>
        <div className={styles.imgColumn}>
          <div className={styles.imgContainer}>
            <img
              className={styles.employeeImg}
              src={formik.values.photo}
              alt=""
              srcset=""
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
              value= {formik.values.photo}
              
            />
            {formik.errors.photo ? (
              <div className={styles.errorToast}>{formik.errors.photo}</div>
            ) : null}
          </div>
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
            Fecha de Ingreso
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
            <div className={styles.errorToast}>{formik.errors.joiningDate}</div>
          ) : null}
        </div>
        <div className={styles.labelInput}>
          <label className={styles.formLabel} htmlFor="birthDate">
            Fecha de Nacimiento
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
          {isEditMode? "Editar" : "Crear"}
        </button>
      </form>
    </div>
  );
}

// Validation function

const validate = (values) => {
  const errors = {};

  if (!values.photo) {
    // Para cambiar
    errors.photo = "Campo requerido";
   } 
  //else if (values.photo.length > 15) {
  //   errors.photo = "Must be 15 characters or less";
  // }

  if (!values.name) {
    errors.firstName = "Campo requerido";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Campo requerido";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.dni) {
    errors.dni = "Campo requerido";
  } else if (values.dni.length > 20) {
    errors.dni = "Must be 20 characters or less";
  }

  if (!values.position) {
    errors.position = "Campo requerido";
  } else if (values.position.length > 20) {
    errors.position = "Must be 20 characters or less";
  }

  if (!values.location) {
    errors.location = "Campo requerido";
  } else if (values.location.length > 20) {
    errors.location = "Must be 20 characters or less";
  }

  if (!values.phone) {
    errors.phone = "Campo requerido";
  } else if (values.phone.length > 20) {
    errors.phone = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Campo requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.salary) {
    errors.salary = "Campo requerido";
  } else if (values.salary.length > 20) {
    errors.salary = "Must be 20 characters or less";
  }

  if (!values.joiningDate) {
    errors.joiningDate = "Campo requerido";
  } else if (values.joiningDate.length > 20) {
    errors.joiningDate = "Must be 20 characters or less";
  }

  if (!values.birthDate) {
    errors.birthDate = "Campo requerido";
  } else if (values.birthDate.length > 20) {
    errors.birthDate = "Must be 20 characters or less";
  }

  return errors;
};
