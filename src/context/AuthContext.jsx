import React from 'react';
import PropTypes from 'prop-types';
import { getAccessToken, getUserLogged, putAccessToken } from '../utils/network-data';

const AuthContext = React.createContext({
  isUserLoggedIn: false,
  accessToken: '',
  userProfile: null,
  onLoginHandler: () => {},
  onLogoutHandler: () => {},
});

class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isUserLoggedIn: false,
      accessToken: '',
      userProfile: null,
    };

    this.onLoginHandler = this.onLoginHandler.bind(this);
    this.onLogoutHandler = this.onLogoutHandler.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);
  }

  componentDidMount() {
    const token = getAccessToken() ?? null;

    if (token) {
      this.getUserProfile(token);
    }
  }

  async getUserProfile(accessToken) {
    const { error, data } = await getUserLogged();

    if (!error) {
      this.setState({
        isUserLoggedIn: true,
        accessToken,
        userProfile: data,
      });
    }
  }

  onLoginHandler = async ({ accessToken }) => {
    putAccessToken(accessToken);
    this.getUserProfile(accessToken);
  };

  onLogoutHandler = () => {
    this.setState({ 
      isUserLoggedIn: false, 
      accessToken: '',
      userProfile: null
    });
    putAccessToken('');
  };

  render() {
    const authContextValue = {
      isUserLoggedIn: this.state.isUserLoggedIn,
      accessToken: this.state.accessToken,
      userProfile: this.state.userProfile,
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
