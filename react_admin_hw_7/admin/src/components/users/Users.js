import React from 'react'
import { Paper } from '@material-ui/core';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UsersList from './UsersList';
import UsersModal from './UsersModal';

function Users() {

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

export default Users;
