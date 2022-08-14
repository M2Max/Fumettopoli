import React, { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { MdOutlineDarkMode, MdDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { ChangeEventHandler } from "react";
import "../index.css";

// const Darkmode = () => {
//   const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//   const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

//   const switchTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//   }

//   return (
//     <div className="darkmode" data-theme={theme}>
//       <button onClick={switchTheme}>
//         { theme === 'dark' ? (<MdOutlineDarkMode size={28} />) : (<MdDarkMode  size={28} />)}
//       </button>
//     </div>
//   );
//}


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
    <div className="toggle-theme-wrapper">
      <MdOutlineWbSunny id ="lightModeIcon" onClick={setLight} size={28} />
      <MdOutlineDarkMode id = "darkModeIcon" onClick={setDark} size={28} />
    </div>
  );
};

export default DarkMode;

