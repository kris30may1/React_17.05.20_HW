import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../../store/actions/users';
import UsersListItem from './UsersListItem';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import { TableHead, TableRow, TableCell, TableBody, Table } from '@material-ui/core';

function UsersList({ items, onUserDelete, onUserEdit }) {
    
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <UsersListItem
              key={item.id}
              item={item}
              onUserDelete={onUserDelete}
              onUserEdit={onUserEdit}
            />
          ))}
        </TableBody>
      </Table>
      <Button variant='contained' color='primary'>
        Add New User
      </Button>
    </TableContainer>
  );
}

function mapStateToProps(state) {
  return {
    items: state.users.users,
  };
}

const mapDispatchToProps = {
  onUserDelete: deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
