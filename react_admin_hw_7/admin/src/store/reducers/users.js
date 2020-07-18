import {
  ACTION_OPEN_MODAL,
  ACTION_CLOSE_MODAL,
  ACTION_SET_USERS,
  ACTION_CHANGE_FORM_ITEMS,
  ACTION_CREATE_USER,
  ACTION_UPDATE_USER,
  ACTION_DELETE,
} from '../actions/users';

const initialState = {
  users: [],
  formItem: null,
};

function getEmptyUser() {
  return {
    name: '',
    surname: '',
    phone: '',
  };
}

function updateUser(users, user) {
  return users.map((item) => (item.id == user.id ? user : item));
}

function createUser(users, user) {
  return [...users, user];
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_USERS:
      return { ...state, users: payload };

    case ACTION_CHANGE_FORM_ITEMS:
      return {
        ...state,
        formItem: { ...state.formItem, ...payload },
      };

    case ACTION_OPEN_MODAL:
      return {
        ...state,
        formItem: payload
          ? state.users.find((user) => user.id == payload)
          : getEmptyUser(),
      };

    case ACTION_CLOSE_MODAL:
      return {
        ...state,
        formItem: null,
      };

    case ACTION_CREATE_USER:
      return {
        ...state,
        users: createUser(state.users, payload),
      };

    case ACTION_UPDATE_USER:
      return {
        ...state,
        users: updateUser(state.users, payload),
      };

    case ACTION_DELETE:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
}
