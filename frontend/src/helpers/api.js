import _ from 'underscore';

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

        const options = {
            method: action,
            headers: requestHeaders
        }

        if (!_.isEmpty(payload)) {
            options.body = JSON.stringify(payload);
        }

        return fetch(requestURL, options).then(res => res.json()).catch(e => e);
    }

    async login(payload) {
        const response = await this.request({
            route: '/users/login',
            action: 'POST',
            payload,
        })

        return response;
    }

    async getUsers() {
        const response = await this.request({
            route: '/users',
            action: 'GET'
        })

        return response;  
    }

    async getUser(id) {
        const response = await this.request({
            route: `/users/${id}`,
            action: 'GET'
        })

        return response;  
    }

    async createUser(payload) {
        const response = await this.request({
            route: `/users`,
            action: 'POST',
            payload
        })

        return response;  
    }
}

export default new Api();
