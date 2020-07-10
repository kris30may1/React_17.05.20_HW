import { ACTION_OPEN_MODAL, ACTION_CLOSE_MODAL, ACTION_SET_USERS, ACTION_CHANGE_FORM_ITEMS } from "../actions";

const initialState = {
    users: [],
    formItem: null
};

function getEmptyUser() {
    return {
        name: '',
        surname: '',
        phone: '',
    };
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
          formItem: '',
        };
      default:
        return state;
    }
}
