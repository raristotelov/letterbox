import {
    GET_LABELS
} from './actionTypes';

import {
    getLabels as getAllLabels,
    createLabel,
    subscribeToNewsletter,
    unsubscribeFromNewsletter
} from '../services/labelService';

export const getLabelsSucces = (labels) => ({
    type: GET_LABELS,
    payload: labels
})

export const getLabels = (idToken) => async (dispatch) => {
    try {
        const res = await getAllLabels(idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getLabelsSucces(data));
    } catch (error) {
        alert(error);
    }
}

export const addLabel = (name, idToken) => async (dispatch) => {
    try {
        const res = await createLabel(name, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getLabelsSucces(data));
    } catch (error) {
        alert(error);
    }
}

export const addNewsletterToLabel = (newsletterId, labelId, idToken) => async (dispatch) => {
    try {
        const res = await subscribeToNewsletter(newsletterId, labelId, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getLabelsSucces(data));
    } catch (error) {
        alert(error);
    }
}

export const removeNewsletterFromLabel = (newsletterId, labelId, idToken) => async (dispatch) => {
    try {
        const res = await unsubscribeFromNewsletter(newsletterId, labelId, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getLabelsSucces(data));
    } catch (error) {
        alert(error);
    }
}