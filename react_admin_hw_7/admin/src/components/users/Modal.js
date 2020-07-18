import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import closeIcon from '../common/close-icon.svg';
import { closeModal, changeFormItems, saveFormItem } from '../store/actions/users';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Modal({ user, onClose, onChange, onSave }) {
  let [isValid, setIsValid] = useState({
    name: true,
    surname: true,
    phone: true,
  });

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    const changes = {
      [name]: value,
    };
    onChange(changes);

    validateInput(name, value);
  }

  function validateInput(name, value) {
    setIsValid({
      ...isValid,
      [name]: !!value,
    });
  }

  return (
    <div className='formContainer'>
      <img
        src={closeIcon}
        className='closeIcon'
        alt='close'
        onClick={() => onClose()}
      />
      <form noValidate autoComplete='off' onSubmit={() => onSave(user)}>
        <label>User`s Form</label>
        <TextField
          id='standart-basic'
          className={isValid.name ? '' : 'error'}
          type='text'
          name='name'
          value={user.name}
          placeholder='First Name *'
          onChange={handleChange}
        />

        <TextField
          id='standart-basic'
          className={isValid.surname ? '' : 'error'}
          type='text'
          name='surname'
          value={user.surname}
          placeholder='Last Name *'
          onChange={handleChange}
        />

        <TextField
          id='standart-basic'
          className={isValid.phone ? '' : 'error'}
          type='text'
          name='phone'
          value={user.phone}
          placeholder='Phone Number *'
          onChange={handleChange}
        />
        <Button className='primary'>Save</Button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.formItem,
  };
}

const mapDispatchToProps = {
  onClose: closeModal,
  onChange: changeFormItems,
  onSave: saveFormItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
