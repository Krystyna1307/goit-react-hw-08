import React from "react";
import s from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
