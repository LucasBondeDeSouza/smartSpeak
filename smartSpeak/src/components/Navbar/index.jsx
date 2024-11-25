import React from "react";

export default ({ toggleTheme, theme }) => {

    return (
        <nav className="navbar">
            <h3 className="navbar__logo">SmartSpeak</h3>

            <button className="navbar__button" onClick={toggleTheme}>
                <i className={theme === "light_mode" ? "bx bx-moon" : "bx bx-sun"}></i>
            </button>
        </nav>
    )
}