import React, {useState} from 'react';
import './App.scss';
import { Articles } from './Articles';
import { Button } from './Button';
import { Header } from './Header';
import { InputForm } from './InputForm';
import { ThemePickerButton } from './ThemePickerButton';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const globalTheme = theme === 'dark' ? 'app dark-mode' : 'app' 

  return (
    <div className={globalTheme}>
      <Header>
        <ThemePickerButton theme={theme} themeToggler={themeToggler} />
      </Header>
      <Articles />
      <InputForm />
      <Button />
    </div>
  );
}

export default App;
