import React from 'react'
import { connect } from 'react-redux';
import closeIcon from '../common/close-icon.svg';
import { closeModal, changeFormItems } from '../store/actions';

function Modal({ user, onClose, onChange }) {

    function handleChange(e) {
      const value = e.target.value;
      const name = e.target.name;
      const changes = {
        [name]: value,
      };
      onChange(changes);
    }

    return (
      <div className='formContainer'>
        <img
          src={closeIcon}
          className='closeIcon'
          alt='close'
          onClick={() => onClose()}
        />
        <form>
          <label>User`s Form</label>
          <input
            className='u-full-width'
            type='text'
            name='Name'
            value={user.name}
            placeholder='First Name *'
            autoComplete='off'
            onChange={handleChange}
          />

          <input
            className='u-full-width'
            type='text'
            name='Surname'
            value={user.surname}
            placeholder='Last Name *'
            autoComplete='off'
            onChange={handleChange}
          />

          <input
            className='u-full-width'
            type='text'
            name='Phone'
            value={user.phone}
            placeholder='Phone Number *'
            autoComplete='off'
            onChange={handleChange}
          />

          <button className='button-primary'>Save</button>
        </form>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    user: state.users.formItem,
  };
}

const mapDispatchToProps = {
    onClose: closeModal,
    onChange: changeFormItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
