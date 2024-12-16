import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logIn } from "../../redux/auth/operations";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(logIn(values));
    options.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  // if (isLoggedIn) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
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
