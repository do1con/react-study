import React from 'react';
import './App.css';
import { addNumber } from './util';
import TodoList from './TodoList';

function App() {
  addNumber(1, 2);
  console.log(process.env);
  return (
    <div className="App">
      {addNumber(1,2)}
      <TodoList />
    </div>
  );
}

export default App;
