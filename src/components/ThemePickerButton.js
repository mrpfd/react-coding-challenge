import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemePickerButton = ({theme, themeToggler}) => {
    return (
            <button onClick={themeToggler} className="app__dark-mode-btn icon level-right">
                <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} color={theme === 'dark' ? '#FFA500' : 'black'} />
            </button>
        
    )
}

export {ThemePickerButton}