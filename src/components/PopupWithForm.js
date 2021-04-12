export default function PopupWithForm(props) {
  return (
      <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
        <form
            className={`popup__container popup__container_${props.name} popup__form`}
            name={props.name}
            noValidate
            onSubmit={props.onSubmit}
        >
          <h3 className={`popup__heading popup__heading_${props.name}`}>{props.title}</h3>
          {props.children}
          <button
              type="submit"
              name="submit-button"
              className={`popup__submit-button popup__submit-button_${props.name} popup__button popup__button_enabled`}
              aria-labelledby="popup__submit-button">
            {props.button}
          </button>
          <button
              onClick={props.onClose}
              type="button"
              name="close-button"
              className={`popup__close-icon popup__close-icon_${props.name}`}
              aria-label="Закрыть форму редактирования профиля">
          </button>
        </form>
      </div>
  )
}
