import React from 'react';
import Button from '@material-ui/core/Button';
import { TableRow, TableCell } from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';

function UsersListItem({ item, onUserDelete }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  function onRowClick() { 
    history.push(url + '/' + item.id);
  }

  return (
    <TableRow onClick={onRowClick}>
      <TableCell component='th' scope='row'>
        {item.name}
      </TableCell>
      <TableCell align='right'>{item.phone}</TableCell>
      <TableCell align='right'>
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
