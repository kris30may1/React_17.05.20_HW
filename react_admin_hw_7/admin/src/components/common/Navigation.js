import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <header>
        <AppBar position='static'>
          <h1>My App</h1>
          <Tabs>
            <Tab label='Users' component={Link} to='/users'></Tab>
            <Tab label='Albums' component={Link} to='/albums'></Tab>
          </Tabs>
        </AppBar>
      </header>
    </>
  );
}

export default Navigation;
