import React from 'react'
import User from './User';
import { connect } from 'react-redux';

function UsersGrid({ users }) {
    return (
      <table className='u-full-width'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    );
}

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersGrid);
