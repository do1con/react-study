import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const AddTodoList = ( addTodo ) => {

  const todoInput = useRef();

  const addTodoInList = () => {
    addTodo.state.dispatchAddTodo(todoInput.current.value);
    todoInput.current.value='';
  };
  
  return (
    <AddTodo>
      <TodoText type="text" placeholder="할 일 입력" ref={todoInput}/>
      <SubmitTodo type="submit" onClick={addTodoInList} value="추가" />
    </AddTodo>
  );
};

export default AddTodoList;

const AddTodo = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  width: 80%;
  margin: 0 auto;
  display: flex;
`;

const TodoText = styled.input`
  width: 90%;
  height: 40px;
  border: 0px;
  padding: 0px;
  font-size: 1.1em;
  padding-left: 20px;
`;

const SubmitTodo = styled.input`
  width: 10%;
  height: 40px;
  background-color: #98c1ff;
  border: 0;
  border-radius: 0;
  font-size: 1.2em;
  transition: background-color, color, 0.5s;
  cursor: pointer;
  &:hover{
    background-color: #5490cc;
    color: #ffffff;
  }
`;