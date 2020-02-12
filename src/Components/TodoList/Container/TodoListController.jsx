import React, { useState, useEffect } from 'react';
import AddTodoList from '../components/AddTotoList';

const TodoListController = () => {

  //state
  const [list, setList] = useState();
  console.log(list);

  //action type & action
  const type = 'TODO/';
  const ADD_TODO = `${type}ADD_TODO`;

  //action creators
  const addTodo = text => {
    return {
      type: ADD_TODO,
      desc: text
    }
  }

  useEffect(() => {
    console.log('rendered controller');
  })

  console.log(ADD_TODO);

  return (
    <div id="TodoList">
      <AddTodoList/>
      <div id="todoList">
      </div>
    </div>
  );
}

export default TodoListController;