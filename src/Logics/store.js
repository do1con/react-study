import { createStore } from 'redux';

//ininital state
const initialState = {
  count: 0,
  todoList: []
}

// action type
const TODO = 'TODO/';
const COUNTER = 'COUNTER/';

// action
export const ADD_TODO = `${TODO}ADD_TODO`;
export const REMOVE_TODO = `${TODO}REMOVE_TODO`;
export const INCREASE_COUNT = `${COUNTER}INCREASE_COUNT`;
export const DECREASE_COUNT = `${COUNTER}DECREASE_COUNT`;

// action creators
export const addTodo = text => ({
  type: ADD_TODO,
  desc: text
});
const removeTodo = text => ({
  type: REMOVE_TODO,
  desc: text
})
const increaseCount = () => ({
  type: INCREASE_COUNT
});
const decreaseCount = () => ({
  type: DECREASE_COUNT
})

// Reducer
const Reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO:
      return{
        ...state,
        todoList: [ ...state.todoList,
          { 
            desc: action.desc,
            index: state.todoList[0] ? (state.todoList[state.todoList.length -1].index + 1) : 0
          }
        ]
      };
    case REMOVE_TODO:
      return{
        ...state,
        todoList: todoList.map((texts) => {
          return texts !== action.desc ? texts : action.desc
        })
      }
    case INCREASE_COUNT:
      return{
        ...state,
        count: count + 1
      }
    case DECREASE_COUNT:
      return{
        ...state,
        count: count - 1
      }
  }
}

const store = createStore(Reducer);

export default store;