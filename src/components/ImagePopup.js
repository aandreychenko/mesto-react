export default function ImagePopup(props) {
  return (
      <div className={`popup popup_image ${props.link && 'popup_opened'}`}>
        <div className="popup__container popup__container_image">
          <img className="popup__image" src={props.link} alt="Фотография места" />
          <p className="popup__image-caption">{props.name}</p>
          <button
              onClick={props.onClose}
              type="button"
              name="close-button"
              className="popup__close-icon popup__close-icon_image"
              aria-label="Закрыть картинку"
          ></button>
        </div>
      </div>
  )
}
