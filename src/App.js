import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
            <PersonCard firstName="Zach" lastName="Jones" age={29} hairColor="Brown"/>
            <PersonCard firstName="Zach" lastName="Jones" age={29} hairColor="Brown"/>
            <PersonCard firstName="Zach" lastName="Jones" age={29} hairColor="Brown"/>
            <PersonCard firstName="Zach" lastName="Jones" age={29} hairColor="Brown"/>
    </div>
  );
}

export default App;
