import React from 'react'

function TodoItem({ item, deleteTodo, toggleTodo }) {
    return (
      <li
      style={getTodoStyle(item)}
      onClick={() => toggleTodo(item.id)}
      >
        {item.title}
        <button onClick={e => e.stopPropagation() || deleteTodo(item.id)}>Delete</button>
      </li>
    ); 
}

function getTodoStyle (item) {
  return { backgroundColor: item.isDone ? '#93f5bc' : '#e8f593' }
}

export default TodoItem
