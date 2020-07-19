import { ACTION_SET_ALBUMS } from "../actions/albums";

const initialState = {
  albums: [],
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_ALBUMS:
            return { ...state, albums: payload };
        default:
            return state;
    }
}