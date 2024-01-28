import { Bounce } from 'react-toastify';

const CONFIG = {
  API_URL: 'https://notes-api.dicoding.dev/v1',
  STORAGE_TOKEN: 'mynotes-final_token',
  STORAGE_THEME: 'mynotes-final_theme',
  STORAGE_LOCALE: 'mynotes-final_lang',
  TOAST_EMITTER: {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Bounce, 
  }
};

export default CONFIG;
