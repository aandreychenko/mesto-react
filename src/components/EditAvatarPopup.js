import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
  /* Creating input reference */
  const avatar = React.useRef();

  /* Submit handler */
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      link: avatar.current.value
    });
    avatar.current.value = '';
  }

  return (
      <PopupWithForm
          isOpen={props.isOpen}
          onClose={props.onClose}
          name="user-image"
          title="Обновить аватар"
          button="Сохранить"
          onSubmit={handleSubmit}>
        <label htmlFor="link-user-image" className="popup__container-label">
          <input
              type="url"
              name="link"
              className="popup__field popup__caption popup__caption_user-image popup__input"
              id="link-user-image"
              placeholder="Ссылка на картинку"
              aria-label="Ссылка на картинку"
              required minLength="1"
              ref={avatar}
          />
          <span className="popup__error popup__error_visible link-user-image-error" />
        </label>
      </PopupWithForm>
  )
}
