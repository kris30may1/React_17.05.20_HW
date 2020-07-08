import React from 'react'

function TodoItem({ item }) {
    return (
      <li>
        {item.title}
      </li>
    ); 
}

export default TodoItem
