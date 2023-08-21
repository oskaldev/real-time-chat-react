import React from 'react';
import './App.css';
import Navbar from '@components/common/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@routing/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
