import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import TodoListController from './TodoList/Container/TodoListController';

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/todoList">TodoList</Link>
        <Link to="/counter">Counter</Link>
      </Header>
      <Section>
        <Route path="/todoList" component={ TodoListController } />
      </Section>
    </BrowserRouter>
  );
}

export default App;

const Header = styled.header`
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: #dddddd;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.section`
  width: 100%;
  background-color: #eeeeee;
`;