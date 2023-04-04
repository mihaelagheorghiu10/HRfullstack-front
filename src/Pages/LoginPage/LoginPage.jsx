import React, { useState } from 'react'
import styles from './loginPage.module.css'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const LoginPage = () => {
  let loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('No es un email válido')
      .required('Campo obligatorio'),
    password: Yup.string()
      .min(8, 'El número mínimo de caracteres es 8')
      .max(30, 'El número maximo de caracteres es 30')
      .required('Campo obligatorio'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    /*-------------------------------- SUBMIT ---------------------------------------------------*/
    onSubmit: (values) => {
      console.log(values)
      window.localStorage.setItem('login', JSON.stringify(values))
    },
  })

  return (
    <form className={styles.mainContainer} onSubmit={formik.handleSubmit}>
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
      <button className={styles.submitBtn} type="submit">
        Login
      </button>
    </form>
  )
}

export default LoginPage
