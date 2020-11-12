import qs from 'qs';

// const CLIET_SECRET = '6e27586a86738ea8dacc1fe68a7d0a7b27d5a997';
const CLIENT_ID = 'c223ce768f8cc4c';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    }
}