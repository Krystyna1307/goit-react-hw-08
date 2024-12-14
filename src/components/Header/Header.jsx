import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
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
  );
};

export default Header;
