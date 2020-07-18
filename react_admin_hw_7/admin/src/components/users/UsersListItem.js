import React from 'react';
import Button from '@material-ui/core/Button';

function UsersListItem({ user, onUserDelete, onUserEdit }) {
  return (
    <tr onClick={(e) => e.stopPropagation() || onUserEdit(user.id)}>
      <td>{user.name}</td>
      <td>{user.phone}</td>
      <td>
        <Button color='primary' onClick={(e) => e.stopPropagation() || onUserDelete(user.id)}>
          DELETE
        </Button>
      </td>
    </tr>
  );
}

export default UsersListItem;
