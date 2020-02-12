import React, { useState, useEffect } from 'react';
import AddTodoList from '../components/AddTotoList';
import store, { addTodo, REMOVE_TODO } from './../../../logics/store';
// import { dispatch } from 'redux';

const TodoListController = () => {

  let state = store.getState();
  const hi = () => {
    console.log('changed');
    state = store.getState();
    console.log(state);
  }
  store.subscribe(hi);

  useEffect(() => {
    console.log('rendered controller');
  })

  return (
    <div id="TodoList">
      <AddTodoList/>
      <div id="todoList">
      </div>
    </div>
  );
}

export default TodoListController;