import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <header className={s.header}>
        <h3>Home</h3>
        <ul className={s.nav}>
          <NavLink to="/register" className={s.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={s.link}>
            Log In
          </NavLink>
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
