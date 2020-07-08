import { ADD_NEW_TODO, TITLE_CHANGE } from "../actions";

const initialState = {
  todos: [
    {
      id: 1,
      title: 'first todo',
      isDone: true,
    },
    {
      id: 2,
      title: 'second todo',
      isDone: false,
    },
    {
      id: 3,
      title: 'third todo',
      isDone: false
    },
  ],
  title: '',
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_NEW_TODO:
            console.log(payload)
            return {
                ...state, todos: [state.todos, payload]
            };
        case TITLE_CHANGE:
            console.log(payload)
            return {
                ...state, title: { ...state.title, payload }
            }
        default: return state;
    }
}
