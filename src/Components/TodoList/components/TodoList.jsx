import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AddTodoList = (props) => {

  const [list,setList] = useState({lists: []});

  return (
    <AddTodo>
      <TodoText type="text" placeholder="      할 일 입력" />
      <SubmitTodo type="submit" onClick={addTotoInList} value="추가" />
    </AddTodo>
  );
};

export default AddTodoList;
