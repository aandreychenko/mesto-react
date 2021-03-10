import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className='page__content'>
        <div className="page">
          <Header />
          <Main />
          <Footer />
          <div className="popup popup_profile-edit">
            <form className="popup__container popup__container_profile-edit popup__form" name="profile-edit" noValidate>
              <h3 className="popup__heading popup__heading_profile-edit">Редактировать профиль</h3>
              <label htmlFor="name-profile-edit" className="popup__container-label">
                <input type="text" name="name"
                       className="popup__field popup__name popup__name_profile-edit popup__input" id="name-profile-edit"
                       placeholder="Имя" aria-label="Имя профиля" required minLength="2" maxLength="40" />
                  <span className="popup__error popup__error_visible name-profile-edit-error"></span>
              </label>
              <label htmlFor="caption-profile-edit" className="popup__container-label">
                <input type="text" name="about"
                       className="popup__field popup__caption popup__caption_profile-edit popup__input"
                       id="caption-profile-edit" placeholder="Вид деятельности" aria-label="Описание профиля" required
                       minLength="2" maxLength="200" />
                  <span className="popup__error popup__error_visible caption-profile-edit-error"></span>
              </label>
              <button type="submit" name="submit-button"
                      className="popup__submit-button popup__submit-button_profile-edit popup__button popup__button_disabled"
                      id="popup__submit-button" aria-labelledby="popup__submit-button">Сохранить
              </button>
              <button type="button" name="close-button" className="popup__close-icon popup__close-icon_profile-edit"
                      aria-label="Закрыть форму редактирования профиля"></button>
            </form>
          </div>
          <div className="popup popup_add-place">
            <form className="popup__container popup__container_add-place popup__form" name="add-place" noValidate>
              <h3 className="popup__heading popup__heading_add-place">Новое место</h3>
              <label htmlFor="name-add-place" className="popup__container-label">
                <input type="text" name="name" className="popup__field popup__name popup__name_add-place popup__input"
                       id="name-add-place" placeholder="Название" aria-label="Название" required minLength="2"
                       maxLength="30" />
                  <span className="popup__error popup__error_visible name-add-place-error"></span>
              </label>
              <label htmlFor="caption-add-place" className="popup__container-label">
                <input type="url" name="link"
                       className="popup__field popup__caption popup__caption_add-place popup__input"
                       id="caption-add-place" placeholder="Ссылка на картинку" aria-label="Ссылка на картинку" required
                       minLength="1" />
                  <span className="popup__error popup__error_visible caption-add-place-error"></span>
              </label>
              <button type="submit" name="submit-place-button"
                      className="popup__submit-button popup__submit-button_add-place popup__button popup__button_disabled"
                      id="popup__submit-place-button" aria-labelledby="popup__submit-button">Создать
              </button>
              <button type="button" name="close-button" className="popup__close-icon popup__close-icon_add-place"
                      aria-label="Закрыть форму добавления места"></button>
            </form>
          </div>
          <div className="popup popup_image">
            <div className="popup__container popup__container_image">
              <img className="popup__image" src="#" alt="Фотография места" />
                <p className="popup__image-caption"></p>
                <button type="button" name="close-button" className="popup__close-icon popup__close-icon_image"
                        aria-label="Закрыть  картинку"></button>
            </div>
          </div>
          <div className="popup popup_user-image">
            <form className="popup__container popup__container_user-image popup__form" name="user-image" noValidate>
              <h3 className="popup__heading popup__heading_user-image">Обновить аватар</h3>
              <label htmlFor="link-user-image" className="popup__container-label">
                <input type="url" name="link"
                       className="popup__field popup__caption popup__caption_user-image popup__input"
                       id="link-user-image" placeholder="Ссылка на картинку" aria-label="Ссылка на картинку" required
                       minLength="1" />
                  <span className="popup__error popup__error_visible link-user-image-error"></span>
              </label>
              <button type="submit" name="submit-avatar-button"
                      className="popup__submit-button popup__submit-button_user-image popup__button popup__button_disabled"
                      id="popup__submit-avatar-button" aria-labelledby="popup__submit-button">Сохранить
              </button>
              <button type="button" name="close-button" className="popup__close-icon popup__close-icon_user-image"
                      aria-label="Закрыть форму загрузки аватара"></button>
            </form>
          </div>
          <div className="popup popup_card-delete">
            <form className="popup__container popup__container_card-delete popup__form" name="card-delete" noValidate>
              <h3 className="popup__heading popup__heading_card-delete">Вы уверены?</h3>
              <button type="submit" name="submit-button"
                      className="popup__submit-button popup__submit-button_card-delete popup__button"
                      id="popup__delete-button" aria-labelledby="popup__delete-button">Да
              </button>
              <button type="button" name="close-button" className="popup__close-icon popup__close-icon_card-delete"
                      aria-label="Закрыть попап подтверждения удаления карточки"></button>
            </form>
          </div>
        </div>
        <template id="element">
          <article className="element">
            <img className="element__image" src="#" alt="Фотография места"/>
              <div className="element__info">
                <h2 className="element__place-name"></h2>
                <div className="element__like-block">
                  <button type="button" className="element__like-button"></button>
                  <p className="element__like-counter">0</p>
                </div>
              </div>
              <button type="button" className="element__trash-button"></button>
          </article>
        </template>
      </div>
    </div>
  );
}

export default App;
