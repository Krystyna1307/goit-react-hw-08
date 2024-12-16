import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <ul className={s.nav}>
        <NavLink to="/register" className={s.link}>
          Register
        </NavLink>
        <NavLink to="/login" className={s.link}>
          Log In
        </NavLink>
      </ul>
    </div>
  );
};

export default AuthNav;
