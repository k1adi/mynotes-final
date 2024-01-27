// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { LocaleContextProvider } from './context/LocaleContext';
import { ThemeContextProvider } from './context/ThemeContext';

// styling
import './styles/main.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <LocaleContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </LocaleContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
