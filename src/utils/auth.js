class Auth {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  // User registration
  register(data) {
    console.log(`auth.js email and pw: ${data.email}, ${data.password}`);
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
      .then(this._checkResponse);
  }

  // User signing in
  signing(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({
        password: data.password,
        email: data.email
      })
    })
      .then(this._checkResponse);
  }

  // Token validity check
  validityCheck(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(this._checkResponse);
  }
}

export default new Auth({
  url: 'https://auth.nomoreparties.co',
});
