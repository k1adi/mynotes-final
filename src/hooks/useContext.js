import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { LocaleContext } from '../context/LocaleContext';

const useAuth = () => React.useContext(AuthContext);
const useTheme = () => React.useContext(ThemeContext);
const useLocale = () => React.useContext(LocaleContext);

export { useAuth, useLocale, useTheme };