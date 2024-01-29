// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../utils/network-data';
import { useAuth, useLocale } from '../../hooks/useContext';
import LoginForm from '../../components/auth/LoginForm';
import LoaderScreen from '../../components/ui/LoaderScreen';
import { PageContent, ToastContent } from '../../utils/lang-content';
import { toast } from 'react-toastify';
import CONFIG from '../../utils/config';

const LoginPage = () => {
  const navigate = useNavigate();
  const { language } = useLocale();
  const { isUserLoggedIn, onLoginHandler } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if(isUserLoggedIn){
      navigate(-1);
      return;
    }
  }, [isUserLoggedIn]);

  const onLogin = async ({ email, password }) => {
    setIsLoading(true);

    const { error, data } = await login({ email, password });
    if (!error) {
      toast.success(ToastContent[language].login, CONFIG.TOAST_EMITTER);
      onLoginHandler(data);
      navigate('/note');
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
            <h3 className='text__heading'> Login </h3>
            <LoginForm loginHandler={onLogin} />
          </div>

          <p>
            { PageContent[language].login }
            <Link to="/register" style={{ color: '#185ADB' }}> {PageContent[language].signUp}</Link>
          </p>
        </div>
      )}
    </div>
  );
};


export default LoginPage;
