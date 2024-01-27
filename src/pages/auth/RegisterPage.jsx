// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useContext';
import { register } from '../../utils/network-data';
import RegisterForm from '../../components/auth/RegisterForm';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAuth();

  React.useEffect(() => {
    if(isUserLoggedIn){
      return navigate(-1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

  const onRegister = async (user) => {
    try {
      const { error } = await register(user);
      if (!error) {
        navigate('/login');
      }
    } catch(error) {
      console.error('Error during register:', error);
    }
  };

  if(isUserLoggedIn){
    return null;
  }

  return (
    <div className='container--wrap'>
      <p>Register Page</p>
      <RegisterForm registerHandler={onRegister}/>
    </div>
  );
};

export default RegisterPage;
