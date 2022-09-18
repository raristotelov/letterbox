import {
    SIGNIN,
    SIGNOUT,
    VERIFY,
    CREATE_EMAIL_MASK,
    GET_READ_LATER,
    MARK_AS_READ_LATER,
    CLEAR_READ_LATER,
    GET_READ_NEWS,
    MARK_AS_READ,
    GET_HIDDEN_NEWS,
    HIDE_NEWS,
    UNHIDE_NEWS
} from '../actions/actionTypes';

const initialState = {
    user: null,
    emailMask: '',
    idToken: '',
    readLaterNews: [],
    readNews: [],
    hiddenNews: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                user: action.payload.user,
                emailMask: action.payload.emailMask,
                userId: action.payload._id,
                admin: action.payload.admin,
                idToken: action.payload.idToken
            }
        case SIGNOUT:
            return {
                ...initialState,
            };
        case VERIFY:
            return {
                ...state,
            };
        case CREATE_EMAIL_MASK:
            return {
                ...state,
                emailMask: action.payload.emailMask,
            };
        case GET_READ_LATER:
            return {
                ...state,
                readLaterNews: action.payload ? action.payload : [],
            };
        case MARK_AS_READ_LATER:
            return {
                ...state,
                readLaterNews: action.payload ? action.payload : [],
            }
        case CLEAR_READ_LATER:
            return {
                ...state,
                readLaterNews: initialState.readLaterNews
            }
        case GET_READ_NEWS:
            return {
                ...state,
                readNews: action.payload ? action.payload : [],
            };
        case MARK_AS_READ:
            return {
                ...state,
                readLaterNews: action.payload.readLaterNews ? action.payload.readLaterNews : [],
                readNews: action.payload.readNews ? action.payload.readNews : []
            };
        case GET_HIDDEN_NEWS:
            return {
                ...state,
                hiddenNews: action.payload ? action.payload : [],
            };
        case HIDE_NEWS:
            return {
                ...state,
                readLaterNews: action.payload.readLaterNews ?  action.payload.readLaterNews : [],
                hiddenNews: action.payload.hiddenNews ?  action.payload.hiddenNews : []
            }
        case UNHIDE_NEWS:
            return {
                ...state,
                hiddenNews: action.payload.hiddenNews ? action.payload.hiddenNews : []
            }
        default:
            return {
                ...state,
            };
    }
};

export default userReducer;
