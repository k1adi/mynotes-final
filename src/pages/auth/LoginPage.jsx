// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../../utils/network-data';
import { useAuth } from '../../hooks/useContext';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  const { isUserLoggedIn, onUserLogIn } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if(isUserLoggedIn){
      return navigate(-1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

  const onLogin = async ({ email, password }) => {
    try {
      setIsLoading(true);

      const { data } = await login({ email, password });
      onUserLogIn(data);
      navigate('/note');
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if(isUserLoggedIn){
    return null;
  }

  console.log(isLoading);

  return (
    <div className='container--wrap'>
      <p>Login Page</p>
      <LoginForm loginHandler={onLogin} />
    </div>
  );
};


export default LoginPage;
