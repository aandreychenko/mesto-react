import React from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
  /* Define states for email and password */
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  /* State handlers */
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  /* Submit handler */
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      email: email,
      password: password
    });
    console.log(`Register.js email and pw: ${email}, ${password}`);
  }

  return (
    <form className="register" onSubmit={handleSubmit} noValidate>
      <h1 className="register__heading">Регистрация</h1>
      <label htmlFor="registration-email" className="popup__container-label">
        <input
            type="email"
            name="email"
            className="register__field"
            id="registration-email"
            placeholder="Email"
            aria-label="Email пользователя"
            required minLength="2"
            maxLength="40"
            value={email}
            onChange={handleChangeEmail}
        />
        <span className="popup__error popup__error_visible name-profile-edit-error" />
      </label>
      <label htmlFor="registration-password" className="popup__container-label">
        <input
            type="password"
            name="password"
            className="register__field"
            id="registration-password"
            placeholder="Пароль"
            aria-label="Пароль пользователя"
            required minLength="2"
            maxLength="40"
            value={password}
            onChange={handleChangePassword}
        />
        <span className="popup__error popup__error_visible name-profile-edit-error" />
      </label>
      <button
          type="submit"
          className="register__register-button"
          aria-label="Зарегистрироваться">
        Зарегистрироваться
      </button>
      <p className="register__login-invitation">Уже зарегистрированы? <Link to="/sign-in" className="register__login-invitation-link">Войти</Link></p>
    </form>
  )
}