import React from 'react'
import { Paper } from '@material-ui/core';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UsersList from './UsersList';
import UsersModal from './UsersModal';
import { fetchUsers } from '../../store/actions/users';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function Users({ fetchUsers }) {

    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);

    const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path + '/'}>
          <UsersList />
        </Route>
        <Route path={path + '/:id'}>
          <UsersModal />
        </Route>
        <Route path={path + '/new-user'}>
          <UsersModal />
        </Route>
      </Switch>
    </Paper>
  );
}

const mapDispatchToprops = {
  fetchUsers,
};

export default connect(null, mapDispatchToprops)(Users);
