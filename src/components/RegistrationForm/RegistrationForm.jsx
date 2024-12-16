import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res?.user?.name}`);
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("Try again...");
      });
    options.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
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
