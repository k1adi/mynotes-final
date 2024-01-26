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
    <form onSubmit={onSubmitHandler}>
      <input type="email" value={email} onChange={emailChangeHandler} placeholder="Email" required/>
      <input 
        type={showPassword ? 'text' : 'password'}
        value={password} 
        onChange={passwordChangeHandler} 
        placeholder="Password" 
        required
      />
      <span onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </span>
      <button>Masuk</button>
    </form>
  );
}


LoginForm.propTypes = {
  loginHandler: PropTypes.func.isRequired
};

export default LoginForm;
