import users from './users';
import albums from './albums';
import { combineReducers } from 'redux';

export default combineReducers({
    users, albums
})