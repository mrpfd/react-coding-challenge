import React, {useState} from 'react';

const withTheme = (WrappedComponent) => () => {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }
  
    const globalTheme = theme === 'dark' ? 'app dark-mode' : 'app';
        return (
            <div className={globalTheme}>
                <WrappedComponent
                theme={theme} 
                themeToggler={themeToggler}
                />
            </div>
        );
};

export default withTheme;