import {
    GET_LABELS
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
        default:
            return {
                ...state
            }
    }
}

export default labelReducer;