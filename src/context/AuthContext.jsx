import React from 'react';
import PropTypes from 'prop-types';
import { getAccessToken, getUserLogged, putAccessToken } from '../utils/network-data';

const AuthContext = React.createContext({
  initializePage: true,
  isUserLoggedIn: false,
  accessToken: '',
  userProfile: null,
  setInitiliaze: () => {},
  onLoginHandler: () => {},
  onLogoutHandler: () => {},
});

class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      initializePage: true,
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
    } else {
      this.setState({ initializePage: false });
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

    this.setState({ initializePage: false });
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
      initializePage: this.state.initializePage,
      isUserLoggedIn: this.state.isUserLoggedIn,
      accessToken: this.state.accessToken,
      userProfile: this.state.userProfile,
      onLoginHandler: this.onLoginHandler,
      onLogoutHandler: this.onLogoutHandler,
      setInitiliaze: (value) => {
        this.setState({
          initializePage: value,
        });
      },
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
