import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import React from "react";

const RegistrationForm = () => {
  return (
    <div className={s.wrapper}>
      <Formik>
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field className={s.input} name="name" />
          </label>

          <label className={s.label}>
            Email
            <Field className={s.input} name="email" />
          </label>
          <label className={s.label}>
            Password
            <Field className={s.input} name="password" type="password" />
          </label>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
