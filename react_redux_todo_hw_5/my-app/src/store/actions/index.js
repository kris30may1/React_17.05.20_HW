export const ACTION_SAVE_TODO = 'ACTION/ADD';
export const ACTION_TITLE_CHANGE = 'ACTION/CHANGE';
export const ACTION_DELETE_TODO = 'ACTION/DELETE';
export const ACTION_TOGGLE_TODO = 'ACTION/TOGGLE';

export function saveTodo (title) { 
    return {
        type: ACTION_SAVE_TODO,
        payload: title
    }
}

export function titleChange(title) {
    return {
      type: ACTION_TITLE_CHANGE,
      payload: title,
    };
}

export function deleteTodo(id) {
    return {
        type: ACTION_DELETE_TODO,
        payload: id
    };
}

export function toggleTodo(id) {
    return {
        type: ACTION_TOGGLE_TODO,
        payload: id
    };
}