import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Card(props) {
  /* Image opening handler */
  const handleImageClick = () => {
    props.handleCardImage(props);
  }

  /* Subscribing on user context */
  const currentUser = React.useContext(CurrentUserContext);

  /* Checking if we are card owner */
  const isOwn = props.card.owner._id === currentUser._id;

  /* Checking which cards we liked */
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  /* Likes counter */
  const likesAmount = props.card.likes.length;

  /* Trash button appearance handler */
  const cardDeleteButtonClassName = (
      `element__trash-button ${isOwn && 'element__trash-button_visible'}`
  );

  /* Like button appearance handler */
  const cardLikeButtonClassName = (
      `element__like-button ${isLiked && 'element__like-button_active'}`
  );

  /* Card delete handler */
  const handleDeleteClick = () => {
    props.onCardDelete(props.card);
  }

  /* Card like handler */
  const handleLikeClick = () => {
    props.onCardLike(props.card);
  }

  return (
    <article className="element" key={props.card._id}>
      <img
          className="element__image"
          src={props.card.link}
          alt="Фотография места"
          onClick={handleImageClick}
      />
      <div className="element__info">
        <h2 className="element__place-name">{props.card.name}</h2>
        <div className="element__like-block">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} />
          <p className="element__like-counter">{likesAmount}</p>
        </div>
      </div>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} />
    </article>
  )
}
