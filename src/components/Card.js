export default function Card(props) {
  const handleImageClick = () => {
    props.handleCardImage(props);
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
          <button type="button" className="element__like-button"></button>
          <p className="element__like-counter">0</p>
        </div>
      </div>
      <button type="button" className="element__trash-button"></button>
    </article>
  )
}
