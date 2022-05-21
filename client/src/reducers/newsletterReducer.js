import {
    GET_NEWSLETTER,
    GET_NEWSLETTERS,
    HIDE_NEWS,
    CLEAR_NEWSLETTER,
} from '../actions/actionTypes';

const initialState = {
    newsletter: {
        _id: '',
        name: '',
        news: []
    },
    newsletters: [],
    newsIdArrayToHide: null,
}
const newsletterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWSLETTER:
            return {
                ...state,
                newsletter: action.payload
            }
        case HIDE_NEWS:
            return {
                ...state,
                newsIdArrayToHide: action.payload
            }
        case GET_NEWSLETTERS:
            return {
                ...state,
                newsletters: action.payload
            }
        case CLEAR_NEWSLETTER:
            return {
                ...state,
                newsletter: initialState.newsletter
            }
        default:
            return { ...state }
    }
}

export default newsletterReducer;