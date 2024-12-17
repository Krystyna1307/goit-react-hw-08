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
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label}>
            Email
            <Field name="email" />
          </label>
          <label>
            Password
            <Field name="password" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
