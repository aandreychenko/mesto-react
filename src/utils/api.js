class Api {
  constructor(config) {
    this._url = config.url;
    this._groupId = config.groupId;
    this._headers = config.headers;
  }


  /* C A R D S   R E Q U E S T S */

  _getAllInfo() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getCards() {
    return fetch(`${this._url}/${this._groupId}/cards`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  postCard(data) {
    return fetch(`${this._url}/${this._groupId}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    this._cardId = cardId;
      return fetch(`${this._url}/${this._groupId}/cards/${this._cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkResponse);
  }


  /* U S E R   R E Q U E S T S */
  /* Info */
  getUserInfo() {
    return fetch(`${this._url}/${this._groupId}/users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  changeUserInfo(data) {
    return fetch(`${this._url}/${this._groupId}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(this._checkResponse);
    }

  /* Avatar */
  setUserAvatar(data) {
    return fetch(`${this._url}/${this._groupId}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    })
      .then(this._checkResponse);
  }


  /* L I K E   R E Q U E S T S */

  changeLikeCardStatus(id, status) {
    return fetch(`${this._url}/${this._groupId}/cards/likes/${id}`, {
      method: status ? "PUT" : "DELETE",
      headers: this._headers
    })
        .then(this._checkResponse);
  }
}

export default new Api({
  url: 'https://mesto.nomoreparties.co/v1',
  groupId: 'cohort-20',
  headers: {
    authorization: '9af7eabd-c94e-4285-ad12-d82268efba7b',
    'Content-Type': 'application/json'
  }
});
