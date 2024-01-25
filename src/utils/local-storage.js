import CONFIG from './config';

function getTheme() {
  if (localStorage.getItem(CONFIG.STORAGE_THEME) === null) {
    putTheme('light');
    return localStorage.getItem(CONFIG.STORAGE_THEME);
  }

  return 'light';
}

function putTheme(theme) {
  return localStorage.setItem(CONFIG.STORAGE_THEME, theme);
}

function getLocale() {
  return localStorage.getItem(CONFIG.STORAGE_LOCALE);
}

function putLocale(lang) {
  return localStorage.setItem(CONFIG.STORAGE_LOCALE, lang);
}

export {
  getTheme,
  putTheme,
  getLocale,
  putLocale
};
