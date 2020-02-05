import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/bootstrap.min.css';
import Appuser from './AppUser.js'
import data from './user.js';

function App() {
  return (
    <div className="App">
      <Appuser userData={data.results[0]} />
    </div>
  );
}

export default App;
