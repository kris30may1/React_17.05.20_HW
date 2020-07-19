import { ACTION_SET_PHOTOS } from "../actions/photos";

const initialState = {
  photos: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_PHOTOS:
      return { ...state, photos: payload };
    default:
      return state;
  }
}
