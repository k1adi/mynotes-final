// eslint-disable-next-line no-unused-vars
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

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useAuth } from './hooks/useContext';

function App() {
  const { initializePage } = useAuth();
  if (initializePage) return;
  
  return (
    <div className='app'>
      <header className='app__header'>
        <AppNavbar />
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
            <LoginPage />
          }/>
          
          <Route path="/register" element={
            <RegisterPage />
          }/>
          
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </main>

      <footer className='app__footer'>
        <AppFooter />
      </footer>

      <ToastContainer style={{ maxWidth: '400px', width: '90%' }} />
    </div>
  );
}

export default App;