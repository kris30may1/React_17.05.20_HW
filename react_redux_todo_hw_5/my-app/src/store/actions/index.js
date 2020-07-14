export const ACTION_SAVE_TODO = 'ACTION/ADD';
export const ACTION_TITLE_CHANGE = 'ACTION/CHANGE';
export const ACTION_DELETE_TODO = 'ACTION/DELETE';

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