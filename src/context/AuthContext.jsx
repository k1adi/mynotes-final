import React from 'react';
import PropTypes from 'prop-types';
import { getAccessToken, putAccessToken } from '../utils/network-data';

const AuthContext = React.createContext({
  isUserLoggedIn: false,
  accessToken: '',
  onLoginHandler: () => {},
  onLogoutHandler: () => {},
});

class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    
    const token = getAccessToken() ?? '';
    this.state = {
      isUserLoggedIn: !!token,
      accessToken: token,
    };

    this.onLoginHandler = this.onLoginHandler.bind(this);
    this.onLogoutHandler = this.onLogoutHandler.bind(this);
  }

  onLoginHandler = ({ accessToken }) => {
    this.setState({ userLoggedIn: true, accessToken });
    putAccessToken(accessToken);
  };

  onLogoutHandler = () => {
    this.setState({ userLoggedIn: false, accessToken: '' });
    putAccessToken('');
  };

  render() {
    const authContextValue = {
      isUserLoggedIn: this.state.isUserLoggedIn,
      accessToken: this.state.accessToken,
      onLoginHandler: this.onLoginHandler,
      onLogoutHandler: this.onLogoutHandler,
    };

    return (
      <AuthContext.Provider value={authContextValue}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthContextProvider };
