import React from 'react';
import PropTypes from 'prop-types';
import { getTheme, putTheme } from '../utils/local-storage';

const ThemeContext = React.createContext({
  theme: null,
  toggleThemeHandler: () => {},
});

class ThemeContextProvider extends React.Component {
  constructor(props) {
    super(props);

    const initialTheme = getTheme();
    this.state = {
      theme: initialTheme,
    };

    this.updateTheme = this.updateTheme.bind(this);
    this.toggleThemeHandler = this.toggleThemeHandler.bind(this);
  }

  toggleThemeHandler = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  componentDidUpdate(_, prevState) {
    if (prevState.theme !== this.state.theme) {
      this.updateTheme();
    }
  }

  updateTheme() {
    putTheme(this.state.theme);
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }

  render() {
    const contextValue = {
      theme: this.state.theme,
      toggleThemeHandler: this.toggleThemeHandler,
    };

    return (
      <ThemeContext.Provider value={contextValue}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeContextProvider };
