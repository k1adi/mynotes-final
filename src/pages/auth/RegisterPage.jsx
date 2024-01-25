// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from '../../utils/network-data';
import RegisterForm from '../../components/auth/RegisterForm';
import { AuthContext } from '../../context/AuthContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const userAuth = React.useContext(AuthContext);

  React.useEffect(() => {
    if(userAuth !== null){
      return navigate(-1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth]);

  const onRegister = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/login');
    }
  };

  if(userAuth !== null){
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
