import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  /* Define states for profile name and description */
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  /* State handlers */
  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  /* Context subscribing */
  const currentUser = React.useContext(CurrentUserContext);

  /* Setting context based states */
  React.useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]);

  /* Submit handler */
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description
    });
  }

  return (
  <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="profile-edit"
      title="Редактировать профиль"
      button="Сохранить"
      onSubmit={handleSubmit}>
    <label htmlFor="name-profile-edit" className="popup__container-label">
      <input
          type="text"
          name="name"
          className="popup__field popup__name popup__name_profile-edit popup__input"
          id="name-profile-edit"
          placeholder="Имя"
          aria-label="Имя профиля"
          required minLength="2"
          maxLength="40"
          value={name}
          onChange={handleChangeName}
      />
      <span className="popup__error popup__error_visible name-profile-edit-error" />
    </label>
    <label htmlFor="caption-profile-edit" className="popup__container-label">
      <input
          type="text"
          name="about"
          className="popup__field popup__caption popup__caption_profile-edit popup__input"
          id="caption-profile-edit"
          placeholder="Вид деятельности"
          aria-label="Описание профиля"
          required minLength="2"
          maxLength="200"
          value={description}
          onChange={handleChangeDescription}
      />
      <span className="popup__error popup__error_visible caption-profile-edit-error" />
    </label>
  </PopupWithForm>
  )
}
