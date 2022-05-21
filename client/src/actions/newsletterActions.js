import {
    GET_NEWSLETTER,
    GET_NEWSLETTERS,
    HIDE_NEWS,
    CLEAR_NEWSLETTER,
} from './actionTypes';

import {
    getOneNewsletter,
    getAll
} from '../services/newsletterService';

export const getNewsletterSuccess = (newsletter) => ({
    type: GET_NEWSLETTER,
    payload: newsletter
})

export const getNewslettersSuccess = (newsletters) => ({
    type: GET_NEWSLETTERS,
    payload: newsletters
})

export const setHideNewsIdArray = (newsIdArrayToHide) => ({
    type: HIDE_NEWS,
    payload: newsIdArrayToHide
})

export const clearNewsletter = () => ({
    type: CLEAR_NEWSLETTER
})

export const getNewsletter = (_id, idToken) => async (dispatch) => {
    try {
        const res = await getOneNewsletter(_id, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getNewsletterSuccess(data));
    } catch (error) {
        alert(error);
    }
}

export const getNewsletters = (idToken) => async (dispatch) => {
    try {
        const res = await getAll(idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getNewslettersSuccess(data));
    } catch (error) {
        alert(error);
    }
}

