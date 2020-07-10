import React from 'react'

function User({ user }) {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.phone}</td>
      </tr>
    );
}

export default User
