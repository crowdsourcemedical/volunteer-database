import { getEnvVars } from '../environment';
const { BASE_URL } = getEnvVars();

// FUTURE API - https://github.com/crowdsourcemedical/volunteer-database/wiki/Backend-API-spec

// CURRENT API - http://localhost:8000/redoc

class Api {
    client = null;

    async request(route, action, body, headers) {
        const requestURL = `${BASE_URL}${route}`

        const requestHeaders = {
            'Content-Type': 'application/json',
            ...headers
        };

        return fetch(requestURL, {
            method: action,
            headers: requestHeaders,
            body: JSON.stringify(body)
        }).then(res => res.json()).catch(e => e);
    }

    async login(email, password) {
        const response = await this.request('/users/login', 'POST', { email, password }, null);
        return response;
    }
}

export default new Api();
