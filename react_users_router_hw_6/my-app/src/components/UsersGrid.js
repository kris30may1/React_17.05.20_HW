import React from 'react'
import User from './User';
import { connect } from 'react-redux';
import { deleteUser, ACTION_UPDATE_USER, openModal } from '../store/actions';

function UsersGrid({ users, onUserDelete, onUserEdit }) {
  return (
    <table className='u-full-width'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            onUserDelete={onUserDelete}
            onUserEdit={onUserEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = {
  onUserDelete: deleteUser,
  onUserEdit: openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersGrid);
