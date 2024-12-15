import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={s.header}>
        <h3>Home</h3>
        <ul className={s.nav}>
          <NavLink to="/" className={s.link}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={s.link}>
            Contacts
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
