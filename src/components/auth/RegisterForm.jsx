// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import useInput from '../../hooks/useInput';

function RegisterForm({ registerHandler }) {
  const [name, nameChangeHandler] = useInput('');
  const [email, emailChangeHandler] = useInput('');
  const [password, passwordChangeHandler] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    registerHandler({ name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={name} onChange={nameChangeHandler} placeholder="Name"/>
      <input type="email" value={email} onChange={emailChangeHandler} placeholder="Email"/>
      <input type="password" value={password} onChange={passwordChangeHandler} placeholder="Password"/>
      <button>Daftar</button>
    </form>
  );
}

RegisterForm.propTypes = {
  registerHandler: PropTypes.func.isRequired
};

export default RegisterForm;
