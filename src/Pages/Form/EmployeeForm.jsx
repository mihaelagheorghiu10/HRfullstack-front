import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./employeeForm.module.css";

export default function EmployeeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      // Aqui se cambia la funcion para crear o editar
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={styles.formPage} onSubmit={formik.handleSubmit}>
      <label className={styles.formLabel} htmlFor="photo">
        Foto
      </label>
      <input
        id="photo"
        name="photo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.photo}
      />
      {formik.errors.photo ? <div>{formik.errors.photo}</div> : null}

      <label className={styles.formLabel} htmlFor="name">
        Nombre
      </label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label className={styles.formLabel} htmlFor="lastName">
        Apellidos
      </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label className={styles.formLabel} htmlFor="dni">
        DNI/NIE
      </label>
      <input
        id="dni"
        name="dni"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.dni}
      />
      {formik.errors.dni ? <div>{formik.errors.dni}</div> : null}

      <label className={styles.formLabel} htmlFor="position">
        Cargo
      </label>
      <input
        id="position"
        name="position"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.position}
      />
      {formik.errors.position ? <div>{formik.errors.position}</div> : null}

      <label className={styles.formLabel} htmlFor="phone">
        Teléfono
      </label>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

      <label className={styles.formLabel} htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label className={styles.formLabel} htmlFor="location">
        Localidad
      </label>
      <input
        id="location"
        name="location"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.location}
      />
      {formik.errors.location ? <div>{formik.errors.location}</div> : null}

      <label className={styles.formLabel} htmlFor="salary">
        Salario
      </label>
      <input
        id="salary"
        name="salary"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.salary}
      />
      {formik.errors.salary ? <div>{formik.errors.salary}</div> : null}

      <label className={styles.formLabel} htmlFor="joiningDate">
        Fecha de Ingreso
      </label>
      <input
        id="joiningDate"
        name="joiningDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.joiningDate}
      />
      {formik.errors.joiningDate ? <div>{formik.errors.joiningDate}</div> : null}

      <label className={styles.formLabel} htmlFor="birthDate">
        Fecha de Nacimiento
      </label>
      <input
        id="birthDate"
        name="birthDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birthDate}
      />
      {formik.errors.birthDate ? <div>{formik.errors.birthDate}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
}

// Validation function

const validate = (values) => {
  const errors = {};

  if (!values.photo) {
    // Para cambiar
    errors.photo = "Required";
  } else if (values.photo.length > 15) {
    errors.photo = "Must be 15 characters or less";
  }

  if (!values.name) {
    errors.firstName = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.dni) {
    errors.dni = "Required";
  } else if (values.dni.length > 20) {
    errors.dni = "Must be 20 characters or less";
  }

  if (!values.position) {
    errors.position = "Required";
  } else if (values.position.length > 20) {
    errors.position = "Must be 20 characters or less";
  }

  if (!values.location) {
    errors.location = "Required";
  } else if (values.location.length > 20) {
    errors.location = "Must be 20 characters or less";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length > 20) {
    errors.phone = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.salary) {
    errors.salary = "Required";
  } else if (values.salary.length > 20) {
    errors.salary = "Must be 20 characters or less";
  }

  if (!values.joiningDate) {
    errors.joiningDate = "Required";
  } else if (values.joiningDate.length > 20) {
    errors.joiningDate = "Must be 20 characters or less";
  }

  if (!values.birthDate) {
    errors.birthDate = "Required";
  } else if (values.birthDate.length > 20) {
    errors.birthDate = "Must be 20 characters or less";
  }

  return errors;
};
