import React, {useState} from 'react';
import './App.scss';
import { Articles } from './Articles';
import { Header } from './Header';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const globalTheme = theme === 'dark' ? 'app dark-mode' : 'app' 

  return (
    <div className={globalTheme}>
      <Header theme={theme} themeToggler={themeToggler} />
      <Articles />

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <button className="button is-link">Submit</button>
        </div>
      </section>
    </div>
  );
}

export default App;
