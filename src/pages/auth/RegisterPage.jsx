// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth, useLocale } from '../../hooks/useContext';
import { register } from '../../utils/network-data';
import RegisterForm from '../../components/auth/RegisterForm';
import LoaderScreen from '../../components/ui/LoaderScreen';
import { PageContent } from '../../utils/lang-content';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { language } = useLocale();
  const { isUserLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if(isUserLoggedIn){
      navigate(-1);
      return;
    }
  }, [isUserLoggedIn, navigate]);

  const onRegister = async (user) => {
    setIsLoading(true);

    const { error } = await register(user);
    if (!error) {
      navigate('/login');
      return;
    }

    setIsLoading(false);
  };

  return (
    <div className="container--full-width container--padding-y">
      {isLoading ? (
        <LoaderScreen />
      ) : (
        <div className="container--note container--padding-y">
          <div className="card-detail">
            <h3 className='text__heading'> Register </h3>
            <RegisterForm registerHandler={onRegister}/>
          </div>

          <p> 
            {PageContent[language].register} 
            <Link to="/login" style={{ color: '#185ADB' }}> Login</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
