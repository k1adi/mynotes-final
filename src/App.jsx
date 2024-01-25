import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AppNavbar from './layouts/AppNavbar';
import AppFooter from './layouts/AppFooter';

import LandingPage from './pages/LandingPage';
import NotePage from './pages/note/NotePage';
import ArchivePage from './pages/note/ArchivePage';
import DetailPage from './pages/note/DetailPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

import { AuthContextProvider } from './context/AuthContext';
import { getUserLogged, putAccessToken } from './utils/network-data';
import LoaderScreen from './components/ui/LoaderScreen';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      authUser: null,
      initializing: true,
      isLoadingTime: true,
    };

    this.onUserLoggedIn = this.onUserLoggedIn.bind(this);
    this.onUserLoggedOut = this.onUserLoggedOut.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authUser: data,
        initializing: false,
        isLoadingTime: false,
      };
    });
  }

  async onUserLoggedIn({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();
    this.setState(() => {
      return { authUser: data };
    });
  }

  onUserLoggedOut() {
    this.setState(() => {
      return { authUser: null };
    });

    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    return(
      <AuthContextProvider value={this.state.authUser}>
        <div className='app'>
          {this.state.isLoadingTime && (
            <LoaderScreen />
          )}

          <header className='app__header'>
            <AppNavbar logoutHandler={this.onUserLoggedOut} />
          </header>

          <main className='app__content'>
            <Routes>
              <Route path="/" element={
                <LandingPage />
              }/>
              
              <Route path="/note" element={
                <NotePage />
              }/>

              <Route path="/archive" element={
                <ArchivePage />
              }/>

              <Route path="/note/:id" element={
                <DetailPage />
              }/>

              <Route path="/login" element={
                <LoginPage getUser={this.onUserLoggedIn} />
              }/>
              
              <Route path="/register" element={
                <RegisterPage />
              }/>
              
              <Route path="/not-found" element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
          </main>

          <footer className='app__footer'>
            <AppFooter />
          </footer>
        </div>
      </AuthContextProvider>
    );
  }
}


export default App;