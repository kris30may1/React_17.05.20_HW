import { ACTION_SAVE_TODO, ACTION_TITLE_CHANGE, ACTION_DELETE_TODO, ACTION_TOGGLE_TODO } from "../actions";

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
  formItem: setNewTodo(),
};

function setNewTodo () {
  return {
    title: '', isDone: false
  }
}

function createTodo(todos, todo) {
  todo.id = Date.now();
  return [...todos, todo];
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SAVE_TODO:
            return {
              todos: createTodo(state.todos, payload),
            };
        case ACTION_TITLE_CHANGE:
            return {
                ...state, formItem: { ...state.title, ...payload }
            }
        case ACTION_DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== payload)
              };
        case ACTION_TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(item =>
                       item.id !== payload
                          ? item : { ...item, isDone: !item.isDone }
                    )
                };
        default: return state;
    }
}
