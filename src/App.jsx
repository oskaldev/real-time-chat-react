import React from 'react';
import './App.css';
import Navbar from '@components/common/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@routing/AppRouter';
import useAuth from '@hooks/useAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '@components/common/Loader';

const App = () => {
  const { auth } = useAuth();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
