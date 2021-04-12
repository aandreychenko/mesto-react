import React from "react";
import { Link, Route } from "react-router-dom";
import logoPath from "../images/mesto-logo.svg";

export default function Header(props) {
  return (
      <header className="header">
        <img className="header__logo" src={logoPath} alt="Логотип 'Места'" />
        <div className="header__container">
          <Route exact path="/">
            <p className="header__info header__email">{props.email}</p>
            <Link to="/sign-in" onClick={props.logOutHandler} className="header__info">Выйти</Link>
          </Route>
          <Route path="/sign-up">
            <Link to="/sign-in" className="header__info">Войти</Link>
          </Route>
          <Route path="/sign-in">
            <Link to="/sign-up" className="header__info">Зарегистрироваться</Link>
          </Route>
        </div>
      </header>
  );
}