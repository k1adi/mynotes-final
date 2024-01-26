// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

function AppNavbar({ logoutHandler }) {
  const userAuth = React.useContext(AuthContext);

  const location = useLocation();
  const links = [
    {path: '/', text: 'Home'},
    {path: '/note', text: 'Note'},
    {path: '/archive', text: 'Archive'},
    {path: '/note/123', text: 'Detail'},
    {path: '/login', text: 'Login'},
    {path: '/register', text: 'Register'},
  ];
  
  return (
    <>
      <p>Navbar</p>
      {links.map((link, index) => (
        <Link key={index} to={link.path} className={location.pathname === link.to ? 'active' : ''}>
          {link.text}
        </Link>
      ))}
      {userAuth && (
        <>
          <button onClick={logoutHandler}>Log Out</button>
          {userAuth.name}
        </>
      )}
    </>
  );
}

AppNavbar.propTypes = {
  logoutHandler: PropTypes.func.isRequired
};

export default AppNavbar;
