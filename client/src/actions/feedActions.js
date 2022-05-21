import { CREATE_FEED, EDIT_FEED, DELETE_FEED, GET_FEED, GET_ALL_FEEDS, ADD_NEWSLETTER, REMOVE_NEWSLETTER, CLEAR_FEED } from './actionTypes';

import { createFeed, editFeed, deleteFeed, toggleHiddenProperty, getOneFeed, getAllFeeds, addNewsletterToFeed, removeNewsletterFromFeed } from '../services/feedService';

export const createFeedSuccess = (feed) => ({
    type: CREATE_FEED,
    payload: feed,
});

export const editFeedSuccess = (feed) => ({
    type: EDIT_FEED,
    payload: feed,
});

export const deleteFeedSuccess = (feedId) => ({
    type: DELETE_FEED,
    payload: feedId,
});

export const getFeedSuccess = (feed) => ({
    type: GET_FEED,
    payload: feed,
});

export const getAllFeedsSuccess = (feeds) => ({
    type: GET_ALL_FEEDS,
    payload: feeds,
});

export const addNewsletterSuccess = (newsletter) => ({
    type: ADD_NEWSLETTER,
    payload: newsletter,
});

export const removeNewsletterSuccess = (newsletterId) => ({
    type: REMOVE_NEWSLETTER,
    payload: newsletterId,
});

export const clearFeed = () => ({
    type: CLEAR_FEED,
});

export const addFeed = (feedName, idToken) => async (dispatch) => {
    try {
        const res = await createFeed(feedName, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(createFeedSuccess(data));
    } catch (error) {
        alert(error);
    }
};

export const changeFeed = (feedId, feedName, idToken) => async (dispatch) => {
    try {
        const res = await editFeed(feedId, feedName, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(editFeedSuccess(data));
    } catch (error) {
        alert(error);
    }
};

export const removeFeed = (feedId, idToken) => async (dispatch) => {
    try {
        const res = await deleteFeed(feedId, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(deleteFeedSuccess(feedId));
    } catch (error) {
        alert(error);
    }
};

export const toggleHiddenState = (feedId, idToken) => async (dispatch) => {
    try {
        const res = await toggleHiddenProperty(feedId, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(editFeedSuccess(data));
    } catch (error) {
        alert(error);
    }
}

export const getFeed = (_id, idToken) => async (dispatch) => {
    try {
        const res = await getOneFeed(_id, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getFeedSuccess(data));
    } catch (error) {
        alert(error);
    }
};

export const getFeeds = (idToken) => async (dispatch) => {
    try {
        const res = await getAllFeeds(idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getAllFeedsSuccess(data));
    } catch (error) {
        alert(error);
    }
};

export const addNewsletter = (newsletter, feedId, idToken) => async (dispatch) => {
    try {
        const res = await addNewsletterToFeed(newsletter._id, feedId, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(addNewsletterSuccess(newsletter));
    } catch (error) {
        alert(error);
    }
};

export const removeNewsletter = (newsletterId, feedId, idToken) => async (dispatch) => {
    try {
        const res = await removeNewsletterFromFeed(newsletterId, feedId, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(removeNewsletterSuccess(newsletterId));
    } catch (error) {
        alert(error);
    }
};
