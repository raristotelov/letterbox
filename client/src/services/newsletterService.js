import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const getOneNewsletter = (_id, idToken) => {
    return request.get(`${SERVER_ADDRESS}/newsletter/one-by-user?_id=${_id}`, null, idToken);
}

export const getAll = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/newsletter/all`, null, idToken);
}