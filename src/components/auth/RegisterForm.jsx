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
    <form className="form__wrapper" onSubmit={onSubmitHandler}>
      <div className="input-wrapper">
        <label htmlFor="userName">Username</label>
        <input 
          type="text"
          value={name}
          id="userName"
          name="userName"
          className="form--input"
          onChange={nameChangeHandler}
          placeholder="Name ..." 
          required
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="userEmail">Email</label>
        <input 
          type="email"
          value={email}
          id="userEmail"
          name="userEmail"
          className="form--input"
          onChange={emailChangeHandler}
          placeholder="Email..." 
          required
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          id="password"
          name="password"
          className="form--input"
          onChange={passwordChangeHandler}
          placeholder="Password" 
          required
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          id="confirmPassword"
          name="confirmPassword"
          className="form--input"
          onChange={confirmPasswordChangeHandler} 
          placeholder="Confirm Password" 
          required
        />
        <small className="form--alert">
          {!accepted && (
            <small>password tidak sama</small>
          )}
        </small>
      </div>
    
      <div className="form__button">
        <input type="submit" className={`button button--main ${!accepted ? 'disabled' : ''}`} value="Submit"  disabled={!accepted} />
      </div>
    </form>
  );
}

RegisterForm.propTypes = {
  registerHandler: PropTypes.func.isRequired
};

export default RegisterForm;
