
"use client";

import { useState, useEffect } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { PiMoonStarsFill } from "react-icons/pi";
import React from 'react'

const ThemeSwitch = ({children}) => {
  const [darkMode, setDarkMode] = useState(false); // Default to false

  useEffect(() => {
    const savedMode = localStorage.getItem("displayMode");
    if (savedMode === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("displayMode", darkMode ? "dark" : "light");
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };


    return (
      <div className={` h-auto plus smooth w-full ${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-700"
    }`}>
      {children}
     <div className="fixed bottom-0 right-0 m-6 p-4 z-50">
        <button
                  onClick={toggleDarkMode}
                  className="p-2 text-2xl rounded-md smooth hover:bg-gray-400/20 smooth  bg-green-400  text-gray-500 dark:text-gray-50 border-gray-300 dark:border-gray-500 flex-center "
                >
                  {darkMode ? <TiWeatherSunny /> : <PiMoonStarsFill />}
                </button>
     </div>
    
    </div>
      )
    }
    
    export default ThemeSwitch;
