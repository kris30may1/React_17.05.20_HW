import React from 'react';
import './App.css';
import UsersGrid from './components/UsersGrid';
import Modal from './components/Modal';
import { connect } from 'react-redux';
import { openModal } from './store/actions';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import About from './components/About';

function App({ modalVisible, openModal }) {

  return (
    <Router>
      <header>
        <h1>Users APP</h1>
        <button onClick={() => openModal()}>New User</button>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route path='/users'>
          <UsersGrid />
          {modalVisible ? <Modal /> : null}
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    modalVisible: !!state.formItem,
  };
}

const mapDispatchToProps = {
  openModal: openModal,
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
