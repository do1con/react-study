import React, { useEffect } from 'react';
import AddTodoList from '../components/AddTotoList';
import Store, { AddTodo, RemoveTodo } from '../../../Logics/Store';
import { connect } from 'react-redux';
import styled from 'styled-components';
import OneTodo from'./../components/OneTodo';

const TodoListController = ( state, dispatch ) => {

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
      <AddTodoList { ...state } />
      <ShowTodoList>
        {listTodo()}
      </ShowTodoList>
    </div>
  );
}

const mapStateToProps = (state) => ({ store: state.todoList });
const mapDispatchToProps = (dispatch) => ({ 
  dispatchAddTodo: (text) => Store.dispatch(AddTodo(text)),
  dispatchRemoveTodo: (index) => Store.dispatch(RemoveTodo(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListController);

const ShowTodoList = styled.div`
  width: 100%;
`;
