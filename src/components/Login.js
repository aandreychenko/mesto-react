import React from "react";

export default function Login(props) {
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
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1 className="login__heading">Вход</h1>
      <label htmlFor="login-email" className="popup__container-label">
        <input
            type="email"
            name="email"
            className="login__field"
            id="login-email"
            placeholder="Email"
            aria-label="Email пользователя"
            required minLength="2"
            maxLength="40"
            value={email}
            onChange={handleChangeEmail}
        />
        <span className="popup__error popup__error_visible name-profile-edit-error" />
      </label>
      <label htmlFor="login-password" className="popup__container-label">
        <input
            type="password"
            name="password"
            className="login__field"
            id="login-password"
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
          className="login__register-button"
          aria-label="Войти">
        Войти
      </button>
    </form>
  )
}
