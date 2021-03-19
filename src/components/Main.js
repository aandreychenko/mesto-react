import React from "react";
import api from "../utils/api"
import Card from "./Card"

export default function Main(props) {

  let [{name: userName, about: userDescription, avatar: userAvatar}, setProfile] = React.useState({name:'', about:'', avatar: ''});

  React.useEffect(() => {
    api.getUserInfo()
        .then((res) => {
          setProfile(res);
        })
        .catch((err) => {
          console.log(err);
        })
  }, [])

  let [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCards()
        .then((res) => {
          setCards(res);
        })
        .catch((err) => {
          console.log(err);
        })
  }, [])

  const mainCardImage = (data) => {
    props.onOpenImage && props.onOpenImage(data);
  }

  return (
      <main className="main">
        <section className="profile">
          <button className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img className="profile__avatar" alt="Фотография профиля" src={userAvatar} />
          </button>
          <div className="profile__info">
            <div className="profile__info-heading">
              <h1 className="profile__name">{userName}</h1>
              <button
                  type="button"
                  className="profile__edit-button"
                  aria-label="Редактировать профиль"
                  onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__caption">{userDescription}</p>
          </div>
          <button
              type="button"
              className="profile__add-button"
              aria-label="Добавить карточку"
              onClick={props.onAddPlace}
          />
        </section>
        <section className="elements">
          {cards.map((item) => (
            <Card card={item} key={item._id} handleCardImage={mainCardImage} />
          ))}
        </section>
      </main>
  )
}
