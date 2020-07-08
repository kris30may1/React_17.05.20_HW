export const ADD_NEW_TODO = 'ACTION/ADD';
export const TITLE_CHANGE = 'ACTION/CHANGE';

export function addNewTodo (title) { 
    return {
        type: ADD_NEW_TODO,
        payload: title
    }
}

export function onTitleChange(title) {
    return {
      type: TITLE_CHANGE,
      payload: title,
    };
}