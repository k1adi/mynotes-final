// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

import { useLocale } from '../hooks/useContext';
import { ButtonContent, NotFoundContent } from '../utils/lang-content';

import NotFound from '../assets/not-found.svg';

const NotFoundPage = () => {
  const { language } = useLocale();
  return (
    <div className="container--wrap">
      <div className="not-found__wrapper">
        <img src={NotFound} className="not-found__image" alt="Not Found Ilustration" />
        <h1 className="not-found__title">Oops...</h1>
        <p>{NotFoundContent[language].desc}</p>
        <Link to='/' className="button button--main button--large">
          {ButtonContent[language].backToHome}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
