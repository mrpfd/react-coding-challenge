import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({theme, themeToggler}) => {
    return (
        <div className="level">
            <div>
                <h1 className="title">Dark Mode Challenge</h1>
            </div>
            {/* --The button that should toggle dark mode-- */}
            <button onClick={themeToggler} className="app__dark-mode-btn icon level-right">
                <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} color={theme === 'dark' ? '#FFA500' : 'black'} />
            </button>
        </div>
    )
}

export {Header}