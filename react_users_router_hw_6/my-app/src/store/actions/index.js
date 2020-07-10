import api from '../../api'

export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export function openModal(id) {
  return {
    type: ACTION_OPEN_MODAL,
    payload: id,
  };
}

export const ACTION_CLOSE_MODAL = 'ACTION_CLOSE_MODAL';
export function closeModal() {
  return {
    type: ACTION_CLOSE_MODAL,
  };
}

export const ACTION_CHANGE_FORM_ITEMS = 'ACTION_CHANGE_FORM_ITEMS';
export function changeFormItems(changes) {
  return {
    type: ACTION_CHANGE_FORM_ITEMS,
    payload: changes,
  };
}

export const ACTION_SET_USERS = 'ACTION_SET_USERS';
export function setUsers(data) { 
    return {
        type: ACTION_SET_USERS,
        payload: data,
    }
}

export function fetchUsers() {
  return function (dispatch) {
    api.get().then((resp) => dispatch(setUsers(resp.data)));
  };
}