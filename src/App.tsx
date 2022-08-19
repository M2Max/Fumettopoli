import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import Navbar from './Navigation/Navbar';
import "swiper/css/bundle";

function App() {

  return (
    <div className="App">
        <Navbar />
        <AppRouter />
    </div>
  );
}

export default App;
