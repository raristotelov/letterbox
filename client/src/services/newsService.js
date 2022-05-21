import request from './requester';
import { SERVER_ADDRESS } from '../env';

export const getNews = (newsId, idToken) => {
    return request.get(`${SERVER_ADDRESS}/news/news?_id=${newsId}`, null, idToken);
}
