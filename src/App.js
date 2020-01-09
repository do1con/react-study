import React from 'react';
import './App.css';
import { addNumber } from './util';

function App() {
  addNumber(1, 2);
  return (
    <div className="App">
      {addNumber(1,2)}
    </div>
  );
}

export default App;
