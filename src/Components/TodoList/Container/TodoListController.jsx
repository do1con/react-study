import React, { useState, useEffect } from 'react';
import AddTodoList from '../components/AddTotoList';
import Store, { AddTodo, REMOVE_TODO } from '../../../Logics/Store';
import { connect } from 'react-redux';
// import { dispatch } from 'redux';

const TodoListController = ( state, dispatch ) => {

  console.log(state);

  const listTodo = () => {
    return state.store.todoList.map((list, id) => {
      console.log('gdgd')
    return (<h4>{list.desc}, {id}</h4>)
    });
  }

  return (
    <div id="TodoListWrapper">
      <AddTodoList addTodo = { dispatch } state = { state } />
      <div id="todoList">
        {state.store ? listTodo() : 'add todo'}
      </div>
    </div>
  );
}

const mapStateToProps = ({  }) 

export default connect(
  state => ({ store: state }),
  dispatch => ({ dispatchAddToto: text => dispatch(AddTodo(text)) })
)(TodoListController);