import React from 'react'

function TodoItem({ item, deleteTodo }) {
    return (
      <li>
        {item.title}
        <button onClick={e => e.stopPropagation() || deleteTodo(item.id)}>Delete</button>
      </li>
    ); 
}

export default TodoItem
