import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import Navbar from './Navigation/Navbar';
import "swiper/css/bundle";
import Footer from './Navigation/Footer';
import axios from 'axios';

function App() {

  return (
    <div className="App min-vh-100 position-relative">
        <Navbar />
        <AppRouter />
        <Footer />
    </div>
    
  );
}

export default App;
