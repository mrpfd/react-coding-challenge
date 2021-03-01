import React, {useState} from 'react';
import './App.scss';
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
      
      <div className="columns">
        <div className="column">
          <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</p>
        </div>
        <div className="column">
          <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out.</p>
        </div>
        {/* Text from https://slipsum.com/ */}
      </div>

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
