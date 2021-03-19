import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  /* EditProfilePopup handling */
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  /* AddPlacePopup handling */
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  /* EditAvatarPopup handling */
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  /* ImagePopup handling */
  const [selectedCard, setSelectedCard] = React.useState({});
  const handleCardClick = (data) => {
    setSelectedCard({name: data.card.name, link: data.card.link});
  }

  /* Close all popups */
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <div className='page__content'>
        <div className="page">
          <Header />
          <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onOpenImage={handleCardClick}
          />
          <Footer />
          <PopupWithForm
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              name="profile-edit"
              title="Редактировать профиль"
              button="Сохранить">
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
            />
              <span className="popup__error popup__error_visible name-profile-edit-error"></span>
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
            />
            <span className="popup__error popup__error_visible caption-profile-edit-error"></span>
          </label>
          </PopupWithForm>
          <PopupWithForm
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
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
              />
              <span className="popup__error popup__error_visible name-add-place-error"></span>
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
              />
              <span className="popup__error popup__error_visible caption-add-place-error"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              name="user-image"
              title="Обновить аватар"
              button="Сохранить">
            <label htmlFor="link-user-image" className="popup__container-label">
              <input
                  type="url"
                  name="link"
                  className="popup__field popup__caption popup__caption_user-image popup__input"
                  id="link-user-image"
                  placeholder="Ссылка на картинку"
                  aria-label="Ссылка на картинку"
                  required minLength="1"
              />
              <span className="popup__error popup__error_visible link-user-image-error"></span>
            </label>
          </PopupWithForm>
          <ImagePopup
              isOpen={selectedCard}
              onClose={closeAllPopups}
              name={selectedCard.name}
              link={selectedCard.link}
          ></ImagePopup>
        </div>
      </div>
    </div>
  )
}
