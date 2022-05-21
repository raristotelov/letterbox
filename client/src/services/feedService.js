import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const createFeed = (feedName, idToken) => {
    return request.post(`${SERVER_ADDRESS}/feed`, { feedName }, idToken);
};

export const editFeed = (feedId, feedName, idToken) => {
    return request.put(`${SERVER_ADDRESS}/feed/edit/${feedId}`, { feedName }, idToken);
};

export const deleteFeed = (feedId, idToken) => {
    return request.delete(`${SERVER_ADDRESS}/feed/delete/${feedId}`, null, idToken);
};

export const toggleHiddenProperty = (feedId, idToken) => {
    return request.put(`${SERVER_ADDRESS}/feed/toggle-hidden/${feedId}`, null, idToken);
};

export const getOneFeed = (_id, idToken) => {
    return request.get(`${SERVER_ADDRESS}/feed/one?_id=${_id}`, null, idToken);
};

export const getAllFeeds = (idToken) => {
    return request.get(`${SERVER_ADDRESS}/feed/all`, null, idToken);
};

export const addNewsletterToFeed = (newsletterId, feedId, idToken) => {
    return request.post(`${SERVER_ADDRESS}/feed/${feedId}/add-newsletter/${newsletterId}`, null, idToken);
};

export const removeNewsletterFromFeed = (newsletterId, feedId, idToken) => {
    return request.post(`${SERVER_ADDRESS}/feed/${feedId}/remove-newsletter/${newsletterId}`, null, idToken);
};
