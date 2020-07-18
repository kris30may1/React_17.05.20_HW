import React from 'react';
import './App.css';
import Albums from './components/albums/Albums';
import Container from '@material-ui/core/Container'  
import Navigation from './components/common/Navigation';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import UsersList from './components/users/UsersList';

function App() {
  return (
    <Router>
      <Container maxWidth='lg'>
        <Navigation />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Switch>
              <Route path='/users'>
                <UsersList />
              </Route>
              <Route path='/albums'>
                <Albums />
              </Route>
              <Route path='*'>
                <Redirect to='/users'/>
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
