import React from "react";
import Card from "./Card"
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  /* Image opening handler */
  const mainCardImage = (data) => {
    props.onOpenImage && props.onOpenImage(data);
  }

  /* Subscribing on user context */
  const currentUser = React.useContext(CurrentUserContext);

  return (
      <main className="main">
        <section className="profile">
          <button className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img className="profile__avatar" alt="Фотография профиля" src={currentUser.avatar} />
          </button>
          <div className="profile__info">
            <div className="profile__info-heading">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                  type="button"
                  className="profile__edit-button"
                  aria-label="Редактировать профиль"
                  onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__caption">{currentUser.about}</p>
          </div>
          <button
              type="button"
              className="profile__add-button"
              aria-label="Добавить карточку"
              onClick={props.onAddPlace}
          />
        </section>
        <section className="elements">
          {props.cards.map((item) => (
            <Card
                card={item}
                key={item._id}
                handleCardImage={mainCardImage}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
            />
          ))}
        </section>
      </main>
  )
}
