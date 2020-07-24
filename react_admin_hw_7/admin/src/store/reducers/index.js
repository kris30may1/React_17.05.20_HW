import users from './users';
import albums from './albums';
import photos from './photos';
import { combineReducers } from 'redux';

export default combineReducers({
    users, albums, photos
})