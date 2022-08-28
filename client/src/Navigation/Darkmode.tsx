import React, { useEffect } from 'react';
import "../index.css";
import { FaRegMoon, FaSun } from 'react-icons/fa';

// 1
const setDark = () => {

  // 2
  localStorage.setItem("theme", "dark");

  // 3
  document.documentElement.setAttribute("data-theme", "dark");
  document.getElementById("lightModeIcon")?.setAttribute("display", "block");
  document.getElementById("darkModeIcon")?.setAttribute("display", "none");

};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
  document.getElementById("lightModeIcon")?.setAttribute("display", "none");
  document.getElementById("darkModeIcon")?.setAttribute("display", "block");
};

// 4
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

const DarkMode = () => {
  useEffect(() => {
    if (defaultDark) {
      setDark();
      console.log("dark");
    }else{
      setLight();
      console.log("light");
    }
  }, []);
  
  return (
    <div className="toggle-theme-wrapper mx-1">
      <FaSun      id = "lightModeIcon" style={{position: 'relative', top: '2px'}}  onClick={setLight}  size={28} />
      <FaRegMoon  id = "darkModeIcon"  style={{position: 'relative', top: '2px'}}  onClick={setDark}   size={28} />
    </div>
  );
};

export default DarkMode;

