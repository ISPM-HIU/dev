import axios from 'axios';
import { getAuthToken } from './authToken';

const BaseUrl = 'http://preprod.zenith.cestnous.fr/api'; // 'http://localhost:8000';

const token = getAuthToken()

const https = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token ? token.token : ''
    },
});

export { BaseUrl }
export default https