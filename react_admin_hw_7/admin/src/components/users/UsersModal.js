// import React from 'react';
// import { useState } from 'react';
// import { connect } from 'react-redux';
// import { closeModal, changeFormItems, saveFormItem } from '../../store/actions/users';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Modal from '@material-ui/core/Modal'

// function UsersModal({ user, onClose, onChange, onSave }) {
//   let [isValid, setIsValid] = useState({
//     name: true,
//     surname: true,
//     phone: true,
//   });

//   function handleChange(e) {
//     const value = e.target.value;
//     const name = e.target.name;
//     const changes = {
//       [name]: value,
//     };
//     onChange(changes);

//     validateInput(name, value);
//   }

//   function validateInput(name, value) {
//     setIsValid({
//       ...isValid,
//       [name]: !!value,
//     });
//   }

//   return (
//     <div className='form-container'>
//       <img
//         className='closeIcon'
//         alt='close'
//         onClick={() => onClose()}
//       />
//       <form noValidate autoComplete='off' onSubmit={() => onSave(user)}>
//         <label>User`s Form</label>
//         <TextField
//           id='standart-basic'
//           className={isValid.name ? '' : 'error'}
//           type='text'
//           name='name'
//           value={user.name}
//           placeholder='First Name *'
//           onChange={handleChange}
//         />
//         <TextField
//           id='standart-basic'
//           className={isValid.phone ? '' : 'error'}
//           type='text'
//           name='phone'
//           value={user.phone}
//           placeholder='Phone Number *'
//           onChange={handleChange}
//         />
//         <Button className='primary'>Save</Button>
//       </form>
//     </div>
//   );
// }

// function mapStateToProps(state) {
//   return {
//     user: state.users.formItem,
//   };
// }

// const mapDispatchToProps = {
//   onChange: changeFormItems,
//   onSave: saveFormItem,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UsersModal);

import React from 'react'

function UsersModal() {
  return (
    <div>
      Form
    </div>
  )
}

export default UsersModal

