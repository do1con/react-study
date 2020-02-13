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
const ADD_TODO = `${TODO}ADD_TODO`;
const REMOVE_TODO = `${TODO}REMOVE_TODO`;
const INCREASE_COUNT = `${COUNTER}INCREASE_COUNT`;
const DECREASE_COUNT = `${COUNTER}DECREASE_COUNT`;

// action creators
export const AddTodo = text => ({
  type: ADD_TODO,
  desc: text
});
export const RemoveTodo = id=> ({
  type: REMOVE_TODO,
  id: id
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
      console.log(state);
      
      let afterDelete = state.todoList.filter(list => {
        return list.index !== action.id;
      });
      console.log(afterDelete);
      return {
        ...state,
        todoList: afterDelete
      };
    case INCREASE_COUNT:
      return{
        ...state,
        count: state.count + 1
      }
    case DECREASE_COUNT:
      return{
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

const Store = createStore(Reducer);

export default Store;