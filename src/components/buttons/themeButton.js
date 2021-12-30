import React, {useEffect} from "react";
import "./themetoggle.css";
import {MoonIcon, SunIcon} from '../../icons/darkmode';

const updateTheme = (isDarkEnabled) => {
  // Get CSS variables for background/foreground
  const styles = getComputedStyle(document.body);
  const black = styles.getPropertyValue("--black");
  const white = styles.getPropertyValue("--white");
  const docEl = document.documentElement;

  if (isDarkEnabled) {
    docEl.style.setProperty("--background", black);
    docEl.style.setProperty("--foreground", white);
    document.querySelector("html").classList.add("darkmode");
  } else {
    docEl.style.setProperty("--background", white);
    docEl.style.setProperty("--foreground", black);
    document.querySelector("html").classList.remove("darkmode");
  }
};

export const ThemeToggle = ({darkMode, setDarkMode}) => {

  useEffect(() => {
    updateTheme(darkMode);
  }, [darkMode]);

  const toggleState = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label id="themeChanger" className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${darkMode ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={darkMode}
          onClick={() => toggleState()}
        />
      </div>
    </label>
  );
}

export default ThemeToggle;
