import getEnvVars from '../environment';

const { BASE_URL } = getEnvVars();

// FUTURE API - https://github.com/crowdsourcemedical/volunteer-database/wiki/Backend-API-spec

// CURRENT API - http://localhost:8000/redoc

class Api {
  jwt = null;

  createFormData(payload) {
    return Object.keys(payload).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]);
    }).join('&');
  }

  async request({
    route, payload, action = 'GET', headers = {},
  }) {
    const requestURL = `${BASE_URL}${route}`;
    
    const options = {
      method: action,
      headers: headers
    };

    if (payload) {
      // the /token route requires FormData in payload
      options.body = route === '/token' ? this.createFormData(payload) : JSON.stringify(payload);
    }

    return fetch(requestURL, options).then((res) => res.json()).catch((e) => e);
  }

  // this is a temporary endpoint to verify jwt token
  async verifyToken() {
    const response = await this.request({
      route: '/token/verify',
      action: 'GET',
      headers: {
        Authorization: `Bearer ${this.jwt}`
      }
    });

    return response;
  }

  async login(payload) {
    const response = await this.request({
      route: '/token',
      action: 'POST',
      payload,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    });

    if (response && response.access_token) {
      this.jwt = response.access_token;
    }

    return response;
  }

  async getUsers() {
    const response = await this.request({
      route: '/users',
      action: 'GET',
    });

    return response;
  }

  async getUser(id) {
    const response = await this.request({
      route: `/users/${id}`,
      action: 'GET',
    });

    return response;
  }

  async createUser(payload) {
    const response = await this.request({
      route: '/users',
      action: 'POST',
      payload,
    });

    return response;
  }
}

export default new Api();
