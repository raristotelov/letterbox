import {
    GET_LABELS,
    SIGNOUT
} from '../actions/actionTypes';

const initialState = {
    labels: []
}

const labelReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LABELS:
            return {
                ...state,
                labels: action.payload
            }
        case SIGNOUT:
            return {
                ...initialState,
            };
        default:
            return {
                ...state
            }
    }
}

export default labelReducer;