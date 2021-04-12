import SuccessPath from "../images/success.svg";
import DeniedPath from "../images/denied.svg";

export default function InfoTooltip(props) {
  const successTitle = 'Вы успешно зарегистрировались!';
  const failTitle = 'Что-то пошло не так!\n' +
  'Попробуйте ещё раз.';
  let imagePath = null;
  let title = null;

  if (props.status === 'success') {
    imagePath = SuccessPath;
    title = successTitle;
  } else {
    imagePath = DeniedPath;
    title = failTitle;
  }

  return (
    <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div
          className={`popup__container popup__container_info`}
          name='success'>
        <img className={`popup__image_info`} src={imagePath} alt={'Message icon'} />
        <h3 className={`popup__heading popup__heading_info`}>{title}</h3>
        <button
            onClick={props.onClose}
            type="button"
            name="close-button"
            className={`popup__close-icon`}
            aria-label={`Закрыть окно подтверждения`}>
        </button>
      </div>
    </div>
  )
}