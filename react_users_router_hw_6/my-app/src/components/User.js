import React from 'react'

function User({ user, onUserDelete, onUserEdit }) {
  return (
    <tr onClick={(e) => e.stopPropagation() || onUserEdit(user.id)}>
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
