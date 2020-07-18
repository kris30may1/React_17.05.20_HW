import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, openModal } from '../../store/actions/users';
import UsersListItem from './UsersListItem';
import Button from '@material-ui/core/Button';

function UsersList({ items, onUserDelete, onUserEdit }) {
    
  return (
    <div>
      <table className='u-full-width'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <UsersListItem
              key={item.id}
              user={item}
              onUserDelete={onUserDelete}
              onUserEdit={onUserEdit}
            />
          ))}
        </tbody>
      </table>
      <Button variant='contained' color='primary'>
        New User
      </Button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    items: state.users.users,
  };
}

const mapDispatchToProps = {
  onUserDelete: deleteUser,
  onUserEdit: openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
