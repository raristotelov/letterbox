import { combineReducers } from 'redux';
import user from './userReducer';
import newsletter from './newsletterReducer';
import feed from './feedReducer';
import label from './labelReducer';

const rootReducer = combineReducers({
    user,
    newsletter,
    feed,
    label,
});

export default rootReducer;
