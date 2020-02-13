import React from 'react';
import AddTodoList from '../components/AddTotoList';
import Store, { AddTodo, RemoveTodo } from '../../../Logics/Store';
import { connect } from 'react-redux';
import styled from 'styled-components';
import OneTodo from'./../components/OneTodo';

const TodoListController = ( state, dispatch ) => {

  console.log(state)
  

  const listTodo = () => {
    return state.store.map((list, id) => {
      return <OneTodo desc={list.desc} 
        index={list.index} 
        removeTodo={state.dispatchRemoveTodo} 
        key={id} 
      />
    });
  }

  return (
    <div id="TodoListWrapper">
      <AddTodoList state = { state } />
      <ShowTodoList>
        {listTodo()}
      </ShowTodoList>
    </div>
  );
}

const mapStateToProps = (state) => ({ store: state.todoList });
const mapDispatchToProps = (dispatch) => ({ 
  dispatchAddTodo: (text) => dispatch(AddTodo(text)),
  dispatchRemoveTodo: (index) => dispatch(RemoveTodo(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListController);

const ShowTodoList = styled.div`
  width: 100%;
  background-color: #cccccc;
`;