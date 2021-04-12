import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from "./ProtectedRoute";
import api from '../utils/api';
import auth from '../utils/auth'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

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
    setIsInfoToolTipOpen(false);
    setSelectedCard({});
  }

  /* User setting functionality */
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        })
  }, [])

  const handleUpdateUser = ({name, about}) => {
    api.changeUserInfo({name, about})
        .then((res) => {
          setCurrentUser(res);
          closeAllPopups();
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const handleUpdateAvatar = ({link}) => {
    api.setUserAvatar({link})
        .then((res) => {
          setCurrentUser(res);
          closeAllPopups();
        })
        .catch((err) => {
          console.log(err);
        });
  }

  /* Card functionality */
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCards()
        .then((res) => {
          setCards(res);
        })
        .catch((err) => {
          console.log(err);
        })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  /* AddPlace functionality */
  function handleAddPlaceSubmit(data) {
    api.postCard(data).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  /* A U T H O R I S A T I O N */
  
  /* Check if user logged */
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [tooltipStatus, setTooltipStatus] = React.useState('');
  const history = useHistory();

  /* Info Tooltip Popup handling */
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  function handleInfoTooltip() {
    setIsInfoToolTipOpen(true);
  }

  /* Registration */
  function handleRegistration(data) {
      console.log(`App.js email and pw: ${data.email}, ${data.password}`);
        auth.register(data).then(() => {
          setTooltipStatus('success');
          handleInfoTooltip();
    })
    .catch((err) => {
      setTooltipStatus('fail');
      handleInfoTooltip();
      console.log(err);
    });
  }

  /* Login */
  function handleLogin(data) {
      auth.signing(data).then((res) => {
        setLoggedIn(true);
        localStorage.setItem('jwt', res.token);
        history.push('/');
    })
    .catch((err) => {
      setTooltipStatus('fail');
      handleInfoTooltip();
      console.log(err);
    });
  }

  /* Token check */
  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if(token) {
      auth.validityCheck(token).then((res) => {
        if (res){
          setEmail(res.data.email);
          setLoggedIn(true);
          history.push('/');
        } else {
          localStorage.removeItem('jwt');
        }
      });
    }
  }, []);

  /* Logout */
  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    <Redirect to="/sign-in" />
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
      <div className='page__content'>
        <div className="page">
          <Header loggedIn={loggedIn} logOutHandler={handleLogout} email={email} />
          <Switch>
            <ProtectedRoute
                exact path="/"
                loggedIn={loggedIn}
                component={Main}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onOpenImage={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
            />
            <Route path="/sign-up">
              <Register onSubmit={handleRegistration} />
            </Route>
            <Route path="/sign-in">
              <Login onSubmit={handleLogin} />
            </Route>
          </Switch>
          <Footer />
          <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser} />
          <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit} />
          <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar} />
          <ImagePopup
              isOpen={selectedCard}
              onClose={closeAllPopups}
              name={selectedCard.name}
              link={selectedCard.link} />
          <InfoTooltip
              isOpen={isInfoToolTipOpen}
              onClose={closeAllPopups}
              status={tooltipStatus} />
        </div>
      </div>
    </div>
    </CurrentUserContext.Provider>
  )
}
