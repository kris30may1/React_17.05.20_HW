import React from 'react';
import Button from '@material-ui/core/Button';
import { TableRow, TableCell } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function UsersListItem({ item, onUserDelete, onUserEdit }) {
  const history = useHistory();

  function onRowClick() { 
    history.push(`/users/${item.id}`);
  }

  return (
      <TableRow onClick={onRowClick}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.phone}</TableCell>
        <TableCell>
          <Button
            color='primary'
            onClick={(e) => e.stopPropagation() || onUserDelete(item.id)}>
            DELETE
          </Button>
        </TableCell>
      </TableRow>
  );
}

export default UsersListItem;
