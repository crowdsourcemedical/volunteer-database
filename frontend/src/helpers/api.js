import { getEnvVars } from '../environment';
const { BASE_URL } = getEnvVars();

class Api {
    client = null;

    async request(route, action, headers, body) {
        const requestURL = `${BASE_URL}${route}`

        const requestHeaders = {
            'Content-Type': 'application/json',
            ...headers
        };

        return fetch(requestURL, {
            method: action,
            headers: requestHeaders,
            body: body
        }).then(res => res.json()).catch(e => e);
    }

    async login(handle, password) {
        const response = await request('/login', 'POST', { handle, password }, null)
        return response;
    }
}

export default new Api();
