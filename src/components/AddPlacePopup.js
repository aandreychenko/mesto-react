import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  /* Creating input references */
  const name = React.useRef();
  const link = React.useRef();

  /* Submit handler */
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({name: name.current.value, link: link.current.value});
    name.current.value = '';
    link.current.value = '';
  }

  return (
      <PopupWithForm
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
          name="add-place"
          title="Новое место"
          button="Создать">
        <label htmlFor="name-add-place" className="popup__container-label">
          <input
              type="text"
              name="name"
              className="popup__field popup__name popup__name_add-place popup__input"
              id="name-add-place"
              placeholder="Название"
              aria-label="Название"
              required minLength="2"
              maxLength="30"
              ref={name} />
          <span className="popup__error popup__error_visible name-add-place-error" />
        </label>
        <label htmlFor="caption-add-place" className="popup__container-label">
          <input
              type="url"
              name="link"
              className="popup__field popup__caption popup__caption_add-place popup__input"
              id="caption-add-place"
              placeholder="Ссылка на картинку"
              aria-label="Ссылка на картинку"
              required minLength="1"
              ref={link} />
          <span className="popup__error popup__error_visible caption-add-place-error" />
        </label>
      </PopupWithForm>
  )
}
