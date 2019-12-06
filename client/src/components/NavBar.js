import React from 'react';
import useDarkMode from "./useDarkMode";

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Player's Club 2019</h1>
            <div className="dark-mode_toggle">
                <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
            </div>
        </nav>
    );
};
export default NavBar;