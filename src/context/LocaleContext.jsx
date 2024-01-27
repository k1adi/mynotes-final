import React from 'react';
import PropTypes from 'prop-types';
import { getLocale, putLocale } from '../utils/local-storage';

const LocaleContext = React.createContext({
  language: 'en',
  toggleLanguageHandler: () => {},
});

class LocaleContextProvider extends React.Component {
  constructor(props) {
    super(props);

    const initialLanguage = getLocale();
    this.state = {
      language: initialLanguage,
    };

    this.toggleLanguageHandler = this.toggleLanguageHandler.bind(this);
  }

  toggleLanguageHandler = () => {
    this.setState((prevState) => ({
      language: prevState.language === 'en' ? 'id' : 'en',
    }));
  };

  componentDidUpdate(_, prevState) {
    if (prevState.language !== this.state.language) {
      putLocale(this.state.language);
    }
  }

  render() {
    const contextValue = {
      language: this.state.language,
      toggleLanguageHandler: this.toggleLanguageHandler,
    };

    return (
      <LocaleContext.Provider value={contextValue}>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

LocaleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LocaleContext, LocaleContextProvider };
