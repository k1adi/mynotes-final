// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAuth, useLocale, useTheme } from '../hooks/useContext';

import { getUserLogged } from '../utils/network-data';
import { NavbarText } from '../utils/lang-content';

function AppNavbar() {
  const { isUserLoggedIn, onLogoutHandler } = useAuth();
  const { theme, toggleThemeHandler } = useTheme();
  const { language, toggleLanguageHandler } = useLocale();

  const location = useLocation();
  const links = [
    {path: '/'},
    {path: '/note'},
    {path: '/archive'},
    {path: '/login'},
    {path: '/register'},
  ];

  const [userProfile, setUserProfile] = React.useState(null);
  React.useEffect(() => {
    if (isUserLoggedIn) {
      getUserLogged()
        .then(({ data }) => {
          setUserProfile(data);
        })
        .catch(({ error }) => {
          console.error(error);
        });
    }
  }, [isUserLoggedIn]);
  
  return (
    <>
      <p>
        Navbar
        <span onClick={toggleLanguageHandler}>{language}</span>
        <span onClick={toggleThemeHandler}>{theme}</span>
      </p>
      {links.map((link, index) => (
        <Link key={index} to={link.path} className={location.pathname === link.to ? 'active' : ''}>
          {NavbarText[language].list[index]}
        </Link>
      ))}
      {isUserLoggedIn && userProfile && (
        <>
          <button onClick={onLogoutHandler}>Log Out</button>
          {userProfile.name}
        </>
      )}
    </>
  );
}

export default AppNavbar;
