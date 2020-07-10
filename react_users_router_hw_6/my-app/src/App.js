import React from 'react';
import './App.css';
import UsersGrid from './components/UsersGrid';
import Modal from './components/Modal';
import { connect } from 'react-redux';
import { openModal } from './store/actions';

function App({ modalVisible, openModal }) {
  return (
    <>
      <header>
        <h1>Users APP</h1>
        <button onClick={() => openModal()}>New User</button>
      </header>
      <UsersGrid />
      {modalVisible ? <Modal /> : null}
    </>
  );
}

function mapStateToProps(state) {
  return {
    modalVisible: !!state.users.formItem,
  };
}

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
