import { createStore } from 'redux';
import TodoListController from './../Components/TodoList/Container/TodoListController';
import datas from './MOCK_DATA.json';

let store = createStore(TodoListController);