import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import React from "react";

const LoginForm = () => {
  return (
    <div className={s.wrapper}>
      <Formik>
        <Form className={s.form}>
          <label className={s.label}>
            Email
            <Field className={s.input} name="email" />
          </label>
          <label>
            Password
            <Field className={s.input} name="password" />
          </label>

          <button type="submit" className={s.btn}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
