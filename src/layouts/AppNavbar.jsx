// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/useContext';
import { getUserLogged } from '../utils/network-data';

function AppNavbar() {
  const { isUserLoggedIn, onLogoutHandler } = useAuth();

  const location = useLocation();
  const links = [
    {path: '/', text: 'Home'},
    {path: '/note', text: 'Note'},
    {path: '/archive', text: 'Archive'},
    {path: '/login', text: 'Login'},
    {path: '/register', text: 'Register'},
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
      <p>Navbar</p>
      {links.map((link, index) => (
        <Link key={index} to={link.path} className={location.pathname === link.to ? 'active' : ''}>
          {link.text}
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
