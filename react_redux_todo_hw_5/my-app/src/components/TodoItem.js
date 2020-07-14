import React from 'react'

function TodoItem({ todo, deleteTodo, toggleTodo }) {
    return (
      <li
      style={getTodoStyle(todo)}
      onClick={() => toggleTodo(todo.id)}
      >
        {todo.title}
        <button onClick={e => e.stopPropagation() || deleteTodo(todo.id)}>Delete</button>
      </li>
    ); 
}

function getTodoStyle (todo) {
  return { backgroundColor: todo.isDone ? '#93f5bc' : '#e8f593' }
}

export default TodoItem;
