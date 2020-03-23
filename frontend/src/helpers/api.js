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

        try {
            const response = await fetch(requestURL, {
                method: action,
                headers: requestHeaders,
                body: body
            });

            const json = await response.json();
            return json;
        } catch(error) {
            return error;
        }
    }

    async login(handle, password) {
        const response = await request('/login', 'POST', { handle, password }, null)
        return response;
    }
}

export default new Api();
