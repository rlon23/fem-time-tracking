import './App.scss';
import './scss/main.scss';
import data from './data.json';

import Profile from './components/Profile/Profile';
import Card from './components/Card/Card';
import { useState } from 'react';

function App() {
  const [activeTimeframe, setActiveTimeframe] = useState('daily');

  return (
    <div className='App'>
      <header className='App-header'>
        <Profile active={activeTimeframe} onClick={setActiveTimeframe} />
        {data.map((item, index) => {
          return (
            <Card
              title={item.title}
              timeframes={item.timeframes}
              active={activeTimeframe}
              key={item.title}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
