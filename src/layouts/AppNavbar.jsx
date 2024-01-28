// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth, useLocale, useTheme } from '../hooks/useContext';
import { NavbarText } from '../utils/lang-content';
import NotesLogo from '../assets/mynotes-logo.png';

import { FaRegSun, FaMoon  } from 'react-icons/fa6';
import { GrLanguage } from 'react-icons/gr';

function AppNavbar() {
  const { isUserLoggedIn, userProfile, onLogoutHandler } = useAuth();
  const { theme, toggleThemeHandler } = useTheme();
  const { language, toggleLanguageHandler } = useLocale();

  const location = useLocation();
  const links = [
    {path: '/'},
    {path: '/note'},
    {path: '/archive'},
  ];

  const [isNavMobileShown, setIsNavMobileShown] = React.useState(false);
  const handleNavToggle = (event) => {
    event.stopPropagation();
    setIsNavMobileShown(!isNavMobileShown);
  };

  if(isUserLoggedIn){
    console.log(userProfile);
  }

  return (
    <nav className='nav'>
      <button className='nav__toggle' onClick={handleNavToggle}>
        <div className={`hamburger-menu ${isNavMobileShown ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className='nav__menu'>
        <Link to="/" className='nav__logo'>
          <img src={NotesLogo} alt='MyNotes Logo' />
        </Link>

        <ul className={`nav__list ${isNavMobileShown ? 'is-shown' : ''}`}>
          {links.map((link, index) => (
            <li key={index} className={location.pathname === link.to ? 'active' : ''}>
              <Link to={link.path} onClick={handleNavToggle}>
                {NavbarText[language].list[index]}
              </Link>
            </li>
          ))}

          {isUserLoggedIn ? (
            <li className="list-login" onClick={onLogoutHandler}> 
              <a href="javascript:void(0)">Logout </a>
            </li>
          ) : (
            <li className={location.pathname === 'login' ? 'list-login active' : 'list-login'}>
              <Link to='/login' onClick={handleNavToggle}> Login </Link>
            </li>
          )}
          
        </ul>
      </div>

      <div className='nav__profile'>
        <button 
          className="button button--translate"
          onClick={toggleLanguageHandler}
        >
          <GrLanguage /> {language == 'id' ? 'IDN' : 'ENG'}
        </button>
        <button 
          className={`button button--toggle-theme ${theme}`}
          onClick={toggleThemeHandler}
        >
          {theme == 'light' ? <FaRegSun /> : <FaMoon /> }
        </button>

        {isUserLoggedIn ? (
          <button 
            className="button button--login"
            onClick={onLogoutHandler}
          >
            Logout
          </button>
        ) : (
          <button className="button button--login">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </nav>
  );
}

export default AppNavbar;
