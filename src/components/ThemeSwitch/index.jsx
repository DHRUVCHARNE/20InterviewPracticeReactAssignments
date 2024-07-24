import React from "react";
import { useState } from "react";
import "./theme.css";
import useLocalStorage from "./useLocalStorage";
function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function ToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={ToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default ThemeSwitch;
