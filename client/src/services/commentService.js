import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const createComment = (content, rating, idToken, newsId, user, replyToCommentId) => {
    return request.post(`${SERVER_ADDRESS}/comment`, {content, rating, newsId, replyToCommentId}, idToken);
}

export const editComment = (content, rating, idToken, commentId) => {
    return request.post(`${SERVER_ADDRESS}/comment/edit`, {content, rating, commentId}, idToken);
}

export const getComments = (newsId, idToken) => {
    return request.get(`${SERVER_ADDRESS}/comment?newsId=${newsId}`, null, idToken);
}

export const getReplyes = (replies, idToken) => {
    return request.get(`${SERVER_ADDRESS}/comment/replies?replies=${replies}`, null, idToken);
}

export const likeComment = (commentId, idToken) => {
    return request.post(`${SERVER_ADDRESS}/comment/${commentId}/like`, null, idToken);
}