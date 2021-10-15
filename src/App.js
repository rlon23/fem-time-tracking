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
      <div className='container'>
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
      </div>
    </div>
  );
}

export default App;
