import React from "react";
import styles from "./registerPage.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";

const RegisterPage = () => {
  let registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(8, "El número mínimo de caracteres es 8")
      .max(30, "El número maximo de caracteres es 50")
      .required("Campo obligatorio"),
    email: Yup.string()
      .email("No es un email válido")
      .required("Campo obligatorio"),
    password: Yup.string()
      .min(8, "El número mínimo de caracteres es 8")
      .max(30, "El número maximo de caracteres es 30")
      .required("Campo obligatorio"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "La contraseña debe coincidir!")
      .required("Campo obligatorio"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    /*-------------------------------- SUBMIT ---------------------------------------------------*/
    onSubmit: (values) => {
      console.log(values);
      window.localStorage.setItem("register", JSON.stringify(values));
    },
  });

  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Introduce nombre de usuario..."
          className={styles.formInput}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? (
          <div className={styles.errorToast}>{formik.errors.username}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Introduce tu email..."
          className={styles.formInput}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div className={styles.errorToast}>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Introduce tu contraseña..."
          className={styles.formInput}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password ? (
          <div className={styles.errorToast}>{formik.errors.password}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirmar la contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirma tu contraseña..."
          className={styles.formInput}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword ? (
          <div className={styles.errorToast}>
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>
      <button className={styles.submitBtn} type="submit">
        Registrar
      </button>
    </form>
  );
};

export default RegisterPage;
