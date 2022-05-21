import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const createLabel = (name, idToken) => {
    return request.post(`${SERVER_ADDRESS}/label`, { name }, idToken);
}

export const getLabels = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/label`, null, idToken);
}

export const subscribeToNewsletter = (newsletterId, labelId, idToken) => {
    return request.post(`${SERVER_ADDRESS}/label/${labelId}/add-newsletter/${newsletterId}`, { newsletterId, labelId }, idToken);
}

export const unsubscribeFromNewsletter = (newsletterId, labelId, idToken) => {
    return request.post(`${SERVER_ADDRESS}/label/${labelId}/remove-newsletter/${newsletterId}`, { newsletterId, labelId }, idToken);
}

export const unsubscribeFromNewsletterInAllLabels = (newsletterId, idToken) => {
    return request.post(`${SERVER_ADDRESS}/label/remove-newsletter/${newsletterId}`, { newsletterId }, idToken);
}
