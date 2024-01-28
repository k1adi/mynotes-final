// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import useInput from '../../hooks/useInput';

function LoginForm({ loginHandler }) {
  const [email, emailChangeHandler] = useInput('');
  const [password, passwordChangeHandler] = useInput('');
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginHandler({ email, password });
  };

  return (
    <form className="form__wrapper" onSubmit={onSubmitHandler}>
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
          type={showPassword ? 'text' : 'password'}
          value={password}
          id="password"
          name="password"
          className="form--input"
          onChange={passwordChangeHandler}
          placeholder="Password" 
          required
        />
      </div>
      <span onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </span>
      <div className="form__button">
        <input type="submit" className="button button--main" value="Login"/>
      </div>
    </form>
  );
}


LoginForm.propTypes = {
  loginHandler: PropTypes.func.isRequired
};

export default LoginForm;
