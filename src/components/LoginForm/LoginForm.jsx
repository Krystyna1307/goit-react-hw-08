import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(logIn(values));
    options.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
  };

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
