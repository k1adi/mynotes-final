// eslint-disable-next-line no-unused-vars
import React from 'react';

import { useLocale } from '../hooks/useContext';
import { FooterText } from '../utils/lang-content';

function AppFooter() {
  const { language } = useLocale();

  return (
    <>
      <p> Made with <span className="visually-hidden hide-text">love</span> ❤️ by Rizki Adi <span className="footer__emoji">🐢</span> </p>
      <small> 
        { FooterText[language].submission }
        <a href="https://www.dicoding.com/academies/413" target="_blank" rel="noreferrer" className="footer__link"> 
          { FooterText[language].link }
        </a>
      </small>
    </>
  );
}

export default AppFooter;
