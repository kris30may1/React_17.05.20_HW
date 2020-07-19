import api from '../../api';

export const ACTION_SET_ALBUMS = 'ACTION_SET_ALBUMS';
export function setAlbums(data) {
  return {
    type: ACTION_SET_ALBUMS,
    payload: data,
  };
}

export function fetchAlbums() {
  return function (dispatch) {
    api.get('/albums').then((resp) => dispatch(setAlbums(resp.data)));
  };
}
