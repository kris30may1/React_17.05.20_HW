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

export const ACTION_CREATE_USER = 'ACTION_CREATE_USER';
export const ACTION_UPDATE_USER = 'ACTION_UPDATE_USER';
export function saveFormItem(changes) {
  return function (dispatch) {
    if (changes.id) {
      api.put(changes.id, changes).then((resp) =>
        dispatch({
          type: ACTION_UPDATE_USER,
          payload: resp.data,
        })
      );
    } else {
      api.post('', changes).then((resp) =>
        dispatch({
          type: ACTION_CREATE_USER,
          payload: resp.data,
        })
      );
    }

    dispatch(closeModal());
  };
}

export const ACTION_DELETE = 'ACTION_DELETE';
export function deleteUser(id) {
  return function (dispatch) {
    api.delete(id).then(() =>
      dispatch({
        type: ACTION_DELETE,
        payload: id,
      })
    );
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