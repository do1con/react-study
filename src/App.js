import React from 'react';
import './App.css';
import { addNumber } from './util';
import TodoList from './TodoList';

function App() {
  addNumber(1, 2);
  return (
    <div className="App">
      {addNumber(1,2)}
      <TodoList />
    </div>
  );
}

export default App;
