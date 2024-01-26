// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import useInput from '../../hooks/useInput';

function RegisterForm({ registerHandler }) {
  const [name, nameChangeHandler] = useInput('');
  const [email, emailChangeHandler] = useInput('');
  const [password, passwordChangeHandler] = useInput('');
  const [confirmPassword, confirmPasswordChangeHandler] = useInput('');
  const [accepted, setAccept] = React.useState(true);

  React.useEffect(() => {
    if (password !== confirmPassword) {
      setAccept(false);
    } else {
      setAccept(true);
    }
  }, [password, confirmPassword]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    registerHandler({ name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={name} onChange={nameChangeHandler} placeholder="Name" required/>
      <input type="email" value={email} onChange={emailChangeHandler} placeholder="Email" required/>
      <input type="password" value={password} onChange={passwordChangeHandler} placeholder="Password" required/>
      <input type="password" value={confirmPassword} onChange={confirmPasswordChangeHandler} placeholder="Confirm Password" required/>
      {!accepted && (
        <small>password tidak sama</small>
      )}
      <button disabled={!accepted}>Daftar</button>
    </form>
  );
}

RegisterForm.propTypes = {
  registerHandler: PropTypes.func.isRequired
};

export default RegisterForm;
