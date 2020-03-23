import { getEnvVars } from '../environment';
const { BASE_URL } = getEnvVars();

// FUTURE API - https://github.com/crowdsourcemedical/volunteer-database/wiki/Backend-API-spec

// CURRENT API - http://localhost:8000/redoc

class Api {
    client = null;

    async request({ route, payload = {}, action = 'GET', headers = {} }) {
        const requestURL = `${BASE_URL}${route}`

        const requestHeaders = {
            'Content-Type': 'application/json',
            ...headers
        };

        return fetch(requestURL, {
            method: action,
            headers: requestHeaders,
            body: JSON.stringify(payload)
        }).then(res => res.json()).catch(e => e);
    }

    async login(payload) {
        const response = await this.request({
            route: '/users/login',
            action: 'POST',
            payload,
        })

        return response;
    }
}

export default new Api();
