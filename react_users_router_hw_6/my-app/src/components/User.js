import React from 'react'

function User({ user, onUserDelete }) {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.phone}</td>
        <td>
          <button onClick={(e) => e.stopPropagation() || onUserDelete(user.id)}>
            DELETE
          </button>
        </td>
      </tr>
    );
}

export default User
