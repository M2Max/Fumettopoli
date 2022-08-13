import React from 'react';
import './App.css';
import Square from './components/square/Square';
import useLocalStorage from 'use-local-storage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <span>Easy Darkmode</span>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} Theme
      </button>
      <Square />
    </div>
  );
}

export default App;
