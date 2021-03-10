export default function Header() {
  return (
      <main className="main">
        <section className="profile">
          <a className="profile__avatar-container">
            <img className="profile__avatar" alt="Фотография профиля" />
          </a>
          <div className="profile__info">
            <div className="profile__info-heading">
              <h1 className="profile__name"></h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать профиль"></button>
            </div>
            <p className="profile__caption"></p>
          </div>
          <button type="button" className="profile__add-button" aria-label="Добавить карточку"></button>
        </section>
        <section className="elements">
        </section>
      </main>
  );
}
