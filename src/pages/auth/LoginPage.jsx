// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { login } from '../../utils/network-data';
import LoginForm from '../../components/auth/LoginForm';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = ({ getUser }) => {
  const navigate = useNavigate();
  const userAuth = React.useContext(AuthContext);

  React.useEffect(() => {
    if(userAuth !== null){
      return navigate(-1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth]);

  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      getUser(data);
      navigate('/note');
    }
  };

  if(userAuth !== null){
    return null;
  }

  return (
    <div className='container--wrap'>
      <p>Login Page</p>
      <LoginForm loginHandler={onLogin} />
    </div>
  );
};

LoginPage.propTypes = {
  getUser: PropTypes.func.isRequired
};

export default LoginPage;
