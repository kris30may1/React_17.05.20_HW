import api from '../../api';

export const ACTION_SET_PHOTOS = 'ACTION_SET_PHOTOS';
export function setPhotos(data) {
  return {
    type: ACTION_SET_PHOTOS,
    payload: data,
  };
}

export function getPhotos() {
  return function (dispatch) {
    api.get('/photos').then((resp) => dispatch(setPhotos(resp.data)));
  };
}
